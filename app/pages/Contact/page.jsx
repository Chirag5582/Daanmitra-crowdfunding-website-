import Footer from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";

function Contact() {
  return (
    <>
      <Header />
      <div className="flex justify-center items-center">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.0208894866314!2d77.33788287495777!3d28.659093182875022!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfa9b30000001%3A0xf8c8e01b5759ffb0!2sInderprastha%20Engineering%20College!5e0!3m2!1sen!2sin!4v1740637940272!5m2!1sen!2sin"
          width="1000"
          height="1000"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;
