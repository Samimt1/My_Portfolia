import React, { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import "./style.css";

const getInitialTheme = () => {
  try {
    const saved = window.localStorage.getItem("theme");
    if (saved === "light" || saved === "dark") return saved;
  } catch (error) { /* Storage may be disabled. */ }
  return window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";
};
const Themetoggle = () => {
  const [theme, setTheme] = useState(getInitialTheme);
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    try { window.localStorage.setItem("theme", theme); } catch (error) { /* Storage may be disabled. */ }
  }, [theme]);
  return <button className="theme-toggle" type="button" aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"} title={theme === "dark" ? "Light mode" : "Dark mode"} onClick={() => setTheme(prev => prev === "dark" ? "light" : "dark")}>{theme === "dark" ? <FiSun /> : <FiMoon />}</button>;
};
export default Themetoggle;
