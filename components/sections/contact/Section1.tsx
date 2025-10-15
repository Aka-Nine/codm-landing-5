'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FormEvent, useState } from 'react';

export default function Section1() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        // Contact Area Start
        <div className="contact-page sp">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6">
                        <div className="heading1">
                            <span className="span">Contact Us</span>
                            <h2>Get in Touch Let's Start the Conversation</h2>
                            <div className="space16"></div>
                            <p>We would love to speak with you. Feel free to reach out using the below details.</p>
                        </div>

                        <div className="contact-page-box">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact-box">
                                        <div className="icon">
                                            <Image
                                                src="/assets/img/icons/contact-icon1.png"
                                                alt="contact icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="heading1">
                                            <p>Call us</p>
                                            <h4><Link href="tel:+91 9871717425">+91 9871717425</Link></h4>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="contact-box contact-box2">
                                        <div className="icon">
                                            <Image
                                                src="/assets/img/icons/contact-icon2.png"
                                                alt="contact icon"
                                                width={40}
                                                height={40}
                                            />
                                        </div>
                                        <div className="heading1">
                                            <p>Mail us</p>
                                            <h4><Link href="mailto:hr@codmsoftware.com">sales@codmsoftware.com</Link></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <div className="contact1-form">
                            <div className="heading1">
                                <h3>Send us a Message</h3>
                                <div className="space16"></div>
                                {/* <p>Feel free to reach out to us with any questions, inquiries, or staffing requirements you may have. Our experienced</p> */}
                            </div>
                            <div className="space10"></div>

                            <form onSubmit={handleSubmit}>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="firstName"
                                                placeholder="First Name"
                                                value={formData.firstName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="lastName"
                                                placeholder="Last Name"
                                                value={formData.lastName}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="email"
                                                name="email"
                                                placeholder="Email"
                                                value={formData.email}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-6">
                                        <div className="single-input">
                                            <input
                                                type="tel"
                                                name="phone"
                                                placeholder="Phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <input
                                                type="text"
                                                name="subject"
                                                placeholder="Subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="single-input">
                                            <textarea
                                                rows={4}
                                                name="message"
                                                placeholder="Message"
                                                value={formData.message}
                                                onChange={handleChange}
                                            ></textarea>
                                        </div>
                                    </div>

                                    <div className="col-md-12">
                                        <div className="button">
                                            <button type="submit" className="theme-btn1">
                                                Submit Now <span><i className="fa-solid fa-arrow-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // Contact Area End
    );
}
