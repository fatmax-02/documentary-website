import React, {useState, useEffect} from 'react'
import axios from 'axios'

const Deleteuser = () => {
    const [listOfUsers, setlistOfUsers] = useState([]); 
    const [countRecords, setcountRecords] = useState(0); 
    const [responseMsg, setresponseMsg] = useState(); 

    useEffect(() => { 
        axios.get("http://localhost:4005/getAllUsers") 
        .then((response) => { 
            console.log(response); 
            setlistOfUsers(response.data.user); 
            setcountRecords(response.data.count);
            }) 
        .catch((err) => { 
          console.log(err); 
        }); 
    }, []); 

    const deluser = async (id) => { 
        axios.delete(`http://localhost:4005/delete/${id}`) 
    .then((response) => { 
          setlistOfUsers( 
            listOfUsers.filter((val) => { 
              return val._id !== id; 
            }) 
          ); 
          setcountRecords(response.data.count); 
          setresponseMsg(response.data.msg); 
        }); 
      };

  return (
    <div> <br/><br/>
        <table class="table table-dark table-striped-columns"> 
        <thead class="bg-info"> 
          <td>Username</td> 
          <td>Email</td> 
          <td>Password</td> 
        </thead> 
        <tbody> 
          {listOfUsers.map((us) => { 
            return ( 
              <tr> 
                <td>{us.username}</td> 
                <td>{us.useremail}</td> 
                <td>{us.password}</td> 
                <td> 
                  <button 
                    type="button" 
                    class="btn btn-warning" 
                    onClick={() => deluser(us._id)}> 
                    Delete 
                  </button> 
                </td> 
              </tr> 
            ); 
          })} 
        </tbody> 
      </table>
            <br/><br/>
      <h3 class="delresp"> {responseMsg}</h3> <br/>
      <h3 class="h33">Remaining Documents: {countRecords}</h3>
          <br/><br/><br/>
    </div>
  )
}

export default Deleteuser