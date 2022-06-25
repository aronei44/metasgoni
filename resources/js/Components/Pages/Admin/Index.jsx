import { usePage } from "@inertiajs/inertia-react";
import React from "react";
import AdminLayout from "../../layout/AdminLayout";

const Index = ({users}) => {
    const { user } = usePage().props
    return (
        <AdminLayout>
            <div className="row">
                <div className="col-md-3">
                    <div className="card shadow" style={{height:'100%'}}>
                        <div className="card-body">
                            <h5>
                                Selamat datang, {user.name}
                            </h5>
                            <p>
                                Selalu berikan yang terbaik
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow" style={{height:'100%'}}>
                        <div className="card-body">
                            <h4>
                                Jumlah Merchant
                            </h4>
                            <h1 className="text-end">
                                6
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow" style={{height:'100%'}}>
                        <div className="card-body">
                            <h4>
                                Jumlah Produk
                            </h4>
                            <h1 className="text-end">
                                6
                            </h1>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card shadow" style={{height:'100%'}}>
                        <div className="card-body">
                            <h4>
                                Jumlah User
                            </h4>
                            <h1 className="text-end">
                                {users}
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default Index
