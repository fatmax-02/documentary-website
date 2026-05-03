import React, {useState} from 'react'
import axios from 'axios'
import {useLocation} from 'react-router-dom'

const Updateuser = () => {
    let {state} = useLocation();
    const id = state.user._id;
    const [username, setusername] = useState(state.user.username);
    const [useremail, setuseremail] = useState(state.user.useremail);
    const [password, setpassword] = useState(state.user.password);
    const [responseMsg, setresponseMsg] = useState();

    const updates = () => { 
        axios.put(`http://localhost:4005/updateuser/${id}`, { 
            username: username, 
            useremail: useremail, 
            password: password, 
        }) 
          .then((res) => { 
            setresponseMsg(res.data.msg); 
          }) 
          .catch((err) => { 
            console.log(err); 
          }); 
    };

  return (
    <div>
        <form class="form-style">
            <h1 class="h1update"> Update User Details</h1> <br/>
            <input type="text" value={username} 
            onChange={(us) => setusername(us.target.value)} 
        /> &nbsp;&nbsp;
        <input 
          type="text" value={useremail} 
          onChange={(us) => setuseremail(us.target.value)} 
        /> &nbsp;&nbsp;
        <input 
          type="password" 
          value={password} 
          onChange={(us) => setpassword(us.target.value)} 
        />{" "} 
        <br></br> <br></br> 
        <button onClick={updates} class="updatebtn btn bg-success" type="button"> 
          Updating Staff Details 
        </button> 
        <div> <br/>
          <h3 class="h3update"> 
            {" "} 
            Username: {username} <br></br>
            Email: {useremail} <br></br> 
            Password: {password} 
          </h3> <br/>
          <h4 class="resp">Response Message: {responseMsg}</h4> 
        </div> 
      </form> 
    </div>
  )
}

export default Updateuser