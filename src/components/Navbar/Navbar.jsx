import { useState, useEffect, useCallback } from 'react';
import './Navbar.css';

const NAV_LINKS = [
  { id: 'hero',      icon: 'bx bx-home',         label: 'Home'      },
  { id: 'about',     icon: 'bx bx-user',          label: 'About'     },
  { id: 'resume',    icon: 'bx bx-file-blank',    label: 'Resume'    },
  { id: 'portfolio', icon: 'bx bx-book-content',  label: 'Portfolio' },
  { id: 'services',  icon: 'bx bx-server',        label: 'Services'  },
  { id: 'contact',   icon: 'bx bx-envelope',      label: 'Contact'   },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileOpen, setMobileOpen]       = useState(false);

  /* ── Active-section tracking via IntersectionObserver ── */
  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  /* ── Smooth scroll handler ── */
  const handleNavClick = useCallback((e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setMobileOpen(false);
  }, []);

  /* ── Close sidebar on ESC ── */
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') setMobileOpen(false); };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, []);

  return (
    <>
      {/* ── Mobile hamburger toggle ── */}
      <button
        className="mobile-nav-toggle"
        onClick={() => setMobileOpen((v) => !v)}
        aria-label={mobileOpen ? 'Close navigation' : 'Open navigation'}
        aria-expanded={mobileOpen}
      >
        <i className={`bi ${mobileOpen ? 'bi-x' : 'bi-list'}`}></i>
      </button>

      {/* ── Sidebar ── */}
      <header id="header" className={mobileOpen ? 'mobile-open' : ''}>
        <div className="sidebar-content">

          {/* Profile */}
          <div className="profile">
            <div className="profile-img-wrap">
              <img
                src="/assets/img/myImage.png"
                alt="Bhola Vishwkarma — Frontend Developer"
                className="profile-img"
              />
            </div>
            <h1>
              <a
                href="#hero"
                onClick={(e) => handleNavClick(e, 'hero')}
              >
                Bhola Vishwkarma
              </a>
            </h1>
            <p className="profile-role">Frontend Developer</p>
            <div className="social-links">
              <a
                href="https://github.com/bholav321"
                target="_blank" rel="noreferrer"
                className="social-link"
                aria-label="GitHub"
              >
                <i className="bx bxl-github"></i>
              </a>
              <a
                href="https://join.skype.com/invite/xcR55NhjbP0L"
                target="_blank" rel="noreferrer"
                className="social-link"
                aria-label="Skype"
              >
                <i className="bx bxl-skype"></i>
              </a>
              <a
                href="https://linkedin.com/in/bhola-vishwkarma"
                target="_blank" rel="noreferrer"
                className="social-link"
                aria-label="LinkedIn"
              >
                <i className="bx bxl-linkedin"></i>
              </a>
              <a
                href="https://www.facebook.com/bhola.vishwkarma.92"
                target="_blank" rel="noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <i className="bx bxl-facebook"></i>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <nav className="nav-menu" aria-label="Primary navigation">
            <ul>
              {NAV_LINKS.map(({ id, icon, label }) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    className={`nav-link-item ${activeSection === id ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, id)}
                    aria-current={activeSection === id ? 'page' : undefined}
                  >
                    <i className={icon}></i>
                    <span>{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* ── Mobile backdrop ── */}
      {mobileOpen && (
        <div
          className="mobile-overlay"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;
