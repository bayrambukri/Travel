import React, { useState, useEffect } from "react";
import destinations from "../../Destination.json";

import star from "../../assets/star.webp";

import travelIcon1 from "../../assets/travel-icon1.webp";
import travelIcon2 from "../../assets/travel-icon2.webp";

import tst1 from "../../assets/tst-1.webp";
import tst2 from "../../assets/tst-2.webp";
import tst3 from "../../assets/tst-3.webp";
import tst4 from "../../assets/tst-4.webp";

import travelexperienceimage1 from "../../assets/experience-image1.webp";
import travelexperienceimage2 from "../../assets/experience-image2.webp";
import travelexperienceimage3 from "../../assets/experience-image3.webp";

import travelplace from "../../assets/place-image.webp";
import placeelement from "../../assets/place-element.webp";

import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import brandimage1 from "../../assets/brand-image1.webp";
import brandimage2 from "../../assets/brand-image2.webp";
import brandimage3 from "../../assets/brand-image3.webp";
import brandimage4 from "../../assets/brand-image4.webp";
import brandimage5 from "../../assets/brand-image5.webp";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import { EffectCards } from "swiper/modules";

import price1 from "../../assets/price-1.webp";
import price2 from "../../assets/price-2.webp";
import price3 from "../../assets/price-3.webp";
import price4 from "../../assets/price-4.webp";
import price5 from "../../assets/price-5.webp";
import price6 from "../../assets/price-6.webp";

import galleryimage1 from "../../assets/gallery-image1.webp";
import galleryimage2 from "../../assets/gallery-image2.webp";
import galleryimage3 from "../../assets/gallery-image3.webp";
import galleryimage4 from "../../assets/gallery-image4.webp";
import galleryimage5 from "../../assets/gallery-image5.webp";
import { Link } from "react-router-dom";

function About() {
  // Select 3 unique random destinations on each page load
  const [randomDestinations, setRandomDestinations] = useState([]);
  useEffect(() => {
    const shuffled = destinations.sort(() => 0.5 - Math.random());
    setRandomDestinations(shuffled.slice(0, 3));
  }, []);
  return (
    <>
      {/* Page Section */}
      <div className="section-banner w-100">
        <div className="container">
          <div className="section-banner-content">
            <h2>About</h2>
            <ul>
              <li>
                <Link to="/">Home</Link> &nbsp;
              </li>
              <li>
                <i className="bi bi-gear fs-6 pe-2"></i>
                About
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* top-destinations */}
      <section className="top-destinations py-5 my-5">
        <div className="container">
          <div className="row pb-5">
            <div className="col-12 text-center">
              <div className="section-title top-destination-title">
                <div className="text-center d-flex align-items-center justify-content-center gap-3">
                  <img src={star} alt="star-image" className="img-fluid" />
                  <h3 className="m-0">Get To Know Us</h3>
                </div>
                <h2>Destinantions</h2>
              </div>
            </div>
          </div>
          <div className="row">
            {randomDestinations.map((dest) => (
              <div className="col-lg-4 col-md-6" key={dest.id}>
                <div className="top-destination-item w-100">
                  <div className="top-destination-image position-relative">
                    <img src={dest.image} alt={dest.name} />
                    <div className="top-destination-icons">
                      <i className="bi bi-play"></i>
                      <i className="bi bi-link-45deg"></i>
                    </div>
                  </div>
                  <div className="top-destination-content shadown">
                    <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                      <h3
                        className="dst-title fs-4 m-0"
                        style={{ fontWeight: "800" }}
                      >
                        {dest.name}
                      </h3>
                      <span className="fs-4" style={{ fontWeight: "800" }}>
                        {dest.price}
                      </span>
                    </div>
                    <div className="trip-time fs-5">
                      <i className="fa-solid fa-location-arrow pe-1"></i>
                      {dest.days}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* travel-experience */}
      <section className="travel-experience my-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 mb-4 mb-lg-0">
              <div className="section-title top-destination-title">
                <div className="d-flex align-items-center gap-3 mb-3">
                  <img src={star} alt="star" className="img-fluid" />
                  <h3 className="m-0">"Discover Who We Are"</h3>
                </div>
                <h2>"Unlock Unforgettable Travel Moments"</h2>

                <ul className="list-unstyled pt-4">
                  <li className="d-flex align-items-start gap-3 pb-4">
                    <img
                      src={travelIcon1}
                      alt="travel-icon"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h4>Luxury Stays</h4>
                      <p>
                        Experience the pinnacle of comfort and elegance. <br />
                        Our accommodations redefine hospitality with unmatched
                        charm.
                      </p>
                    </div>
                  </li>
                  <li className="d-flex align-items-start gap-3 pb-4">
                    <img
                      src={travelIcon2}
                      alt="travel-icon"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h4>Affordable Adventures</h4>
                      <p>
                        Embark on journeys that fit your budget. <br />
                        Discover the world without compromising on quality.
                      </p>
                    </div>
                  </li>
                </ul>

                <div className="travel-experience-btn d-flex flex-column flex-sm-row align-items-center gap-3 mt-4">
                  <button className="btn custome-btn2">
                    <a href="#">Find out more</a>
                  </button>

                  <div className="travel-experience-user d-flex align-items-center ps-sm-4">
                    <img src={tst1} alt="user" />
                    <img src={tst2} alt="user" />
                    <img src={tst3} alt="user" />
                    <img src={tst4} alt="user" />
                    <span className="ms-2">50+</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="row g-3">
                <div className="col-sm-6 col-12 mb-3">
                  <div className="travel-experience-image travel-experience-image-mb  position-relative rounded-3 overflow-hidden">
                    <img
                      src={travelexperienceimage1}
                      alt="America"
                      className="img-fluid w-100"
                    />
                    <span className="position-absolute bottom-0 start-0 p-2 text-white  ">
                      America
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 mb-3">
                  <div className="travel-experience-image position-relative rounded-3 overflow-hidden">
                    <img
                      src={travelexperienceimage3}
                      alt="Africa"
                      className="img-fluid rounded w-100"
                    />
                    <span className="position-absolute bottom-0 start-0 p-2 text-white">
                      Africa
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 mb-3">
                  <div className="travel-experience-image travel-experience-image-mb position-relative rounded-3 overflow-hidden">
                    <img
                      src={travelexperienceimage2}
                      alt="Asia"
                      className="img-fluid  w-100"
                    />
                    <span className="position-absolute bottom-0 start-0 p-2 text-white">
                      Asia
                    </span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 mb-3">
                  <div className="travel-experience-image position-relative rounded-3 overflow-hidden">
                    <img
                      src={travelexperienceimage3}
                      alt="Europe"
                      className="img-fluid rounded w-100"
                    />
                    <span className="position-absolute bottom-0 start-0 p-2 text-white">
                      Europe
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* travel-places */}
      <section className="travel-places my-5 py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-4 mb-lg-0">
              <div className="section-title travel-places-title">
                <div className="d-flex align-items-center gap-3">
                  <img src={star} alt="star" className="img-fluid" />
                  <h3 className="m-0">Get To Know Us</h3>
                </div>
                <h2 className="m-0 p-0">
                  Travel place for <br />
                  Your & your <br />
                  Family
                </h2>

                <div className="travel-experience-btn mt-4">
                  <div className="travel-experience-user d-flex align-items-center pb-2">
                    <img src={tst1} alt="user" />
                    <img src={tst2} alt="user" />
                    <img src={tst3} alt="user" />
                    <img src={tst4} alt="user" />
                    <span className="ms-2">50+</span>
                  </div>
                  <p style={{ fontWeight: "700", fontSize: "1.3rem" }}>
                    500K+ Happy Customer
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-7 mb-4 mb-lg-0">
              <div className="row align-items-center gy-4">
                <div className="col-lg-6">
                  <div className="travel-places-image">
                    <img
                      src={travelplace}
                      alt="travel-place"
                      className="img-fluid object-fit-cover"
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="travel-places-info">
                    <h4>Waiting for adventures? Don’t miss them</h4>
                    <p>
                      "We don't just create structures; we craft experiences.
                      Our approach is rooted in connecting with people, ensuring
                      every detail resonates with warmth and care."
                    </p>

                    <div className="place-text d-flex gap-3 align-items-center shadow p-3 rounded-4 mt-3">
                      <img
                        src={placeelement}
                        alt="place"
                        width="50"
                        height="50"
                      />
                      <h6>With our 20 years of experience</h6>
                    </div>

                    <ul className="list-unstyled pt-3 travel-place-ul">
                      <li className="pb-3">
                        <i className="fa-solid fa-check me-2"></i> Innovative Tech Solutions
                      </li>
                      <li className="pb-3">
                        <i className="fa-solid fa-check me-2"></i> Crystal-Clear Audio Experience
                      </li>
                      <li className="pb-3">
                        <i className="fa-solid fa-check me-2"></i> Next-Gen Advancements
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* businesse-banner     */}
      <section
        className="businesse-banner my-5"
        style={{ backgroundColor: "#F7FFC4" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="section-title text-center mb-5">
                <h2>Trusted By Local Businesses</h2>
              </div>
            </div>
            <div className="col-md-12 mt-5">
              <Splide
                className="banner-splide"
                options={{
                  perPage: 5,
                  loop: true,
                  type: "loop",
                  gap: "1rem",
                  pagination: false,
                  arrows: false,
                  breakpoints: {
                    1200: { perPage: 4 },
                    992: { perPage: 3 },
                    768: { perPage: 2 },
                    576: { perPage: 1 },
                  },
                }}
              >
                <SplideSlide>
                  <div className="brand-image text-center">
                    <img
                      src={brandimage1}
                      alt="brand-image"
                      className="img-fluid"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="brand-image text-center">
                    <img
                      src={brandimage2}
                      alt="brand-image"
                      className="img-fluid"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="brand-image text-center">
                    <img
                      src={brandimage3}
                      alt="brand-image"
                      className="img-fluid"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="brand-image text-center">
                    <img
                      src={brandimage4}
                      alt="brand-image"
                      className="img-fluid"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="brand-image text-center">
                    <img
                      src={brandimage5}
                      alt="brand-image"
                      className="img-fluid"
                    />
                  </div>
                </SplideSlide>
                <SplideSlide>
                  <div className="brand-image text-center">
                    <img
                      src={brandimage1}
                      alt="brand-image"
                      className="img-fluid"
                    />
                  </div>
                </SplideSlide>
              </Splide>
            </div>
          </div>
        </div>
      </section>
      {/* Reviews */}
      <section className="my-5 py-5 overflow-hidden">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 mb-5">
              <div className="section-title travel-places-title">
                <div className="d-flex align-items-center gap-3">
                  <img src={star} alt="star" className="img-fluid" />
                  <h3 className="m-0">Get To Know Us</h3>
                </div>
                <h2 className="m-0 p-0">What People Say About us</h2>
                <p className="py-3 text-start">
                  We don’t just work with concrete and steel. We are
                  Approachable, with even our highest concrete and steel. We
                  work with people
                </p>
                <button class="btn custome-btn2">
                  <a href="#">Find out more</a>
                </button>
              </div>
            </div>
            <div className="col-lg-6 mb-3">
              <Swiper
                effect={"cards"}
                grabCursor={true}
                loop={true}
                autoplay={true}
                modules={[EffectCards]}
                className="ab-tst-swiper"
              >
                <SwiperSlide>
                  <div className="ab-tst-item w-100">
                    <img src={tst2} alt="ab-tst-image" />
                    <p className="fs-5 mb-5">
                      We don’t just work with concrete and steel. We are
                      Approachable, with even our highest concrete and steel. We
                      work with people concrete
                    </p>
                    <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h3>Bayram Bukri</h3>
                        <span>Web Dev.</span>
                      </div>
                      <div className="ab-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ab-tst-item w-100">
                    <img src={tst4} alt="ab-tst-image" />
                    <p className="fs-5 mb-5">
                      "Beyond building structures, we create meaningful
                      connections. Our focus is on delivering experiences that
                      leave lasting impressions and foster genuine
                      relationships."{" "}
                    </p>
                    <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h3>Mehmet Can Seyhan</h3>
                        <span>Udemig Co.</span>
                      </div>
                      <div className="ab-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ab-tst-item w-100">
                    <img src={tst1} alt="ab-tst-image" />
                    <p className="fs-5 mb-5">
                      We don’t just work with concrete and steel. We are
                      Approachable, with even our highest concrete and steel. We
                      work with people concrete
                    </p>
                    <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h3>Muhammed Bukri</h3>
                        <span>Student</span>
                      </div>
                      <div className="ab-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="ab-tst-item w-100">
                    <img src={tst3} alt="ab-tst-image" />
                    <p className="fs-5 mb-5">
                      "We don't just create structures; we craft experiences.
                      Our approach is rooted in connecting with people, ensuring
                      every detail resonates with warmth and care."{" "}
                    </p>
                    <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                      <div>
                        <h3>Amine/ Dilan BUKRİ</h3>
                        <span>Prof.</span>
                      </div>
                      <div className="ab-star">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      {/* Pricing */}
      <section className="my-5 py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 mb-5">
              <div className="section-title top-destination-title">
                <div className="d-flex align-items-center gap-3">
                  <img src={star} alt="star" className="img-fluid" />
                  <h3 className="m-0">Get To Know Us</h3>
                </div>
                <h2 className="m-0 p-0">Best Holiday Package</h2>
              </div>
            </div>
            <div className="col-12">
              <div class="row g-4 justify-content-center">
                <div class="col-lg-4">
                  <div class="card h-100 shadow-lg rounded-4 p-5 text-start border-0 price-card">
                    <h2>
                      <sup>$</sup>99<small>/month</small>
                    </h2>
                    <div class="d-flex justify-content-center my-4 w-100">
                      <img
                        src={price1}
                        className="object-fit-cover"
                        width="70%"
                        alt="tour1"
                        style={{ borderRadius: "100px" }}
                      />
                      <img
                        src={price2}
                        className="rounded-circle ms-2 object-fit-cover"
                        width="30%"
                        alt="tour2"
                      />
                    </div>
                    <h4 class="fw-bold fs-1">Africa Tour</h4>
                    <p class="text-muted fs-5">
                      We don't just work with concret We are Approachable,
                    </p>
                    <hr />
                    <ul class="list-unstyled text-start card-price-list p-0">
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                       Next-Gen Advancements
                      </li>
                      <li className="fs-5  fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                        Next-Gen Advancements
                      </li>
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                      Crystal-Clear Audio Experience
                      </li>
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                     Pioneering Future Technologies
                      </li>
                    </ul>
                    <button className="btn custome-btn2 w-100">
                      <a href="#" className="text-capitalize">
                        Get Started
                      </a>
                    </button>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card h-100 shadow-lg rounded-4 p-5 text-start border-0 price-card">
                    <h2>
                      <sup>$</sup>79<small>/month</small>
                    </h2>
                    <div class="d-flex justify-content-center my-4 w-100">
                      <img
                        src={price3}
                        className="object-fit-cover"
                        width="70%"
                        alt="tour1"
                        style={{ borderRadius: "100px" }}
                      />
                      <img
                        src={price4}
                        className="rounded-circle ms-2 object-fit-cover"
                        width="30%"
                        alt="tour2"
                      />
                    </div>
                    <h4 class="fw-bold fs-1">Full Travel</h4>
                    <p class="text-muted fs-5">
                      We don't just work with concret We are Approachable,
                    </p>
                    <hr />
                    <ul class="list-unstyled text-start card-price-list p-0">
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                        Crystal-Clear Audio Experience
                      </li>
                      <li className="fs-5  fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                        Audio Performance
                      </li>
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                     Next-Gen Advancements
                      </li>
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                     Pioneering Future Technologies
                      </li>
                    </ul>
                    <button className="btn custome-btn2 w-100">
                      <a href="#" className="text-capitalize">
                        Get Started
                      </a>
                    </button>
                  </div>
                </div>

                <div class="col-lg-4">
                  <div class="card h-100 shadow-lg rounded-4 p-5 text-start border-0 price-card">
                    <h2>
                      <sup>$</sup>80<small>/month</small>
                    </h2>
                    <div class="d-flex justify-content-center my-4 w-100">
                      <img
                        src={price5}
                        className="object-fit-cover"
                        width="30%"
                        alt="tour1"
                        style={{ borderRadius: "100px" }}
                      />
                      <img
                        src={price6}
                        className="rounded-circle ms-2 object-fit-cover"
                        width="30%"
                        alt="tour2"
                      />
                    </div>
                    <h4 class="fw-bold fs-1">World Tour</h4>
                    <p class="text-muted fs-5">
                      We don't just work with concret We are Approachable,
                    </p>
                    <hr />
                    <ul class="list-unstyled text-start card-price-list p-0">
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                       Next-Gen Advancements
                      </li>
                      <li className="fs-5  fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                    Crystal-Clear Audio Experience
                      </li>
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                       Next-Gen Advancements
                      </li>
                      <li className="fs-5 fw-bold mb-3">
                        <i class="fa-regular fa-circle-check pe-2"></i>
                      Pioneering Future Technologies
                      </li>
                    </ul>
                    <button className="btn custome-btn2 w-100">
                      <a href="#" className="text-capitalize">
                        Get Started
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <p className="price-bottom-text text-center mt-5 fs-5">
            Want to see our Recent News & Updates.{" "}
            <a href="#" className="text-decoration-none fw-bold">
              View More
            </a>
          </p>
        </div>
      </section>
      {/* gallery */}
      <section className="gallery-grid my-5 mb-0">
        <div className="row">
          <Swiper
            slidesPerView={5}
            autoplay={true}
            loop={true}
            className="gallery-swiper"
          >
            <SwiperSlide>
              <div className="gallery-image">
                <img
                  src={galleryimage1}
                  alt="gallery"
                  data-lightbox="image-1"
                  className="img-fluid w-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img
                  src={galleryimage2}
                  alt="gallery"
                  data-lightbox="image-2"
                  className="img-fluid w-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img
                  src={galleryimage3}
                  alt="gallery"
                  data-lightbox="image-3"
                  className="img-fluid w-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img
                  src={galleryimage4}
                  alt="gallery"
                  className="img-fluid w-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img
                  src={galleryimage5}
                  alt="gallery"
                  className="img-fluid w-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img
                  src={galleryimage2}
                  alt="gallery"
                  className="img-fluid w-100"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="gallery-image">
                <img
                  src={galleryimage3}
                  alt="gallery"
                  className="img-fluid w-100"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
}

export default About;
