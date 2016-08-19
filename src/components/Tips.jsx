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
      return (<p key={i}> {data.suggestions} </p>)
    }
  },
  render () {
    return (
      <div className='info-container'>
        <p>Info Page</p>
        <div>
          {(this.state.tips.data.map(this.goThroughTips))}
          <Link to="/">Back</Link>
        </div>
      </div>
    )
  }
})
