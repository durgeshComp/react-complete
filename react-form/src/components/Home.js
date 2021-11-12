import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
import { useDispatch, useSelector } from "react-redux";
import { register } from '../actions/auth';

function Home() {

    const [fname, setFname] = useState('')
    const [lname, setLname] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form values: ', fname, lname, email, password);
        fetchApi(fname, lname, email, password)
    }

    const fetchApi = (fname, lname, email, password) => {
        let fullName = fname + lname;
        dispatch(register(fullName, email, password))
    }

    return (
        <div>
            <form style={{ width: "50%", margin: "30px" }}>
                <h3>Sign Up </h3>
                <div className="form-group">
                    <label> First name </label>
                    <input type="text" className="form-control" value={fname} onChange={e => setFname(e.target.value)} placeholder="First name" />
                </div>

                <div className="form-group" >
                    <label> Last name </label>
                    <input type="text" className="form-control" value={lname} onChange={e => setLname(e.target.value)} placeholder="Last name" />
                </div>

                <div className="form-group" >
                    <label> Email address </label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                </div>

                <div className="form-group" >
                    <label > Password </label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                </div>

                <button className="btn btn-primary btn-block" onClick={handleSubmit} > Sign Up </button>
            </form>

            <p className="forgot-password" >Already registered <Link to="/login" > sign in ? </Link> </p>
        </div>
    )
}

export default Home