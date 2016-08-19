import React from 'react'

export default React.createClass({
  propTypes: {
    city: React.PropTypes.string,
    country: React.PropTypes.string
  },

  render () {
    return (
      <div className="location">
        <h2>{this.props.city},</h2>
        <br/>
        <h2>{this.props.country}</h2>
      </div>
    )
  }
})
