import { useState } from "react";
import "../Style/style.css";
import {useNavigate} from "react-router-dom"

function Login() {
  const [formData, setFormData]=useState({
    mobileno:"",
    password:""
  })

  const navigate=useNavigate();

  const handleChange=(e)=>{
    const {name, value, type}=e.target
    //const val=type=="number"? Number(value):value
    setFormData({...formData, [name]:value})

  }

  const handleSubmit=(e)=>{
    e.preventDefault()

    console.log(formData)

    fetch(`https://policeman-project.onrender.com/PoliceApp/Admin/signIn`,{
      method:"POST",
      body:JSON.stringify(formData),
      headers:{
        "Content-Type":"application/json"
      }
    })
    .then((res)=>res.json())
    .then((res)=>{
      console.log(res)
      if(res.success){
        localStorage.setItem("token", res.accessToken)
        alert(`${res.name} login successfull!`)
        navigate("/dashboard")
      }
    })
    .catch((err)=>{
      console.log(err)
    })

    setFormData({
      mobileno:"",
      password:""
    })

  }

  const {mobileno, password}=formData

  return (
    <div>
      <div className="vh-100 position-relative">
        <img
          className="full-screen"
          src="https://img.freepik.com/premium-photo/india-delhi-20-january-2007-military-parade-indipendence-day-editorial_857279-13943.jpg?w=1060"
          alt="police-poster"
        />
        
        <div className="text-white p-5 rounded-3 z-index-2 login-box">
          <form onSubmit={handleSubmit}>
            <div>
              <label className="float-start">Mobile Number</label>
              <br />
              <input
                className="d-block w-100 mt-1 rounded-2 py-2 px-2 form-control border-0"
                type="text"
                placeholder="Enter mobile number"
                name="mobileno"
                value={mobileno}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mt-3">
              <label className="float-start">Password</label>
              <br />
              <input
                className="d-block w-100 mt-1 rounded-2 py-2 px-2 form-control border-0"
                type="password"
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <button className="float-start mt-4 text-white bg-primary border-0 py-2 px-4 rounded-3">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default Login;
