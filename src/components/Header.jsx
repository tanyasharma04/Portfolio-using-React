import React from 'react';

function Header() {
  return (
    <header className="bg-dark text-white text-center p-3">
      <h1>My Portfolio</h1>
      <nav>
        <a href="#about" className="text-white m-2">About</a>
        <a href="#projects" className="text-white m-2">Projects</a>
        <a href="#contact" className="text-white m-2">Contact</a>
      </nav>
    </header>
  );
}

export default Header;