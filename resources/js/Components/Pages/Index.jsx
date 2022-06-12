import React from "react";
import Links from "../layout/Links";
import Main from "../layout/Main";

const Index = () => {
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
                className="container">
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
        </Main>
    )
}

export default Index;
