import React, { useEffect } from "react";

const Scoreboard = ({score, bestScore, setBestScore}) => {

    useEffect(() => {
        if (score === 3) {
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