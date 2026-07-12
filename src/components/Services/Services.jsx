import './Services.css';

const SERVICES = [
  {
    icon: 'bi-briefcase',
    color: '#4f8ef7',
    title: 'React.js Frontend Development',
    desc: 'Build scalable single-page applications with React.js, TypeScript, Redux Toolkit, React Router, and reusable component systems.',
  },
  {
    icon: 'bi-plug',
    color: '#7c3aed',
    title: 'API Integration',
    desc: 'Connect interfaces to REST APIs with validation, loading states, retry handling, error feedback, and predictable data flows.',
  },
  {
    icon: 'bi-bar-chart-line',
    color: '#10b981',
    title: 'MERN Application Features',
    desc: 'Develop full-stack features with React.js, Node.js, Express.js, MongoDB, JWT authentication, Google OAuth, carts, checkout, and order tracking.',
  },
  {
    icon: 'bi-layers',
    color: '#f59e0b',
    title: 'State Management',
    desc: 'Structure application state using Redux Toolkit, Context API, typed slices, and reusable selectors for complex workflows.',
  },
  {
    icon: 'bi-speedometer2',
    color: '#ec4899',
    title: 'Performance Optimization',
    desc: 'Improve rendering and load behavior with React.memo, lazy loading, route splitting, bundle review, and responsive asset usage.',
  },
  {
    icon: 'bi-kanban',
    color: '#06b6d4',
    title: 'Agile Product Delivery',
    desc: 'Work in sprint cycles with Jira/Zoho, code reviews, documentation, handoff support, and cross-functional collaboration.',
  },
];

const Services = () => (
  <section id="services" aria-labelledby="services-heading">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2 id="services-heading">Services</h2>
        <p>
          I help teams build maintainable React.js applications with reusable components,
          API-connected workflows, authentication, responsive interfaces, and
          performance-focused front-end architecture.
        </p>
      </div>

      <div className="services-grid">
        {SERVICES.map(({ icon, color, title, desc }, idx) => (
          <div
            key={title}
            className="service-card"
            data-aos="fade-up"
            data-aos-delay={idx * 80}
          >
            <div className="service-icon-wrap" style={{ '--svc-color': color }}>
              <i className={`bi ${icon}`}></i>
            </div>
            <h4>{title}</h4>
            <p>{desc}</p>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default Services;
