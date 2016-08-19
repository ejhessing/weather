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
            tips: res.body,
            param:this.props.params.value
          })
        })
    },

  getInitialState () {
    return {
      tips: {
        data: []
      },
      param:"",
      suggestion:[]
    }
  },
  goThroughTips(data, i) {
    if (data.description===this.state.param) {
      return (<div className="asd"> <p key={i}> {data.suggestions} </p><span className="sexy_line"></span></div>)
    }
  },
  render () {
    return (
      <div className='app-container'>
        <div className="header">
          <h1>WeatherOrNot</h1>
        </div>
        <div>
          {(this.state.tips.data.map(this.goThroughTips))}
          <Link to="/">Back</Link>
        </div>
        <div className="footer">
          <p> All rights reserved sort of, lefts too </p>
        </div>
      </div>
    )
  }
})
