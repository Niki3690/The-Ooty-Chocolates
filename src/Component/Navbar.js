import React from "react";
import "../Style/Navbar.css"
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="nav-color">
                <p className="text-center text-white nav-free">
                    Free Delivery on all purchases above Rs. 1500.
                </p>
            </div>

            <div>
                <nav class="navbar navbar-expand-lg nav-headings shadow-lg p-3">
                    <div class="container">
                        <a class="navbar-brand" to="#">
                        <Link to="/"><img
                                src="https://theootychocolates.com/cdn/shop/files/215x108_logo_bd80ae05-b3e2-4764-8fea-1e0d62315ac9_130x.png?v=1691065323"
                                className="ms-5 nav-logo"
                            ></img></Link>
                        </a>
                        <button
                            class="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <Link class="nav-link me-4" aria-current="page" to="/">
                                        HOME
                                    </Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link  me-4 " to="chocolates">
                                        CHOCOLATES
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link  me-4" to="">
                                        CATEGORY
                                    </Link>
                                </li>

                                <li class="nav-item">
                                    <Link class="nav-link  me-4" to="aboutus">
                                        ABOUT US
                                    </Link>
                                </li>
                            </ul>
                            <form class="d-flex  me-5 nav-icons">
                                <Link to="login"><i class="fa-solid fa-user fs-6"></i></Link>
                                <Link to="search"><i class="fa-solid fa-magnifying-glass ms-4 fs-6"></i></Link>
                                <Link to="cart"><i class="fa-solid fa-bag-shopping ms-4 fs-6"></i></Link>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default Navbar;

