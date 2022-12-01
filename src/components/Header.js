import React from "react";
import Scoreboard from "./Scoreboard";

const Header = ({score, bestScore, setBestScore, highestScore}) => {
    return (
        <div className="header">
            <h1>Memory Game</h1>
            <h4>Click each image only once!</h4>
            <Scoreboard score={score} bestScore={bestScore} highestScore = {highestScore} setBestScore = {setBestScore} />
        </div>
    )
}

export default Header;