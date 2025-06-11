import React, { useState } from 'react'

import DestinationImage1 from '../../../public/Images/Destination-8.webp';
import DestinationImage2 from '../../../public/Images/Destination-image-4.webp';
import DestinationImage3 from '../../../public/Images/Destination-image-2.webp';
import DestinationImage4 from '../../../public/Images/Destination-image-1.webp';

import { Link, useParams } from 'react-router-dom';

// Data
import Datas from './../../Destination.json';



function ToursDetails() {

    const { id } = useParams();
    const tour = Datas.find(item => item.id === parseInt(id));
    const images = [DestinationImage1, DestinationImage2, DestinationImage3, DestinationImage4];
    const [mainImage, setMainImage] = useState(images[0]);
    const [adultCount, setAdultCount] = useState(1);
    const [childCount, setChildCount] = useState(1);

    if (!tour) return <p>Tour not found</p>;

    const priceAdult = parseInt(tour?.price?.replace(/\D/g, "")) || 0;
    const priceChild = parseInt(tour?.price?.replace(/\D/g, "")) || 0;

    const adultTotal = priceAdult * adultCount;
    const childTotal = priceChild * childCount;
    const total = adultTotal + childTotal;

    return (
        <>
            {/* Page Section */}
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>{tour.name}</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                Trip Details
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="destination-container">
                <div className="container my-5">
                    <div className="row g-4 destination-top">
                        <div className="col-lg-2 d-flex flex-column gap-2 h-100 destination-images">
                            {images.map((img, index) => (
                                <div
                                    key={index}
                                    className="destination-details-wrap d-flex cursor-pointer"
                                    onClick={() => setMainImage(img)}
                                    style={{ cursor: "pointer" }}
                                >
                                    <img src={img} className="img-fluid" alt="" />
                                </div>
                            ))}
                        </div>

                        <div className="col-lg-6 position-relative destination-main-image h-100">
                            <img src={mainImage} className="img-fluid w-100" alt='' />
                        </div>
                    </div>
                    <h2 className="fw-bold mt-5 fs-1">{tour.name}</h2>
                    <button type="button" class="btn fs-4 open-bbok-btn" data-bs-toggle="modal" data-bs-target="#bookingModal">
                        Book Now
                    </button>
                    <div className="row">
                        <div className="col-lg-9">
                            <div className="row row-cols-2 row-cols-md-4 g-4 mt-2">
                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-building me-3 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Accommodation: <br />
                                        <strong>5 Star Hotel</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-cash me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Admission Fee: <br />
                                        <strong>No</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-geo-alt me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Arrival City:  <br /> <strong>London</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-calendar3 me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Best Season:  <br /> <strong>Autumn</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-airplane me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Departure City:  <br /> <strong>Kathmandu</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-shield-check me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Insurance:  <br /> <strong>Cover 60%</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-x-circle me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Free Cancel:  <br /> <strong>Yes</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-translate me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Language:  <br /> <strong>English</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-person-check me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        01 Guide:  <br /> <strong>Guided</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-person me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Minimum Age:  <br /> <strong>18</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-truck me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Hotel Transfer: <br />
                                        <strong>Available</strong>
                                    </div>
                                </div>

                                <div className="col d-flex align-items-center">
                                    <i className="bi bi-person-x me-2 destination-details-icon"></i>
                                    <div className="destination-details-info">
                                        Maximum Age:  <br /> <strong>54</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="mt-5 row">
                        <div className="col-md-9">
                            <h2 className="fw-bold mt-5 fs-1">Overview</h2>
                            <p className="fs-5">
                                Fringilla a praesent aliquam proin ultrices imperdiet neque. Cras orci fusce pulvinar ridiculus integer fringilla placerat senectus fermentum interdum. Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas. Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem. Aliquet taciti senectus maecenas duis rhoncus inceptos. Mus eleifend cras porta habitant ante ac lorem. Cubilia neque pretium at eu lectus id consequat metus ipsum pulvinar gravida. Tempor imperdiet magnis phasellus si sollicitudin quisque.
                            </p>
                            <p className="fs-5">
                                Non libero hac commodo torquent finibus metus. Duis in nisi diam nunc habitasse lorem elit. Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas. Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem.
                            </p>
                        </div>
                    </div>

                    <div class="mt-5 row">
                        <div className="col-md-9">
                            <h2 className="fw-bold mt-5 fs-1">Top Highlights</h2>
                            <p className="fs-5 mb-1">
                                Ante porta accumsan sociosqu faucibus ultrices posuere. Vivamus id efficitur tristique hac elit egestas. Sed efficitur fringilla habitant tempus tincidunt facilisis auctor pellentes sem. Aliquet taciti senectus maecenas duis rhoncus inceptos. Mus eleifend cras porta habitant ante ac lorem.
                            </p>
                            <ul class="list-unstyled mt-3">
                                <li className="fs-5 mb-1">
                                    <i class="bi bi-stars text-primary me-2"></i>
                                    Easily generate images with detailed text prompts
                                </li>
                                <li className="fs-5 mb-1">
                                    <i class="bi bi-stars text-primary me-2"></i>
                                    Customize your images with different styles, moods, colors
                                </li>
                                <li className="fs-5">
                                    <i class="bi bi-stars text-primary me-2"></i>
                                    Generate high-quality images with up to 8K resolution
                                </li>
                                <li className="fs-5 mb-1">
                                    <i class="bi bi-stars text-primary me-2"></i>
                                    Visit Tengboche the biggest and oldest monastery in the region
                                </li>
                                <li className="fs-5 mb-1">


                                    <i class="bi bi-stars text-primary me-2"></i>
                                    Travel through the Sherpa villages of Namche, Khumjung, Khunde, and Dingboche
                                </li>
                                <li className="fs-5 mb-1">
                                    <i class="bi bi-stars text-primary me-2"></i>
                                    Enjoy the amazing view of the Himalayas from Kala Patthar
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-9">
                            <div class="row">
                                <h2 className="fw-bold mt-5 mb-4 fs-1">Included and Excluded</h2>
                                <div className="col-md-6 mb-3">
                                    <div className="bg-light p-3 rounded shadow-sm">
                                        <ul className="list-unstyled">
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-check2-circle text-primary me-2"></i>
                                                Meal as per hotel Plan and drinks free too.
                                            </li>
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-check2-circle text-primary me-2"></i>
                                                Return airport and round trip transfers.
                                            </li>
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-check2-circle text-primary me-2"></i>
                                                Accommodation on twin sharing basis.
                                            </li>
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-check2-circle text-primary me-2"></i>
                                                The above per day disposal basis
                                            </li>
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-check2-circle text-primary me-2"></i>
                                                Enjoy Brussels day tour Overnight Brussels
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="col-md-6 mb-3">
                                    <div className="bg-light p-3 rounded shadow-sm">
                                        <ul className="list-unstyled">
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-x-circle text-danger me-2"></i>
                                                Meal as per hotel Plan and drinks free too.
                                            </li>
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-x-circle text-danger me-2"></i>
                                                Return airport and round trip transfers.
                                            </li>
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-x-circle text-danger me-2"></i>
                                                Accommodation on twin sharing basis.
                                            </li>
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-x-circle text-danger me-2"></i>
                                                The above per day disposal basis
                                            </li>
                                            <li className="fs-5 mb-2">
                                                <i className="bi bi-x-circle text-danger me-2"></i>
                                                Enjoy Brussels day tour Overnight Brussels
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-md-9">
                            <div className="form-container shadow">
                                <h5 class="mb-4 fs-3">You can send your enquiry via the form below.</h5>

                                <div class="mb-3">
                                    <strong className="fs-6">Trip name:</strong> <span class="text-danger">*</span>
                                    New York, USA
                                </div>

                                <form className="destination-details-form">
                                    <div class="mb-3">
                                        <label class="form-label required">Your name</label>
                                        <input type="text" class="form-control" placeholder="Enter Your Name" />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label required">Your email</label>
                                        <input type="email" class="form-control" placeholder="Enter Your Email" />
                                    </div>

                                    <div class="row g-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="form-label required">Country</label>
                                            <select class="form-select">
                                                <option selected disabled>Choose a country</option>
                                                <option>USA</option>
                                                <option>UK</option>
                                                <option>India</option>
                                                <option>Canada</option>
                                            </select>
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label required">Contact number</label>
                                            <input type="tel" class="form-control" placeholder="Enter Your Contact Number" />
                                        </div>
                                    </div>

                                    <div class="row g-3 mb-3">
                                        <div class="col-md-6">
                                            <label class="form-label required">No. of Adults</label>
                                            <input type="number" class="form-control" placeholder="Enter Number of Adults" />
                                        </div>
                                        <div class="col-md-6">
                                            <label class="form-label">No. of Children</label>
                                            <input type="number" class="form-control" placeholder="Enter Number of Children" />
                                        </div>
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label required">Enquiry Subject</label>
                                        <input type="text" class="form-control" placeholder="Enquiry Subject" />
                                    </div>

                                    <div class="mb-3">
                                        <label class="form-label required">Your Message</label>
                                        <textarea class="form-control" rows="4" placeholder="Enter Your Message"></textarea>
                                    </div>

                                    <div class="text-center">
                                        <button type="submit" class="btn btn-purple px-5 py-2">Send Email</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Book Modal */}
            <div class="modal fade" id="bookingModal" tabindex="-1" aria-labelledby="bookingModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-xl modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-body book-modal-wrap d-flex p-0">
                            <div class="col-lg-7 p-4">

                                <h6 class="mb-4">TRAVELLERS</h6>

                                <div class="card mb-3 shadow-sm">
                                    <div class="card-body d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6>Adult</h6>
                                            <small>/ Person</small>
                                        </div>
                                        <h5>$75,000</h5>
                                        <div class="text-end">
                                            <div class="input-group book-qount">
                                                <input
                                                    type="number"
                                                    className="form-control text-center"
                                                    min={1}
                                                    value={adultCount}
                                                    onChange={(e) => setAdultCount(Number(e.target.value))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="card mb-3 shadow-sm">
                                    <div class="card-body d-flex justify-content-between align-items-center">
                                        <div>
                                            <h6>Child</h6>
                                            <small>/ Person</small>
                                        </div>
                                        <h5>$55,000</h5>
                                        <div class="text-end">
                                            <div class="input-group book-qount">
                                                <input
                                                    type="number"
                                                    className="form-control text-center"
                                                    min={1}
                                                    value={childCount}
                                                    onChange={(e) => setChildCount(Number(e.target.value))}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="text-center mt-4">
                                    <button class="btn btn-primary fs-4 rounded-pill px-5 py-2">Proceed To Checkout</button>
                                </div>
                            </div>
                            <div class="col-lg-5 bg-light p-4">
                                <div class="d-flex justify-content-between mb-4">
                                    <h5 class="text-muted">BOOKING SUMMARY</h5>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>

                                <h6>{tour?.name} - {tour?.location}</h6>
                                <p>Starting Date: <strong>April 27, 2025</strong></p>

                                <div className="mb-2">
                                    <div className="d-flex justify-content-between">
                                        <span>Adult: {adultCount} x ${priceAdult}</span>
                                        <span>${adultTotal.toLocaleString()}</span>

                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <span>Child: {childCount} x ${priceChild}</span>
                                        <span>${childTotal.toLocaleString()}</span>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex justify-content-between fw-bold fs-5">
                                    <span>Total :</span>
                                    <span>${total.toLocaleString()}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ToursDetails