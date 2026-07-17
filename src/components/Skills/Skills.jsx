import {
  FaJava, FaHtml5, FaCss3Alt, FaNodeJs, FaReact, FaGithub, FaBootstrap,
} from 'react-icons/fa';
import {
  SiJavascript, SiExpress, SiPostman, SiMysql, SiMongodb, SiTypescript,
  SiRedux, SiReactrouter, SiTailwindcss, SiMui, SiGit,
} from 'react-icons/si';
import './Skills.css';

/* ── Primary tech icons with brand colors ── */
const SKILLS = [
  { name: 'Java',       Icon: FaJava,       color: '#f89820' },
  { name: 'JavaScript', Icon: SiJavascript, color: '#f7df1e' },
  { name: 'HTML5',      Icon: FaHtml5,      color: '#e34f26' },
  { name: 'CSS3',       Icon: FaCss3Alt,    color: '#1572b6' },
  { name: 'Bootstrap',  Icon: FaBootstrap,  color: '#7952b3' },
  { name: 'React',      Icon: FaReact,      color: '#61dafb' },
  { name: 'Node.js',    Icon: FaNodeJs,     color: '#339933' },
  { name: 'Express',    Icon: SiExpress,    color: '#ffffff' },
  { name: 'MongoDB',    Icon: SiMongodb,    color: '#47a248' },
  { name: 'MySQL',      Icon: SiMysql,      color: '#4479a1' },
  { name: 'Postman',    Icon: SiPostman,    color: '#ff6c37' },
  { name: 'GitHub',     Icon: FaGithub,     color: '#ffffff' },
];

/* ── Secondary tag list ── */
const SKILL_TAGS = [
  { name: 'TypeScript',   Icon: SiTypescript,   color: '#3178c6' },
  { name: 'Redux Toolkit',Icon: SiRedux,        color: '#764abc' },
  { name: 'React Router', Icon: SiReactrouter,  color: '#ca4245' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss,  color: '#06b6d4' },
  { name: 'Material UI',  Icon: SiMui,          color: '#0081cb' },
  { name: 'Git',          Icon: SiGit,          color: '#f05032' },
  { name: 'Context API',  Icon: FaReact,        color: '#61dafb' },
  { name: 'REST APIs',    Icon: null,            color: '#10b981' },
  { name: 'JWT Auth',     Icon: null,            color: '#f59e0b' },
  { name: 'Google OAuth', Icon: null,            color: '#ea4335' },
  { name: 'GitLab',       Icon: SiGit,          color: '#fc6d26' },
  { name: 'Zoho Projects',Icon: null,            color: '#4f8ef7' },
  { name: 'Code Reviews', Icon: null,            color: '#94a3b8' },
];

const Skills = () => (
  <section id="skills" aria-labelledby="skills-heading">
    <div className="container">

      <div className="section-title" data-aos="fade-up">
        <h2 id="skills-heading">Skills</h2>
        <p>
          Core stack: React.js, TypeScript, JavaScript ES6+, Redux Toolkit, Context API, React
          Router, REST APIs, JWT authentication, Node.js, Express.js, MongoDB, Tailwind CSS,
          Material UI, Bootstrap, Git, GitHub, GitLab, Postman, and Zoho Projects. I apply these
          across component-driven architecture, responsive design, cross-browser delivery,
          performance optimization, sprint-based workflows, and code reviews.
        </p>
      </div>

      {/* ── Icon Grid ── */}
      <div className="skill-icons-grid" data-aos="fade-up" data-aos-delay="50">
        {SKILLS.map(({ name, Icon, color }) => (
          <div className="skill-icon-card" key={name} title={name}>
            <div className="skill-icon-svg" style={{ color }}>
              <Icon />
            </div>
            <span className="skill-icon-label">{name}</span>
          </div>
        ))}
      </div>

      {/* ── Tag Cloud ── */}
      <div className="skill-tags-wrap" data-aos="fade-up" data-aos-delay="150">
        {SKILL_TAGS.map(({ name, Icon, color }) => (
          <span className="skill-tag" key={name} title={name}>
            {Icon && (
              <span className="tag-icon" style={{ color }}>
                <Icon />
              </span>
            )}
            {name}
          </span>
        ))}
      </div>

    </div>
  </section>
);

export default Skills;
