import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm]     = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    // ── EmailJS send ──
    // To enable: copy .env.example to .env and fill in your EmailJS credentials.
    // See README.md for full setup instructions.
    const serviceId  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // EmailJS not configured — simulate success for demo
      setTimeout(() => {
        setStatus('success');
        setForm(INITIAL_FORM);
      }, 1200);
      return;
    }

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          from_name:    form.name,
          from_email:   form.email,
          subject:      form.subject,
          message:      form.message,
          to_name:      'Bhola Vishwkarma',
        },
        publicKey
      );
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" aria-labelledby="contact-heading">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2 id="contact-heading">Contact</h2>
          <p>
            Looking for a React.js frontend developer for product, enterprise, or MERN
            application work? Reach out by email at{' '}
            <a href="mailto:bholav321@gmail.com" className="contact-email-link">
              bholav321@gmail.com
            </a>
            , connect on LinkedIn, or review my code on GitHub.
          </p>
        </div>

        <div className="row g-4">
          {/* ── Left: Info + Map ── */}
          <div className="col-lg-5" data-aos="fade-right">
            <div className="contact-info-panel">

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bi bi-geo-alt-fill"></i>
                </div>
                <div>
                  <h5>Location</h5>
                  <p>Indore, Madhya Pradesh</p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bi bi-envelope-fill"></i>
                </div>
                <div>
                  <h5>Email</h5>
                  <p>
                    <a href="mailto:bholav321@gmail.com">bholav321@gmail.com</a>
                  </p>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-info-icon">
                  <i className="bi bi-telephone-fill"></i>
                </div>
                <div>
                  <h5>Phone</h5>
                  <p>
                    <a href="tel:+918103202647">+91-8103202647</a>
                  </p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="contact-map-wrap">
                <iframe
                  title="Bhola Vishwkarma Location — Indore, MP"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14719.958929229828!2d75.843210532863!3d22.728623011633182!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd77d4fefb53%3A0xc9460c4705f05626!2sMari%20Mata%20Square%2C%20Indore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1707972132703!5m2!1sen!2sin"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  allowFullScreen
                ></iframe>
              </div>

            </div>
          </div>

          {/* ── Right: Form ── */}
          <div className="col-lg-7" data-aos="fade-left">
            <div className="contact-form-panel">
              <h4>Send a Message</h4>
              <form onSubmit={handleSubmit} noValidate>

                <div className="row g-3">
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <label htmlFor="name">Your Name</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control-custom"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <label htmlFor="email">Your Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className="form-control-custom"
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="form-group-custom">
                  <label htmlFor="subject">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control-custom"
                    placeholder="Project Inquiry / Collaboration / Other"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group-custom">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="form-control-custom"
                    placeholder="Tell me about your project, requirements, or just say hello!"
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                {/* Status messages */}
                {status === 'loading' && (
                  <div className="form-status loading">
                    <div className="spinner"></div> Sending your message…
                  </div>
                )}
                {status === 'success' && (
                  <div className="form-status success">
                    <i className="bi bi-check-circle-fill"></i>
                    Your message has been sent. Thank you!
                  </div>
                )}
                {status === 'error' && (
                  <div className="form-status error">
                    <i className="bi bi-exclamation-circle-fill"></i>
                    Something went wrong. Please try again or email directly.
                  </div>
                )}

                <div className="text-center mt-3">
                  <button
                    type="submit"
                    className="btn-primary-custom"
                    disabled={status === 'loading'}
                  >
                    <i className="bi bi-send-fill"></i>
                    {status === 'loading' ? 'Sending…' : 'Send Message'}
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Contact;
