import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import Links from "../layout/Links";
import Main from "../layout/Main";

const Index = () => {
    const [show, setShow] = useState(false);
    const [current, setCurrent] = useState({});
    const [photos, setPhotos] = useState([
        {
            src : 'https://images.unsplash.com/photo-1654964150054-2686fe33c993?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
            title : 'Photo 1',
            description : 'This is a photo 1'
        },
        {
            src : 'https://images.unsplash.com/photo-1652114067335-a0f7d8f9eeff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=873&q=80',
            title : 'Photo 2',
            description : 'This is a photo 2'
        },
        {
            src : 'https://images.unsplash.com/photo-1654757261706-dba230bdb467?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80',
            title : 'Photo 3',
            description : 'This is a photo 3'
        },
        {
            src : 'https://images.unsplash.com/photo-1654483143648-cb97703e2979?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
            title : 'Photo 4',
            description : 'This is a photo 4'
        }
    ])
    return (
        <Main>
           <div
                className="container">
                {/* hero section */}
                <div
                    className="row align-items-center"
                    style={{
                        height: "100vh",
                    }}>
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
                        <a
                            href="#why"
                            className="btn btn-primary scroll-to">
                            Jelajahi
                        </a>
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
            <Links />
            <div
                id="about"
                className="container bg">
                {/* why section */}
                <div
                    className="row align-items-center">
                    <h1
                        id="why">Kenapa Memilih Metasgoni?</h1>
                    <div
                        className="col-md-6 order-md-2 text-center">
                        <img
                            src="/img/why.png"
                            style={{
                                height: "240px",
                                width: "320px",
                                margin: "40px",
                                boxShadow: "-40px -40px #C6A079, 40px 40px #C6A079",
                            }}
                            alt=""/>
                    </div>
                    <div
                        className="col-md-6 order-md-1">
                        <ol
                            className="">
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Salah satu produk yang ramah lingkungan
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Produk yang sejalan dengan program pemerintah guna mengurangi sampah plastik
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Memiliki kearifan lokal serta daya jual dan nilai yang tinggi
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
                {/* pros section */}
                <div
                    className="row"
                    id="pros">
                    <div
                        className="col-md-6">
                        <h3>
                            Apa Kelebihan Metasgoni?
                        </h3>
                        <ol
                            className="list-group-numbered">
                            <li
                                className="list-group-item">
                                Harga terjangkau karena produsen tingkat pertama
                            </li>
                            <li
                                className="list-group-item">
                                Membuka Reseller
                            </li>
                            <li
                                className="list-group-item">
                                Menyesuaikan kebutuhan pelanggan dalam berbagai bentuk desain
                            </li>
                            <li
                                className="list-group-item">
                                Bahan baku tetap karena bekerjasama dengan pemasok
                            </li>
                            <li
                                className="list-group-item">
                                Selain bentuk tas, Metasgoni juga berkreasi dalam bentuk dompet, godybag dan lainnya yang bertemakan karung goni
                            </li>
                        </ol>
                    </div>
                    <div
                        className="col-md-6">
                        <h3>
                            Target Pasar Metasgoni
                        </h3>
                        <ol
                            className="">
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h4"/>
                                <span>
                                    Personal Selling
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h4"/>
                                <span>
                                    Bermitra dengan tempat wisata
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h4"/>
                                <span>
                                    Reseller
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h4"/>
                                <span>
                                    Penjualan Online
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h4"/>
                                <span>
                                    Instansi Pemerintah, PT, DLL
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Links />
            <div
                id="gallery"
                className="container">
                <h1>
                    Galeri Pelanggan
                </h1>
                <div
                    className="row row-cols-1 row-cols-sm-2 row-cols-md-3">
                    {photos.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`mb-2 col`}>
                                <img
                                    src={item.src}
                                    onClick={() => {
                                        setShow(true)
                                        setCurrent(item)
                                    }}
                                    className="img-fluid"
                                    style={{
                                        cursor: "zoom-in"
                                    }}
                                    alt="image gallery"/>
                            </div>
                        )}
                    )}
                </div>
            </div>
            <Modal
                show={show}
                onHide={() => setShow(false)}
                centered={true}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                backdrop="static"
                keyboard={false}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        Galeri Pelanggan
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div
                        className="container">
                        <div
                            className="row">
                            <div
                                className="col-md-6 bg-white shadow py-3 px-3">
                                <img
                                    src={current.src}
                                    className="img-fluid"
                                    alt="image gallery"/>
                            </div>
                            <div
                                className="col-md-6 bg">
                                <h3>
                                    {current.title}
                                </h3>
                                <hr />
                                <p>
                                    {current.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </Main>
    )
}

export default Index;
