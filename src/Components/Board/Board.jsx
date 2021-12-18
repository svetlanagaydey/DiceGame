import React from 'react';
import Player from '../Player/Player.jsx';
import Dice from '../Dice/Dice.jsx'
class Border extends React.Component {
    state = { p1Score: 0, p2Score: 0, p1Temp: 0, p2Temp: 0, playerTurn: 1, pointsToWin: 0};
    

    GetPointsToWid = () => {
        const input = document.querySelector('.pointsToWin');
        this.setState({ pointsToWin: +input.value})
        console.log(this.state.pointsToWin)
    }

    HoldScore = () => {
		const { playerTurn } = this.state;
		const currentPlayer = `p${playerTurn}`;
		const sum = this.state[`${currentPlayer}Score`];
		this.setState(
			{
                [`${currentPlayer}Score`]: this.state[`${currentPlayer}Temp`] + sum,
				playerTurn: playerTurn === 1 ? 2 : 1,
				[`${currentPlayer}Temp`]: 0,
            },
            this.CheckScore,
		);
    };
    
    OnScoreChange = (sum) => {
		const currentPlayer = `p${this.state.playerTurn}`;
		sum === 0
			? this.setState({ [`${currentPlayer}Temp`]: 0 }, this.HoldScore)
			: this.setState({ [`${currentPlayer}Temp`]:  sum });
    };
    
    CheckScore = () => {
		if (this.state.p1Score >= this.state.pointsToWin) {
			console.log("P1 Wins");
		} else if (this.state.p2Score >= this.state.pointsToWin) {
			console.log("P2 Wins");
		}
    };
    
    Reset = () => {
        this.setState({p1Score: 0, p2Score: 0, p1Temp: 0, p2Temp: 0, playerTurn: 1});
    }

    render () {
        const { p1Score, p2Score, p1Temp, p2Temp } = this.state;
        return (
            <div>
                <input type="number" onKeyPress={this.GetPointsToWid} className="pointsToWin"/>
                <Dice onChange={this.OnScoreChange} onClick={this.HoldScore} />
                <button type="button" onClick={this.Reset}>Reset</button>
                <Player playerNumber={1} tempScore={p1Temp} globalScore={p1Score} />
                <Player playerNumber={2} tempScore={p2Temp} globalScore={p2Score} />
                
                
            </div>
        )
    }
}
export default Border;