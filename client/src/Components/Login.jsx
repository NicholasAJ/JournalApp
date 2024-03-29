import React, {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState({
    email:'',
    password:'',
  })
  const changeHandler = (e) => {
    setUserLogin({...userLogin, [e.target.name]:e.target.value})
  }

  const loginHandler = (e) => {
    e.preventDefault()
    axios.post('http://localhost:8000/api/login', userLogin, {withCredentials:true})
      .then((res) => {
        console.log(res);
        navigate('/dashboard')
      })
      .catch((err) => {
        console.log(err);
      });
    };

  return(
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={loginHandler}>
        <div>
          <label>Email:</label>
          <input type='text'  name='email' value={userLogin.email} onChange={changeHandler}></input>
        </div>
        <div>
          <label>Password:</label>
          <input type='password' name='password' value={userLogin.password} onChange={changeHandler}></input>
        </div>
        <button>Login</button>
      </form>
      <p>or</p>
      <Link to="/signup">Signup Here!</Link>
    </div>
  )
}

export default Login;