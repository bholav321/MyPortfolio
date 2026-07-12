import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import About from '../components/About/About';
import Facts from '../components/Facts/Facts';
import Skills from '../components/Skills/Skills';
import Resume from '../components/Resume/Resume';
import Portfolio from '../components/Portfolio/Portfolio';
import Services from '../components/Services/Services';
import CoreCompetencies from '../components/CoreCompetencies/CoreCompetencies';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

/**
 * Home page — composes every portfolio section in order.
 * The sidebar Navbar is fixed-position; all sections scroll within #main-content.
 */
const Home = () => {
  return (
    <>
      <Navbar />

      <main id="main-content">
        <Hero />
        <About />
        <Facts />
        <Skills />
        <Resume />
        <Portfolio />
        <Services />
        <CoreCompetencies />
        <Contact />
        <Footer />
      </main>
    </>
  );
};

export default Home;
