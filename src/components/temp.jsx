import React from 'react'

export default React.createClass({
  propTypes: {
    temp: React.PropTypes.string,
  },
  getCelsius (data) {
    return ((this.props.temp - 32)*5/9)
  },
  render () {
    return (
      <div className="temp">
        <h3>{Math.round(this.getCelsius(this.props.temp), -1)} &#8451;</h3>
        <br/>
        <h3>{Math.round(this.props.temp)} &#8457;</h3>
      </div>
    )
  }
})
