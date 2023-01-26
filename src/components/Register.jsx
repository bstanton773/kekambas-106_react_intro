import React, { Component } from 'react'

export default class Register extends Component {

    handleRegister = event => {
        event.preventDefault();
        console.log(event);
    }


    render() {
        return (
            <>
                <h3 className="text-center">Register</h3>
                <form action="" onSubmit={this.handleRegister}>
                    <div className="form-group">
                        <input type="text" className="form-control my-3" placeholder='Enter Email' name='email' />
                        <input type="text" className="form-control my-3" placeholder='Enter Username' name='username' />
                        <input type="password" className="form-control my-3" placeholder='Enter Password' name='password' />
                        <input type="password" className="form-control my-3" placeholder='Confirm Password' name='confirmPass' />

                        <input type="submit" value="Register" className="btn btn-success w-100" />
                    </div>
                </form>
            </>
        )
    }
}
