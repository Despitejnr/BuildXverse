import React, { useState, useEffect } from "react";
import { Palette } from 'lucide-react';
import { Menu, X } from 'lucide-react';
import "./Navigation.css";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  const fullText = "BuildXverse.dev";

  useEffect(() => {
    let timeout;
    if (isTyping) {
      if (text.length < fullText.length) {
        timeout = setTimeout(() => {
          setText(fullText.slice(0, text.length + 1));
        }, 150);
      } else {
        setTimeout(() => setIsTyping(false), 1500); // Pause before deleting
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => {
          setText(text.slice(0, -1));
        }, 100);
      } else {
        setTimeout(() => setIsTyping(true), 500); // Pause before retyping
      }
    }
    return () => clearTimeout(timeout);
  }, [text, isTyping]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="container">
        <nav>
          <div className="logo">
            <h1>
              <Palette /> {text}
            </h1>
          </div>

          <div className="hamburger" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>

          <div className={`right ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <li><a href="#">Features</a></li>
              <li><a href="#">Docs</a></li>
              <li><a href="#">Blog</a></li>
              <li><a href="#" className="gettingstarted">Get started</a></li>
            </ul>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navigation;
