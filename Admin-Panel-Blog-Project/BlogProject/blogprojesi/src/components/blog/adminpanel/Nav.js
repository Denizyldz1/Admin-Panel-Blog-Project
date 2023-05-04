import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars"></i></a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <Link to="/admin/bloglist" className="nav-link">
                        <p>Home</p>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav