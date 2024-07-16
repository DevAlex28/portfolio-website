import "./Contact.css";
import { useState } from "react";

function Contact() {
  const [email, setEmail] = useState("");
  return (
    <>
    <h1 className="contact_heading">Contact</h1>
    <div className="contact_box">
      <h2 className="contact_sub_heading">Want to get in touch with me</h2>
      <form>
        <label>Email
          <input
            type="email"
            placeholder=""
            value={email}
            onChange={(e) => setEmail(e.target.value)}/>
        </label>
      </form>
    </div>
    </>
  );
}

export default Contact;