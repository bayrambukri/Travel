import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import galleryimage1 from '../../assets/gallery-image1.webp';
import galleryimage2 from '../../assets/gallery-image2.webp';
import galleryimage3 from '../../assets/gallery-image3.webp';
import galleryimage4 from '../../assets/gallery-image4.webp';
import galleryimage5 from '../../assets/gallery-image5.webp';

// Data
import Datas from './../../Destination.json';

function Tours() {
    // Select a random set of unique destinations on each page load
    const [randomTours, setRandomTours] = useState([]);
    useEffect(() => {
        const shuffled = Datas.sort(() => 0.5 - Math.random());
        setRandomTours(shuffled.slice(0, 8)); // Show 8 random tours, adjust as needed
    }, []);
    return (
        <>
            {/* Page Section */}
            <div className="section-banner w-100">
                <div className="container">
                    <div className="section-banner-content">
                        <h2>Trip Search Result</h2>
                        <ul>
                            <li>
                                <Link to="/">Home</Link> &nbsp;
                            </li>
                            <li>
                                <i className="bi bi-gear fs-6 pe-2"></i>
                                Trip Search Result
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* Tours */}
            <div className="tours-wrapper py-5 my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 tour-cate-wrap-sticky">
                            <div className="tour-cate-wrap">
                                <div className="tour-cate-col pb-3 border-bottom d-flex gap-5 justify-content-between">
                                    <h2>Criteria</h2>
                                    <button className="btn">Clear All</button>
                                </div>
                                <div className="tour-cate-box-wrap rounded pb-4 mt-5">
                                    <div className="tour-cate-box">
                                        <h2>Destination</h2>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                Canada
                                            </label>
                                            <span>2</span>
                                        </div>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                Emirates
                                            </label>
                                            <span>2</span>
                                        </div>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                Europe
                                            </label>
                                            <span>1</span>
                                        </div>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                France
                                            </label>
                                            <span>2</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tour-cate-box-wrap rounded pb-4 mt-4">
                                    <div className="tour-cate-box">
                                        <h2>Activities</h2>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                Boating
                                            </label>
                                            <span>7</span>
                                        </div>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                City Tour
                                            </label>
                                            <span>8</span>
                                        </div>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                kayaking
                                            </label>
                                            <span>7</span>
                                        </div>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                nayagra falls
                                            </label>
                                            <span>6</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="tour-cate-box-wrap rounded pb-4 mt-4">
                                    <div className="tour-cate-box">
                                        <h2>Trip Types</h2>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                Luxury
                                            </label>
                                            <span>11</span>
                                        </div>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                Premium
                                            </label>
                                            <span>10</span>
                                        </div>
                                        <div className="tour-cate-option d-flex justify-content-between border-bottom p-2">
                                            <label className='d-flex align-items-center gap-2'>
                                                <input type="checkbox" name="" id="" />
                                                Standard
                                            </label>
                                            <span>1</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 ps-4 ps-lg-5">
                            <div className="row">
                                <div className="col-lg-12 border rounded p-3 d-flex align-items-center justify-content-end gap-3">
                                    <span className='fs-5'>Sort :</span>
                                    <i className="bi bi-card-list tours-grid-icon"></i>
                                    <i className="bi bi-grid-3x3 tours-grid-icon"></i>
                                </div>
                            </div>
                            <div className="row tours-grid mt-4">
                                {
                                    randomTours.map(Data => (
                                        <div className="col-lg-6 mb-4" key={Data.id}>
                                            <div className="tour-card shadow-sm">
                                                <div className="tour-card-img">
                                                    <img src={Data.image} className='imgg-fluid rounded' alt="" />
                                                </div>
                                                <span><i className="bi bi-geo-alt-fill"></i> {Data.location}</span>
                                                <div className="tour-card-content mt-4 px-3">
                                                    <Link to={`/tour-details/${Data.id}`} state={{ tours: Data }}
                                                        className='text-black text-decoration-none'>
                                                        <h2>{Data.name}</h2>
                                                    </Link>
                                                    <div className="tour-card-box border-top py-3 d-flex justify-content-between gap-2 mt-3">
                                                        <p><i className="bi bi-clock-history"></i> {Data.days}</p>
                                                        <Link
                                                            to={`/tour-details/${Data.id}`}
                                                            state={{ tours: Data }}
                                                        >
                                                            View Details
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* gallery */}
            <section className="gallery-grid my-5 mb-0">
                <div className="row">
                    <Swiper
                        slidesPerView={5}
                        autoplay={true}
                        loop={true}
                        breakpoints={{
                            1300: { slidesPerView: 5 },
                            575: { slidesPerView: 3 },
                            0: { slidesPerView: 3 },
                        }}
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

export default Tours