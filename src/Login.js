import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
// import {Link} from 'react-router-dom';
function Login() {
  const [userdata, setUser] = useState([]);
  const [userId, setUserId] = useState();
  const [password, setPassword] = useState();
  const [uData, setUData] = useState();
  const [msg, setMsg] = useState("");
  

 const  getUdata = () => {
    axios.get("http://localhost:8181/user").then((response) => {
      console.log(response.data);
      setUser(response.data);
      // response.data.forEach((item)=>{
      //     console.log(item.userName);
      // })
    });
};
    useEffect(() => {
      getUdata();
    }, []);
  
  const onSubmit = () => {
    // console.log("USERNAME",data1.obj1);
    userdata.forEach((item) => {
      if (
        userId === item.userName &&
        password === item.password &&
        item.adminfound === false
      ) {
        console.log("user login");
      } else if (
        userId === item.userName &&
        password === item.password &&
        item.adminfound === true
      ) {
        console.log("admin login");
      } else {
        setMsg("Enter Valid Username or Password");
      }
    });
  };
  return (
    <>
      <div className="app">
        {/* <Link to="/" className='btn btn-success'>Home</Link> */}
        <div className="login-form">
          <div className="form">
            <form onSubmit={onSubmit}>
              <h4 className="text-center text-success">Login Form</h4>
              <div className="container container-fluid alert alert-success">
                {msg}
              </div>
              <div className="form-group">
                <label>User</label>
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => setUserId(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <br></br>
              <div className="form-group">
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
