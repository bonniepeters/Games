import React from "react";
import listOfCards from "../../Cards.json";
import "./Board.css";
import Card from "../Card/Card"
import Deal from "../Deal/Deal"

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
                <Card card={card}/>
            )
        })
        return (
            <div className="board">
                <h2>BOARD</h2>
                <Deal handleDeal={this.handleDeal}/>
                <div className="cards">
                    {cards}
                </div>
            </div>
        )
    }
}

export default Board;