import React, { useState } from "react";
import "../Css/contact.css";
import SendIcon from "@material-ui/icons/Send";
function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  var handleclick = (e) => {
    e.preventDefault();
    window.open(`mailto:${email}?subject=${subject}&body=${name}: ${message}`);
  };
  return (
    <section className="contact" id="contact">
      <div className="contact__main">
        <h3>
          Thank you for visiting, I hope you like it.If you have any suggestions
          or to connect. please send me a message .
        </h3>
        <div className="contact__form">
          <label>
            <input
              type="text"
              className="inpt"
              placeholder="name"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </label>
          <label>
            <input
              type="email"
              className="inpt"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              value={email}
            />
          </label>
          <label>
            <input
              type="text"
              className="inpt"
              onChange={(e) => setSubject(e.target.value)}
              placeholder="Subject"
              value={subject}
            />
          </label>
          <label>
            <textarea
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
            />
          </label>
          <button onClick={handleclick}>
            <span>SEND</span>
            <SendIcon />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Contact;
