import React, { useState, useEffect } from "react";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    // Load theme preference from localStorage or default to dark mode
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.body.className = savedTheme === "light" ? "light-mode" : "";
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.body.className = newTheme === "light" ? "light-mode" : "";
    localStorage.setItem("theme", newTheme);
  };

  return (
    <div className="theme-toggle">
      <button onClick={toggleTheme}>
        {theme === "dark" ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
      </button>
    </div>
  );
};

export default ThemeToggle;
