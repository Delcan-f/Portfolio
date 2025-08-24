import "../styles/Contact.css";

function Contact() {
  return (
    <div className="page contact-page">
      <h1>Contact Me</h1>
      <p>If you'd like to get in touch, feel free to reach out via email or LinkedIn.</p>
      <ul className="contact-links">
        <li>Email: <a href="mailto:declan.flynn1901@gmail.com">declan.flynn1901@gmail.com</a></li>
        <li>LinkedIn: <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">linkedin.com</a></li>
        <li>GitHub: <a href="https://github.com/delcan_f" target="_blank" rel="noopener noreferrer">github.com/delcan_f</a></li>
      </ul>
    </div>
  );
}

export default Contact;
