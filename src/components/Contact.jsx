import React, { useState } from "react";
import { useCreateMessageMutation } from "../contactInfoAPI/api";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [createMessage, { isLoading, isSuccess, isError, error }] =
    useCreateMessageMutation();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await createMessage({ name, email, message });
      // Clear form fields after submission
      setName("");
      setEmail("");
      setMessage("");
    } catch (err) {
      console.error("Failed to send message:", err);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="contact__heading section-heading">Contact</h2>
      <p className="contact__text">
        Have a question or want to work together? Leave your details and I'll
        get back to you as soon as possible.
      </p>

      <form
        className="contact__form"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />

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
          name="email"
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
