import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Nav from "../layout/Nav";

const Index = () => {
    return (
        <>
            <Head title="Metasgoni" />
            <Nav />
            <div
                className="main"
                style={{
                    marginTop: "50px",
                    position: "relative",
                    overflow: "hidden",
                }}>
                <div
                    className="container content">
                    <div
                        className="row align-items-center">
                        <div
                            className="col-md-6">
                            <img src="/img/logo.png" alt="" />
                        </div>
                        <div
                            className="col-md-6">
                            <h1>
                                Metasgoni
                            </h1>
                            <p>
                                Berbagai Tas Goni Dalam Negeri Berkualitas Ekspor.
                            </p>
                            <Link
                                href="/profiles"
                                className="btn btn-primary">
                                Jelajahi
                            </Link>
                            <img
                                className="rounded-circle"
                                src="/img/Kain_Karung_Goni.jpg"
                                style={{
                                    height: "500px",
                                    width: "500px",
                                    backgroundColor: "#C6A079",
                                    position: "absolute",
                                    top: "-250px",
                                    right: "-250px"
                                }}/>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Index;
