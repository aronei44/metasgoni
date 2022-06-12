import React from "react";
import { Head, Link } from "@inertiajs/inertia-react";
import Nav from "./Nav";

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
        </>
    )
}

export default Main;
