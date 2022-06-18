import React from "react";
import Main from "../layout/Main";

const Contact = () => {
    return (
        <Main>
            <div
                className="container my-4">
                <h1>Hubungi Kami</h1>
                <div
                    className="row">
                    <div
                        className="col-md-6">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.010103475389!2d106.91028942698783!3d-6.645665971626456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69c8203b4138a7%3A0x9ddb247269c02197!2zNsKwMzgnNDQuNCJTIDEwNsKwNTQnMzcuMiJF!5e0!3m2!1sid!2sid!4v1655554025832!5m2!1sid!2sid"
                            width="100%"
                            height={450}
                            style={{
                                border: 0
                            }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade" />

                    </div>
                    <div
                        className="col-md-6 shadow">
                        <div
                            className="form-group">
                            <label
                                htmlFor="name">
                                Nama
                            </label>
                            <input
                                type="text"
                                className="form-control"
                                id="name"
                                placeholder="Nama" />
                        </div>
                        <div
                            className="form-group">
                            <label
                                htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                placeholder="Email" />
                        </div>
                        <div
                            className="form-group">
                            <label
                                htmlFor="message">
                                Pesan
                            </label>
                            <textarea
                                className="form-control"
                                id="message"
                                rows="3"
                                placeholder="Pesan" />
                        </div>
                        <button
                            type="submit"
                            className="btn btn-primary mt-3">
                            Kirim
                        </button>
                    </div>
                </div>
            </div>
        </Main>
    );
}
export default Contact;
