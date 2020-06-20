import React from 'react'
import Square from './Square'

export default class Board extends React.Component{
    renderSquare=(i)=>{
        return(
            <Square value={this.props.squares[i]} handleclick={()=>this.props.clickaction(i)}/>
        )
    }
    render(){
        return( //wrapping 3 rows in a single div so parent div will be returned consisting of 3 child div
            <div>
                <div className="border-row">
                    {this.renderSquare(0)} 
                    {this.renderSquare(1)} 
                    {this.renderSquare(2)} 
                </div>
        
                <div className="border-row">
                    {this.renderSquare(3)} 
                    {this.renderSquare(4)} 
                    {this.renderSquare(5)} 
                </div>
        
                <div className="border-row">
                    {this.renderSquare(6)} 
                    {this.renderSquare(7)} 
                    {this.renderSquare(8)}    
                </div>
            </div>
        )
   
        }
}
