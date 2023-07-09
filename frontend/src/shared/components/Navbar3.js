import React from 'react'
import { FaUser, FaCartShopping } from 'react-icons/fa6';
export default function Navbar3() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg py-1 container" style={{
                backgroundColor: "#FFFEFE30",
                borderRadius: "8px"
            }}>
                <div className="container">
                    <a href="/" className="navbar-brand" >
                        <span className="fw-bold">
                            Night Canteen IITI
                        </span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse justify-content-around" id="navbarSupportedContent">
                        <ul className="navbar-nav">

                            <li className="nav-item mx-md-4 px-md-3">
                                <button className="btn btn-sm btn-outline-warning" style={{ border: "none" }} >
                                    <a className="nav-link navText" aria-current="page" href="/home">  Home  </a></button>
                            </li>
                            <li className="nav-item mx-md-4 px-md-3">
                                <button className="btn btn-sm btn-outline-warning" style={{ border: "none" }} >
                                    <a className="nav-link navText" aria-current="page" href="#">  Menu  </a></button>
                            </li>
                            <li className="nav-item mx-md-4 px-md-3">
                                <button className="btn btn-sm btn-outline-warning" style={{ border: "none" }} >
                                    <a className="nav-link navText" aria-current="page" href="#"> About </a></button>
                            </li>
                            <li className="nav-item mx-md-4 px-md-3">
                                 
                                    <a className="nav-link navText btn btn-sm btn-outline-warning" style={{ border: "none",height:"32px" ,borderRadius: "25px" }}  aria-current="page" href="#">Services</a>
                            </li>

                        </ul>

                    </div>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                            <li className="nav-item mx-md-4 px-md-3">
                                <a className="nav-link navText" aria-current="page" href="#"><FaUser /></a>
                            </li>
                            <li className="nav-item mx-md-4 px-md-3">
                                <a className="nav-link navText" aria-current="page" href="#"><FaCartShopping /></a>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>
    )
}
