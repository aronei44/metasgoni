import React from "react";
import Main from "../layout/Main";
import Links from "../layout/Links";

const Profile = () => {
    return (
        <Main>
            <div
                className="container">
                <div
                    className="row align-items-center">
                    <div
                        className="col-md-6 text-center">
                        <img
                            src="https://images.unsplash.com/photo-1654684128827-743431765638?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=477&q=80"
                            alt="profile"
                            className="img-fluid"/>
                    </div>
                    <div
                        className="col-md-6">
                        <h1>
                            HENI METASARI
                        </h1>
                        <hr />
                        <h3>
                            Pemilik Metasgoni
                        </h3>
                    </div>
                </div>
            </div>
            <div
                className="container bg my-5">
                <h1
                    className="mb-4">
                    Latar Belakang
                </h1>
                <div
                    className="row">
                    <div
                        className="col-md-6">
                        <p>
                            Heni Metasari merupakan nama pembuat sekaligus pendiri metasgoni pada tahun 2010. Metasgoni merupakan salah satu Craft yang pada awalnya memanfaatkan limbah karung goni yang ternyata memiliki nilai lebih apa bila di kreasikan sedemikian rupa.
                        </p>
                    </div>
                    <div
                        className="col-md-6">
                        <p>
                            Usaha yang dirintis Tahun 2010 mulai merintis dan memasarkan produknya melalui pemesaran secara konvensioanal di tempat-tempat wisata kemudian merambah Forum UMKM dan IWAPI sampai saat ini masih berjalan dan mampu memasrkan produknya sendiri melalui tehnologi media sosial dll
                        </p>
                    </div>
                </div>
            </div>
            <Links />
            <div
                className="container">
                <div
                    className="row align-items-center">
                    <div
                        className="col-md-6 order-md-2 text-center">
                        <img
                            src="/img/logo.png"
                            alt="" />
                    </div>
                    <div
                        className="col-md-6 order-md-1">
                        <h1>
                            Tujuan
                        </h1>
                        <ol
                            className="">
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Mengurangi limbah kantong pelastik dengan kantong berbahan alam
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Mudah terurai berbasis kearifan lokal dengan memiliki design modern
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Mampu Menembus pasar Global
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div
                    className="row">
                    <div
                        className="col-md-6">
                        <h1>
                            Visi
                        </h1>
                        <ol
                            className="">
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Menjadikan produk yang mempunyai kualitas yang baik agar dapat bersaing dalam menghadapi Masyarakat Ekonomi Asean (M.E.A)
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Menciptakan Lapangan Pekerjaan untuk masyarakat sekitar
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Menciptakan icon produk / ciri khas di kabupaten bogor selaku Produk pariwisata
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Menaikan Omset Penjualan
                                </span>
                            </li>
                        </ol>
                    </div>
                    <div
                        className="col-md-6">
                        <h1>
                            Misi
                        </h1>
                        <ol
                            className="">
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Menciptakan inovasi melalui kreatifitas sehingga menghasilkan suatu produk yang bernilai serta menyiapkan SDM yang ada
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Memberikan sedikit skill dalam pemberdayaan masyarakat sehingga menjadi SDM yang siap dalam bekerja
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Melakukan Pendekatan dan menjalin Kerjasama serta kolaborasi dengan lingkungan pariwisata yang ada
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span>
                                    Meningkatkan kualitas dan kapasitas Produksi, memberikan pelayanan melalui tehnologi berbasis media sosial serta meberikan desaign modern tanpa merusak kearifan lokal
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
            </div>
            <Links />
            <div
                className="container bg">
                <div
                    className="row">
                    <div
                        className="col-md-6 text-center">
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
                        className="col-md-6">
                        <h1>
                            Fasilitas Produksi
                        </h1>
                        <ol
                            className="">
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    9 set mesin konveksi
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    alat pemotong bahan
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    rumah produksi
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    rak stokis
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    armada operasional
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    admin / tim marketing
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    desain grafis
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    alat pemotong manual lainnya
                                </span>
                            </li>
                            <li
                                className="list-group-item d-flex align-items-center">
                                <i className="bi bi-check-all text-success h2"/>
                                <span className="text-capitalize">
                                    ruangan  wifi
                                </span>
                            </li>
                        </ol>
                    </div>
                </div>
                <div
                    className="row">
                    <div
                        className="col-md-6">
                        <h1>
                            Karyawan  / SDM
                        </h1>
                        <p>
                            METASGONI merupakan usaha yang dirintis melalui pemberdayaan, karna sedikitnya yang bekerja di metasgoni  dipandu dalam menjahit memola, dsb
                        </p>
                        <p>
                            para pekerja di metas goni terdiri dari 8 wanita dengan status sendiri sebagai tulang punggung keluarga hal ini yang memotivasi metasgoni agar dapat menghdupi para pekerja yang berjuang mencari nafkah di keluarganya.
                        </p>
                    </div>
                    <div
                        className="col-md-6">
                        <h1>
                            Kapasitas Produksi
                        </h1>
                        <p>
                            adapun produktivitas yang dilakukan metasgoni ialah .1.500 Pcs / bulan. Namun hal ini tidak dijadikan acuan metas goni masih menampung pemesanan lebih dengan sdm yang tersedia dan siap dengan bekerja partime
                        </p>
                    </div>
                </div>
            </div>

        </Main>
    )
}

export default Profile;
