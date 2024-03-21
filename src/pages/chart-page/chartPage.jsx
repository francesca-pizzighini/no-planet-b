import { Link, Outlet } from "react-router-dom";
import ChartNavbar from "../../components/navbar/chartNavbar";
import "./chartPage.scss";
import logo from "../../assets/img/logo.png";
import Navbar from "../../components/navbar/navbar";
import { useState } from "react";
import hamburger from "../../assets/img/hamburgher.png";

function ChartPage() {
  const [visibleMenu, setVisibleMenu] = useState(false)
  
  function showMenu() {
    setVisibleMenu(!visibleMenu);
  }

  return (
    <div
      className="chart-pages"
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
        <p className="light-dark">light/dark</p>
      </div>

      <button
        className="circle-menu"
        onMouseEnter={showMenu}
        onMouseLeave={showMenu}
      >
        <img src={hamburger}/>

        {visibleMenu && (<div 
          className="circle-menu-navbar"
        >
          <Navbar/>
        </div>)
        }
      </button>


      <div 
        className="side"
      >
        <ChartNavbar/>
      </div>

      <div
        className="chart"
      >
        <Outlet/>
      </div>
    </div>
  )
}

export default ChartPage;
