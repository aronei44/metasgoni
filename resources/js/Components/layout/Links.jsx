import { usePage } from "@inertiajs/inertia-react";
import React from "react";

const Links = () => {
    const { links } = usePage().props
    return (
        <div
            className="my-5 py-3"
            style={{
                backgroundColor: "#C6A079",
            }}>
            <div
                className="container d-flex justify-content-evenly align-items-center flex-wrap">
                {links.map((item,index)=>(
                    <a
                        key={index}
                        target={"_blank"}
                        href={item.link}>
                        <img
                            src={item.logo.url}
                            alt={item.logo.fullname}
                            style={{
                                height: "60px",
                            }}
                            />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Links;
