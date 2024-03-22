import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";
import TogglerDarkMode from "../togglerDarkMode/togglerDarkMode.jsx";

import "./navbar.scss"

function ChartNavbar({ darkMode, toggleDarkMode}) {
  return (
      <>
        <div className="upper-side">
          <Link to={"/"}>
            <img src={logo} alt="logo, with a link to homepage"/>
          </Link>
          
          <TogglerDarkMode
            darkMode={darkMode}
            toggleDarkMode={toggleDarkMode}
          />

        </div>

        <Navbar
          darkMode={darkMode}
          toggleDarkMode={toggleDarkMode}
        />
      </>
  )  
}

export default ChartNavbar;
