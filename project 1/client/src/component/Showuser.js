import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Showuser = () => {
    const [listOfUsers, setlistOfUsers] = useState([]);
    const [countRecords, setcountRecords] = useState(0);
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/getAllUsers`)
      .then((response) => {
        console.log(response);
        setlistOfUsers(response.data.user);
        setcountRecords(response.data.count);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);


  return (
    <div class='div6'><br/> <br/> <br/> 
      <h1 class='h12'>Read Table </h1> <br/>
        <table class='table1'>
            <thead>
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
            </thead>
            <br/> 
            <tbody>
                {listOfUsers.map((st) => {
                    return (
                        <tr>
                          <td>{st.username}</td>
                          <td>{st.useremail}</td>
                          <td>{st.password}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
      <div class="h33"> <br/><br/>
        <p>Total Documents = {countRecords}</p>
      </div> <br/><br/><br/><br/><br/><br/>
    </div>
  )
}

export default Showuser