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
        const winner=calculatewinner(squares)

        if(winner || squares[i]){
            
            return
        }
        
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
    render(i){
        const history=this.state.history
        const current=history[this.state.stepno]
        let status 
        let tie
        const winner=calculatewinner(current.squares)
        if(winner){
            status="Congratulations, Winner is "+ winner;
        }
        else{
            status="Next player is "+(this.state.xisnext?'X':'0')
        }
        
        return(
            <div className="game">
                <div className="game-board">
                <Board clickaction={(i)=>this.handleclick(i)} squares={current.squares}/> 
                </div>
                <div class="game-info">
                    <div>{status}</div>
                </div>
            </div>  
        )
    }
}

function calculatewinner(squares){
    const possibilities=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i=0;i<possibilities.length;i++){
        const [a,b,c]=possibilities[i]
        if(squares[a] && squares[a]===squares[b] && squares[b]===squares[c]){
            return squares[a]
        }
    }
    return null
}

