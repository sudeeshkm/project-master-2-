import React from "react";
import { Link } from "react-router-dom";
import "./adminnav.css";

let nav = document.querySelector(".nav");
function toggle(){
    nav.classList.toggle("active");
}
const Adminnav = (props) => {
    return (
        <header>
            <div class="logo">
        <h3>ICTAK</h3>
    </div>
    <div class="nav">
        <ul>
        <li><Link to="/Admin">Home</Link></li>
            <li> <Link to="/bmlist">Batchmangers</Link></li>
            <li><Link to="/courselist">Courses</Link></li>
            
            <li><Link to="/login">Log out</Link></li>
        </ul>
        <i class="fas fa-times" onClick="toggle()"></i>
    </div>
    <div class="toggle">
        <i class="fas fa-bars" onClick="toggle()"></i>
    </div>
        </header>
   
   

    );
};   

export default Adminnav;