import React from 'react'

export default function Navbar(props) {

    function handleForm(e){
        e.preventDefault();
        // Get the data from the form inputs
        let name = e.target.username.value;
        let city = e.target.hometown.value;
        // Pass form data into updateUser function from parent component (App)
        props.updateUser(name, city);
        // Reset input values to empty strings
        e.target.username.value = '';
        e.target.hometown.value = '';
    }

    return (
        <nav className="navbar bg-body-tertiary">
            <div className='container-fluid'>
                {
                    props.city && props.name ?
                    <a className='navbar-brand' href="/">Welcome {props.name} from {props.city}</a> :
                    <a className="navbar-brand" href='/'>Welcome Stranger</a>
                }
                <form action="" className="row" onSubmit={handleForm}>
                    <div className="col">
                        <input type="text" name="username" className="form-control" placeholder="Enter Name" />
                    </div>
                    <div className="col">
                        <input type="text" name="hometown" className="form-control" placeholder="Enter Hometown" />
                    </div>
                    <div className="col">
                        <input type="submit" className="btn btn-success" />
                    </div>
                </form>
            </div>
        </nav>
    )
}