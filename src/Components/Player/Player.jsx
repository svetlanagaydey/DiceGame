import React from "react";
import Counter from "../Counter/Counter.jsx";
import './Player.css';
const Player = (props) => {
	const { globalScore, tempScore, playerNumber } = props;
	return (
		<div className={`player-${playerNumber}`}>
			<h2 className="playerTitle">Player {playerNumber}</h2>
			<Counter playerNumber={playerNumber} isTemp={false} score={globalScore} />
			<Counter playerNumber={playerNumber} isTemp={true} score={tempScore} />
		</div>
	);
};
export default Player;