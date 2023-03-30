import React from "react"
import { useState } from "react"

export default function Register() {

    const [username, setUserName] = useState()
    const [password, setPassword] = useState()

    async function register(ev) {
        ev.preventDefault()

        const response = await fetch('http://localhost:4000/register', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' }
        })

        if (response.status !== 200) {
            alert('Request failed')
        }
        else{
            alert('User Added Successfully!')
        }
    }

    return (
        <div>
            <form className="register" onSubmit={register}>
                <h1>Register Here !</h1>
                <input
                    type="text"
                    placeholder="username"
                    value={username}
                    onChange={ev => setUserName(ev.target.value)} />
                <input
                    type="password"
                    placeholder="password"
                    value={password}
                    onChange={ev => setPassword(ev.target.value)}
                />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}