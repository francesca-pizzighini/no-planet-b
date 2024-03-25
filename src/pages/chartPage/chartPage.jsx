import { Link, Outlet } from "react-router-dom";
import ChartNavbar from "../../components/navbar/chartNavbar";
import "./dataPage.scss";
import logo from "../../assets/img/logo.png";
import Navbar from "../../components/navbar/navbar";
import { useState } from "react";
import hamburger from "../../assets/img/hamburger.png";
import TogglerDarkMode from "../../components/togglerDarkMode/togglerDarkMode";

function ChartPage() {
  const [visibleMenu, setVisibleMenu] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const savedDarkMode = localStorage.getItem('darkMode');
    return savedDarkMode ? JSON.parse(savedDarkMode) : true;
  });

  
  function showMenu() {
    setVisibleMenu(prevVisibleMenu => !prevVisibleMenu);
  }
  function toggleDarkMode() {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  }

  return (
    <div
      className={`chart-pages ${darkMode ? "dark" : ""}`}
    >
      <div className="upper-bar">
        <Link 
          to={"/"}
          className="chart-logo"
        >
          <img 
            src={logo} 
            alt="logo"
          />
        </Link>
        
        <TogglerDarkMode
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />

      </div>

      <button
        className="circle-menu"
        onClick={showMenu}
      >
        <img src={hamburger}/>

        {visibleMenu && (<div 
          className="circle-menu-navbar"
        >
          <Navbar
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />
        </div>)
        }
      </button>


      <div 
        className="side"
      >
        <ChartNavbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
          />
      </div>

      <div
        className="chart"
      >
        <Outlet
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </div>
    </div>
  )
}

export default ChartPage;
