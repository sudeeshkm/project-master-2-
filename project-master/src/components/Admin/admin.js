import React from "react";
import '../Admin/admin.css';
import Adminnav from "../adminnav/adminnav";
import Navbar1 from '../navbar/Navbar1';

let nav = document.querySelector(".nav");
function toggle(){
    nav.classList.toggle("active");
}
const Admin = (props) => {
    return (
       
        <div className="Navbar">
        <Adminnav />        
 
         <div className='studhome'>
          <div className='welcome'>
             <img src='https://www.ajce.in/cse/images/ict_academy.png' alt ='logo' id='stuhomelogo' />
             <p>Welcome To ICTAK </p>
          
          </div>
         </div>
         </div>
        
       
    
   

    );
};   




export default Admin;