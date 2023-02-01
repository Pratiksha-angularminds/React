import React, { useState } from 'react';
import { calculateWinner } from '../helper';
import Board from './Board';


function Game() {

    const [board, setBoard] = useState([Array(9).fill(null)]);
    
    const [xIsNext,setxIsNext] = useState(true)
    const winner = calculateWinner(board)

    
    const handleClick = (i) => {
        const boardCopy = [...board]
        // return if won or occupied
        if (winner || boardCopy[i]) return;
        // select square
        boardCopy[i] = xIsNext ? 'X' : 'O'
        setBoard(boardCopy)
        setxIsNext(!xIsNext);
      }

    const renderMoves = () =>
    {
        return (
                <button onClick={() => setBoard(Array(9).fill(null))}>
                    start game
                </button>
        )
    }
    
    return (
        <>
            <h1> Tic Tac Toe Game </h1>
            <Board squares={board} onClick={handleClick}/>
            <div className="info-wrapper">
                <h3>{winner ? "Winner: " + winner : "Next Player: " + (xIsNext ? 'x' : 'O')}</h3>
                {renderMoves()} 
            </div>
        </>
    );
}

export default Game;
