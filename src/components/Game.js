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

    handleclick=(i)=>{
        const history=this.state.history
        const current=history[history.length-1]
        const squares=current.squares
        squares[i]=this.state.xisnext?'X':'0'
        this.setState({
            history:history.concat({
                squares:squares
            }),
            xisnext:!this.state.xisnext,
            stepno:history.length
        })
    }


    //passing prop named value in the board component
    render(){

        return(
            <div className="game">
                <div className="game-board">
                <Board/> 
                </div>
            </div>  
        )
    }
}