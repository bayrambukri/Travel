import React from 'react'

import ins1 from '../../assets/ins1.webp'
import ins2 from '../../assets/ins2.webp'
import ins3 from '../../assets/ins3.webp'
import ins4 from '../../assets/ins4.webp'
import ins5 from '../../assets/ins5.webp'

function Footer() {
    return (
        <>
            <footer className="bg-light py-5  pb-0">
                <div className="container">
                    <div className="row g-4">
                        <h2 className="fw-bold mb-4">Quick Links:</h2>
                        <div className="row g-3 w-100">
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>Branding</p>
                                <p><i className="fas fa-check me-2"></i>Recent Work</p>
                                <p><i className="fas fa-check me-2"></i>Our history</p>
                            </div>
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>Product Gallery</p>
                                <p><i className="fas fa-check me-2"></i>Web & Interactive</p>
                                <p><i className="fas fa-check me-2"></i>Help & support</p>
                            </div>
                            <div className="col-md-3">
                                <p><i className="fas fa-check me-2"></i>About us</p>
                                <p><i className="fas fa-check me-2"></i>Branded Merchandise</p>
                                <p><i className="fas fa-check me-2"></i>Our Awards</p>
                            </div>
                            <div className="footer-social col-md-3">
                                <p><i className="fas fa-phone-alt me-2"></i>55121824</p>
                                <p><i className="fas fa-envelope me-2"></i>bukribayram@gmail.com</p>
                                <div className="mt-3 footer-icons">
                                    <a href="#" className="text-dark me-3 "><i className="fab fa-facebook-f"></i></a>
                                    <a href="#" className="text-dark me-3"><i className="fab fa-twitter"></i></a>
                                    <a href="#" className="text-dark"><i className="fab fa-youtube"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row mt-5">
                        <div className="col">
                            <div className="footer-img d-flex flex-wrap justify-content-center gap-3">
                                <div className="img-wrapper">
                                    <img src={ins1} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins2} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins3} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins4} alt="ins-image" />
                                </div>
                                <div className="img-wrapper">
                                    <img src={ins5} alt="ins-image" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="copyright text-center mt-4 py-3 border-top">
                       <small>Made with ❤️ by Bayram Bukri | Happy Travels!</small>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer