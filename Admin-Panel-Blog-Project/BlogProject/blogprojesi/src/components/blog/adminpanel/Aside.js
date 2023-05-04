import React from 'react'
import { Link , Outlet } from 'react-router-dom'

function Aside() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4 wrapper">
            <a className="brand-link">
                <img src="/AdminTemplateFolder/dist/img/AdminLTELogo.png" alt="AdminLTE Logo" className="brand-image img-circle elevation-3" />
                <span className="brand-text font-weight-light">Admin Panel</span>
            </a>
            <div className="sidebar">
                <div className="user-panel mt-3 pb-3 mb-3 d-flex">
                    <div className="image">
                        <img src="/AdminTemplateFolder/dist/img/user2-160x160.jpg" className="img-circle elevation-2" alt="User Image" />
                    </div>
                    <div className="info">
                        <a className="d-block">{getCookie("username")}</a>
                    </div>
                </div>
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" role="button" aria-expanded="true">
                                <i className="nav-icon fas fa-copy"></i>
                                <p>
                                    Blog
                                    <i className="fas fa-angle-left right"></i>
                                </p>
                            </a>
                            <ul className="nav nav-treeview">
                                <li className="nav-item">
                                <Link to="/admin/blogadd" className="nav-link">   
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Blog Ekle</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                    <Link to="/admin/bloglist" className="nav-link">   
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Blog Listesi</p>
                                    </Link>
                                </li>
                                <li className="nav-item">
                                <Link to="/admin/command" className="nav-link">   
                                        <i className="far fa-circle nav-icon"></i>
                                        <p>Yorumlar</p>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </nav>

            </div>

        </aside>
    )
}

export default Aside