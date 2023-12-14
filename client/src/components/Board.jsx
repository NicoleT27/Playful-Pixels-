import React from "react";
import Square from "./Square";
import { calculateWinner } from "../utils/helpers";
import "../components/Board.css"


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
        status = `${winner} has won the game!`;
    } else {
        status = `It's ${isX ? 'X' : 'O'}'s turn`;
    }

    return (
        
        <div className="board">
            <div className="instructions">Decide which player will be <span className="x">X</span> and which will be <span className="O">O</span>. The first player <span className="x">(X)</span> places their mark in any empty cell. The second player <span className="O">(O)</span>then places their mark in an empty cell.
Continue taking turns until three of your marks line up in a row horizontally, vertically, or diagonally.Will you be the <span className="x">X</span>ceptional winner or the <span className="O">O</span>ustanding champion?</div>
            <div className="status">{status}</div>
            <div className="ticTacToeRow">
                <div className="boxDecoration right"><Square value={squares[0]} onClick = {() => handleClick(0)} /></div>
                <div className="boxDecoration right"><Square value={squares[1]} onClick = {() => handleClick(1)}/></div>
                <div className="boxDecoration"><Square value={squares[2]} onClick = {() => handleClick(2)}/></div>
            </div>
            <div className="ticTacToeRow">
                <div className="boxDecoration right top"><Square value={squares[3]} onClick = {() => handleClick(3)} /></div>
                <div className="boxDecoration right top"><Square value={squares[4]} onClick = {() => handleClick(4)}/></div>
                <div className="boxDecoration top"><Square value={squares[5]} onClick = {() => handleClick(5)}/></div>
            </div>
            <div className="ticTacToeRow">
                <div className="boxDecoration right top"><Square value={squares[6]} onClick = {() => handleClick(6)} /></div>
                <div className="boxDecoration right top"><Square value={squares[7]} onClick = {() => handleClick(7)}/></div>
                <div className="boxDecoration top"><Square value={squares[8]} onClick = {() => handleClick(8)}/></div>
            </div>
            
            <button className="restart" onClick={handleRestart}>Restart Game</button>
        </div>
    )
}

export default Board;