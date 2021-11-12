import React, { useState } from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { login } from '../../actions/auth'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form values: ', email, password);
        fetchApi()
    }

    const fetchApi = () => {
        dispatch(login(email, password))
    }

    return (
        <div>
            <form style={{ width: "50%", margin: "30px" }}>
                <h3>Sign In</h3>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter password" />
                </div>

                <button className="btn btn-primary btn-block" onClick={handleSubmit}>Sign Up</button>
            </form>
            <p className="forgot-password" >Not Registered Yet? <Link to="/signup" > sign up ? </Link> </p>
        </div>
    )
}

export default Login
