import React, { Component } from "react";
import Header from "../Header/Header";
import Board from "../Board/Board";
import Scoreboard from "../Scoreboard/Scoreboard";


class Main extends Component {
    render() {
        return (
            <div className="main">
                <h1>MAIN</h1>
                <Header />
                <Board />
                <Scoreboard />
            </div>
        )
    }
}

export default Main;