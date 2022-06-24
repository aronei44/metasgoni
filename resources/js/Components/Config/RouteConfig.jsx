import React, { useState } from "react";
import { Link } from '@inertiajs/inertia-react'

const RouteConfig = () => {
    const prefix = '/admin/'
    const [route, setRoute] = useState([
        {
            display : 'Dashboard',
            logo : 'fs-4 bi-speedometer2',
            path : '',
            roles : [
                'superadmin',
                'admin'
            ],
            level : 1
        },
        {
            display : 'Merchant',
            logo : 'fs-4 bi-house',
            path : '',
            roles : [
                'superadmin',
                'admin'
            ],
            level : 0,
            childs : [
                {
                    display : 'Merchant Link',
                    logo : '',
                    path : 'merchant-links',
                    roles : [
                        'superadmin',
                        'admin'
                    ],
                    level : 1
                },
                {
                    display : 'Link Logo',
                    logo : '',
                    path : 'merchant-logos',
                    roles : [
                        'superadmin',
                        'admin'
                    ],
                    level : 1
                }
            ]
        },
        {
            display : 'Product List',
            logo : 'fs-4 bi-grid',
            path : 'products',
            roles : [
                'superadmin',
                'admin'
            ],
            level : 1
        },
        {
            display : 'User List',
            logo : 'fs-4 bi-people',
            path : 'user',
            roles : [
                'superadmin'
            ],
            level : 1
        }
    ])
    return (
        <>
            <Link href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                <span className="fs-5 d-none d-sm-inline">Metasgoni</span>
            </Link>
            <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                {route.map((item, index)=>(
                        <>
                        {item.level === 1 ? (
                            <li className="nav-item" key={index}>
                                <Link href={prefix + item.path} className="nav-link align-middle px-0 text-white text-decoration-none">
                                <i className={item.logo} /> <span className="ms-1 d-none d-sm-inline">{item.display}</span>
                                </Link>
                            </li>
                        ) : (
                            <li  key={index}>
                                <a href={`#submenu${index}`} data-bs-toggle="collapse" className="nav-link px-0 align-middle text-white text-decoration-none">
                                    <i className={item.logo} /> <span className="ms-1 d-none d-sm-inline">{item.display}</span>
                                </a>
                                <ul className="collapse show nav flex-column ms-1" id={`submenu${index}`} data-bs-parent="#menu">
                                    {item.childs.map(it=>(
                                        <li className="w-100">
                                            <Link href={prefix + it.path} className="nav-link px-0 text-white text-decoration-none"> <span className="d-none d-sm-inline">{it.display}</span></Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        )}
                        </>
                    )
                )}
            </ul>
        </>
    )
}

export default RouteConfig;
