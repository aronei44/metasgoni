import React, { useEffect, useState } from "react";
import { usePage } from "@inertiajs/inertia-react";

const Footer = () => {
    const { link } = usePage().props
    const [links, setLinks] = useState([])
    useEffect(()=>{
        const temp = []
        for(const key in link){
            temp.push({
                name: key,
                link: link[key]
            })
        }
        setLinks(temp)
    }, [link])
    return (
        <>
        <div
            className="container-fluid bg-light">
            <div
                className="row">
                <div
                    className="col-md-3">
                    <img
                        src="/img/logo.png"
                        alt="Metasgoni"
                        style={{
                            width: "100%",
                            height: "auto",
                        }} />
                </div>
                <div
                    className="col-md-3 mt-5">
                    <h5>
                        Metasgoni
                    </h5>
                    <ul
                        className="list-unstyled">
                        <li>
                            Kp. Cempaka RT 01/02
                        </li>
                        <li>
                            Desa Cipayung Girang
                        </li>
                        <li>
                            Kecamatan Megamendung
                        </li>
                        <li>
                            Bogor - 16770
                        </li>
                    </ul>
                </div>
                <div
                    className="col-md-3 mt-5">
                    <h5>
                        Dapatkan Produk Di :
                    </h5>
                    <ul
                        className="list-unstyled">
                        {links.map((item, index)=>{
                            return (
                                <li
                                    key={index}>
                                    <a
                                        className="text-dark"
                                        style={{
                                            textDecoration: "none",
                                        }}
                                        target={"_blank"}
                                        href={item.link}>
                                        {item.name}
                                    </a>
                                </li>
                        )})}
                    </ul>
                </div>
                <div
                    className="col-md-3 mt-5">
                    <h5>
                        Hubungi Kami
                    </h5>
                    <ul
                        className="list-unstyled">
                        <li>
                            <a
                                className="text-dark"
                                style={{
                                    textDecoration: "none",
                                }}
                                href="https://www.instagram.com/tas_karung_goni"
                                target={"_blank"}>
                                <i className="bi bi-instagram me-2"/>
                                @tas_karung_goni
                            </a>
                        </li>
                        <li>
                            <a
                                className="text-dark"
                                style={{
                                    textDecoration: "none",
                                }}
                                href="https://wa.me/6282110479778"
                                target={"_blank"}>
                                <i className="bi bi-whatsapp me-2"/>
                                +62 82110479778
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <p
            className="text-center text-muted">
            © 2022 Metasgoni - All Rights Reserved
        </p>
        </>
    )
}

export default Footer;
