import React, { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    // You can integrate form validation or handling here
    // For now, just log the form data to the console
    console.log({ name, email, message });

    // Here you would typically handle the POST request, perhaps using fetch or axios
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading section-heading">Contact</h2>
      <p className="contact__text">
        Have a question or want to work together? Leave your details and I'll
        get back to you as soon as possible.
      </p>

      <form className="contact__form" onSubmit={handleSubmit}>
        <input
          className="contact__form-name"
          type="text"
          name="name"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="contact__form-email"
          type="email"
          name="_replyto"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <textarea
          className="contact__form-message"
          name="message"
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <div className="contact__form-error-submit">
          <div className="form-error">
            <div className="form-error__name">Please enter your name.</div>
            <div className="form-error__email">Please enter a valid email.</div>
            <div className="form-error__msg">Please enter a message.</div>
          </div>
          <button
            type="submit"
            className="contact__form-submit-2 project__live-2"
            id="form-submit"
          >
            
            Submit
          </button>
        </div>
      </form>
    </section>
  );
}

export default ContactForm;
