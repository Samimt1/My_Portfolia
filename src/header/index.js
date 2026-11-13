import React, { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FiMenu, FiX, FiArrowUpRight } from "react-icons/fi";
import { logotext, socialprofils } from "../content_option";
import Themetoggle from "../components/themetoggle";
import "./style.css";

const links = [["/", "Home"], ["/about", "About"], ["/portfolio", "Projects"], ["/contact", "Contact"]];

const Headermain = () => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => { setOpen(false); }, [pathname]);
  useEffect(() => {
    const closeOnEscape = (event) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);
  return <header className="modern-header">
    <div className="modern-header-inner">
      <Link className="modern-logo" to="/" onClick={() => setOpen(false)}>{logotext}<span>.</span><span className="logo-sub">dev</span></Link>
      <nav className={open ? "modern-nav is-open" : "modern-nav"} aria-label="Main navigation">
        {links.map(([to, label]) => <NavLink key={to} to={to} end={to === "/"} onClick={() => setOpen(false)} className={({ isActive }) => isActive ? "nav-link-item active" : "nav-link-item"}>{label}</NavLink>)}
        <a className="mobile-github" href={socialprofils.github} target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight /></a>
      </nav>
      <div className="modern-header-actions"><Themetoggle /><a className="header-cta" href={socialprofils.github} target="_blank" rel="noopener noreferrer">GitHub <FiArrowUpRight /></a><button type="button" className="mobile-menu-toggle" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close navigation" : "Open navigation"} onClick={() => setOpen(v => !v)}>{open ? <FiX /> : <FiMenu />}</button></div>
    </div>
    {open && <button type="button" className="nav-backdrop" aria-label="Close navigation" onClick={() => setOpen(false)} />}
  </header>;
};
export default Headermain;
