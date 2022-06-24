import { Inertia } from "@inertiajs/inertia";
import React, { useState } from "react";
import Main from "../layout/Main";

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [hide, setHide] = useState(true)
    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }
    const validatePassword = (password) => {
        return password.length >= 8
    }
    return (
        <Main>
            <div
                className="container my-4 bg">
                <div
                    className="row align-items-center">
                    <div
                        className="col-md-6">
                        <img
                            src="/img/logo.png"
                            />
                    </div>
                    <div
                        className="col-md-6">
                        <div
                            className="card shadow bg-transparent">
                            <div
                                className="card-body">
                                <h1
                                    className="text-center mb-5">
                                    Masuk Ke Akun Anda
                                </h1>
                                <div
                                    className="d-flex mb-4">
                                    <i
                                        className="bi bi-person-fill h3 me-3"/>
                                    <input
                                        className="form-control"
                                        onChange={e=>setEmail(e.target.value)}
                                        value={email}
                                        type="email"
                                        placeholder="yourmail@mail.com"
                                        />
                                </div>
                                <div
                                    className="d-flex mb-4">
                                    <i
                                        className="bi bi-lock-fill h3 me-3"/>
                                    <input
                                        className="form-control"
                                        onChange={e=>setPassword(e.target.value)}
                                        value={password}
                                        type={`${hide === true ? 'password':'text'}`}
                                        placeholder="password"
                                        />
                                </div>
                                <div
                                    className="form-check form-switch">
                                    <input
                                        className="form-check-input"
                                        onChange={e=>setHide(!hide)}
                                        type="checkbox"
                                        role="switch"
                                        id="pwHide" />
                                    <label
                                        className="form-check-label"
                                        htmlFor="pwHide">
                                        Lihat Password
                                    </label>
                                </div>
                                <button
                                    className="btn btn-outline-primary mt-5 mb-2"
                                    disabled={!validateEmail(email) || !validatePassword(password)}
                                    onClick={()=>Inertia.post('/login',{email,password})}
                                    style={{
                                        width: '100%'
                                    }}>
                                    Masuk
                                </button>
                                <p>
                                    Hubungi administrator jika memiliki kendala saat masuk.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}
export default Login;
