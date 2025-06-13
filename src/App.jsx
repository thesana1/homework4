import React, { useEffect, useState } from "react";
import "./App.css";
import Card from "./assets/component/Card";
import Counter from "./assets/component/Counter";
import Todo from "./assets/component/Todo";
import ThemeToggle from "./assets/component/ThemeToggle";


function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="app-container">
      <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      <Todo />
      <Counter />
      <Card />
    </div>
  );
}

export default App;
