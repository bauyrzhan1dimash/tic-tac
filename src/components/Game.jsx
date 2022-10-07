import React, {useState} from 'react';
import './Game.css'
import Board from './Board';
import {calculatorWinner} from '../helper';

const Game = () => {
    
    const [board, setBoard] = useState(Array(9).fill(null))
    
    const[xIsNext, setXIsNext] = useState(true)

    const winner = calculatorWinner(board)

    const hendleClick = (index) =>{

        const boardCopy = [...board]
        
        if(winner || boardCopy[index]) return
        
        boardCopy[index] = xIsNext ? 'X' : 'O'
        
        setBoard(boardCopy)
        setXIsNext(!xIsNext)
    }

    const startNewGame = () => {
        return(
            <button className='start_btn' onClick={() => setBoard(Array(9).fill(null))}>Очистить поле </button>
        )
    }

    return (
        <div className='wrapper'>
            {startNewGame() }
            <Board squares={board} click={hendleClick}/>
            <p className='game__info'>
            {winner ? 'ВЫЙГРАЛ: ' + winner : 'СЕЙЧАС ХОДИТ ' + (xIsNext ? 'X' : 'O' ) }
            </p>
        </div>
    )
}

export default Game;