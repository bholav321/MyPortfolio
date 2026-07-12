import { useEffect, useState } from 'react';
import AOS from 'aos';
import Home from './pages/Home';

function App() {
  const [showTop, setShowTop] = useState(false);

  // Initialize AOS scroll animations
  useEffect(() => {
    AOS.init({
      duration: 900,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 80,
    });
  }, []);

  // Back to top button visibility
  useEffect(() => {
    const handleScroll = () => setShowTop(window.scrollY > 200);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <Home />
      <button
        className={`back-to-top ${showTop ? 'show' : ''}`}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </>
  );
}

export default App;
