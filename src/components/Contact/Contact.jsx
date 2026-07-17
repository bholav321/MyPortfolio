import { useState } from 'react';
import './Contact.css';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

const Contact = () => {
  const [form, setForm]     = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  // Per-field validation error messages
  const [errors, setErrors] = useState({});

  // Returns an object of field-level error strings; empty object = valid
  const validate = () => {
    const errs = {};
    if (!form.name.trim())    errs.name    = 'Name is required.';
    if (!form.email.trim())   errs.email   = 'Email is required.';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim()))
                              errs.email   = 'Enter a valid email address.';
    if (!form.subject.trim()) errs.subject = 'Subject is required.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    // Clear this field's error as soon as the user starts correcting it
    if (errors[e.target.name]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // ── Per-field client-side validation — block submit if any errors ──
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return; // Do NOT proceed to fetch
    }
    setErrors({});

    setStatus('loading');

    // ── Web3Forms access key from .env (never hardcoded) ──
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

    // ── Build the payload ──
    const payload = {
      access_key: accessKey,
      name:       form.name,
      email:      form.email,
      subject:    form.subject,
      message:    form.message,
      // Prevents redirect — we handle the response ourselves
      redirect:   'false',
    };

    try {
      // ── Submit via fetch() so the user stays on the page ──
      const response = await fetch('https://api.web3forms.com/submit', {
        method:  'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body:    JSON.stringify(payload),
      });

      // ── Parse JSON regardless of HTTP status ──
      const data = await response.json();

      if (response.ok && data.success) {
        // ── Success: clear the form and any stale errors ──
        setStatus('success');
        setForm(INITIAL_FORM);
        setErrors({});
      } else {
        // ── API returned an error (e.g. invalid key, rate-limit) ──
        console.error('Web3Forms API error:', data);
        setStatus('error');
      }
    } catch (err) {
      // ── Network failure (offline, DNS, timeout, etc.) ──
      console.error('Network error:', err);
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
                      <label htmlFor="name">Your Name <span className="required-mark">*</span></label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className={`form-control-custom${errors.name ? ' invalid' : ''}`}
                        placeholder="John Doe"
                        value={form.name}
                        onChange={handleChange}
                        required
                      />
                      {/* Inline error for Name */}
                      {errors.name && (
                        <span className="field-error">
                          <i className="bi bi-exclamation-circle"></i> {errors.name}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group-custom">
                      <label htmlFor="email">Your Email <span className="required-mark">*</span></label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        className={`form-control-custom${errors.email ? ' invalid' : ''}`}
                        placeholder="you@example.com"
                        value={form.email}
                        onChange={handleChange}
                        required
                      />
                      {/* Inline error for Email */}
                      {errors.email && (
                        <span className="field-error">
                          <i className="bi bi-exclamation-circle"></i> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <div className="form-group-custom">
                  <label htmlFor="subject">Subject <span className="required-mark">*</span></label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className={`form-control-custom${errors.subject ? ' invalid' : ''}`}
                    placeholder="Project Inquiry / Collaboration / Other"
                    value={form.subject}
                    onChange={handleChange}
                    required
                  />
                  {/* Inline error for Subject */}
                  {errors.subject && (
                    <span className="field-error">
                      <i className="bi bi-exclamation-circle"></i> {errors.subject}
                    </span>
                  )}
                </div>

                <div className="form-group-custom">
                  <label htmlFor="message">Message <span className="required-mark">*</span></label>
                  <textarea
                    id="message"
                    name="message"
                    className={`form-control-custom${errors.message ? ' invalid' : ''}`}
                    placeholder="Tell me about your project, requirements, or just say hello!"
                    rows={7}
                    value={form.message}
                    onChange={handleChange}
                    required
                  />
                  {/* Inline error for Message */}
                  {errors.message && (
                    <span className="field-error">
                      <i className="bi bi-exclamation-circle"></i> {errors.message}
                    </span>
                  )}
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
