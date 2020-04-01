import React from "react";
import listOfCards from "../../Cards.json";
import "./Board.css";

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
            random25.push(listOfCards[Math.floor(Math.random() * 400)].word)
        };
        this.setState({ words: random25 })
    }
    render() {
        let cards = this.state.words.map(card => {
            return (
                <div className="card">
                    <h3 className="word">{card}</h3>
                    {/* <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div> */}
                </div>
            )
        })
        return (
            <div className="board">
                <h2>BOARD</h2>
                <button onClick={this.handleDeal}>Deal!</button>
                <div className="cards">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Board;