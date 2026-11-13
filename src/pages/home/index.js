import React from "react";
import { Link } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FiArrowUpRight, FiGithub, FiCode, FiLayers, FiZap, FiMail, FiMapPin } from "react-icons/fi";
import Typewriter from "typewriter-effect";
import { meta, socialprofils, dataportfolio } from "../../content_option";
import "./style.css";

const highlights = [
  { icon: <FiCode />, title: "Frontend", detail: "React · Next.js · Tailwind" },
  { icon: <FiLayers />, title: "Backend", detail: "Node.js · FastAPI · PostgreSQL" },
  { icon: <FiZap />, title: "AI & Data", detail: "Python · Machine Learning · ETL" }
];

export const Home = () => (
  <HelmetProvider>
    <Helmet>
      <title>{meta.title} | Full Stack Software Engineer</title>
      <meta name="description" content={meta.description} />
    </Helmet>
    <main className="new-home">
      <section className="hero">
        <div className="hero-orb hero-orb-one" aria-hidden="true" />
        <div className="hero-orb hero-orb-two" aria-hidden="true" />
        <div className="hero-inner">
          <div className="hero-copy">
            <span className="eyebrow"><span className="status-dot" /> Available for opportunities</span>
            <p className="hero-overline">Hello, I'm Samuel Esubalew <span className="wave" role="img" aria-label="waving hand">👋</span></p>
            <h1>Building digital <span className="gradient-text">experiences</span> that make an impact.</h1>
            <div className="hero-type"><span>I build </span><Typewriter options={{ strings: ["modern web apps.", "scalable backends.", "AI-powered products.", "beautiful interfaces."], autoStart: true, loop: true, delay: 52, deleteSpeed: 27 }} /></div>
            <p className="hero-lead">Software Engineering graduate and full-stack developer with 2 years of experience. I turn ideas into thoughtful, fast, and accessible products.</p>
            <div className="hero-actions">
              <Link className="primary-action" to="/portfolio">Explore my work <FiArrowUpRight /></Link>
              <Link className="secondary-action" to="/contact">Let's talk <FiMail /></Link>
            </div>
            <div className="hero-social">
              <a href={socialprofils.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FiGithub /> GitHub</a>
              <a href={socialprofils.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">in LinkedIn</a>
              <span><FiMapPin /> Ethiopia · Open to remote</span>
            </div>
          </div>
          <div className="hero-visual" aria-label="Visual illustration of software projects">
            <div className="hero-visual-glow" />
            <div className="editor-window">
              <div className="editor-top"><span className="editor-dots"><i/><i/><i/></span><span>samuel / developer.tsx</span><span className="editor-spark">✦</span></div>
              <div className="editor-code">
                <p><span className="code-purple">const</span> developer = &#123;</p>
                <p className="indent">name: <span className="code-green">"Samuel Esubalew"</span>,</p>
                <p className="indent">role: <span className="code-green">"Full Stack Developer"</span>,</p>
                <p className="indent">passion: <span className="code-green">"Building great things"</span>,</p>
                <p className="indent">skills: [<span className="code-green">"React", "Next.js",</span></p>
                <p className="indent more-indent"><span className="code-green">"Node.js", "Python"</span>],</p>
                <p className="indent">available: <span className="code-purple">true</span></p>
                <p>&#125;;</p>
                <p className="code-comment">// Let's build something amazing ✨</p>
              </div>
              <div className="editor-bottom"><span>● All systems operational</span><span>UTF-8 &nbsp; TSX</span></div>
            </div>
            <div className="float-chip float-chip-one">✦ Clean Code</div>
            <div className="float-chip float-chip-two">⚡ Creative Solutions</div>
          </div>
        </div>
        <div className="scroll-hint">SCROLL TO EXPLORE <span>↓</span></div>
      </section>
      <section className="home-section skill-section">
        <div className="section-heading"><span className="section-kicker">WHAT I DO</span><h2>Ideas to <span className="gradient-text">implementation.</span></h2><p>From responsive frontends to dependable APIs, I enjoy the entire process.</p></div>
        <div className="highlight-grid">{highlights.map((item, i) => <div className="highlight-card" key={item.title}><div className="highlight-num">0{i + 1}</div><div className="highlight-icon">{item.icon}</div><h3>{item.title}</h3><p>{item.detail}</p></div>)}</div>
      </section>
      <section className="home-section home-work">
        <div className="section-heading"><span className="section-kicker">SELECTED WORK</span><h2>Things I've <span className="gradient-text">built.</span></h2></div>
        <div className="featured-grid">
          {dataportfolio.slice(0, 3).map((project, i) => <a className="featured-card" key={project.link + i} href={project.link} target="_blank" rel="noopener noreferrer"><span className="featured-index">0{i + 1} / FEATURED</span><span className="featured-art" aria-hidden="true">{i === 0 ? "◎" : i === 1 ? "◈" : "⌘"}</span><h3>{project.title || project.description}</h3><p>{project.category || "Software development"}</p><span className="featured-arrow"><FiArrowUpRight /></span></a>)}
        </div>
        <Link to="/portfolio" className="all-work-link">View all projects <FiArrowUpRight /></Link>
      </section>
      <section className="home-cta"><span className="section-kicker">LET'S CONNECT</span><h2>Have an idea? <span className="gradient-text">Let's make it real.</span></h2><p>I'm always excited to collaborate on meaningful software projects.</p><Link to="/contact" className="primary-action">Get in touch <FiArrowUpRight /></Link></section>
    </main>
  </HelmetProvider>
);
