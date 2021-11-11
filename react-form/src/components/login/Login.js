import React,{useState} from 'react'
import './Login.css'
import { Link, useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import {login} from '../../actions/auth'


function Login() {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const { isLoggedIn } = useSelector(state => state.auth);
  const { message } = useSelector(state => state.message);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('form values: ',  email, password);
        fetchApi()
    }

    const fetchApi = () => {
        // fetch('http://localhost:5000/api/signin', {
        //     method: 'post',
        //     headers: {'Content-Type': 'application/json'},
        //     body: JSON.stringify({
        //         "email": email,
        //         "password": password
        //     })
        // })
        // .then((res) => res.json())
        // .then(data => {
        //     localStorage.setItem('user_token', data.token)
        //     localStorage.setItem('user_details', data.message)
        //     // window.location.href = "/dashboard"
        //     history.push('/landing/dashboard')
        // })
        // .catch((err) => console.error(err))

        dispatch(login(email, password))
            .then((res) => console.log('response is:', res))
            .catch((err) => console.log('err ise: ', err))
    }


    return (
        <div>
            <form style={{width: "50%" , margin: "30px"}}>
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
            <p className = "forgot-password" >Not Registered Yet? <Link to = "/signup" > sign up ? </Link> </p> 
        </div>
    )
}

export default Login
