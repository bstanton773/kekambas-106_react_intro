import React, { useState } from 'react';
import Button from './Button';

export default function ButtonDisplay(props) {
    let buttons = [
        {color: 'primary', step: 1},
        {color: 'secondary', step: 10},
        {color: 'success', step: 100},
        {color: 'danger', step: 1000},
    ];

    const [count, setCount] = useState(0);

    // Function to handle the button click, that will change the count variable to whatever it currently is plus the step
    function handleClick(step){
        let newCount = count + step
        setCount(newCount)
    };

    

    return (
        <>
            <h1>Hello {props.myName}, Count: {count}</h1>
            {buttons.map((button, idx) => <Button color={button.color} step={button.step} key={idx} handleClick={handleClick} count={count}/>)}
        </>
    );
}
