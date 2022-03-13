import React from 'react';
import "./stdstatus.css";
import { useEffect } from "react";
import axios from 'axios';
import Navbar1 from '../navbar/Navbar1';

function Status(props) {
    
    useEffect(() => {
        axios.get('/api/application/postapplication'
        
          )
          .then(function (response) {
            console.log(response);
          })

        },[])
    
    return (
        <div className='Navbar'>
            <Navbar1 />
        <div className='statustable'>
            
            <table>
                <tr>
                    <th>No</th>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Email</th>
                    <th>Status</th>
                </tr>
               
            </table>
            </div>
            </div>
       
    );
 
}

export default Status;


