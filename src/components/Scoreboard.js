import React, { useEffect } from "react";

const Scoreboard = ({score, bestScore, highestScore, setBestScore}) => {

    useEffect(() => {
        if (score === highestScore) {
            setBestScore(score);
        }
    }, [score])

    return (
        <div className="scoreboard">
            <div>score: {score}</div>
            <div>best score: {bestScore}</div>
        </div>
    )
}

export default Scoreboard;