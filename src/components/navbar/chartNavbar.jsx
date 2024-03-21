import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";
import Navbar from "./navbar.jsx";

import "./navbar.scss"

function ChartNavbar() {
  return (
      <>
        <div className="upper-side">
          <Link to={"/"}>
            <img src={logo} alt="logo, with a link to homepage"/>
          </Link>
          <p>light/dark</p>
        </div>

        <Navbar/>
      </>




    // <div 
    //     className="chart-navbar"
    // >
    //   <Link to={"/"}>
    //     <img
    //         src={logoFull}
    //         alt="logo of the website"
    //     />
    //   </Link>

    //   <Navbar/>

    //   <div className="light-dark">
    //     light/dark
    //   </div>
    // </div>
  )  
}

export default ChartNavbar;
