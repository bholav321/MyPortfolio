import { useState, useEffect, useRef } from 'react';
import './Facts.css';

/** Custom hook: animates a number from 0 → end when the element enters the viewport */
const useCountUp = (end, duration = 2000) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef(null);

  // Trigger animation when the element is visible
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) setStarted(true);
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  // Run the count-up animation
  useEffect(() => {
    if (!started) return;
    let startTime = null;
    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { count, ref };
};

/* ── Individual Stat card ── */
const StatCard = ({ icon, color, end, suffix, label, delay }) => {
  const { count, ref } = useCountUp(end);
  return (
    <div
      className="fact-card"
      ref={ref}
      data-aos="fade-up"
      data-aos-delay={delay}
    >
      <div className="fact-icon-wrap" style={{ '--icon-color': color }}>
        <i className={`bi ${icon}`}></i>
      </div>
      <div className="fact-number">
        {count.toLocaleString()}{suffix}
      </div>
      <p className="fact-label">{label}</p>
    </div>
  );
};

const STATS = [
  {
    icon: 'bi-emoji-smile',
    color: '#4f8ef7',
    end: 7000,
    suffix: '+',
    label: 'Man-Hours Saved through optimized procurement workflows',
    delay: 0,
  },
  {
    icon: 'bi-journal-richtext',
    color: '#7c3aed',
    end: 36,
    suffix: 'L',
    label: 'Lakh Annual Cost Reduction delivered through Cost It Right',
    delay: 100,
  },
  {
    icon: 'bi-plug',
    color: '#10b981',
    end: 1500,
    suffix: '+',
    label: 'REST APIs Integrated with validation and error handling',
    delay: 200,
  },
  {
    icon: 'bi-rocket-takeoff',
    color: '#f59e0b',
    end: 30,
    suffix: '%',
    label: 'Faster UI Delivery via reusable component libraries',
    delay: 300,
  },
];

const Facts = () => (
  <section id="facts" className="section-alt" aria-labelledby="facts-heading">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2 id="facts-heading">Facts</h2>
        <p>
          Practical delivery metrics from enterprise and full-stack projects, including
          procurement workflows, reusable React components, API integrations, and e-commerce
          features.
        </p>
      </div>

      <div className="facts-grid">
        {STATS.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
    </div>
  </section>
);

export default Facts;
