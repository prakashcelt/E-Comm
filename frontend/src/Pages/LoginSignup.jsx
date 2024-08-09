import React, { useState } from "react";
import "./CSS/LoginSignup.css";

const LoginSignup = () => {

  const [state,setState] = useState("Login");
  const [formData,setFormData] = useState({username:"",email:"",password:""});

  const changeHandler = (e) => {
    setFormData({...formData,[e.target.name]:e.target.value});
    }

  // const login = async () => {
  //   let dataObj;
  //   await fetch('http://localhost:4000/login', {
  //     method: 'POST',
  //     headers: {
  //       "Accept":'application/form-data',
  //       'Content-Type':'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {dataObj=data});
  //     console.log(dataObj);
  //     if (dataObj.success) {
  //       localStorage.setItem('auth-token',dataObj.token);
  //       window.location.replace("/");
  //     }
  //     else
  //     {
  //       alert(dataObj.errors)
  //     }
  // }
  const login = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth/login', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const text = await response.text();  // Read the raw response as text
      console.log("Raw Response:", text);  // Log the raw response
  
      const data = JSON.parse(text);  // Parse the raw response text as JSON
  
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("An error occurred. Please try again later.");
    }
  };
  
  

  // const signup = async () => {
  //   let dataObj;
  //   await fetch('http://localhost:4000/signup', {
  //     method: 'POST',
  //     headers: {
  //       'Accept':'application/form-data',
  //       'Content-Type':'application/json',
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {dataObj=data});

  //     if (dataObj.success) {
  //       localStorage.setItem('auth-token',dataObj.token);
  //       window.location.replace("/");
  //     }
  //     else
  //     {
  //       alert(dataObj.errors)
  //     }
  // }
  const signup = async () => {
    try {
      const response = await fetch('http://localhost:4000/auth  /signup', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      const data = await response.json();
      if (data.success) {
        localStorage.setItem('auth-token', data.token);
        window.location.replace("/");
      } else {
        alert(data.errors);
      }
    } catch (error) {
      console.error("Error signing up:", error);
      alert("An error occurred during signup. Please try again later.");
    }
  };
  

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>{state}</h1>
        <div className="loginsignup-fields">
          {state==="Sign Up"?<input type="text" placeholder="Your name" name="username" value={formData.username} onChange={changeHandler}/>:<></>}
          <input type="email" placeholder="Email address" name="email" value={formData.email} onChange={changeHandler}/>
          <input type="password" placeholder="Password" name="password" value={formData.password} onChange={changeHandler}/>
        </div>

        <button onClick={()=>{state==="Login"?login():signup()}}>Continue</button>

        {state==="Login"?
        <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span></p>
        :<p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span></p>}

        <div className="loginsignup-agree">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i agree to the terms of use & privacy policy.</p>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
