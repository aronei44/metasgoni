import React, {useState} from "react";
import AdminLayout from "../../layout/AdminLayout";
import { Inertia } from "@inertiajs/inertia";
import DataTable from "react-data-table-component";
import Swal from "sweetalert2";

const Link = ({users}) => {
    const [loading, setLoading] = useState(false)
    const [hide, setHide] = useState(true)
    const [data, setData] = useState({
        name: '',
        email: '',
        password: ''
    })
    const validate = () =>{
        if(data.name.length < 8 || data.email === '' || data.password.length < 8){
            return false
        }
        return true
    }
    return(
        <AdminLayout>
            <div className="card shadow">
                <div className="card-body d-flex justify-content-end">
                    <button className="btn btn-outline-primary" data-bs-toggle="modal" data-bs-target="#createModal" onClick={()=>setLoading(false)}>
                        <i className="bi bi-plus"/> Tambah User
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
                                name: 'Nama',
                                selector: 'name',
                                sortable:true
                            },
                            {
                                name: 'Email',
                                selector: 'email',
                                sortable: true
                            },
                            {
                                name: 'Role',
                                selector: 'role',
                                sortable: true
                            },
                            {
                                name: 'action',
                                selector: row => {
                                    return(
                                        <>
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
                                                        Inertia.delete(`/admin/users/${row.id}`)
                                                    }
                                                })
                                            }}>Hapus</button>
                                        </>
                                    )
                                }
                            }
                        ]}
                        data={users}
                    />

                </div>
            </div>

            <div className="modal fade" id="createModal" tabIndex={-1} aria-labelledby="createModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="createModalLabel">Tambah User</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                        </div>
                        <div className="modal-body">
                            <div className="form-group">
                                <label htmlFor="nama">Nama</label>
                                <input type="text" className="form-control" onChange={e=>setData({...data, name : e.target.value})} placeholder="Masukan Nama Anda"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input type="email" className="form-control" onChange={e=>setData({...data, email : e.target.value})} placeholder="Masukan Email Anda"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type={`${hide === true ? 'password':'text'}`} className="form-control" onChange={e=>setData({...data, password : e.target.value})} placeholder="Masukan Password Anda"/>
                            </div>
                            <div
                                className="form-check form-switch">
                                <input
                                    className="form-check-input"
                                    onChange={e=>setHide(!hide)}
                                    type="checkbox"
                                    role="switch"
                                    id="pwHide" />
                                <label
                                    className="form-check-label"
                                    htmlFor="pwHide">
                                    Lihat Password
                                </label>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" disabled={loading || !validate()} className="btn btn-primary" onClick={()=>{
                                Inertia.post('/admin/users', data)
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
