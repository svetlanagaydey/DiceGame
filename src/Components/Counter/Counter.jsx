import React from 'react';
class Counter extends React.Component {
	render() {
		const { playerNumber, isTemp } = this.props;
		const counterClass = isTemp ? `temp-counter-${playerNumber}` : `counter-${playerNumber}`;
		const counterText = isTemp ? `Temp Score:` : `Total Score:`;
		return (
			<div className={counterClass}>
				<h3 className="counterTitle">
					{counterText} 
				</h3>
				<p className="counterScore">
					CURRENT <br/>
					{this.props.score}
				</p>
			</div>
		);
	}
}
export default Counter;