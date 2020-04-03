import React, { Component } from "react";

class Deal extends Component {
    render() {
        return (
            <button className="deal-button" onClick={this.props.handleDeal}>Deal!</button>
        )
    }
}

export default Deal;
