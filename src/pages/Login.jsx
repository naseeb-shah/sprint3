import React, { useState, useContext } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../context/AuthContext";
import Products from "../components/Products";
import { useNavigate } from "react-router-dom";
import Home from "./Home";
const Login = () => {
const[user,setuser]=useState("")
const[pass,sep]=useState("")


const log=()=>{
  fetch(`http://localhost:3000/user?name=${user}&pass=${pass}`)
.then((x)=>x.json())
.then((x)=>Check(x))
}

const Check = (x) => {
  let navigate = useNavigate(); 

  if(x.name==user&&x.pass==pass){
    return navigate(home);

  }
}

  return <div>
    <div className="login">
      <h1>Name</h1>
      <input
      placeholder="username"
      type="text"
      onChange={(e)=>setuser(e.target.value)}
      />
      <h1>Password</h1>
  <input
  placeholder="Password"
      type="text"
      onChange={(e)=>sep(e.target.value)}
      />
      <br/>
<button onClick={log}>
LogIN
</button>
    </div>


    </div>;
};

export default Login;
