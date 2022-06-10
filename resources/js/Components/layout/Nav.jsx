import React from "react";
import { Link } from "@inertiajs/inertia-react";

const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light shadow fixed-top">
            <div className="container">
                <Link className="navbar-brand" href="#">
                    <img src="/img/logo-nav.png" alt="" height={40} />
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon" />
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <Link className="nav-link" href="/">Home</Link>
                        <Link className="nav-link" href="/profiles">Profiles</Link>
                        <Link className="nav-link" href="/products">Products</Link>
                        <Link className="nav-link" href="/contact">Contact Us</Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Nav;
