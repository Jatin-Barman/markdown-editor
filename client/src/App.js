import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [markdown, setMarkdown] = useState("");
  const [html, setHtml] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const convertMarkdownToHtml = async () => {
      try {
        const response = await axios.post("http://localhost:5000/convert", {
          markdown,
        });
        setHtml(response.data.html);
      } catch (error) {
        console.error("Error converting markdown to HTML", error);
      }
    };

    if (markdown) {
      convertMarkdownToHtml();
    } else {
      setHtml("");
    }
  }, [markdown]);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="App">
      <div className="header">
        <button onClick={toggleDarkMode}>
          {isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </button>
      </div>
      <div className="editor">
        <textarea
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type your Markdown here..."
        />
      </div>
      <div className="preview" dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
}

export default App;
