import React from 'react'
import {Link} from 'react-router'
import request from 'superagent'


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
      info: [] }
  },
  render () {
    return (
      <div className='app-container'>
        <p>Weather</p>
        <div>
          <Link to="/tips">What does this mean?!</Link>

        </div>
      </div>
    )
  }
})
