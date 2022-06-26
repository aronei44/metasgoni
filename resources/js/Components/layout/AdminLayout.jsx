import React, {useEffect} from 'react'
import RouteConfig from '../Config/RouteConfig';
import AdminNav from './AdminNav';
import { usePage } from '@inertiajs/inertia-react';
import Swal from 'sweetalert2';

const AdminLayout = ({children}) => {
    const { errors, success, server } = usePage().props;

    useEffect(() => {
        if(Object.keys(errors).length > 0){
            let text = '';
            for(let key in errors){
                text += `${key} : ${errors[key]} \n`;
            }
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: text,
            }).then((result) => {
                if (result.isConfirmed) {
                    document.querySelectorAll('.btn-close').forEach(el=>{
                        el.click()
                    })
                }
            })
        }
        if(success !== null){
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: success,
            }).then((result) => {
                if (result.isConfirmed) {
                    document.querySelectorAll('.btn-close').forEach(el=>{
                        el.click()
                    })
                }
            })
        }
        if(server !== null){
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: server,
            }).then((result) => {
                if (result.isConfirmed) {
                    document.querySelectorAll('.btn-close').forEach(el=>{
                        el.click()
                    })
                }
            })
        }
    }, [errors, success, server]);

    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <RouteConfig />
                    </div>
                </div>
                <div className="col py-3">
                    <AdminNav />
                    <div className='container mt-5 bg' style={{minHeight:'80vh'}}>
                        {children}
                    </div>
                </div>
            </div>
        </div>

    )
}

export default AdminLayout;
