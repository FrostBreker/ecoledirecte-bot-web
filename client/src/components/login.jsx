import React, { useState } from "react";
import axios from "axios";
import "./login.css"

function Login() {
    const [input, setInput] = useState({
        username: '',
        password: '',
        userID: ''
    })

    function handleChange(event) {
        const { name, value } = event.target;

        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event) {
        event.preventDefault();
        const newUser = {
            username: input.username,
            password: input.password,
            userID: input.userID
        }


        axios.post('/', newUser)
        alert("Succes, connected")
    }
    
    return  <div className='contact-form'>
        <header>
        <img src="https://zupimages.net/up/21/20/npla.png" alt="EcoleDirecte"/> <h1>EcoleDirecte</h1>
        </header>
        <h2>Connectez-vous</h2>
        <form>

            <input onChange={handleChange} name="username" value={input.username} autoComplete="off" className="form-control" placeholder="username"></input>

            <input onChange={handleChange} name="password" value={input.password} autoComplete="off" className="form-control" placeholder="password" type="password"></input>

            <input onChange={handleChange} name="userID" value={input.userID} autoComplete="off" className="form-control" placeholder="userID"></input>

            <input
                className="button"
                type="button"
                value="Connexion"
                onClick={handleClick}
            />
        </form>
    </div>
}

export default Login;