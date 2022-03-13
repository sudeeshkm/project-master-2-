import React from 'react';
import "./stdhome.css";
import Navbar1 from '../navbar/Navbar1';



function StudentHome(props) {
    return (

     <div className="Navbar">
       <Navbar1 />
       

        <div className='studhome'>
         <div className='welcome'>
            <img src='https://www.ajce.in/cse/images/ict_academy.png' alt ='logo' id='stuhomelogo' />
            <p>Welcome To ICTAK </p>
         
         </div>
        </div>
        </div>
    );
}

export default StudentHome;