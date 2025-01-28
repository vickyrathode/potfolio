import React, { useRef, useState } from 'react';
import './contact.css';
import { HiOutlineMail, HiOutlineArrowSmRight } from 'react-icons/hi';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await emailjs.sendForm(
        'service_n8abjxa', // Your EmailJS service ID
        'template_fdaf0ga', // Your EmailJS template ID
        form.current,
        '0_UZ908eEdcJuh-mr' // Your EmailJS public key
      );

      console.log('Email sent successfully:', response);
      alert('Message sent successfully!');
      e.target.reset(); // Reset the form fields
    } catch (error) {
      console.error('Error sending email:', error);
      alert(`Failed to send the message. Error: ${error.text || error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact">
      <h1 className="section__title">Let's Connect</h1>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="contact__title">Talk to me</h3>
          <div className="contact__info">
            <div className="contact__card">
              <HiOutlineMail className="contact__card-icon" />
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">vickyrathod7339@gmail.com</span>
              <a href="mailto:vickyratho7339@gmail.com" className="contact__button">
                Write Me <HiOutlineArrowSmRight className="contact__button-icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="contact__content">
          <h3 className="contact__title">What's the project?</h3>
          <form ref={form} onSubmit={handleSubmit} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="from_name"
                className="contact__form-input"
                placeholder="Type your name"
                required
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Email</label>
              <input
                type="email"
                name="from_email"
                className="contact__form-input"
                placeholder="Type your email"
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Provide some project details..."
                required
              ></textarea>
            </div>

            <button type="submit" className="button button--flex" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
