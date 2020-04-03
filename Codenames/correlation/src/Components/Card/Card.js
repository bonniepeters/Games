import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
      <div className={this.props.card.color}>
        <h3 className="word">{this.props.card.word}</h3>
        <button className="button beige"></button>
        <button className="button red"></button>
        <button className="button blue"></button>
        <button className="button tan"></button>
        <button className="button black"></button>
      </div>
    );
  }
}

export default Card;
