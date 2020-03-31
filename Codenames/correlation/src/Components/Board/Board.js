import React from "react";
import listOfCards from "../../Cards.json";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            words: []
        };
        this.handleDeal = this.handleDeal.bind(this);
    }
    handleDeal() {
        let random25 = []
        while (random25.length < 25) {
            random25.push(listOfCards[Math.floor(Math.random() * 403)].word)
        };
        this.setState({ words: random25 })
    }
    render() {
        let cards = this.state.words.map(card => {
            return (
                <h3>{card}</h3>
            )
        })
        return (
            <div className="board">
                <h2>BOARD</h2>
                <button onClick={this.handleDeal}>Deal!</button>
                {cards}
            </div>
        )
    }
}

export default Board;