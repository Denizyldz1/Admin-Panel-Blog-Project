import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
  return (
      <header className="backImage text-white text-center" id="myHeader" >
        <div className="container" id='headText'>
          <div className='row'>
            <div className='col-lg-8 col-md-10 mx-auto'>
            <div className="backImage-sub mb-4 text-uppercase mt-5">Welcome</div>
          <Link to="/#about" className="btn btn-danger btn-lg p-lg-4 text-uppercase fw-bolder mt-5">About Me!</Link>    
            </div>
          </div>
        </div>
      </header>
  )
}

export default Header