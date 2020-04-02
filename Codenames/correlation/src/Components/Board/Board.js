import React from "react";
import listOfCards from "../../Cards.json";
import "./Board.css";

class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: []
        };
        this.handleDeal = this.handleDeal.bind(this);
        // this.handleColor = this.handleColor.bind(this);
    }
    handleDeal() {
        let random25 = []
        while (random25.length < 25) {
            random25.push(listOfCards[Math.floor(Math.random() * 400)])
        };
        this.setState({ cards: random25 })
    }
    // handleColor(e) {
    // }
    render() {
        let cards = this.state.cards.map(card => {
            return (
                <div className={card.color}>
                    <h3 className="word">{card.word}</h3>
                    <button className="button beige"></button>
                    <button className="button red"></button>
                    <button className="button blue"></button>
                    <button className="button tan"></button>
                    <button className="button black"></button>
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