import React, { useMemo, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { FiArrowUpRight, FiSearch, FiGithub, FiX } from "react-icons/fi";
import { dataportfolio, meta } from "../../content_option";
import "./style.css";

export const Portfolio = () => {
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const categories = ["All", ...new Set(dataportfolio.map((item) => item.category))];
  const projects = useMemo(() => dataportfolio.filter((item) => {
    const matchesCategory = category === "All" || item.category === category;
    const term = search.toLowerCase().trim();
    return matchesCategory && (!term || [item.title, item.description, ...(item.stack || [])].join(" ").toLowerCase().includes(term));
  }), [category, search]);
  return <HelmetProvider>
    <Helmet><title>Projects | {meta.title}</title><meta name="description" content="Explore full-stack, AI, and data projects by Samuel Esubalew." /></Helmet>
    <main className="projects-page">
      <div className="projects-intro"><span className="section-kicker">MY PORTFOLIO</span><h1>Selected <span className="gradient-text">Projects.</span></h1><p>A collection of things I've designed, developed, and learned along the way.</p></div>
      <div className="projects-toolbar">
        <div className="project-filters" aria-label="Filter projects by category">{categories.map((item) => <button type="button" key={item} onClick={() => setCategory(item)} className={category === item ? "filter-pill selected" : "filter-pill"} aria-pressed={category === item}>{item}</button>)}</div>
        <label className="project-search"><FiSearch /><input aria-label="Search projects" value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search projects..." />{search && <button type="button" aria-label="Clear search" onClick={() => setSearch("")}><FiX /></button>}</label>
      </div>
      <p className="project-count">Showing {projects.length} of {dataportfolio.length} projects</p>
      <div className="projects-grid">
        {projects.map((item, i) => <article key={item.link} className="project-card" style={{ animationDelay: `${Math.min(i, 6) * 65}ms` }}>
          <div className={`project-art project-art-${item.visual || "web"}`}>
            <span className="art-grid" aria-hidden="true" />
            <span className="project-art-symbol" aria-hidden="true">{item.symbol || "⌘"}</span>
            <span className="project-art-category">{item.category}</span>
          </div>
          <div className="project-card-body"><div className="project-tagrow"><span>{item.category}</span><FiArrowUpRight /></div><h2>{item.title}</h2><p>{item.description}</p><div className="project-tech">{(item.stack || []).map((tech) => <span key={tech}>{tech}</span>)}</div><a href={item.link} target="_blank" rel="noopener noreferrer" className="project-visit"><FiGithub /> View project <FiArrowUpRight /></a></div>
        </article>)}
      </div>
      {projects.length === 0 && <div className="projects-empty"><FiSearch /><h2>No matching projects</h2><p>Try another keyword or clear the filters.</p><button onClick={() => { setSearch(""); setCategory("All"); }} type="button">Clear filters</button></div>}
    </main>
  </HelmetProvider>;
};
