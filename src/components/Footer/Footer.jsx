import './Footer.css';

const Footer = () => (
  <footer id="footer" aria-label="Site footer">
    <div className="footer-inner">
      <div className="footer-left">
        <span className="footer-name">Bhola Vishwkarma</span>
        <span className="footer-role">Frontend Developer</span>
      </div>

      <p className="footer-copy">
        &copy; {new Date().getFullYear()} Bhola Vishwkarma. Built with React.js &amp; Vite.
      </p>

      <div className="footer-socials">
        <a href="https://github.com/bholav321"            target="_blank" rel="noreferrer" aria-label="GitHub">
          <i className="bx bxl-github"></i>
        </a>
        <a href="https://linkedin.com/in/bhola-vishwkarma" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <i className="bx bxl-linkedin"></i>
        </a>
        <a href="https://join.skype.com/invite/xcR55NhjbP0L" target="_blank" rel="noreferrer" aria-label="Skype">
          <i className="bx bxl-skype"></i>
        </a>
        <a href="https://www.facebook.com/bhola.vishwkarma.92" target="_blank" rel="noreferrer" aria-label="Facebook">
          <i className="bx bxl-facebook"></i>
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
