import React, { useState } from "react";
import Header from "./Header";
import ImageDisplay from "./ImageDisplay";

import "../styles/style.css"


const Game = () => {

    const highestScore = 3;

    const [score, setScore] = useState(0)
    const [bestScore, setBestScore] = useState(0);

    const incrementScore = () => {
        setScore(score + 1)
    }

    const resetScore = () => {
        setScore(0)
    }

    const incrementBestScore = () => {
        if (score > bestScore) {
            setBestScore(score)
        }
    }

    const reloadPage = () => {
        window.location.reload();
    }

    return (
        <div className="gameboard">
            
            <Header score = {score} bestScore = {bestScore} setBestScore = {setBestScore} />

            { bestScore === highestScore ? <button className="again_btn" onClick={reloadPage}>Play Again</button> :

                <ImageDisplay incrementScore = {incrementScore} 
                    resetScore = {resetScore} 
                    incrementBestScore = {incrementBestScore} />
            }
        </div>
    )
}

export default Game;