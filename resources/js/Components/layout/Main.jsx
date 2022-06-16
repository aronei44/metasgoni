import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Nav from "./Nav";
import Footer from "./Footer";

const Main = ({children}) => {
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
                {children}
            </div>
            <Footer />
        </>
    )
}

export default Main;
