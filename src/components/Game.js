import React from 'react'
import Board from './Board'

export default class Game extends React.Component{
    constructor(){
        super() 
        this.state={
            xisnext:true,
            stepno:0,
            history:[
                {squares: Array(9).fill(null)}
            ],
            value:5
        }
    }

    changestate=()=>{
        this.setState({
            value:6
        })
    }

    somefn=()=>{
        return 5
    }

    //passing prop named value in the board component
    render(){
        console.log(this.state)
        const result=this.somefn()
        return(
            <div className="game">
                <div className="game-board">
                <Board value={result}/> 
                <button onClick={()=>this.changestate()}>Click Me!!</button>
                </div>
            </div>  
        )
    }
}