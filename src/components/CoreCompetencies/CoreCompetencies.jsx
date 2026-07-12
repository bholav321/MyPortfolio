import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import './CoreCompetencies.css';

const COMPETENCIES = [
  {
    icon: 'bi-window-stack',
    title: 'SPA Development',
    subtitle: 'React.js Frontend',
    desc: 'Single Page Application development with React.js, React Router, reusable components, responsive layouts, and cross-browser support.',
    img: '/assets/img/testimonials/testimonials-1.jpg',
  },
  {
    icon: 'bi-layers-half',
    title: 'State Management',
    subtitle: 'TypeScript + Redux Toolkit',
    desc: 'TypeScript interfaces, Redux Toolkit slices, Context API patterns, and predictable state management for complex enterprise workflows.',
    img: '/assets/img/testimonials/testimonials-2.jpg',
  },
  {
    icon: 'bi-cloud-arrow-up',
    title: 'API Integration',
    subtitle: 'REST, JWT, OAuth',
    desc: 'REST API integration with validation, loading states, retry handling, authentication, authorization, JWT, and Google OAuth flows.',
    img: '/assets/img/testimonials/testimonials-3.jpg',
  },
  {
    icon: 'bi-speedometer',
    title: 'Performance',
    subtitle: 'Optimization',
    desc: 'Performance-focused frontend development using React.memo, lazy loading, route-level code splitting, and clean component architecture.',
    img: '/assets/img/testimonials/testimonials-4.jpg',
  },
  {
    icon: 'bi-people',
    title: 'Agile Delivery',
    subtitle: 'Code Review + Documentation',
    desc: 'Agile/Scrum collaboration with sprint planning, Jira/Zoho issue tracking, code reviews, documentation, and cross-functional delivery.',
    img: '/assets/img/testimonials/testimonials-5.jpg',
  },
];

const CoreCompetencies = () => (
  <section id="testimonials" className="section-alt" aria-labelledby="competencies-heading">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2 id="competencies-heading">Core Competencies</h2>
        <p>
          Focused strengths that support enterprise React.js delivery, maintainable codebases,
          and product-grade user experiences.
        </p>
      </div>

      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        pagination={{ clickable: true }}
        speed={600}
        slidesPerView={1}
        spaceBetween={24}
        breakpoints={{
          640:  { slidesPerView: 1 },
          768:  { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
        className="competencies-swiper"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        {COMPETENCIES.map(({ icon, title, subtitle, desc, img }) => (
          <SwiperSlide key={title}>
            <div className="competency-card">
              <div className="competency-icon">
                <i className={`bi ${icon}`}></i>
              </div>
              <blockquote className="competency-quote">
                &ldquo;{desc}&rdquo;
              </blockquote>
              <div className="competency-author">
                <img src={img} alt={title} className="competency-avatar" />
                <div>
                  <h5>{title}</h5>
                  <p>{subtitle}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

    </div>
  </section>
);

export default CoreCompetencies;
