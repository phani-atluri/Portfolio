import React from "react";
import "../Css/contact.css";
import SendIcon from "@material-ui/icons/Send";
function Contact() {
  var changeName=(name)=>{
    if(/^[A-Za-z]+$/.test(name.target.value))
    {
      document.getElementById("name").innerText=""
      return (true)
    }
else{
  document.getElementById("name").innerText="invalid name, Only Alphabets "
     
      return (false)
  }
  }
  var changeEmail=(mail) =>
{
 if ( /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(mail.target.value))
  {
    document.getElementById("email").innerText=""
    return (true)
  }
  else{
document.getElementById("email").innerText="invalid email address!"
   
    return (false)
  }
}
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
                required
                onChange={changeName}
              />
            </label>
            <span id="name"></span>
            <label>
              <input
                type="email"
                name="email"
                className="inpt"
                placeholder="email"
                required
                onChange={changeEmail}
              />
            </label>
            <span id="email"></span>
            <label>
              <textarea placeholder="Message" name="message" required />
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
