import React from 'react'
import { Link } from 'react-router-dom'

import star from '../../assets/star.webp'
import destinationimage1 from '../../../public/Images/Destination-6.webp'
import destinationimage2 from '../../../public/Images/Destination-7.webp'
import destinationimage3 from '../../../public/Images/Destination-8.webp'

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';
import brandimage1 from '../../assets/brand-image1.webp'
import brandimage2 from '../../assets/brand-image2.webp'
import brandimage3 from '../../assets/brand-image3.webp'
import brandimage4 from '../../assets/brand-image4.webp'
import brandimage5 from '../../assets/brand-image5.webp'

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cards';
import { EffectCards } from 'swiper/modules';

import tst1 from '../../assets/tst-1.webp'
import tst2 from '../../assets/tst-2.webp'
import tst3 from '../../assets/tst-3.webp'
import tst4 from '../../assets/tst-4.webp'

import galleryimage1 from '../../assets/gallery-image1.webp'
import galleryimage2 from '../../assets/gallery-image2.webp'
import galleryimage3 from '../../assets/gallery-image3.webp'
import galleryimage4 from '../../assets/gallery-image4.webp'
import galleryimage5 from '../../assets/gallery-image5.webp'

function Destination() {
    return (
        <>
            {/* Page Section */}
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>Destination</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                Destination
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
                                    <h3 className="m-0">
                                        Get To Know Us
                                    </h3>
                                </div>
                                <h2>Top Destinantions</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="top-destination-item w-100">
                                <Link to='/destinationDetails'>
                                    <div className="top-destination-image position-relative">
                                        <img src={destinationimage1} alt="destination-image" />
                                        <div className="top-destination-icons">
                                            <i class="bi bi-play"></i>
                                            <i class="bi bi-link-45deg"></i>
                                        </div>
                                    </div>
                                    <div className="top-destination-content">
                                        <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                                            <h3 className="dst-title fw-bolder fs-4 m-0" >Rome, Italty</h3>
                                            <span className="fw-bold fs-4 m-0">$0</span>
                                        </div>
                                        <div className="trip-time fs-5">
                                            <i class="fa-solid fa-location-arrow pe-1"></i>
                                            4 Days
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="top-destination-item">
                                <Link to='/destinationDetails'>
                                    <div className="top-destination-image position-relative">
                                        <img src={destinationimage2} alt="destination-image" />
                                        <div className="top-destination-icons">
                                            <i class="bi bi-play"></i>
                                            <i class="bi bi-link-45deg"></i>
                                        </div>
                                    </div>
                                    <div className="top-destination-content shadown">
                                        <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                                            <h3 className="dst-title fs-4 m-0" style={{ fontWeight: '800' }}>Paris, France</h3>
                                            <span className="fs-4" style={{ fontWeight: '800' }}>$0</span>
                                        </div>
                                        <div className="trip-time fs-5">
                                            <i class="fa-solid fa-location-arrow pe-1"></i>
                                            8 Days
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="top-destination-item">
                                <Link to='/destinationDetails'>
                                    <div className="top-destination-image position-relative">
                                        <img src={destinationimage3} alt="destination-image" />
                                        <div className="top-destination-icons">
                                            <i class="bi bi-play"></i>
                                            <i class="bi bi-link-45deg"></i>
                                        </div>
                                    </div>
                                    <div className="top-destination-content shadown">
                                        <div className="dest-title-price position-relative d-flex justify-content-between align-items-center border-b">
                                            <h3 className="dst-title fs-4 m-0" style={{ fontWeight: '800' }}>New York, USA</h3>
                                            <span className="fs-4" style={{ fontWeight: '800' }}>$0</span>
                                        </div>
                                        <div className="trip-time fs-5">
                                            <i class="fa-solid fa-location-arrow pe-1"></i>
                                            7 Days
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* businesse-banner     */}
            <section className="businesse-banner my-5" style={{ backgroundColor: '#F7FFC4' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title text-center mb-5">
                                <h2>Trusted By Local Businesses</h2>
                            </div>
                        </div>
                        <div className="col-md-12 mt-5">
                            <Splide className="banner-splide"
                                options={{
                                    perPage: 5,
                                    loop: true,
                                    type: 'loop',
                                    gap: '1rem',
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
                                        <img src={brandimage1} alt="brand-image" className="img-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage2} alt="brand-image" className="img-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage3} alt="brand-image" className="img-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage4} alt="brand-image" className="img-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage5} alt="brand-image" className="img-fluid" />
                                    </div>
                                </SplideSlide>
                                <SplideSlide>
                                    <div className="brand-image text-center">
                                        <img src={brandimage1} alt="brand-image" className="img-fluid" />
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
                                    Approachable, with even our highest concrete and steel.
                                    We work with people
                                </p>
                                <button class="btn custome-btn2"><a href="#">Find out more</a></button>
                            </div>
                        </div>
                        <div className="col-lg-6 mb-3">
                            <Swiper
                                effect={'cards'}
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
                                            We don’t just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete
                                        </p>
                                        <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                                            <div>
                                                <h3>Hamza Khan</h3>
                                                <span>Fementum Odio Co.</span>
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
                                            We don’t just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete
                                        </p>
                                        <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                                            <div>
                                                <h3>Ishin Korma</h3>
                                                <span>Fementum Odio Co.</span>
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
                                            We don’t just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete
                                        </p>
                                        <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                                            <div>
                                                <h3>Victoria Wotton</h3>
                                                <span>Fementum Odio Co.</span>
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
                                            We don’t just work with concrete and steel. We are Approachable, with even our highest concrete and steel. We work with people concrete
                                        </p>
                                        <div className="ab-tst-bottom d-flex justify-content-between align-items-center w-100">
                                            <div>
                                                <h3>Wastson Karm</h3>
                                                <span>Fementum Odio Co.</span>
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
            {/* gallery */}
            <section className="gallery-grid my-5 mb-0">
                <div className="row">
                    <Swiper
                        slidesPerView={5}
                        autoplay={true}
                        loop={true}
                        className="gallery-swiper">
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage1} alt="gallery" data-lightbox="image-1" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage2} alt="gallery" data-lightbox="image-2" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage3} alt="gallery" data-lightbox="image-3" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage4} alt="gallery" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage5} alt="gallery" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage2} alt="gallery" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="gallery-image">
                                <img src={galleryimage3} alt="gallery" className="img-fluid w-100" />
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    )
}

export default Destination