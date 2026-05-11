import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const Putuser = () => {
    const [ListOfUsers, setListOfUsers] = useState([]);
    const [countRecords, setcountRecords] = useState(0);
    //const [responseMsg, setresponseMsg] = useState();

    useEffect(() => { 
        axios.get(`${process.env.REACT_APP_API_URL}/getAllUsers`).then((response) => { 
          console.log(response); 
          setListOfUsers(response.data.user); 
          setcountRecords(response.data.count); 
        }); 
    }, []); 

  return (
    <div>
         <table class="table table-primary"> 
        <thead class="bg-info"> 
          <td>Username</td> 
          <td>Email</td> 
          <td>Password</td> 
        </thead> 
        <tbody> 
          {ListOfUsers.map((us) => { 
            return ( 
              <tr> 
                <td>{us.username}</td> 
                <td>{us.useremail}</td> 
                <td>{us.password}</td> 
                <td> 
 
                  <Link to="/updateuser" state={{ user: us }}> 
                    <button type="button" class="btn btn-info"> 
                      Update 
                    </button> 
                  </Link> 
                </td> 
              </tr> 
            ); 
          })} 
        </tbody> 
      </table> 
      <div> 
        <h3 class="h3update">Total Documents: {countRecords}</h3> 
      </div>
    </div>
  )
}

export default Putuser
