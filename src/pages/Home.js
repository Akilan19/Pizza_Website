import React from 'react'
import {Link} from "react-router-dom";
import BannerImage from "../images/pizza.jpeg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{backgroundImage: `url(${BannerImage}`}}>
        <div className="headerContainer" >
            <h1>PiZ-Ahh!!</h1>
            <p>JUST EAT IT</p>
            <Link to="/menu">
                <button>ORDER NOW</button>
            </Link>
        </div>
    </div>
  )
}

export default Home;