 import React, { useState, useEffect } from 'react'
import swal from 'sweetalert'
 import { doLogin } from '../config/authenticationHelper'
 import { Link, useNavigate } from 'react-router-dom'
 import { useDispatch } from 'react-redux'
 import { setUser } from '../actions/action'
 
const Signin = () => {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [signinDetails, setSigninDetails] = useState({
        email : '',
        password : ''
    })

    const { email, password } = signinDetails

    // handle values of form element
    const handleChange = name => event => {
        setSigninDetails({...signinDetails, [name] : event.target.value})
    }

    const submitLogin = (e) => {
        e.preventDefault()
        if(email == '' || password == ''){
             swal("Please fill all the fields !!!", '', 'warning')
            return
        }
        let req = {
            email,
            password
        }
        console.log(signinDetails)
        doLogin(req)
        .then((res) => {
            console.log(res.email)
            localStorage.setItem('bezkoder-user', JSON.stringify(res.email))
            dispatch(setUser(res.data))
            navigate('/home')
        })
        .catch(err => {
            console.log(err.response)
            swal('Error', err.response.data.message, 'error')
            setSigninDetails({email: '', password: ''})
        })
    }

    // When user navigate to login page when he is already logged in 
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('bezkoder-user');
        if(isLoggedIn){
            navigate('/home')
        }
    },[]);

    return ( 
        <div className='container my-5'>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title"><b>Bezkoder Account Log In!</b></h4><br/>
                            <form onSubmit={submitLogin}>
                                <div className="form-floating mb-3">
                                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com"
                                        onChange={handleChange(email)} value={email} />
                                    <label htmlFor="floatingInput">Email address</label>
                                </div>
                                <div className="form-floating">
                                    <input type="password" className="form-control" id="floatingPassword" placeholder="Password"
                                        onChange={handleChange(password)} value={password} />
                                    <label htmlFor="floatingPassword">Password</label>
                                </div>
                                <div className='mt-4'>
                                    <button type='submit' className='btn btn-success w-100'>Login</button>
                                </div>
                                <div className="text-center mt-2">
                                    <p className="text-muted mb-0">New user ?&nbsp;
                                        <Link to="/signup">Please do registration</Link>
                                    </p>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}

 export default Signin;