import React, {useState} from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const Product = ({products}) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState('')
    const [links, setLinks] = useState([{
            name: '',
            url: ''
        }])
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({})
    const [edit, setEdit] = useState({
        name: false,
        description: false
    })
    const [link, setLink] = useState({})
    const addLink = () => {
        links.push({
            name: '',
            url: ''
        })
        setLinks([...links])
    }
    const removeLink = (id) => {
        if(links.length > 1){
            links.splice(id, 1)
            setLinks([...links])
        }
    }
    const validate = () =>{
        if(name === '' || description === '' || photo === '' || links[0].name === '' || links[0].url === ''){
            return true
        }
        return false
    }
    return(
        <AdminLayout>
            <div className="card shadow">
                <div className="card-body d-flex justify-content-end">
                    <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#createModal" onClick={()=>setLoading(false)}>
                        <i className="bi bi-plus"/> Tambah Produk
                    </button>
                </div>
            </div>
            <div className="card shadow mt-2">
                <div className="card-body">
                    <DataTable
                        title= 'List Produk'
                        pagination={true}
                        columns={[
                            {
                                name: 'No',
                                selector: (row, index)=> index+1,
                                width:'50px'
                            },
                            {
                                name: 'Gambar',
                                selector: row =>{
                                    return (
                                        <img src={row.url} className="img-thumbnail" />
                                    )
                                }
                            },
                            {
                                name: 'Nama Produk',
                                selector: 'name',
                                sortable: true
                            },
                            {
                                name: 'Deskripsi Produk',
                                selector: 'description',
                                sortable: false
                            },
                            {
                                name: 'Jumlah Klik',
                                selector: row => {
                                    let num = 0
                                    row.links.forEach((item)=>{
                                        num+=item.hit
                                    })
                                    return num
                                },
                                sortable: false
                            },
                            {
                                name: 'action',
                                selector: row => {
                                    return(
                                        <>
                                            <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={()=>{
                                                setData(row)
                                                setEdit({
                                                    name:false,
                                                    description:false
                                                })
                                                setLoading(false)
                                            }}>Detail</button>
                                            <button className="btn btn-danger" onClick={()=>{
                                                Swal.fire({
                                                    title: 'Are you sure?',
                                                    text: "Data yang dihapus tidak dapat dikembalikan.",
                                                    icon: 'warning',
                                                    showCancelButton: true,
                                                    confirmButtonColor: '#3085d6',
                                                    cancelButtonColor: '#d33',
                                                    confirmButtonText: 'Hapus'
                                                    }).then((result) => {
                                                    if (result.isConfirmed) {
                                                        Inertia.delete(`/admin/products/${row.id}`)
                                                    }
                                                })
                                            }}>Hapus</button>
                                        </>
                                    )
                                }
                            }
                        ]}
                        data={products}
                    />

                </div>
            </div>

            <div className="modal fade" id="createModal" tabIndex={-1} aria-labelledby="createModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createModalLabel">Tambah Produk</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="name">Nama Produk</label>
                                <input type="text" className="form-control" placeholder="Masukan Nama Produk" id="name" onChange={e=>setName(e.target.value)} value={name}/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="description">Deskripsi Produk</label>
                                <textarea className="form-control" placeholder="Masukan Deskripsi Singkat Produk" id="description" onChange={e=>setDescription(e.target.value)}>{description}</textarea>
                            </div>
                            <div className="form-group">
                                <label htmlFor="photo">Foto Produk</label>
                                <input type="file" accept="image/*" className="form-control" id="photo" onChange={e=>setPhoto(e.target.files[0])}/>
                            </div>
                            <div className="d-flex justify-content-between my-2">
                                <h6>Links</h6>
                                <button className="btn btn-sm btn-primary" onClick={()=>addLink()}>Tambah Link</button>
                            </div>
                            {links.map((link, index)=>(
                                <div className="input-group mb-1" key={index}>
                                    <input type="text" className="form-control" value={link.name} onChange={e=>{
                                        links[index].name = e.target.value
                                        setLinks([...links])
                                    }} placeholder="Nama Penyedia (shopee, etc)"/>
                                    <input type="text" className="form-control" value={link.url} onChange={e=>{
                                        links[index].url = e.target.value
                                        setLinks([...links])
                                    }}placeholder="Link Produk"/>
                                    <button className="btn btn-xs btn-danger" disabled={links.length <= 1} onClick={()=>removeLink(index)}>X</button>
                                </div>
                            ))}
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={loading || validate()} className="btn btn-primary" onClick={()=>{
                                Inertia.post('/admin/products', {
                                    name,
                                    description,
                                    file : photo,
                                    links
                                }, {
                                    forceFormData: true,
                                })
                                setLoading(true)
                            }}>{loading? 'Proses': 'Simpan'}</button>
                        </div>
                    </div>
                </div>
            </div>



            <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Detail Produk</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="row">
                                <div className="col-md-6" style={{position:'relative'}}>
                                    <img src={data.url} className="img-thumbnail"/>
                                    <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#editPhotoModal" style={{position:'absolute',left:'0px',top:'0px'}}>Update Gambar</button>
                                </div>
                                <div className="col-md-6">
                                    <h2 onClick={()=>setEdit({...edit, name: true})} hidden={edit.name}>{data.name}</h2>
                                    <input type="text" className="form-control" value={data.name} onChange={e=>setData({...data, name:e.target.value})} hidden={!edit.name}/>
                                    <hr/>
                                    <p onClick={()=>setEdit({...edit, description: true})} hidden={edit.description}>{data.description}</p>
                                    <textarea className="form-control" onChange={e=>setData({...data, description:e.target.value})} hidden={!edit.description} defaultValue={data.description} />
                                </div>
                            </div>
                            <DataTable
                                pagination={true}
                                columns={[
                                    {
                                        name:'Penyedia',
                                        selector:'name'
                                    },
                                    {
                                        name:'Link',
                                        selector:'url'
                                    },
                                    {
                                        name:'Jumlah Klik',
                                        selector:'hit'
                                    },
                                    {
                                        name: 'action',
                                        grow: 2,
                                        selector: row => {
                                            return(
                                                <>
                                                    <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#editLinkModal" onClick={()=>{
                                                        setLink(row)
                                                        setLoading(false)
                                                    }}>Edit</button>
                                                    <a className="btn btn-success me-2" href={row.url} target="_blanks">Kunjungi</a>
                                                    <button className="btn btn-danger" onClick={()=>{
                                                        Swal.fire({
                                                            title: 'Are you sure?',
                                                            text: "Data yang dihapus tidak dapat dikembalikan.",
                                                            icon: 'warning',
                                                            showCancelButton: true,
                                                            confirmButtonColor: '#3085d6',
                                                            cancelButtonColor: '#d33',
                                                            confirmButtonText: 'Hapus'
                                                            }).then((result) => {
                                                            if (result.isConfirmed) {
                                                                Inertia.delete(`/admin/products-link/${row.id}`)
                                                            }
                                                        })
                                                    }}>Hapus</button>
                                                </>
                                            )
                                        }
                                    }
                                ]}
                                data={data.links}
                            />
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-success" data-bs-toggle="modal" data-bs-target="#createLinkModal" onClick={()=>{
                                setLink({
                                    name:'',
                                    url:''
                                })
                            }}>Tambah Link</button>
                            <button type="button" disabled={loading} className="btn btn-primary" onClick={()=>{
                                Inertia.put('/admin/products/'+data.id, data)
                                setLoading(true)
                            }}>{loading? 'Proses': 'Simpan'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="editPhotoModal" tabIndex={-1} aria-labelledby="editPhotoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <input type="file" accept="image/*" className="form-control" onChange={e=>setPhoto(e.target.files[0])}/>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={loading} className="btn btn-primary" onClick={()=>{
                                Inertia.post('/admin/products-photo/'+data.id, {
                                    _method:'put',
                                    photo
                                },{
                                    forceFormData:true
                                })
                                setLoading(true)
                            }}>{loading? 'Proses': 'Simpan'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="editLinkModal" tabIndex={-1} aria-labelledby="editLinkModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-1">
                                <input type="text" className="form-control" value={link.name} onChange={e=>{
                                    setLink({...link, name: e.target.value})
                                }} placeholder="Nama Penyedia (shopee, etc)"/>
                                <input type="text" className="form-control" value={link.url} onChange={e=>{
                                    setLink({...link, url: e.target.value})
                                }}placeholder="Link Produk"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={loading} className="btn btn-primary" onClick={()=>{
                                Inertia.put('/admin/products-link/'+link.id,link)
                                setLoading(true)
                            }}>{loading? 'Proses': 'Simpan'}</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="modal fade" id="createLinkModal" tabIndex={-1} aria-labelledby="createLinkModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="input-group mb-1">
                                <input type="text" className="form-control" value={link.name} onChange={e=>{
                                    setLink({...link, name: e.target.value})
                                }} placeholder="Nama Penyedia (shopee, etc)"/>
                                <input type="text" className="form-control" value={link.url} onChange={e=>{
                                    setLink({...link, url: e.target.value})
                                }}placeholder="Link Produk"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={loading} className="btn btn-primary" onClick={()=>{
                                Inertia.post('/admin/products-link/'+data.id,link)
                                setLoading(true)
                            }}>{loading? 'Proses': 'Simpan'}</button>
                        </div>
                    </div>
                </div>
            </div>

        </AdminLayout>
    )
}
export default Product
