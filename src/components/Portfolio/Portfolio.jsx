import { useState } from 'react';
import './Portfolio.css';

const FILTERS = [
  { key: '*',          label: 'All'        },
  { key: 'enterprise', label: 'Enterprise' },
  { key: 'mern',       label: 'MERN'       },
  { key: 'frontend',   label: 'Frontend'   },
];

const PROJECTS = [
  {
    id: 1,
    title: 'Cost It Right',
    desc: 'Comprehensive precision cost management platform for enterprise cost analysis, reporting, and decision-making.',
    img: '/assets/img/portfolio/CIR.webp',
    tags: ['enterprise', 'frontend'],
    tech: ['React.js', 'TypeScript', 'Redux Toolkit'],
    impact: '7,000+ man-hours saved',
    impactIcon: 'bi-lightning-charge',
  },
  {
    id: 2,
    title: 'Utsav Uphaar',
    desc: 'MERN e-commerce app with JWT authentication, Google OAuth, payment gateway, cart, and order tracking.',
    img: '/assets/img/portfolio/web1.png',
    tags: ['mern'],
    tech: ['React.js', 'Node.js', 'MongoDB'],
    impact: 'Full-stack MERN project',
    impactIcon: 'bi-cart-check',
  },
  {
    id: 3,
    title: 'Internal HR Portal',
    desc: 'React.js, TypeScript, Redux Toolkit, REST APIs, Material UI, role-based access, and dashboards.',
    img: '/assets/img/portfolio/portfolio-3.jpg',
    tags: ['enterprise', 'frontend'],
    tech: ['React.js', 'TypeScript', 'Material UI'],
    impact: '30% faster UI delivery',
    impactIcon: 'bi-graph-up-arrow',
  },
];

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('*');

  const visible = activeFilter === '*'
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="portfolio" aria-labelledby="portfolio-heading">
      <div className="container">

        <div className="section-title" data-aos="fade-up">
          <h2 id="portfolio-heading">Portfolio</h2>
          <p>
            Selected work showing enterprise React.js delivery, full-stack MERN development,
            TypeScript usage, Redux Toolkit state management, authentication, and measurable
            business impact.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="portfolio-filter-btns" data-aos="fade-up" data-aos-delay="50">
          {FILTERS.map(({ key, label }) => (
            <button
              key={key}
              className={`filter-btn ${activeFilter === key ? 'active' : ''}`}
              onClick={() => setActiveFilter(key)}
              aria-pressed={activeFilter === key}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="portfolio-grid">
          {visible.map((project, idx) => (
            <div
              key={project.id}
              className="portfolio-card"
              data-aos="fade-up"
              data-aos-delay={idx * 80}
            >
              {/* Image with overlay */}
              <div className="portfolio-img-wrap">
                <img
                  src={project.img}
                  alt={project.title}
                  className="portfolio-img"
                  loading="lazy"
                />
                <div className="portfolio-overlay">
                  <div className="portfolio-overlay-content">
                    <div className="portfolio-tech-tags">
                      {project.tech.map((t) => (
                        <span className="tech-tag" key={t}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card body */}
              <div className="portfolio-body">
                <div className="portfolio-category-tags">
                  {project.tags.map((t) => (
                    <span className="category-tag" key={t}>{t}</span>
                  ))}
                </div>
                <h4>{project.title}</h4>
                <p>{project.desc}</p>
                <div className="portfolio-impact">
                  <i className={`bi ${project.impactIcon}`}></i>
                  {project.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
