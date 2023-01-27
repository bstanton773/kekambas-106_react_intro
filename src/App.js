import React, { useState } from "react";
import { Routes, Route } from 'react-router-dom';
import AlertMessage from "./components/AlertMessage";
import ButtonDisplay from "./components/ButtonDisplay";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
// import RacerDisplay from "./components/RacerDisplay";
import RacerDisplayClass from "./components/RacerDisplayClass";
import Register from "./components/Register";


function App(props){
    // Setting state variables (these variables will preserve their value across function calls i.e. new renders of component)    
    const [myName, setMyName] = useState('');
    const [myCity, setMyCity] = useState('');

    const [message, setMessage] = useState(null);
    const [category, setCategory] = useState(null);

    // Function that will update myName and myCity variables with whatever strings are passed into it
    function updateUserInfo(username, usercity){
        setMyName(username);
        setMyCity(usercity);
    };

    function flashMessage(message, category){
        setMessage(message);
        setCategory(category);
    }

    return (
        <>
            <Navbar city={myCity} name={myName} updateUser={updateUserInfo} />
            <div className="container">
                {message ? <AlertMessage message={message} category={category} flashMessage={flashMessage} /> : null}
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/buttons' element={<ButtonDisplay myName={myName} />} />
                    {/* <Route path='/standings' element={<RacerDisplay />} /> */}
                    <Route path='/standings' element={<RacerDisplayClass />} />
                    <Route path='/register' element={<Register flashMessage={flashMessage} />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
