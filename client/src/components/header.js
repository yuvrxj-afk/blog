import { Link } from "react-router-dom";
import { useEffect, useContext } from "react";
import { UserContext } from "../userContext.js";

export default function Header() {

    const { setUserInfo, userInfo } = useContext(UserContext)

    useEffect(() => {
        fetch('http://localhost:4000/profile', {
            credentials: 'include'
        }).then(response => {
            response.json().then(userInfo => {
                setUserInfo(userInfo)
            })
        })
    }, [])

    function logout() {
        fetch('http://localhost:4000/logout', {
            credentials: 'include',
            method: 'POST'
        })
        setUserInfo(null)
    }

    const username = userInfo?.username

    return (
        <header>
            <Link to="/" className="logo">Blogs.</Link>
            <nav>
                {username && (
                    <>
                        <Link to='/create'>Create Post</Link>
                        <Link onClick={logout}>Logout</Link>
                    </>
                )}
                {!username && (
                    <>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </>
                )}

            </nav>
        </header>
    )
}