import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [useremail, setUseremail] = useState("");
    const [password, setPassword] = useState("");
    const [age, setAge] = useState("");
    const [agreeToTerms, setAgreeToTerms] = useState(false);
    const [resMsg, setresMsg] = useState("");

    const registerUser = () => {
        axios
            .post(`${process.env.REACT_APP_API_URL}/adduser`, {
                username: username,
                useremail: useremail,
                password: password,
                age: age,
                agreeToTerms: agreeToTerms
            })
            .then((res) => {
                setresMsg(res.data);
                if (res.data === "Signed in Successfully") {
                    setUsername("");
                    setUseremail("");
                    setPassword("");
                    setAge("");
                    setAgreeToTerms(false);
                }
            })
            .catch((err) => {
                console.log(err);
                setresMsg(err.response?.data || "Error registering user");
            });
    };

    return (
        <div className="container">
            <div className="box">
                <form className="form-control">
                    <div className="header">
                        <p>Register</p>
                    </div>
                    <div className="input-box">
                        Username :
                        <input type="text" className="form-control input-field" required
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}></input>
                    </div>
                    <div className="input-box">
                        E-Mail :
                        <input type="email" className="form-control input-field" required
                            value={useremail}
                            onChange={(e) => setUseremail(e.target.value)}></input>
                    </div>
                    <div className="input-box">
                        Password :
                        <input type="password" className="form-control input-field" required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}></input>
                    </div>
                    <div className="input-box">
                        Age :
                        <input type="number" className="form-control input-field" required
                            value={age}
                            onChange={(e) => setAge(e.target.value)}></input>
                    </div>
                    <div className="input-box" style={{ marginTop: '5px' }}>
                        <label style={{ fontSize: '13px', display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'normal' }}>
                            <input type="checkbox" checked={agreeToTerms} onChange={(e) => setAgreeToTerms(e.target.checked)} /> 
                            I agree to the Terms and Conditions
                        </label>
                    </div>
                    <div style={{ textAlign: 'center', marginTop: '10px' }}>
                        <Link to="/login" style={{ color: '#d32a46', fontSize: '11px', textDecoration: 'none' }}>Already have an account? Login</Link>
                    </div>
                </form>
                <div className="input-box">
                    <center>
                        <button type="button" onClick={registerUser} className="input-submit">REGISTER</button>
                    </center>
                </div>
                <div> 
                    <br/>
                    <h5 className="logh3">
                        {resMsg}
                    </h5>
                </div>
            </div>
            <div className="wrapper"></div>
        </div>
    );
};

export default Register;