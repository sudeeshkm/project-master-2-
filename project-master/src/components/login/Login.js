import React, { useEffect, useState } from 'react';
import './Login.css'
import validation from './validation';
import { Link } from 'react-router-dom';

function Login(props) {
	// storing form field values
	const[formValues,setFormValues]=useState({username: "", password: ""})
    //Manage form error values
	const [formErrorValues,setFormErrorValues] = useState({});
	
	// Flag for form submission status
	const[isSubmit,setIsSubmit] = useState(false);
	// Manage field change
	const handleChange = (event) => {
		//console.log(event.target);
		const { name,value}=event.target;
		setFormValues({...formValues,[name]:value});
		console.log(formValues);

	}
	//Manage form refresh
	const handleSubmit=(event) =>{
      event.preventDefault()
	   setFormErrorValues(validation(formValues));
	   setIsSubmit(true);
	}
	useEffect(()=>{
		if(Object.keys(formErrorValues).length===0 && isSubmit){
			alert("Login Successful")
		}

	},[formErrorValues])

	return (
        <div className='body'>

            <div className="login-wrap">
	<div className="login-html">
	
		<label htmlFor="tab-2" className="tab">Login </label>

		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" name="username" type="text" className="input" required="" value={formValues.username} onChange={handleChange}></input>
					<p>{formErrorValues.username}</p>
				
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" name="password" type="password" className="input" data-type="password" required="" value={formValues.password} onChange={handleChange}></input>
				<p>{formErrorValues.password}</p>
				</div>
				
				<div className="group">
				<button className="button" value="Login " onClick={handleSubmit}>
					Login 
					</button>
					
					</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<a href="#forgot">Forgot Password?</a>
					
				</div>
			</div>
			{/* <div className="sign-up-htm">
				<div className="group">
					<label for="user" className="label">Username</label>
					<input id="user" type="text" className="input"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Repeat Password</label>
					<input id="pass" type="password" className="input" data-type="password"></input>
				</div>
				<div className="group">
					<label for="pass" className="label">Email Address</label>
					<input id="pass" type="text" className="input"></input>
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign Up"></input>
				</div>
				<div className="hr"></div>
				<div className="foot-lnk">
					<label for="tab-1">Already Member?</label>
				</div>
			</div> */}
		</div>
	</div>
</div>
        </div>
    );
};

export default Login;