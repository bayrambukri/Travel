import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Navigation, EffectFade } from "swiper/modules";
import btnArrow from "././../../assets/btn-arrow.svg";
import plane from "././../../assets/plane.svg";
// Data
import Destination from "./../../Destination.json";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import about1 from "./../../assets/about-image-1.webp";
import about2 from "./../../assets/about-image-2.webp";
import checkImg from "./../../assets/about-check.svg";
import tst1 from "./../../assets/tst-1.webp";
import tst2 from "./../../assets/tst-2.webp";
import tst3 from "./../../assets/tst-3.webp";
import tst4 from "./../../assets/tst-4.webp";
import abEleement1 from "./../../assets/about-element-1.webp";
import abEleement2 from "./../../assets/about-element-2.webp";
import abEleement3 from "./../../assets/about-element-3.webp";
import DiscoverImg1 from "./../../assets/Discover-image-1.webp";
import DiscoverImg2 from "./../../assets/Discover-image-2.webp";
import DiscoverImg3 from "./../../assets/Discover-image-3.webp";
import DiscoverImg4 from "./../../assets/Discover-image-4.webp";
import steps1 from "./../../assets/steps-1.svg";
import steps2 from "./../../assets/steps-2.svg";
import steps3 from "./../../assets/steps-3.svg";
import FeatureImg1 from "./../../assets/Feature-image-1.webp";
import FeatureImg2 from "./../../assets/Feature-image-2.webp";
import offerBG1 from "./../../assets/offer-bg-1.webp";
import offerBG2 from "./../../assets/offer-bg-2.webp";
import tstimg1 from "./../../assets/tst-image-1.webp";
import tstimg2 from "./../../assets/tst-3.webp";
import quote from "./../../assets/quote-left.png";
import testBG from "./../../assets/test-bg.webp";
import blog1 from "./../../assets/blog-1.webp";
import blog2 from "./../../assets/blog-2.webp";
import blog3 from "./../../assets/blog-3.webp";
import footer from "./../../assets/footer.webp";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "swiper/css/effect-creative";

function Index() {
  // Dynamic Discover Cities
  const [discoverCities, setDiscoverCities] = useState([]);
  useEffect(() => {
    const shuffled = Destination.sort(() => 0.5 - Math.random());
    setDiscoverCities(shuffled.slice(0, 4));
  }, []);

  return (
    <>
      {/* Hero */}
      <Swiper
        modules={[Navigation, EffectFade]}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={true}
        effect={"fade"}
        navigation={{
          prevEl: ".swiper-prev",
          nextEl: ".swiper-next",
        }}
        className="overflow-hidden"
      >
        <SwiperSlide>
          <div className="hero hero1 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">Frozen Serenity</h2>
              <button className="btn text-white hero-btn mt-5">
                {" "}
                MORE <img src={btnArrow} className="img-fluid" alt="" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero2 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">The Living Green</h2>
              <button className="btn text-white hero-btn mt-5">
                MORE <img src={btnArrow} className="img-fluid" alt="" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="hero hero3 d-flex flex-column justify-content-center align-items-center">
            <div className="hero-content w-100 d-flex flex-column justify-content-center align-items-center">
              <h2 className="text-white">Emerald Horizons</h2>
              <button className="btn text-white hero-btn mt-5">
                {" "}
                MORE <img src={btnArrow} className="img-fluid" alt="" />
              </button>
            </div>
          </div>
        </SwiperSlide>
        <i className="bi bi-arrow-left-short swiper-btn swiper-prev"></i>
        <i className="bi bi-arrow-right-short swiper-btn swiper-next"></i>
      </Swiper>
      {/* Hero End */}

      {/* Destinations */}
      <div className="destinations py-5 my-5">
        <motion.div
          className="section-title"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">
            <span className=" d-flex align-items-center gap-2">
              <img src={plane} alt="" className="img-fluid" />
              <span>Travel Destinantion</span>
              <img src={plane} alt="" className="img-fluid" />
            </span>
            <h2>Discover Your Next Adventure</h2>
            <p>
              Discover the world's most breathtaking destinations, handpicked
              and loved by over 100,000 travelers globally.
            </p>
          </div>
        </motion.div>
        <motion.div
          className="destinations-wrapper mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <Splide
            hasTrack={false}
            options={{
              type: "loop",
              drag: "free",
              focus: "center",
              gap: 50,
              perPage: 3,
              arrows: true,
              pagination: false,
              autoScroll: {
                speed: 2,
                autoStart: true,
              },
              breakpoints: {
                1199: { perPage: 3 },
                991: { perPage: 2 },
                767: { perPage: 2 },
                575: { perPage: 1 },
                0: { perPage: 1 },
              },
            }}
            extensions={{ AutoScroll }}
          >
            <SplideTrack>
              {Destination.map((dest) => (
                <SplideSlide key={dest.id}>
                  <div className="dest-card position-relative">
                    <div className="dest-img overflow-hidden rounded">
                      <img
                        src={dest.image}
                        className="img-fluid"
                        alt={dest.name}
                      />
                      <span className="dest-price position-absolute top-0 end-0">
                        {dest.price}
                      </span>
                    </div>
                    <div className="dest-content p-4 rounded border top-0 start-0 mt-3 position-absolute">
                      <i className="fa-solid fa-arrow-right dest-arrow position-absolute"></i>
                      <h2>{dest.name}</h2>
                      <p>{dest.pere}</p>
                      <div className="dest-day border-top pt-3">
                        <i className="bi bi-send-fill me-2"></i>
                        <span>{dest.days}</span>
                      </div>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>
          </Splide>
          <p className="text-center mt-5 fs-5">
            Interested in Exploring More?{" "}
            <Link to="destination">Click here</Link>
          </p>
        </motion.div>
      </div>
      {/* About */}
      <div className="about py-5">
        <div className="container">
          <div className="row">
            <motion.div
              className="col-lg-6 about-content-wrap"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <div className="section-title about-title">
                <div className="flex-column d-flex align-items-start justify-content-start gap-3">
                  <span className=" d-flex align-items-start gap-2">
                    <img src={plane} alt="" className="img-fluid" />
                    <span>About our company</span>
                    <img src={plane} alt="" className="img-fluid" />
                  </span>
                  <h2>Explore the Globe with Our Expertise</h2>
                  <p>
                    Set sail on a life-changing expedition with us and turn
                    every travel moment into an everlasting memory.
                  </p>
                </div>
              </div>
              <div className="row about-cols">
                <div className="col-md-6">
                  <div className="about-col-img position-relative">
                    <i className="bi bi-play-fill position-absolute"></i>
                    <img src={about2} className="img-fluid" alt="" />
                  </div>
                </div>
                <div className="col-md-6 about-cols p-3">
                  <h4 className="my-3">
                    <img src={checkImg} className="img-fluid pe-2" alt="" />{" "}
                    Perfect Detailing
                  </h4>
                  <h4 className="my-3">
                    <img src={checkImg} className="img-fluid pe-2" alt="" />{" "}
                    Completed Certification
                  </h4>
                  <h4 className="my-3">
                    <img src={checkImg} className="img-fluid pe-2" alt="" />{" "}
                    Save Your Budget
                  </h4>
                  <h4 className="my-3">
                    <img src={checkImg} className="img-fluid pe-2" alt="" />{" "}
                    Free Consultations
                  </h4>
                </div>
              </div>
              <div className="about-bottom mt-5 d-flex gap-4">
                <div className="btn-box">
                  <button className="btn custom-btn1">
                    Learn More
                    <img src={btnArrow} className="img-fluid ms-2" alt="" />
                  </button>
                </div>
                <div className="about-col-box d-flex align-items-center">
                  <div className="about-col-box-img">
                    <img src={tst1} className="img-fluid" alt="" />
                    <img src={tst2} className="img-fluid" alt="" />
                    <img src={tst3} className="img-fluid" alt="" />
                    <img src={tst4} className="img-fluid" alt="" />
                  </div>
                  <p className="ms-4 m-0 fs-5">5.2+ Satisfied clients</p>
                </div>
              </div>
            </motion.div>
            <motion.div
              className="col-lg-6 about-img"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.9 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img src={about1} className="img-fluid" alt="" />
              <img
                src={abEleement1}
                className="img-fluid abElement-1 position-absolute"
                alt=""
              />
              <img
                src={abEleement2}
                className="img-fluid abElement-2 position-absolute"
                alt=""
              />
              <img
                src={abEleement3}
                className="img-fluid abElement-3 position-absolute"
                alt=""
              />
            </motion.div>
          </div>
        </div>
      </div>
      {/* Discover */}
      <div className="discover py-5">
        <motion.div
          className="section-title discover-title"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">
            <span className=" d-flex align-items-center gap-2">
              <img src={plane} alt="" className="img-fluid" />
              <span>Travel Destinantion</span>
              <img src={plane} alt="" className="img-fluid" />
            </span>
            <h2>Discover the Touch of Nature</h2>
            <p>
              Our clients rave about our exceptional the seamless experiences
              that exceeded their expectations.
            </p>
          </div>
        </motion.div>
        <div className="row px-5 my-5 mx-0 gap-3 align-items-center justify-content-center">
          {discoverCities.map((city, idx) => (
            <motion.div
              className="col-lg-2 discover-card position-relative"
              key={city.id}
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + idx * 0.2 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <img src={city.image} className="img-fluid" alt={city.name} />
              <div className="discover-card-content position-absolute d-flex flex-column align-items-center justify-content-center text-center">
                <span>
                  <i className="bi bi-geo-alt-fill"></i> {city.location}
                </span>
                <h2 className="mt-4">{city.pere}</h2>
              </div>
            </motion.div>
          ))}
        </div>
        <p className="text-center mt-5 fs-5">
          Want to see our top destinations.{" "}
          <a href="#">Click here to View More</a>
        </p>
      </div>
      {/* working Steps */}
      <div className="working py-5 position-relative">
        <img
          src={FeatureImg1}
          className="FeatureImg FeatureImg1 img-fluid position-absolute"
          alt=""
        />
        <img
          src={FeatureImg2}
          className="FeatureImg FeatureImg2 img-fluid position-absolute"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="section-title discover-title">
              <div className="text-start flex-column d-flex align-items-start justify-content-start gap-3">
                <span className=" d-flex align-items-center gap-2">
                  <img src={plane} alt="" className="img-fluid" />
                  <span>working Steps</span>
                  <img src={plane} alt="" className="img-fluid" />
                </span>
                <h2>
                  Book Your Next Trip <br />
                  in 3 Steps
                </h2>
              </div>
            </div>
          </div>
          <div className="row mt-5 gap-3">
            <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
              <div className="step-img rounded">
                <img src={steps1} className="img-fluid" alt="" />
              </div>
              <div className="step-content">
                <h2>Discover Your Destination</h2>
                <p>
                  Begin your journey by discovering destinations that inspire
                  and excite.
                </p>
              </div>
            </div>
            <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
              <div className="step-img step-img2 rounded">
                <img src={steps2} className="img-fluid" alt="" />
              </div>
              <div className="step-content">
                <h2>Secure Your Reservation</h2>
                <p>
                  Confirm your reservation quickly and securely for a worry-free
                  travel experience.
                </p>
              </div>
            </div>
            <div className="col-lg-4 step-card rounded border p-4 d-flex flex-column gap-3">
              <div className="step-img step-img3 rounded">
                <img src={steps3} className="img-fluid" alt="" />
              </div>
              <div className="step-content">
                <h2>Get Ready for Your Flight Day</h2>
                <p>
                  Lobortis luctus neque duis lacinia volutp suspendisse pulvinar
                  pen atibus malesu ada placerat..
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offers */}
      <div className="offers py-5 position-relative overflow-hidden">
        <img
          src={offerBG1}
          className="offer-img img-fluid position-absolute"
          alt=""
        />
        <img
          src={offerBG2}
          className="offer-img2 img-fluid position-absolute"
          alt=""
        />
        <div className="container">
          <div className="row">
            <div className="offers-wrapper position-relative">
              <div className="section-title offer-title">
                <div className="text-start flex-column d-flex align-items-start justify-content-start gap-3">
                  <span className=" d-flex align-items-center gap-2">
                    <img src={plane} alt="" className="img-fluid" />
                    <span>35% offer</span>
                    <img src={plane} alt="" className="img-fluid" />
                  </span>
                  <h2>Get Special Offer</h2>
                  <p className="text-start">
                    Prepare for takeoff—pack your bags, check your documents,
                    and get ready to create unforgettable memories on your
                    travel day!
                  </p>
                </div>
                <div className="btn-box offer-btn">
                  <button className="btn custom-btn1">
                    Learn More
                    <img src={btnArrow} className="img-fluid ms-2" alt="" />
                  </button>
                </div>
                <div className="offer-text position-absolute">
                  <h1 className="d-flex align-items-center">
                    40{" "}
                    <div className="offer-span d-flex flex-column">
                      % <span>off</span>
                    </div>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial */}
      <div className="testimonial py-5 position-relative">
        <img
          src={testBG}
          className="img-fluid test-bg-img position-absolute"
          alt=""
        />
        <img
          src={testBG}
          className="img-fluid test-bg-img2 position-absolute"
          alt=""
        />
        <div className="section-title test-title">
          <div className="text-center flex-column d-flex align-items-center justify-content-center gap-3">
            <span className=" d-flex align-items-center gap-2">
              <img src={plane} alt="" className="img-fluid" />
              <span>Guest Experiences</span>
              <img src={plane} alt="" className="img-fluid" />
            </span>
            <h2>What’s Our Clients Saying!</h2>
            <p>
        Hear how our guests’ journeys became extraordinary memories with our expert support.
            </p>
          </div>
        </div>
        <div className="container mt-5">
          <div className="row">
            <Swiper
              slidesPerView={1}
              spaceBetween={10}
              loop={true}
              className="test-Swiper"
            >
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="test-img d-flex align-items-center justify-content-center">
                      <img src={tstimg1} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="test-content">
                      <img
                        src={quote}
                        className="img-fluid test-content-img"
                        alt=""
                      />
                      <p className="test-pere">
                       “Our trip was perfectly planned from start to finish. Thanks to their expert team, we discovered hidden gems and enjoyed a truly stress-free adventure.”
                      </p>
                      <div className="test-stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="test-user mt-3 d-flex align-items-center gap-2">
                        <img src={tstimg2} className="img-fluid" alt="" />
                        <div className="test-user-info">
                          <h3>Bayram BUKRİ</h3>
                          <p className="m-0">Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <div className="test-img d-flex align-items-center justify-content-center">
                      <img src={tstimg1} className="img-fluid" alt="" />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="test-content">
                      <img
                        src={quote}
                        className="img-fluid test-content-img"
                        alt=""
                      />
                      <p className="test-pere">
                     “From the first inquiry to the last day, everything was smooth and memorable. Their personal touch made all the difference in our travel experience.”
                      </p>
                      <div className="test-stars">
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                        <i className="bi bi-star-fill"></i>
                      </div>
                      <div className="test-user mt-3 d-flex align-items-center gap-2">
                        <img src={tstimg2} className="img-fluid" alt="" />
                        <div className="test-user-info">
                          <h3>Mehmet Can SEYHAN</h3>
                          <p className="m-0">Web Developer</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      {/* banner */}
      <div className="blog-banner py-5 container-fluid d-flex justify-content-center align-items-center">
        <div className="container banner-title section-title d-flex text-center">
          <h2>FrostQuest Is A World LeadingOnline Tour Booking Platform</h2>
          <div className="btn-box mt-5">
            <button className="btn custom-btn1">
              Learn More
              <img src={btnArrow} className="img-fluid ms-2" alt="" />
            </button>
          </div>
        </div>
      </div>
      {/* blogs  */}
      <div className="container py-5">
        <div className="row mb-4 align-items-center">
          <div className="col-md-6 section-title blog-title">
            <span className="text-primary fw-bold">BLOG & NEWS</span>
            <h2 className="fw-bold mt-2">
              Get More Update <br /> News & Blog
            </h2>
          </div>
          <div className="col-md-6">
            <p>
              Stay informed and inspired by subscribing to our newsletter for
              the latest news and insightful blog posts – your gateway to a
              world of updates.
            </p>
          </div>
        </div>

        <div className="row g-4">
          <div className="col-lg-4 col-md-6">
            <div className="card blog-card border-0 overflow-hidden ">
              <div className="blog-img">
                <img src={blog1} className="card-img" alt="Blog 1" />
              </div>
              <div className="card-img-overlay d-flex flex-column justify-content-end         blog-overlay  ">
                <span>More</span>
                <div className="detail">
                  <h5 className="card-title fw-bold">
                    Beach Days, Long Hikes, And
                  </h5>
                  <p className="card-text ">BBUKRİ • 11.06. 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card blog-card border-0 p-0 overflow-hidden">
              <img src={blog3} className="card-img" alt="Blog 1" />
              <div className="card-img-overlay d-flex flex-column justify-content-end blog-overlay">
                <span>Read More</span>
                <div className="detail">
                  <h5 className="card-title fw-bold ">
                    Island Hopping And Weather Tips
                  </h5>
                  <p className="card-text ">BBUKRİ • 11.06. 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6">
            <div className="card blog-card border-0 overflow-hidden">
              <div className="blog-img">
                <img src={blog2} className="card-img" alt="Blog 1" />
              </div>
              <div className="card-img-overlay d-flex flex-column justify-content-end blog-overlay">
                <span>Read More</span>
                <div className="detail">
                  <h5 className="card-title fw-bold ">
                   Unlock new adventures and maximize every journey
                  </h5>
                  <p className="card-text ">BBUKRİ • 11.06. 2025</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-4">
          <p>
            Want to see destinations?{" "}
            <a href="#" className="text-primary text-decoration-none">
              Click here 
            </a>
          </p>
        </div>
      </div>
      {/* Footer   */}
      <div className="container-fluid ">
        <div className="row">
          <div className="col-12 col-md-8 ">
            <div className="row footer-head align-items-center px-3 px-md-5 py-4">
              <div className="col-12 col-md-6 mb-3 mb-md-0 footer-title section-title text-center text-md-start">
                <h2>Join Our Newsletter for Exclusive Travel Updates</h2>
              </div>
              <div className="col-12 col-md-6">
                <div className="input-box d-flex flex-column ">
                  <input
                    type="email"
                    placeholder="Enter your Email"
                    className="form-control custom-input p-3 w-100"
                  />
                  <div className="btn-box mt-3">
                    <button className="btn custom-btn1 d-flex align-items-center w-100 w-md-auto">
                      More
                      <img
                        src={btnArrow}
                        className="img-fluid ms-2"
                        alt="Arrow icon"
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="row px-3 px-md-5 py-4">
              <div className="col-12 col-md-6 mb-4 mb-md-0 text-center text-md-start">
                <a
                  href="#"
                  className="logo text-dark fs-4 fw-bold d-block mb-2"
                >
                  DreamRoutes
                </a>
                <p className="text-muted">
                  Discover the world with confidence—our expert team ensures every moment of your trip is special and memorable.
                </p>
                <ul className="d-flex justify-content-center justify-content-md-start gap-3 list-unstyled social-icons mt-3">
                  <li>
                    <i className="ri-facebook-circle-fill fs-4"></i>
                  </li>
                  <li>
                    <i className="ri-youtube-fill fs-4"></i>
                  </li>
                  <li>
                    <i className="ri-instagram-fill fs-4"></i>
                  </li>
                  <li>
                    <i className="ri-linkedin-box-fill fs-4"></i>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-6">
                <div className="row mt-4 mt-md-5 text-center text-md-start ">
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <ul className="footer-links  text-start">
                      <li>
                        <a href="#">About</a>
                      </li>
                      <li>
                        <a href="#">Services</a>
                      </li>
                      <li>
                        <a href="#">Login</a>
                      </li>
                      <li>
                        <a href="#">Flights</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-4 mb-3 mb-md-0">
                    <ul className="footer-links  text-start">
                      <li>
                        <a href="#">Booking</a>
                      </li>
                      <li>
                        <a href="#">FAQ</a>
                      </li>
                      <li>
                        <a href="#">Hotels</a>
                      </li>
                      <li>
                        <a href="#">Teams</a>
                      </li>
                    </ul>
                  </div>
                  <div className="col-12 col-md-4">
                    <ul className="footer-links  text-start">
                      <li>
                        <a href="#">Terms & Use</a>
                      </li>
                      <li>
                        <a href="#">Sitemap</a>
                      </li>
                      <li>
                        <a href="#">Contact Us</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mt-4 mt-md-0 px-3 px-md-0 text-center text-md-end">
            <img src={footer} alt="Traveling Updates" className="img-fluid" />
          </div>
        </div>
      </div>
      {/* footer bottom */}
      <div className="footer-bottom container-fluid  text-white bg-dark p-2 text-center">
        <p className="mb-0 small">
          <small>Made with ❤️ by Bayram Bukri | Happy Travels!</small>
        </p>
      </div>
    </>
  );
}

export default Index;
