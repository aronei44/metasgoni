import React, {useState} from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const Logo = ({logos}) => {
    const [name, setName] = useState('')
    const [logo, setLogo] = useState('')
    const [id, setId] = useState(0)
    const [loading, setLoading] = useState(false)
    return(
        <AdminLayout>
            <div className="card shadow">
                <div className="card-body d-flex justify-content-end">
                    <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#createModal" onClick={()=>setLoading(false)}>
                        <i className="bi bi-plus"/> Tambah Logo
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
                                selector: (row, index)=> index+1
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
                                name: 'Layanan Penyedia',
                                selector: 'name',
                                sortable: true
                            },
                            {
                                name: 'action',
                                selector: row => {
                                    return(
                                        <>
                                            <button className="btn btn-primary me-2" data-bs-toggle="modal" data-bs-target="#editModal" onClick={()=>{
                                                setName(row.name)
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
                                                        Inertia.delete(`/admin/merchant-logos/${row.id}`)
                                                    }
                                                })
                                            }}>Hapus</button>
                                        </>
                                    )
                                }
                            }
                        ]}
                        data={logos}
                    />

                </div>
            </div>






            <div className="modal fade" id="createModal" tabIndex={-1} aria-labelledby="createModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createModalLabel">Tambah Logo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="logo">Logo</label>
                                <input className="form-control" id="logo" onChange={e=>setLogo(e.target.files[0])} type="file" placeholder="masukan gambar"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Nama Penyedia (tokopedia, shopee, dll)</label>
                                <input className="form-control" id="name" value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Nama Online Shop"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={name === '' || loading || logo === ''} className="btn btn-primary" onClick={()=>{
                                Inertia.post('/admin/merchant-logos', {
                                    name,
                                    logo
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
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="editModalLabel">Edit Logo</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="logo">Logo (isi hanya jika ingin mengganti gambar)</label>
                                <input className="form-control" id="logo" onChange={e=>setLogo(e.target.files[0])} type="file" placeholder="masukan gambar"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="name">Nama Penyedia (tokopedia, shopee, dll)</label>
                                <input className="form-control" id="name" value={name} onChange={e=>setName(e.target.value)} type="text" placeholder="Nama Online Shop"/>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={name === '' || loading || id === 0} className="btn btn-primary" onClick={()=>{
                                Inertia.post('/admin/merchant-logos/'+id, {
                                    _method:'put',
                                    name,
                                    logo
                                }, {
                                    forceFormData: true,
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
export default Logo
