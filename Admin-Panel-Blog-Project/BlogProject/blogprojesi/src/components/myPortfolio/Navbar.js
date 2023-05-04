import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
    const location = useLocation();
    const isBlogList = location.pathname === '/postlist';

    useEffect(() => {

        
        const navbarMobile = () => {
            const nCollapsible = document.body.querySelector("#mainNavbar");
            if (!nCollapsible) {
                return;
            }
            if (window.scrollY === 0 && isBlogList != true) {
                nCollapsible.classList.remove("navbar-mobile");
            } else {
                nCollapsible.classList.add("navbar-mobile");
            }
        };
        navbarMobile();
        document.addEventListener("scroll", navbarMobile);
        const myNavbar = document.body.querySelector("#mainNavbar");
        if (myNavbar) {
            new bootstrap.ScrollSpy(document.body, {
                target: "#mainNavbar",
                offset: 74,
            });
        }
    }, []);
    return (

        <nav className="navbar fixed-top navbar-expand-lg navbar-dark p-md-3" id="mainNavbar">
            <div className="container">
                <Link to="/#" className="navbar-brand text-uppercase ml-4" title="new design website link">My Blog</Link>
                <button type="button" className="navbar-toggler mr-2" data-bs-toggle="offcanvas" data-bs-target="#myNavbar"
                    aria-controls="myNavbar" aria-label="menüyü açma kapama butonu" aria-expanded="false">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="offcanvas offcanvas-end" id="myNavbar" aria-labelledby="mylabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title text-white fw-bold" id="mylabel1">Menu</h5>
                        <button type="button" className="btn-close text-reset" id='navbarCloseButton' data-bs-dismiss="offcanvas" aria-label="Kapat">
                        </button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav ms-auto text-uppercase py-lg-2">
                            <li className="navbar-item"><Link to="/#" className="nav-link btn-close-canvas">Home</Link></li>
                            <li className="navbar-item"><Link to="/#about" className="nav-link btn-close-canvas">About</Link></li>
                            <li className="navbar-item"><Link to="/postlist" className="nav-link btn-close-canvas">Posts</Link></li>
                            <li className="navbar-item"><Link to="/#education" className="nav-link btn-close-canvas">Education</Link>                        </li>
                            <li className="navbar-item"><Link to="/#contact" className="nav-link btn-close-canvas">Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

    )
}

export default Navbar