import React from 'react';
import Main from '../layout/Main';

const Products = () => {
    return (
        <Main>
            <div
                className="container"
                style={{ marginTop: '20px' }}
            >
                <h1>
                    Produk Kami
                </h1>
                <div
                    className="row">
                    <div
                        className="col-md-4">
                        <div
                            className="card shadow">
                            <img
                                src="/img/why.png"
                                className="card-img-top"
                                alt="products" />
                            <div
                                className="card-body">
                                <h5
                                    className="card-title">
                                    Card title
                                </h5>
                                <p
                                    className="card-text">
                                    Some quick example text to build on the card title and make up the bulk of the card's content.
                                </p>
                            </div>
                            <ul
                                className="list-group list-group-flush">
                                <li
                                    className="list-group-item">
                                    An item
                                </li>
                                <li
                                    className="list-group-item">
                                    A second item
                                </li>
                                <li
                                    className="list-group-item">
                                    A third item
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}
export default Products;
