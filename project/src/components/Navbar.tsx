import React, { useState } from 'react';

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
        crossOrigin="anonymous"
      />

      <nav className="navbar fixed-top bg-body-tertiary smaller-navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"></a>
          <div className="navigation-text" onClick={toggleNavbar}>
            Menu
          </div>
          {navbarOpen && (
            <ul className="navbar-nav flex-row ms-auto align-items-center">
              <li className="nav-item">
                <a className="nav-link mx-3" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/menu">
                  Menukarte
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/about">
                  Über uns
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/kontakt">
                  Kontakt
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link mx-3" href="/login">
                  Login
                </a>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
