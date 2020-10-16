import React, { useState } from "react";
import "../Css/contact.css";
import SendIcon from "@material-ui/icons/Send";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <section className="contact" id="contact">
      <div className="contact__main">
        <h3>
          Thank you for visiting, I hope you like it.If you have any suggestions
          or to connect. please send me a message .
        </h3>
        <form name="contactForm" method="post" netlify>
          <input type="hidden" name="form-name" value="contact" />
          <div className="contact__form">
            <label>
              <input
                type="text"
                name="name"
                className="inpt"
                placeholder="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                className="inpt"
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
                value={email}
              />
            </label>

            <label>
              <textarea
                placeholder="Message"
                name="message"
                onChange={(e) => setMessage(e.target.value)}
                value={message}
              />
            </label>
            <button type="submit">
              <span>SEND</span>
              <SendIcon />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact;
