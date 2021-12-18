import React from 'react';
import './Dice.css';


class Dice extends React.Component {
    state = {
        dice1: 0,
        dice2: 0,
        diceSum: 0
    }
    rollDice = () => {
        const dice1 = (Math.floor(Math.random()*6) + 1);
        const dice2 = (Math.floor(Math.random()*6) + 1);

        if (dice1 === 6 && dice2 === 6) {
            this.setState({
                diceSum: 0 },
                this.AssignDice);
        } else {
            this.setState({
                dice1: dice1,
                dice2: dice2,
                diceSum: dice1+dice2},
                this.assignDice);
            }
    }
   
    assignDice = () => {
        document.querySelector("#dice1").className = `number${this.state.dice1}`;
        document.querySelector("#dice2").className = `number${this.state.dice2}`;
        console.log(this.state.diceSum)
        this.props.onChange(this.state.diceSum);
    };
    
    render () {
        return (
            <div>
                <button className='diceButton' onClick={this.rollDice}>Dice</button>
                <div id="dice1">{this.state.dice1}</div>
                <div id="dice2">{this.state.dice2}</div>
                <button type="button" onClick={this.props.onClick} className="hold-btn">
					<i className="fas fa-hand-holding"></i> Hold
				</button>
            </div>
        )
    }
}
export default Dice;