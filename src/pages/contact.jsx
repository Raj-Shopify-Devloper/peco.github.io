import React, { useState, useEffect } from 'react';
import '../style/contact.css';
import { initHomeAnimations } from '../script/home-section';
import founderImage from '../assets/about-founder-image.webp'; // Using founder image as placeholder

export default function ContactForm() {
    const [result, setResult] = useState("");

    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        initHomeAnimations();
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "8ae15064-82b3-42a9-be48-88f3e96a6969");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (data.success) {
            setResult("Form Submitted Successfully");
            setIsSuccess(true);
            event.target.reset();
        } else {
            setResult("Error");
        }
    };

    const handleReset = () => {
        setIsSuccess(false);
        setResult("");
    };

    return (
        <div className="contact-page">
            <div className="container">
                <div className="contact-grid">
                    {/* Left Column */}
                    <div className="contact-info-col">
                        <div className="contact-header">
                            <h1 className="section-title f-110 f-m-48 white-color w-700 first-font">LET'S CHAT</h1>
                            <p className="f-22 f-m-16 white-color w-400 second-font">Let's bring your vision to life.</p>
                        </div>

                        <div className="book-call-card">
                            <div className="book-call-image-wrap">
                                <img src={founderImage} alt="Book a call" className="book-call-img" />
                            </div>
                            <h2 className="f-48 f-m-32 white-color w-700 first-font">BOOK A <br />QUICK CALL</h2>
                            <a href="#" className="book-call-btn second-font">
                                Book a call
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="arrow-icon"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </a>
                        </div>
                    </div>

                    {/* Right Column - Form or Success Message */}
                    <div className="contact-form-col">
                        {isSuccess ? (
                            <div className="success-message-container">
                                <div className="success-icon-wrap">
                                    <svg className="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52">
                                        <circle className="checkmark__circle" cx="26" cy="26" r="25" fill="none" />
                                        <path className="checkmark__check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" />
                                    </svg>
                                </div>
                                <h2 className="f-48 f-m-32 white-color w-700 first-font success-title">Thank You!</h2>
                                <p className="f-22 f-m-16 white-color w-400 second-font success-text">We've received your message and will get back to you shortly.</p>
                                <button onClick={handleReset} className="primary f-22 f-m-16 w-600 white-color second-font contact-view-more-button text-uppercase success-btn">
                                    Send Another Message
                                </button>
                            </div>
                        ) : (
                            <form onSubmit={onSubmit} className="styled-form">
                                <div className="form-group">
                                    <label className="form-label second-font f-22 f-m-16 white-color w-400">Name</label>
                                    <input type="text" name="name" placeholder="Enter Your Full Name" className="form-input second-font f-18 f-m-16 white-color w-400" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label second-font f-22 f-m-16 white-color w-400">Email</label>
                                    <input type="email" name="email" placeholder="Hello@Antone.Com" className="form-input second-font f-18 f-m-16 white-color w-400" required />
                                </div>

                                <div className="form-group">
                                    <label className="form-label second-font f-22 f-m-16 white-color w-400">Company</label>
                                    <input type="text" name="company" placeholder="Enter Your Company Name" className="form-input second-font f-18 f-m-16 white-color w-400" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label second-font f-22 f-m-16 white-color w-400">Interested Field</label>
                                    <input type="text" name="interest" placeholder="Enter Your Interested Field" className="form-input second-font f-18 f-m-16 white-color w-400" />
                                </div>

                                <div className="form-group">
                                    <label className="form-label second-font f-22 f-m-16 white-color w-400">Message</label>
                                    <textarea name="message" placeholder="What's Your Mind?" className="form-input form-textarea second-font f-18 f-m-16 white-color w-400" required></textarea>
                                </div>

                                <div className="form-submit-wrap">
                                    <button type="submit" className="primary f-30 f-m-22 w-600 white-color second-font contact-view-more-button text-uppercase">
                                        Submit Now
                                    </button>
                                    <span className="form-result white-color second-font">{result}</span>
                                </div>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}