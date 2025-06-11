import React from "react";
import { Link } from "react-router-dom";

function Contact() {
    return (
        <>
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>Contact</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                Contact
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <section className="contact-section py-5 my-5">
                <div className="container">
                    <div className="section-title contact-title">
                        <h2 className="fw-bold ">
                            Get in touch with our <br /> lovely Team
                        </h2>
                    </div>
                    <div className="row g-5">
                        <div className="col-lg-6 contact-info d-flex flex-column justify-content-center">
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <div className="info-text">
                                    <h5>Office Address</h5>
                                    <p className="mb-0">Travel Agency Network 20</p>
                                    <p>Eastbourne Terrace, London W2 6LG</p>
                                </div>
                            </div>
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-phone-alt"></i>
                                </div>
                                <div className="info-text">
                                    <h5>Phone Number</h5>
                                    <p className="mb-0">(408) 8542–389-5470</p>
                                    <p>(408) 8542–389-5470</p>
                                </div>
                            </div>
                            <div className="info-block d-flex">
                                <div className="info-icon me-3">
                                    <i className="fas fa-envelope"></i>
                                </div>
                                <div className="info-text">
                                    <h5>Mail Address</h5>
                                    <p className="mb-0">info@envato.com</p>
                                    <p>support@envato.com</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <form className="contact-form">
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Full name" />
                                </div>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="Email address" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Phone Number" />
                                </div>
                                <div className="mb-3">
                                    <input type="text" className="form-control" placeholder="Subject" />
                                </div>
                                <div className="mb-3">
                                    <textarea className="form-control" rows="4" placeholder="Type your message..."></textarea>
                                </div>
                                <button type="submit" className="btn w-100 fw-bold">Send Message Now</button>
                            </form>
                        </div>
                        <div className="contact-icons d-flex gap-2">
                            <i className="fab fa-facebook-f"></i>
                            <i className="fab fa-instagram"></i>
                            <i className="fab fa-pinterest-p"></i>
                            <i className="fab fa-linkedin-in"></i>
                        </div>
                    </div>
                </div>
            </section>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118106.71772249676!2d73.09068439469182!3d22.322081830866296!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f131!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1745399867222!5m2!1sen!2sin"
                width="100%"
                height="500"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            />
        </>
    )
}

export default Contact