import React from 'react';

export default function Button(props) {
    console.log(props);
    return (
        <button className={`btn btn-${props.color} w-100`} onClick={() => props.handleClick(props.step)}>+{props.step} - {props.count}</button>
    )
}
