import { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import './Hero.css';

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Frontend Developer',
        'React.js Specialist',
        'TypeScript Developer',
      ],
      loop: true,
      typeSpeed: 90,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, []);

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" aria-label="Hero section">
      {/* Background dot grid */}
      <div className="hero-grid" aria-hidden="true" />

      {/* Floating decorative badge — top right only */}
      <div className="hero-badge hero-badge-1" aria-hidden="true">
        <i className="bi bi-lightning-charge-fill"></i>
        React.js Specialist
      </div>

      {/* Main hero content */}
      <div className="hero-container" data-aos="fade-in">
        <h1>
          <span>Bhola</span> Vishwkarma
        </h1>
        <p>
          I&apos;m a{' '}
          <span className="typed-text" aria-live="polite">
            <span ref={typedRef}></span>
          </span>
        </p>

        {/* CTA row — all 4 buttons same style, same alignment */}
        <div className="hero-cta">
          <button
            className="btn-primary-custom"
            onClick={() => scrollToSection('contact')}
          >
            <i className="bi bi-envelope-fill"></i>
            Get In Touch
          </button>

          <a
            href="/Bhola_Vishwkarma_Resume.pdf"
            download="Bhola_Vishwkarma_Resume.pdf"
            className="btn-outline-custom"
          >
            <i className="bi bi-download"></i>
            Download CV
          </a>

          <button
            className="btn-outline-custom"
            onClick={() => scrollToSection('portfolio')}
          >
            <i className="bi bi-grid-3x3-gap"></i>
            View Work
          </button>

          <span className="btn-outline-custom hero-exp-badge">
            <i className="bi bi-code-slash"></i>
            2+ Years Experience
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
        onClick={() => scrollToSection('about')}
        style={{ cursor: 'pointer' }}
        aria-label="Scroll to about section"
      >
        <i className="bi bi-chevron-double-down"></i>
      </div>
    </section>
  );
};

export default Hero;
