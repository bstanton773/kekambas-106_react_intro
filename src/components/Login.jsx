import React from 'react'

export default function Login() {

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <>
            <h3 className="text-center">Login</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control my-3" placeholder='Enter Username' name='username' />
                    <input type="password" className="form-control my-3" placeholder='Enter Password' name='password' />

                    <input type="submit" value="Log In" className="btn btn-success w-100" />
                </div>
            </form>
        </>
    )
}
