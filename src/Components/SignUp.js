import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const [creds, setCreds] = useState({ name: "", email: "", password: "" })

    let navigate = useNavigate()

    const handelChange = (e) => {
        setCreds({ ...creds, [e.target.name]: e.target.value })
    }

    const signup = async (e) => {
        e.preventDefault()
        const url = 'http://localhost:5000/mynotebook/auth/signup'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: creds.name, email: creds.email, password: creds.password })
        });
        const json = await response.json();
        console.log(json);
        if (json.success) {
            localStorage.setItem('token', json.token)
            navigate('/')
        } else {
            alert('enter correct creds')
        }
    }

    return (
        <div className='container my-4'>
            <form onSubmit={signup}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">User Name</label>
                    <input name='name' onChange={handelChange} value={creds.name} type="text" className="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                    <input name='email' onChange={handelChange} value={creds.email} type="email" className="form-control" id="email" aria-describedby="emailHelp" />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                    <input name='password' onChange={handelChange} value={creds.password} type="password" className="form-control" id="password" />
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default SignUp
