import React, { Component } from "react";
// import Card from "../Card/Card";
import listOfCards from "../../Cards.json";

class Board extends Component {
    render() {
        const cards = listOfCards.map(card => {
            return (
                <>
                    <h3>{card.word}</h3>
                </>
            );
        });
        return (
            <div className="board">
                <h2>BOARD</h2>
                <div>
                    {cards}
                </div>
            </div>
        )
    }
}

export default Board;