import React from 'react'
import {Link} from 'react-router'
import request from 'superagent'
import Sunny from './Sunny'
import PartlyCloudy from './PartlyCloudy'
import Cloudy from './Cloudy'
import Rainy from './Rainy'
import Thunder from './Thunder'

export default React.createClass({
  componentDidMount () {
      request
        .get('http://192.168.20.48:3000')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          this.setState({
            info: res.body
          })
        })
    },

  getInitialState () {
    return {
      ip: [],
      info: [],
      currentWeather: 'Sunny'
    }
  },

  render () {
    return (
      <div className='app-container'>
        <p>Weather</p>
        <div>
          <Link to="/tips">What does this mean?!</Link>
          <Weather imagePath={this.props.currentWeather}/>
        </div>
      </div>
    )
  }
})
