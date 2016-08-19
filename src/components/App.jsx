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
        <div className="header">
          <h1>WeatherOrNot</h1>
        </div>
        <div className="content">
          <div className="infoHolder">
            <div className="infoText">
              <Location country={this.state.ip.country} city={this.state.ip.city}/>
              <br/><br/><br/><br/><br/><br/>
              <Temp temp={this.state.currentWeather.currently.apparentTemperature}/>
            </div>
            <Weather imagePath={this.state.currentWeather.currently.summary}/>
          </div>
          <br/><br/><br/><br/>
          <Link to={'/tips/' + this.state.currentWeather.currently.summary} className="linkNoDec">What does this mean?!</Link>
        </div>
        <div className="footer">
          <p> All rights reserved sort of </p>
        </div>
      </div>
    )
  }
})
