export default function login() {
    return (
        <div>
            <form className="login">
                <h1>Login Here !</h1>
                <input type="text" placeholder="username" />
                <input type="password" placeholder="your password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}