import React, { useState, useEffect } from "react";
import DarkModeToggle from "react-dark-mode-toggle";
import { useGlobalContext } from "./Context";

const SearchFrom = () => {
  const { handleSearch, query } = useGlobalContext();
  //const [theme, setTheme] = useState(() => false);
  const [mode, setMode] = useState("light-theme");

  const toggleTheme = () => {
    console.log("hello");
    if (mode === "light-theme") {
      setMode("dark-theme");
      //setTheme(true);
    } else {
      setMode("light-theme");
      //setTheme(false);
    }
  };

  useEffect(() => {
    document.documentElement.className = mode;
  }, [mode]);

  return (
    <form onSubmit={(e) => e.preventDefault()} className="search-form">
      <div className="form-header">
        <h2>Hacker Search News</h2>
        <DarkModeToggle onChange={toggleTheme} checked={mode} size={60} />
      </div>
      <input
        type="text"
        className="form-input"
        value={query}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </form>
  );
};

export default SearchFrom;
