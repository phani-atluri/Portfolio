import React from "react";
import "../Css/contact.css";
import SendIcon from "@material-ui/icons/Send";
function Contact() {
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
              />
            </label>
            <label>
              <input
                type="email"
                name="email"
                className="inpt"
                placeholder="email"
              />
            </label>

            <label>
              <textarea placeholder="Message" name="message" />
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
