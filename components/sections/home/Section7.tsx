"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/autoplay";

const swiperOptions = {
    modules: [Autoplay, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    loop: true,
    breakpoints: {
        320: {
            slidesPerView: 1,
        },
        576: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2,
        },
        992: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 3,
        },
    },
    navigation: {
        nextEl: ".testimonial-next-arrow1",
        prevEl: ".testimonial-prev-arrow1",
    },
};

export default function Section7() {
    return (
        <>
            {/*=====TESTIMONIAL AREA START=======*/}
            <div className="tes4 sp overflow-hidden" id="testimonial">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="heading4">
                                <span className="span2" data-aos="zoom-in-left" data-aos-duration={800}>
                                    Testimonial
                                </span>
                                <h2 className="text-anime-style-3">What Our Clients Say</h2>
                                <div className="space16" />
                                <p data-aos="fade-right" data-aos-duration={1100}>
                                    Their expertise and dedication to understanding our unique needs resulted in us finding the perfect fit
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="tes7-buttons" data-aos="fade-up" data-aos-duration={800}>
                                <button className="testimonial-prev-arrow1">
                                    <i className="fa-regular fa-arrow-left" />
                                </button>
                                <button className="testimonial-next-arrow1">
                                    <i className="fa-regular fa-arrow-right" />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="space60" />
                    <div className="row">
                        <Swiper {...swiperOptions} className="tes4-slider" data-aos="fade-up" data-aos-duration={1000}>
                            <SwiperSlide className="single-slider">
                                <div className="single-slider-content heading4">
                                    <ul className="stars">
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="pera">
                                        <p>
                                            “From startups seeking their first hires to established corporations aiming to expand their teams, our tailored staffing solutions have consistently exceeded <br /> expectations”
                                        </p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img1.png" alt="" />
                                    </div>
                                    <div className="heading4">
                                        <h4>
                                            <Link href="#">Junaid Hasan</Link>
                                        </h4>
                                        <p>Vp,Daily Naws</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="single-slider-content heading4">
                                    <ul className="stars">
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="pera">
                                        <p>
                                            “Their expertise in finding the right talent for our unique needs was unparalleled. Not only did they understand our industry inside and out, but they also took <br /> the time”
                                        </p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img2.png" alt="" />
                                    </div>
                                    <div className="heading4">
                                        <h4>
                                            <Link href="#">Amir Jamil</Link>
                                        </h4>
                                        <p>Co Funder</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="single-slider-content heading4">
                                    <ul className="stars">
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="pera">
                                        <p>“The candidates they presented were not only highly qualified but also aligned perfectly with what we were looking for. Thanks to [Your Agency Name], we were able to quickly”</p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img1.png" alt="" />
                                    </div>
                                    <div className="heading4">
                                        <h4>
                                            <Link href="#">Yash Dehull</Link>
                                        </h4>
                                        <p>Vp,Daily Naws</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="single-slider">
                                <div className="single-slider-content heading4">
                                    <ul className="stars">
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                        <li>
                                            <i className="fa-solid fa-star" />
                                        </li>
                                    </ul>
                                    <div className="pera">
                                        <p>“Thanks to Your Agency Name, we were able to quickly fill critical roles and continue our growth trajectory. I highly recommend their services to any company looking for top”</p>
                                    </div>
                                </div>
                                <div className="bottom-heading">
                                    <div className="image">
                                        <img src="assets/img/testimonial/tes3-img2.png" alt="" />
                                    </div>
                                    <div className="heading4">
                                        <h4>
                                            <Link href="#">Amir Jamil</Link>
                                        </h4>
                                        <p>Co Funder</p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
            {/*=====TESTIMONIAL AREA END=======*/}
        </>
    );
}
