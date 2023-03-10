import React from 'react'
import { FaYoutube, FaInstagram, FaSearch, FaShoppingCart } from 'react-icons/fa';

const Header = () => {
  return (
    <>
    
        <div className="top-bar">
            {/* Topbar */}
            <div className="container">
                <div className="row">
                    <div className="col-4">
                        <a className='top-bar-icon' href="#"><FaYoutube /></a>
                        <a className='top-bar-icon' href="#"><FaInstagram /></a>
                    </div>
                    <div className="col-4 text-center">
                        <span className='top-bar-text'>free shipping</span>
                    </div>
                </div>
            </div>
        </div>

        {/* Nabar */}
        <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container">
                <a className="navbar-brand" href="#"><img src='logo.png'/></a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    
                        <li className="nav-item">
                            <a className="nav-link" href="#">Collection</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">About</a>
                        </li>
                    </ul>
                </div>

                <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#">seek <FaSearch/></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">shopping cart <FaShoppingCart/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Header