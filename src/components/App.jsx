import React from 'react'
import {Link} from 'react-router'
import request from 'superagent'
import Weather from './weatherImage'
import Location from './location'
import Temp from './temp'

export default React.createClass({
  componentDidMount () {
      request
        .get('http://192.168.20.48:3000/ip')
        .end((err, res) => {
          if (err) {
            console.error(err.message)
            return
          }
          this.setState({
            ip: res.body
          })
        request
          .get('http://192.168.20.48:3000/weather')
          .end((err, res) => {
            if (err) {
              console.error(err.message)
              return
            }
            this.setState({
              currentWeather: res.body
            })
          })
        })
    },

  getInitialState () {
    return {
      ip: {},
      currentWeather: {
        currently: {
          apparentTemperature:"",
          summary: ""
        }
      }
    }
  },

  render () {
    return (
      <div className='app-container'>
        <p>Weather</p>
        <div>
          <Link to="/tips">What does this mean?!</Link>
          <Location country={this.state.ip.country} city={this.state.ip.city}/>
          <Temp temp={this.state.currentWeather.currently.apparentTemperature}/>
          <Weather imagePath={this.state.currentWeather.currently.summary}/>
          {console.log(this.state.currentWeather.currently.apparentTemperature)}
        </div>
      </div>
    )
  }
})
