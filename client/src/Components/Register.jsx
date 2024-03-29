import React, {useState} from "react";
import axios from "axios";
import {useNavigate, Link} from "react-router-dom";

const Register = (props) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    username:'',
    email:'',
    password:'',
    confirmPassword:''
  })
  const changeHandler = (e) => {
    setUser({...user, [e.target.name]:e.target.value})
  }
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/register', user, {withCredentials:true})
      .then((res) => {
        console.log(res, '### submit worked');
        navigate('/home')
      })
      .catch((err) => {
        console.log(err, '###submit handler error')
      })
  }
  return(
    <div>
      <h1>Register User</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label>First Name:</label>
          <input type='text' onChange={changeHandler} value={user.firstName} name='firstName'/>
        </div>
        <div>
          <label>Last Name:</label>
          <input type='text' onChange={changeHandler} value={user.lastName} name='lastName'/>
        </div>
        <div>
          <label>Username:</label>
          <input type='text' onChange={changeHandler} value={user.username} name='username'/>
        </div>
        <div>
          <label>Email:</label>
          <input type='text' onChange={changeHandler} value={user.email} name='email'/>
        </div>
        <div>
          <label>Password</label>
          <input type='password' onChange={changeHandler} value={user.password} name='password'/>
        </div>
        <div>
          <label>ConfirmPassword</label>
          <input type='password' onChange={changeHandler} value={user.confirmPassword} name='confirmPassword'/>
        </div>
        <button type='submit'>Register</button>
      </form>
      <Link to='/login'>Already have an account?</Link>
    </div>
  )
};

export default Register;