import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
// import emailjs from "emailjs-com";

const contact = () => {
  // const form = useRef(null);

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm(
  //     "service_17b0hvb",
  //     "template_1ezstgj",
  //     form.current,
  //     "XIiAa-6pHZUiaHqFw"
  //   );
  // };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <a href="mailto:johnkeunminryu@gmail.com" target="/">
              Send Email
            </a>
          </article>

          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon" />
            <h4>Messenger</h4>
            <a href="https://m.me/john.smash.ryu" target="/">
              Send Message
            </a>
          </article>

          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <a
              href="https://api.whatsapp.com/send?phone=12345678900"
              target="/"
            >
              Send WhatsApp
            </a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
          />
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default contact;
