import React from "react";
import PropTypes from 'prop-types'

export default class Card extends React.Component {
  render() {
    return (
      <div className="card bg-light " key={this.props.i} style={{ width: 300 }}>
        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{this.props.date}</h5>
            <hr style={{ color: "blue" }} />
            <p className="card-text" style={{ textAlign: "justify" }}>{this.props.description}</p>
          </div>
          <div>
            <a href="#" className="btn btn-primary mt-4">{this.props.name}</a>
          </div>
        </div>
      </div>
    )
  }
}

Card.propTypes = {
  date: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string,
  i: PropTypes.number
}