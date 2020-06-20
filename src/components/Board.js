import React from 'react'
import Square from './Square'

export default function Board(props){
    return( //wrapping 3 rows in a single div so parent div will be returned consisting of 3 child div
    <div>
        <div className="border-row">
            <Square/>  
            <Square/>
            <Square/>
        </div>

        <div className="border-row">
            <Square/>  
            <Square/>
            <Square/>
        </div>

        <div className="border-row">
            <Square/>  
            <Square/>
            <Square/>
        </div>
    </div>
    )
}
