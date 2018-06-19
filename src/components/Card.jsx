import React, { Component } from "react";
import { Link } from "react-router-dom";

class Card extends Component {
  render() {
    var quote = this.props.quotes.map(quote => {
      return this.props.quotes[
        Math.floor(Math.random() * this.props.quotes.length)
      ];
    });
    return (
      <div className="animated fadeInUp row ">
        <Link to={`/edit`}>
          <div className="col s12 m6">
            <div className="card" onClick={this.props.renderCard}>
              <div className="card-image">
                <img src={this.props.img} alt="beach" />
                <span className="card-title">Inspogram</span>
              </div>
              <div className="card-content">{quote[0]}</div>
            </div>
          </div>
        </Link>
      </div>
    );
  }
}

export default Card;
