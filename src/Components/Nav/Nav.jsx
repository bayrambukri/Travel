import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className={`navbar navbar-expand-lg custom-nav position-fixed w-100 ${scrolled ? "black-theme" : "white-theme"
        }`}>
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <Link to='/' className="logo navbar-brand">DreamRoutes</Link>

          <div className="d-flex align-items-center">
            <i className="bi bi-search search-icon me-1 " type="button" data-bs-toggle="modal" data-bs-target="#searchModal"></i>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav align-items-center ">
            <li className="nav-item"><Link to="/"><i class="bi bi-house-door-fill me-2"></i></Link></li>
            <li className="nav-item"><Link to='/about'>About</Link></li>
            <li className="nav-item"><Link to='/tours'>Tours</Link></li>
            <li className="nav-item"><Link to='/blog'>Blog</Link></li>
            <li className="nav-item"><Link to='contact'>Contact</Link></li>
          </ul>
        </div>
      </nav>
      {/* Searching */}
      <div className="modal fade" id="searchModal" tabIndex="-1" aria-labelledby="searchModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content bg-dark text-white">
            <div className="modal-header border-0">
              <h5 className="modal-title" id="searchModalLabel">Search</h5>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <div className="search-input-wrapper position-relative">
                <input
                  type="text"
                  className="form-control pe-5"
                  placeholder="Search here..."
                />
                <span className="search-icon-inside">
                  <i className="bi bi-search text-dark"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
