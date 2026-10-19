function Contact() {
  return (
    <section className="page-card">
      <div className="icon">✉</div>

      <p className="eyebrow">LET'S CONNECT</p>

      <h1>Contact Us</h1>

      <p className="description">
        This is the contact page of our React application.
      </p>

      <div className="contact-details">
        <div className="info-box">
          <span>Email</span>
          <strong>contact@example.com</strong>
        </div>

        <div className="info-box">
          <span>Technology</span>
          <strong>React Router DOM</strong>
        </div>
      </div>
    </section>
  );
}

export default Contact;