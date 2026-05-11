import React, {useState} from 'react'
import axios from 'axios'

const Login = () => {
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [resMsg, setresMsg] = useState("");

    const newUser = () => {
        axios
        .post("http://localhost:4005/adduser", { 
            username: username, 
            useremail: useremail, 
            password: password,
            age: age
        }) 
        .then((res) => { 
            setresMsg(res.data); 
        }) 
        .catch((err) => { 
            console.log(err); 
        });
    };

  return (
    <div class="container">
      <div class="box">
      <form class="form-control">
        <div class="header">
            <p>Log In</p>
        </div>
        <div class="input-box">
            Username :
            <input type="text" class="form-control input-field" required
                 onChange={(e) => setUsername(e.target.value)}></input>
        </div>
        <div class="input-box">
            E-Mail :
            <input type="email" class="form-control input-field" required
                 onChange={(e) => setUseremail(e.target.value)}></input>
        </div>
        <div class="input-box">
            Password :
            <input type="password" class="form-control input-field" required
                 onChange={(e) => setPassword(e.target.value)}></input>
        </div>
        <div class="input-box">
            Age :
            <input type="number" class="form-control input-field" required
                 onChange={(e) => setAge(e.target.value)}></input>
        </div>
      </form>
      <div class="input-box">
            <center>
            <button type="button" onClick={newUser} class="input-submit">SIGN IN</button>
            </center>
        </div>
        <div> <br/>
          <h5 class="logh3">
            {resMsg}
          </h5>
        </div>
      </div>
      <div class="wrapper"></div>
    </div>
  )
}

export default Login
