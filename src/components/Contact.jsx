import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Contact = () => {
  const form = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  // Send email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.send(
      'service_l476gx8', // Replace with your EmailJS service ID
      'template_qzes9c3', // Replace with your EmailJS template ID
      {
        name: formData.name,
        email: formData.email,
        message: formData.message
      },
      'Vmd2B57izGj51Tw4q' // Replace with your EmailJS user ID
    )
    .then((result) => {
      console.log("Email sent successfully!", result.text);
      alert("Message sent successfully!");
      setFormData({ name: '', email: '', message: '' }); // Clear form fields after sending
    })
    .catch((error) => {
      console.error("Email sending error:", error);
      alert("An error occurred, please try again.");
    });
  };

  return (
    <section className="contact fade-in">
      <h1>Get in Touch</h1>
      
      {/* Icons Section */}
      <div className="contact-icons">
        <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://github.com/your-github-profile" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://wa.me/03113889294" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faWhatsapp} />
        </a>
      </div>

      {/* Form Section */}
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
