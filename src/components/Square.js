import React from 'react'
export default function Square(props){
    
    return(
        <button className="square" onClick={props.handleclick}>
        {props.value}
        </button>
    )
}
