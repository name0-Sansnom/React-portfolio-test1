import React from "react";
import "./contact.css";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsWhatsapp } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();

    emailjs.sendForm(
      "service_3431gz4",
      "template_xyvkyia",
      form.current,
      "qX35jjGj3bnr2kJs5"
    );

    e.target.reset();
  };

  return (
    <section id="contact">
      <h5>Get in touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact-card">
            <HiOutlineMailOpen className="contact-card-icon" />
            <h4>Email</h4>
            <h5>Abc123@gmail.com</h5>
            <a
              href="mailto:upchh@example.com"
              target={"_blank"}
              className="btn btn-primary"
            >
              Send a Message
            </a>
          </article>
          <article className="contact-card">
            <BsWhatsapp className="contact-card-icon" />
            <h4>Whatsapp</h4>
            <h5>+23396782949</h5>
            <a
              href="https://api.whatsapp.com/send?phone+233561751341"
              target={"_blank"}
            >
              Send a Message
            </a>
          </article>
          <article className="contact-card">
            <BsInstagram className="contact-card-icon" />
            <h4>Instagram</h4>
            <h5>Talha_ss</h5>
            <a href="mailto:upchh@example.com" target={"_blank"}>
              Follow me
            </a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
