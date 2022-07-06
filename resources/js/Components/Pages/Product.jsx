import React from 'react';
import Main from '../layout/Main';

const Products = ({products}) => {
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
                    className="row my-2">
                    {products.map((item, index)=>(
                        <div
                            className="col-md-4" key={index}>
                            <div
                                className="card shadow">
                                <img
                                    src={item.url}
                                    className="card-img-top"
                                    alt={item.filename} />
                                <div
                                    className="card-body">
                                    <h5
                                        className="card-title">
                                        {item.name}
                                    </h5>
                                    <p
                                        className="card-text">
                                        {item.description}
                                    </p>
                                </div>
                                <ul
                                    className="list-group list-group-flush">
                                    {item.links.map((it, i)=>(
                                        <li
                                            className="list-group-item" index={i}>
                                            <a href={it.url} target='_blanks' className='text-dark text-decoration-none'>{it.name} <i className='bi bi-arrow-right' /></a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </Main>
    );
}
export default Products;
