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
        <p>Celsius: {Math.round(this.getCelsius(this.props.temp), -1)}</p>
        <p>Fahrenheit: {Math.round(this.props.temp)}</p>
      </div>
    )
  }
})
