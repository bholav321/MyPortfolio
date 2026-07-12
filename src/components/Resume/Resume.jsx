import './Resume.css';

const Resume = () => (
  <section id="resume" className="section-alt" aria-labelledby="resume-heading">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2 id="resume-heading">Resume</h2>
        <p>
          Frontend Developer with 2+ years of experience delivering React.js, TypeScript, Redux
          Toolkit, and REST API-driven web applications for enterprise and full-stack product use
          cases.
        </p>
      </div>

      <div className="row g-4">
        {/* ── LEFT: Summary + Education ── */}
        <div className="col-lg-6" data-aos="fade-up">

          {/* Summary Card */}
          <div className="resume-card mb-4">
            <div className="resume-card-header">
              <i className="bi bi-person-vcard"></i>
              <h3>Summary</h3>
            </div>
            <div className="resume-summary">
              <h4>Bhola Vishwkarma</h4>
              <p>
                <em>
                  React.js specialist focused on scalable component architecture, TypeScript
                  interfaces, Redux Toolkit state management, API integration, authentication
                  flows, and performance-focused responsive UI delivery.
                </em>
              </p>
              <ul className="resume-contact-list">
                <li><i className="bi bi-geo-alt"></i> Indore, Madhya Pradesh</li>
                <li><i className="bi bi-telephone"></i> +91-8103202647</li>
                <li><i className="bi bi-envelope"></i> bholav321@gmail.com</li>
                <li>
                  <i className="bi bi-linkedin"></i>
                  <a href="https://linkedin.com/in/bhola-vishwkarma" target="_blank" rel="noreferrer">
                    linkedin.com/in/bhola-vishwkarma
                  </a>
                </li>
                <li>
                  <i className="bi bi-github"></i>
                  <a href="https://github.com/bholav321" target="_blank" rel="noreferrer">
                    github.com/bholav321
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Education Timeline */}
          <div className="resume-card">
            <div className="resume-card-header">
              <i className="bi bi-mortarboard"></i>
              <h3>Education</h3>
            </div>
            <div className="resume-timeline">

              <div className="timeline-item" data-aos="fade-up" data-aos-delay="50">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">
                    <i className="bi bi-calendar3"></i> 2024 – Present · Expected 2026
                  </span>
                  <h4>Master of Computer Applications (MCA)</h4>
                  <p className="timeline-org">
                    <i className="bi bi-building"></i>
                    Rajiv Gandhi Proudyogiki Vishwavidyalaya (RGPV), Bhopal
                  </p>
                  <p className="timeline-desc">
                    Currently pursuing advanced coursework while working full-time, with focus on
                    software engineering, application development, and modern web technologies.
                  </p>
                </div>
              </div>

              <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">
                    <i className="bi bi-calendar3"></i> 2020 – 2023
                  </span>
                  <h4>Bachelor of Computer Applications (BCA)</h4>
                  <p className="timeline-org">
                    <i className="bi bi-building"></i>
                    Devi Ahilya Vishwavidyalaya (DAVV), Indore
                  </p>
                  <p className="timeline-desc">
                    Built a foundation in computer science, programming, database management,
                    software engineering, and web application development through coursework and
                    practical projects.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── RIGHT: Experience ── */}
        <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
          <div className="resume-card">
            <div className="resume-card-header">
              <i className="bi bi-briefcase"></i>
              <h3>Professional Experience</h3>
            </div>
            <div className="resume-timeline">

              <div className="timeline-item current" data-aos="fade-up" data-aos-delay="50">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">
                    <i className="bi bi-calendar3"></i> Aug 2024 – Present
                  </span>
                  <div className="d-flex align-items-start gap-2 flex-wrap mb-1">
                    <h4>Associate Software Engineer</h4>
                    <span className="badge-current">Current</span>
                  </div>
                  <p className="timeline-org">
                    <i className="bi bi-building"></i>
                    Softude Infotech Private Limited, Indore
                  </p>
                  <ul className="timeline-points">
                    <li>Architected reusable React.js component libraries for enterprise procurement modules, reducing UI development time by about 30% across teams.</li>
                    <li>Integrated 250+ REST APIs with loading states, validation, retry handling, and consistent error flows to improve reliability across enterprise workflows.</li>
                    <li>Used TypeScript interfaces and Redux Toolkit slices for predictable state management, type-safe API integration, and fewer runtime defects in complex screens.</li>
                    <li>Improved rendering and bundle performance with React.memo, lazy loading, and route-level code splitting.</li>
                    <li>Worked in Agile sprint cycles using Jira/Zoho, contributed to code reviews, and documented reusable frontend patterns for onboarding.</li>
                  </ul>
                </div>
              </div>

              <div className="timeline-item" data-aos="fade-up" data-aos-delay="100">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <span className="timeline-date">
                    <i className="bi bi-calendar3"></i> May 2023 – May 2024
                  </span>
                  <h4>Software Developer Trainee</h4>
                  <p className="timeline-org">
                    <i className="bi bi-building"></i>
                    InfoBeans Foundation, Indore
                  </p>
                  <ul className="timeline-points">
                    <li>Delivered React.js and JavaScript frontend features across responsive screens, reusable UI blocks, and API-connected user flows.</li>
                    <li>Created UI prototypes, requirement notes, and implementation documentation to support project delivery cycles.</li>
                    <li>Collaborated with developers and designers to convert design handoffs into pixel-aligned, mobile-responsive interfaces.</li>
                    <li>Built practical experience with Node.js, Express.js, MongoDB, REST APIs, and authentication while contributing to full-stack application modules.</li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
);

export default Resume;
