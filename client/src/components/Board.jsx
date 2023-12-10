import React from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/helpers";

function Board() {

    const [squares, setSquares] = React.useState(Array(9).fill(null));
    const [isX, setIsX] = React.useState(true);

    const handleClick = (index) => {
        const newSquares = [...squares]; // Create a copy of the squares array

        if(calculateWinner(newSquares) || newSquares[index]) {
            return
        }
    
        if (newSquares[index] === null) { // Check if the square is already filled
            newSquares[index] = isX ? 'X' : 'O'; // Update the copied array
            setSquares(newSquares); // Set the new array as the new state
            setIsX(!isX); // Toggle the X/O value
        }
    } 

    const handleRestart = () => {
        setIsX(true);
        setSquares(Array(9).fill(null))
    }

    const winner = calculateWinner(squares);
    let status;

    if (winner) {
        status = `Winner: ${winner}`;
    } else {
        status = `It is ${isX ? 'X' : 'O'}'s turn`;
    }

    return (
        <div className="board">
            <div>
                <Square value={squares[0]} onClick = {() => handleClick(0)}/>
                <Square value={squares[1]} onClick = {() => handleClick(1)}/>
                <Square value={squares[2]} onClick = {() => handleClick(2)} />
            </div>
            <div>
                <Square value={squares[3]} onClick = {() => handleClick(3)} />
                <Square value={squares[4]} onClick = {() => handleClick(4)}/>
                <Square value={squares[5]} onClick = {() => handleClick(5)}/>
            </div>
            <div>
                <Square value={squares[6]} onClick = {() => handleClick(6)}/>
                <Square value={squares[7]} onClick = {() => handleClick(7)}/>
                <Square value={squares[8]} onClick = {() => handleClick(8)}/>
            </div>
            <div className="status">{status}</div>
            <button className="restart" onClick={handleRestart}>Restart Game</button>
        </div>
    )
}

export default Board;