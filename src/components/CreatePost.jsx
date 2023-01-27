import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePost(props) {

    const navigate = useNavigate();
    useEffect(() => {
        if (!props.loggedIn){
            props.flashMessage('You must be logged in to view this page', 'danger');
            navigate('/login');
        }
    })

    const handleSubmit = event => {
        event.preventDefault();
        console.log(event);
    }

    return (
        <>
            <h3 className="text-center">Create A New Post</h3>
            <form action="" onSubmit={handleSubmit}>
                <div className="form-group">
                    <input type="text" className="form-control my-3" placeholder='Enter Title of Post' name='title'/>
                    <input type="text" className="form-control my-3" placeholder='Enter Body of Post' name='body'/>

                    <input type="submit" value="Create Post" className="btn btn-success w-100" />
                </div>
            </form>
        </>
    )
}
