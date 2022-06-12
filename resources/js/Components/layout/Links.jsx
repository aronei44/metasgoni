import React, {useState} from "react";

const Links = () => {
    const [link, setLink] = useState({
        shopee: "https://shopee.co.id",
        lazada: "https://www.lazada.co.id",
        blibli: "https://www.blibli.com",
        tokopedia: "https://www.tokopedia.com",
    });
    return (
        <div
            className="my-5 py-3"
            style={{
                backgroundColor: "#C6A079",
            }}>
            <div
                className="container d-flex justify-content-evenly align-items-center flex-wrap">
                <a
                    target={"_blank"}
                    href={link.tokopedia}>
                    <img
                        src="/img/tokped.png"
                        alt=""
                        style={{
                            height: "60px",
                        }}
                        />
                </a>
                <a
                    target={"_blank"}
                    href={link.shopee}>
                    <img
                        src="/img/shopee.png"
                        alt=""
                        style={{
                            height: "60px",
                        }}
                        />
                </a>
                <a
                    target={"_blank"}
                    href={link.lazada}>
                    <img
                        src="/img/lazada.png"
                        alt=""
                        style={{
                            height: "60px",
                        }}
                        />
                </a>
                <a
                    target={"_blank"}
                    href={link.blibli}>
                    <img
                        src="/img/blibli.png"
                        alt=""
                        style={{
                            height: "60px",
                        }}
                        />
                </a>
            </div>
        </div>
    )
}

export default Links;
