import './About.css';

const About = () => {
  return (
    <section id="about" aria-labelledby="about-heading">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2 id="about-heading">About</h2>
          <p>
            Frontend Developer with 2+ years of experience building scalable, high-performance web
            applications using React.js, TypeScript, and Redux Toolkit. I focus on component
            architecture, REST API integration, authentication flows, responsive interfaces, and
            measurable product outcomes.
          </p>
        </div>

        <div className="row align-items-start g-4">
          {/* Profile Image */}
          <div className="col-lg-4" data-aos="fade-right">
            <div className="about-img-wrap">
              <img
                src="/assets/img/coverpage.png"
                alt="Bhola Vishwkarma — Frontend Developer"
                className="img-fluid about-img"
              />
              <div className="about-img-badge">
                <i className="bi bi-patch-check-fill"></i>
                Available for Work
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="col-lg-8" data-aos="fade-left">
            <div className="about-content">
              <h3 className="about-role">
                Frontend Developer &amp; React.js Specialist
              </h3>
              <p className="about-desc fst-italic">
                I build production-grade, scalable user interfaces using React.js, TypeScript,
                JavaScript, Redux Toolkit, React Router, Tailwind CSS, Material UI, and REST APIs.
                My work involves developing enterprise procurement workflows, reusable UI component
                systems, and full-stack MERN features with a strong focus on performance,
                scalability, and maintainable frontend architecture. I specialize in delivering
                optimized, component-driven interfaces that ensure consistency, reusability, and
                smooth user experience across complex business applications.
              </p>

              <div className="row g-3 mt-1">
                <div className="col-lg-6">
                  <ul className="info-list">
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>DOB:</strong>
                      <span>25 August 2001</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>GitHub:</strong>
                      <span>
                        <a href="https://github.com/bholav321" target="_blank" rel="noreferrer">
                          github.com/bholav321
                        </a>
                      </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Mobile:</strong>
                      <span>+91 8103202647</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>City:</strong>
                      <span>Indore, Madhya Pradesh</span>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul className="info-list">
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Age:</strong>
                      <span>24</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Degree:</strong>
                      <span>MCA, BCA </span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>Email:</strong>
                      <span>bholav321@gmail.com</span>
                    </li>
                    <li>
                      <i className="bi bi-chevron-right"></i>
                      <strong>LinkedIn:</strong>
                      <span>
                        <a href="https://linkedin.com/in/bhola-vishwkarma" target="_blank" rel="noreferrer">
                          bhola-vishwkarma
                        </a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Full-width impact paragraph below image + content ── */}
        <div className="row mt-4">
          <div className="col-12" data-aos="fade-up" data-aos-delay="100">
            <p className="about-impact">
              I have delivered UI systems that helped save <strong>7,000+ man-hours</strong> and
              reduce annual operational costs by approximately <strong>₹3.6M+</strong>. I work in
              structured development cycles using Zoho Projects, contribute to code reviews, and
              actively document reusable frontend patterns and best practices. This helps improve
              onboarding speed, maintain consistency across projects, and ensure faster, more
              reliable feature delivery.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;
