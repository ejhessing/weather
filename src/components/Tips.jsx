import React from 'react'
import {Link} from 'react-router'

export default React.createClass({
  render () {
    return (
      <div className='info-container'>
        <p>Info Page</p>
        <div>
          <Link to="/">Back</Link>
        </div>
      </div>
    )
  }
})
