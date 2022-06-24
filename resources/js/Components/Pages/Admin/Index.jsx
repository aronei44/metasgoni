import React, { useState } from 'react'
import RouteConfig from '../../Config/RouteConfig';

const Index = () => {
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">

                        <RouteConfig />
                    </div>
                </div>
                <div className="col py-3">
                Content area...
                </div>
            </div>
        </div>

    )
}

export default Index;