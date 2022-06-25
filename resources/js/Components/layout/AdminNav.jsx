import { usePage } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

const AdminNav = () =>{
    const { user } = usePage().props
    const [time, setTime] = useState(new Date().toLocaleString())
    const updateTime = () => {
        setInterval(()=>{
            setTime(new Date().toLocaleString())
        },1000)
    }
    useEffect(()=>{
        updateTime()
    },[])
    return(
        <nav className="navbar navbar-expand-lg bg-light shadow">
            <div className="container px-5">
                <a className="navbar-brand" href="#">{user.name}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav ms-auto">
                    <a className="nav-link" href="#">{time}</a>
                    <a className="nav-link btn btn-danger rounded-pill text-white ms-3" href="#">Log Out</a>
                </div>
                </div>
            </div>
        </nav>
    )
}

export default AdminNav
