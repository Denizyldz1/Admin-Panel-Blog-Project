import React, { useEffect } from 'react'

function Footer() {

    useEffect
  return (
    <footer className="footer py-4">
    <div className="container">
        <div className="row align-items-center">
            <div className="col text-lg-start text-muted footerDiv">
                Copyright &copy; New Design 2023
            </div>
            <div className="col text-lg-end footerDiv">
                <a href="#" className="link-secondary text-decoration-none fw-bold p-3">Deniz Yıldız</a>
                <a href="#" className="btn-social socialMediaIcon">
                <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="btn-social socialMediaIcon">
                <i className="bi bi-github"></i>
                </a><a href="#" className="btn-social socialMediaIcon">
                <i className="bi bi-linkedin"></i>
                </a>
            </div>

        </div>
    </div>
</footer>
  )
}

export default Footer