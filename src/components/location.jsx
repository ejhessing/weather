import React from 'react'

export default React.createClass({
  propTypes: {
    city: React.PropTypes.string,
    country: React.PropTypes.string
  },

  render () {
    return (
      <div className="location">
        <p>{this.props.city}</p>
        <p>{this.props.country}</p>
      </div>
    )
  }
})
