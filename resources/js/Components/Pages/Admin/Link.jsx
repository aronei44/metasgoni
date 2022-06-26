import React, {useState} from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const Link = ({logos, links}) => {
    console.log(links)
    const [link, setLink] = useState('')
    const [logo, setLogo] = useState(0)
    const [id, setId] = useState(0)
    const [loading, setLoading] = useState(false)
    return(
        <AdminLayout>
            <div className="card shadow">
                <div className="card-body d-flex justify-content-end">
                    <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#createModal" onClick={()=>setLoading(false)}>
                        <i className="bi bi-plus"/> Tambah Link
                    </button>
                </div>
            </div>
            <div className="card shadow mt-2">
                <div className="card-body">
                    <DataTable
                        title= 'List Logo'
                        pagination={true}
                        columns={[
                            {
                                name: 'No',
                                selector: (row, index)=> index+1,
                                width:'50px'
                            },
                            {
                                name: 'Logo',
                                selector: row =>{
                                    return (
                                        <img src={row.logo.url} className="img-thumbnail" />
                                    )
                                }
                            },
                            {
                                name: 'Link Toko',
                                selector: 'link',
                                sortable: true
                            },
                            {
                                name: 'action',
                                selector: row => {
                                    return(
                                        <>
                                            <a className="btn btn-success text-white text-decoration-none me-2" href={row.link} target="_blank">Lihat</a>
                                            <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={()=>{
                                                setLink(row.link)
                                                setLogo(row.logo_id)
                                                setId(row.id)
                                                setLoading(false)
                                            }}>Edit</button>
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
                                                        Inertia.delete(`/admin/merchant-links/${row.id}`)
                                                    }
                                                })
                                            }}>Hapus</button>
                                        </>
                                    )
                                }
                            }
                        ]}
                        data={links}
                    />

                </div>
            </div>






            <div className="modal fade" id="createModal" tabIndex={-1} aria-labelledby="createModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createModalLabel">Tambah Link</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        <p>
                            Pilih Logo
                        </p>
                        <div className="row">
                            {logos.map((item, index)=>(
                                <div className="col-md-3" onClick={()=>setLogo(item.id)}>
                                    <img src={item.url} style={{height:'100px'}} className={`img-thumbnail ${logo === item.id ? 'border border-primary border-5':''}`} alt={item.fullname}/>
                                </div>
                            ))}
                        </div>
                        <div className="form-group">
                            <label htmlFor="link">Link Toko</label>
                            <input type="text" className="form-control" value={link} onChange={e=>setLink(e.target.value)} placeholder="Masukan Link"/>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={link === '' || loading || logo === 0} className="btn btn-primary" onClick={()=>{
                                Inertia.post('/admin/merchant-links', {
                                    link,
                                    logo
                                })
                                setLoading(true)
                            }}>{loading? 'Proses': 'Simpan'}</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="editModal" tabIndex={-1} aria-labelledby="editModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit Link</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                        <p>
                            Pilih Logo
                        </p>
                        <div className="row">
                            {logos.map((item, index)=>(
                                <div className="col-md-3" key={index} onClick={()=>setLogo(item.id)}>
                                    <img src={item.url} style={{height:'100px'}} className={`img-thumbnail ${logo === item.id ? 'border border-primary border-5':''}`} alt={item.fullname}/>
                                </div>
                            ))}
                        </div>
                        <div className="form-group">
                            <label htmlFor="link">Link Toko</label>
                            <input type="text" className="form-control" value={link} onChange={e=>setLink(e.target.value)} placeholder="Masukan Link"/>
                        </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={link === '' || loading || logo === 0} className="btn btn-primary" onClick={()=>{
                                Inertia.put('/admin/merchant-links/'+id, {
                                    link,
                                    logo
                                })
                                setLoading(true)
                            }}>{loading? 'Proses': 'Simpan'}</button>
                        </div>
                    </div>
                </div>
            </div>

        </AdminLayout>
    )
}
export default Link
