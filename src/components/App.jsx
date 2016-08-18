import React from 'react'
import {Link} from 'react-router'


export default React.createClass({
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
