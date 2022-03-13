import React from 'react';
import '../Appform/application1.css';

import { useForm } from "react-hook-form";
import axios from 'axios';
import {useNavigate} from 'react-router';
import { useEffect, useState } from 'react';
import Navbar1 from '../navbar/Navbar1';

function Application(props) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    trigger,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };


  // console.log(watch());

  // console.log(errors.name)

  return (

    <div className="Navbar">
      <Navbar1 />
    <div className="container pt-5">
      <div className="row justify-content-sm-center pt-5">
        <div className="col-sm-6 shadow round pb-3">
          <h1 className="text-center pt-3 text-secondary">Applicant Registration Form</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
              <label className="col-form-label"></label>
              <input
                type="text" placeholder='firstname'
                className={`form-control ${errors.firstname && "invalid"}`}
                {...register("firstname", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("firstname");
                }}
              />
              {errors.firstname && (
                <small className="text-danger">{errors.firstname.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label"></label>
              <input
                type="text" placeholder='lastname'
                className={`form-control ${errors.lastname && "invalid"}`}
                {...register("lastname", { required: "Name is Required" })}
                onKeyUp={() => {
                  trigger("lastname");
                }}
              />
              {errors.lastname && (
                <small className="text-danger">{errors.lastname.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label"></label>
              <input
                type="text" placeholder='enter email'
                className={`form-control ${errors.email && "invalid"}`}
                {...register("email", { required: "Email is Required" ,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                }})}
                onKeyUp={() => {
                  trigger("email");
                }}
              />
              {errors.email && (
                <small className="text-danger">{errors.email.message}</small>
              )}
            </div>
            <div className="form-group">
              <label className="col-form-label"></label>
              <input
                type="text" placeholder='phone number'
                className={`form-control ${errors.phone && "invalid"}`}
                {...register("phone", { required: "Phone is Required",
                pattern: {
                  value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                  message: "Invalid phone no",
                },
               })}
               onKeyUp={() => {
                trigger("phone");
              }}
              />
              {errors.phone && (
                <small className="text-danger">{errors.phone.message}</small>
              )}
            </div>   
        <div className="form-group">
        <label></label>
        
        <select  className={`form-control ${errors.course && "invalid"}`}
                {...register("course", { required: "selct a course" })}
                onKeyUp={() => {
                  trigger("course");
                }} >
        <option value="" disabled>Select your Course</option>
        <option value="fsd">Full Stack Developer</option>
        <option value="cyber">Cyber Security</option>
        <option value="data">Data Scientist</option>
        <option value="robo">Robotics</option>
        <option value="machine">Machine Learning</option>
        </select>
        </div>
         
        <div className="form-group">
        <label> </label>
        <select  className={`form-control ${errors.batch && "invalid"}`}
                {...register("batch", { required: "select your batch" })}
                onKeyUp={() => {
                  trigger("batch");
                }} >
                                       
        <option value="" disabled>Select your Batch</option>
        <option value="B1">Batch 1</option>
        <option value="B2">Batch 2</option>
        <option value="B3">Batch 3</option>
        <option value="B4">Batch 4</option>
        </select>     
        </div>

        <div className="form-group">
        Course Starting Date 
        <br></br> 
        <input placeholder="Course Starting" type="date"   className={`form-control ${errors.startingdate && "invalid"}`}
                {...register("startingdate", { required: "starting date" })}
                onKeyUp={() => {
                  trigger("startingdate");
                }} /> 

        </div>

        <div className="form-group">
        Course Ending Date 
        <br></br>
        <input placeholder="Course Ending" type="date"   className={`form-control ${errors.endingdate && "invalid"}`}
                {...register("endingdate", { required: "ending date" })}
                onKeyUp={() => {
                  trigger("endingdate");
                }} /> 

        </div>

        Upload Photo
        <br></br>
        <div className="form-group">              
        <input placeholder="Upload" type="file" className={`form-control ${errors.photo && "invalid"}`}
                {...register("photo", { required: "photo" })}
                onKeyUp={() => {
                  trigger("photo");
                }} />
        </div>

            <input
              type="submit"
              className="btn"
              value="Submit"
            />
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Application;

/*
function Application(props) {

  const [applicationValues, setapplicationValues] = useState({ username: "",coursetype:"", email: "",  phoneno: "" , batch: "", startingdate: "", endingdate: ""});
  const [filename,setFileName] = useState("")   ;
  const [errorValues, setErrorValues] = useState({});
  

  const token =localStorage.getItem('token');

  const [isSubmit, setIsSubmit] = useState(false);

  const navigate =useNavigate;

  const handleChange = (event) => {
      const { name, value } = event.target;
      setapplicationValues({ ...applicationValues, [name]: value });
  }
  const dateChange = (event) => {
      const date = event.target.value;
      const myDate = new Date(date);
  }

  const handleChangeImage = (event) => {
      setFileName(event.target.files[0]);
  }
  
  
  const handleSubmit = (event) => {
      event.preventDefault();

      const formData = new FormData();

      formData.append('username', applicationValues.username);
      formData.append('coursetype', applicationValues.coursetype);
      formData.append('email', applicationValues.email);
      formData.append('phoneno', applicationValues.phoneno);
      formData.append('batch', applicationValues.batch);
      formData.append('startingdate', applicationValues.startingdate);
      formData.append('endingdate', applicationValues.endingdate);
      formData.append('photo', filename);

      const validationErrors = Validateapplication(applicationValues,filename);
      setErrorValues(validationErrors);
      if(Object.keys(validationErrors).length === 0)
          ApplicationDetails(formData);
  }

  useEffect(() => {
  if (Object.keys(errorValues).length === 0 && isSubmit) {
        axios.post("/api/user/application", {
                   username : applicationValues.username,
                   coursetype : applicationValues.coursetype,
                   email : applicationValues.email,
                  //  photo = applicationValues.photo,
                   phoneno : applicationValues.phoneno,
                   batch : applicationValues.batch,
                   startingdate : applicationValues.startingdate,
                   endingdate : applicationValues.endingdate,
      }).then((res)=>{
                  // alert(res.data.message);
                  // if(res.data.message ==='Application applyed Successfully')
                  return navigate('/status')  });
              
  }
}, [errorValues]);
  
  const ApplicationDetails = async (formData) => {
      axios.post("/api/application/postapplication", formData,
          {headers: {
              'Content-Type': 'application/json',
              'authorization': 'JWT '+ token
              }
          }).then(res=>{
              console.log(res.data);
              if (res.status) {
                      alert("Application submitted successfully");
                      navigate("/status", { replace: true });
                  } else {
                      alert("Application applied Unsuccessful!");
                  }})
          }


  return (
      <div className='applicationbody'>
          

          <div className='application'>  
              
        <form onSubmit={(e)=>handleSubmit(e)} className='applicationform' encType='multipart/form-data'>
        <label id='applicationtitle'>Application  </label><br></br>

          <div className='row'>
                      <div className='col-25'>	
                          <label>Name:</label> 
                      </div>
                      <div className='col-75'>
                          <input  placeholder='Name' name="username"  value={applicationValues.username} onChange={handleChange} /> 
                      </div>
                      <p className="applicationerrorText">{errorValues.username}</p><br></br>
                  </div>


                  <label htmlFor='coursetype'>Course type:</label>    
                  <select name="coursetype" id="coursetype"  value={applicationValues.coursetype} onChange={handleChange}>
                      <option value="" disabled> --Select Course Type--</option>
                      <option>Full Stack Development</option>                       
                      <option>Software Development</option>
                      <option>Cyber Security Analyst</option>
                      <option>Robotic Process Automation</option>
                      <option>Data Science and Analytics</option>
                      <option>Digital Marketing</option>
                  </select> 
                  <p className="applicationerrorText">{errorValues.coursetype}</p><br></br>

                  <div className='row'>
                      <div className='col-25'>	
                          <label>Email:</label>
                      </div>
                      <div className='col-75'>
                          <input  placeholder='Email' name="email"  value={applicationValues.email} onChange={handleChange}/> 
                      </div>
                      <p className="applicationerrorText">{errorValues.email}</p><br></br>
                  </div>              

                  <div className='row'>
                      <div className='col-25'>	
                          <label>Select Image:</label>
                      </div>
                      <div className='col-75'>
                          <input type='file' placeholder='photo' filename= 'photo' onChange={handleChangeImage}/>
                      </div>
                      <p className="applicationerrorText">{errorValues.photo}</p><br></br>
                  </div>

          <div className='row'>
                      <div className='col-25'>	
                          <label>Phone No:</label>
                      </div>
                      <div className='col-75'>
                          <input  placeholder='Phone No' name="phoneno"  value={applicationValues.phoneno} onChange={handleChange}/>
                      </div>
                      <p className="applicationerrorText">{errorValues.phoneno}</p><br></br>
                  </div>

                  <div className='row'>
                      <div className='col-25'>	
                          <label>Batch:</label>
                      </div>
                      <div className='col-75'>
                          <input  placeholder='Batch' name="batch"  value={applicationValues.batch} onChange={handleChange}/> 
                      </div>
                      <p className="applicationerrorText">{errorValues.batch}</p><br></br>
                  </div>

                  <div className='row'>
                      <div className='col-25'>	
                          <label>Course Starting date:</label>
                      </div>
                      <div className='col-75'>
                          <input type='date' placeholder='Course Starting date' name="startingdate"  value={applicationValues.startingdate} onChange={(e)=>{handleChange(e); dateChange(e);}}/> 
                      </div>
                      <p className="applicationerrorText">{errorValues.startingdate} </p><br></br>
                  </div>

                  <div className='row'>
                      <div className='col-25'>	
                          <label>Course Ending Date:</label>
                      </div>
                      <div className='col-75'>
                          <input type='date' placeholder='Course Ending Date' name="endingdate"  onChange={handleChange}/> 
                      </div>
                      <p className="applicationerrorText">{errorValues.endingdate} </p><br></br>
                  </div>

        <button  className='submitbutton'>Submit</button>

      </form>		
          </div>
      </div>  
  );
}


export default Application;*/