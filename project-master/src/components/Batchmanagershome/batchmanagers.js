import React from "react";
import { Link } from "react-router-dom";
import Batchnav from "../batchnav/batchnav";
import "./batchmanagers.css";


let nav = document.querySelector(".nav");
function toggle(){
    nav.classList.toggle("active");
}
const BatchManager = (props) => {
    return (
        <div className="Navbar">
           < Batchnav/>
        <div className='studhome'>
         <div className='welcome'>
            <img src='https://www.ajce.in/cse/images/ict_academy.png' alt ='logo' id='stuhomelogo' />
            <p>Welcome To ICTAK </p>
         
         </div>
        </div>
         </div>
 
   
   
   
   

    );
};   

export default BatchManager;