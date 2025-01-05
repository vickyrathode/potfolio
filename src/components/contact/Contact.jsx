import React, { useRef, useState, useEffect } from 'react';
import './contact.css';
import { HiOutlineMail, HiOutlineArrowSmRight } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [recaptchaLoaded, setRecaptchaLoaded] = useState(false);

    useEffect(() => {
        // Load reCAPTCHA
        const script = document.createElement('script');
        script.src = 'https://www.google.com/recaptcha/api.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
            setRecaptchaLoaded(true);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();
        if (!recaptchaLoaded) {
            alert("Please complete the reCAPTCHA to proceed!");
            return;
        }
        setLoading(true);

        // Ensure the reCAPTCHA response is available
        const reCAPTCHAValue = document.getElementById('g-recaptcha-response') ? document.getElementById('g-recaptcha-response').value : null;
        if (!reCAPTCHAValue) {
            alert("reCAPTCHA verification failed. Please try again.");
            setLoading(false);
            return;
        }

        emailjs.sendForm('service_x3djegi', 'template_32igbgy', form.current, '0_UZ908eEdcJuh-mr', {
            'g-recaptcha-response': reCAPTCHAValue
        })
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            setLoading(false);
        }, (err) => {
            console.error('FAILED...', err);
            alert(`Failed to send the message, please try again later. Error: ${err.text}`);
            setLoading(false);
        });

        e.target.reset();
    };

    return (
        <section className="contact section" id="contact">
            <h2 className="section__title">Let's Connect</h2>
            <span className="section__subtitle">Contact Me</span>

            <div className="contact__container container grid">
                <div className="contact__content">
                    <h3 className="contact__title">Talk to me</h3>
                    <div className="contact__info">
                        <div className="contact__card">
                            <HiOutlineMail className="contact__card-icon" />
                            <h3 className="contact__card-title">Email</h3>
                            <span className="contact__card-data">your-email@example.com</span>
                            <a href="mailto:your-email@example.com" className="contact__button">
                                Write Me <HiOutlineArrowSmRight className="contact__button-icon" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="contact__content">
                    <h3 className="contact__title">What's the project?</h3>
                    <form ref={form} onSubmit={sendEmail} className="contact__form">
                        <div className="contact__form-div">
                            <label className="contact__form-tag">Name</label>
                            <input type="text" name="from_name" className="contact__form-input" placeholder="Type your name" required />
                        </div>

                        <div className="contact__form-div">
                            <label className="contact__form-tag">Email</label>
                            <input type="email" name="from_email" className="contact__form-input" placeholder="Type your email" required />
                        </div>

                        <div className="contact__form-div contact__form-area">
                            <label className="contact__form-tag">Project</label>
                            <textarea name="project_details" cols="30" rows="10" className="contact__form-input" placeholder="Provide some project details..." required></textarea>
                        </div>

                        <div className="g-recaptcha" data-sitekey="6LeOBK8qAAAAANOeJUhAAJSNBmMIi5k-cwFQ5zeR"></div>

                        <button type="submit" className="button button--flex" disabled={loading || !recaptchaLoaded}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <svg className="button__icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                {/* SVG icon data here */}
                            </svg>
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Contact;
