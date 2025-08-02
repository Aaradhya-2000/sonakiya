import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../images/logo.jpeg";
import { IoMdArrowDropdown, IoMdMenu, IoMdClose } from "react-icons/io";


const SCROLL_BG_THRESHOLD = 800; // keep your original behavior

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [showDropdown, setShowDropdown] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [backgroundColor, setBackgroundColor] = useState("transparent");

  const dropdownRef = useRef(null);

  // Scroll-based navbar background change
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || document.documentElement.scrollTop;
      setBackgroundColor(scrollY >= SCROLL_BG_THRESHOLD ? "#212529" : "transparent");
    };

    handleScroll(); // run once on mount so refresh behaves correctly
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setShowMobileMenu(false);
    setShowDropdown(false);
  }, [location.pathname]);

  const handleNavigate = (path) => {
    navigate(`/${path}`);
    setShowDropdown(false);
    setShowMobileMenu(false);
  };

  const isActive = (path) => location.pathname.includes(path);

  return (
    <header>
      <nav
        className="navbar"
        style={{ backgroundColor, transition: "background-color 0.4s ease" }}
      >
        {/* Logo */}
        <div className="nav-img" onClick={() => handleNavigate("home")} style={{ cursor: "pointer" }}>
          <img src={logo} alt="logo" style={{ height: 80, width: 80 }} />
        </div>

        {/* Hamburger */}
        <div className="hamburger" onClick={() => setShowMobileMenu((p) => !p)}>
          {showMobileMenu ? <IoMdClose size={30} /> : <IoMdMenu size={30} />}
        </div>

        {/* Menu */}
        <div className={`nav-menu ${showMobileMenu ? "active" : ""}`}>
          <ul>
          {/* Home */}
            <li>
              <Link
                to="/home"
                className={`a ${isActive("home") ? "active-link" : ""}`}
              >
                Home
              </Link>
            </li>

            {/* Dropdown */}
            <li
              ref={dropdownRef}
              className="dropdown-trigger"
              onClick={() => setShowDropdown((p) => !p)}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
              style={{
                color:
                  isActive("fire") ||
                  isActive("fall") ||
                  isActive("personal") ||
                  isActive("signage") ||
                  isActive("office") ||
                  isActive("marine") ||
                  isActive("other")
                    ? "yellow"
                    : "white",
                fontWeight:
                  isActive("fire") ||
                  isActive("fall") ||
                  isActive("personal") ||
                  isActive("signage") ||
                  isActive("office") ||
                  isActive("marine") ||
                  isActive("other")
                    ? "bold"
                    : "normal",
              }}
            >
              Our Product Range <IoMdArrowDropdown />
              {showDropdown && (
                <ul className="dropdown-menu dark-theme">
                  <li onClick={() => handleNavigate("fire")}>Fire Safety</li>
                  <li onClick={() => handleNavigate("fall")}>Fall Safety</li>
                  <li onClick={() => handleNavigate("personal")}>Personal Safety</li>
                  <li onClick={() => handleNavigate("signage")}>Signage Safety</li>
                  <li onClick={() => handleNavigate("office")}>Office Stationary</li>
                  <li onClick={() => handleNavigate("marine")}>Marine Safety</li>
                  <li onClick={() => handleNavigate("other")}>Other</li>
                </ul>
              )}
            </li>

            {/* About */}
            <li>
              <Link
                to="/about"
                className={`a ${isActive("about") ? "active-link" : ""}`}
              >
                About
              </Link>
            </li>

            {/* Team */}
            <li>
              <Link
                to="/team"
                className={`a ${isActive("team") ? "active-link" : ""}`}
              >
                Team
              </Link>
            </li>
          </ul>

          <button id="btn" onClick={() => handleNavigate("contact")}>
            CONTACT NOW
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
