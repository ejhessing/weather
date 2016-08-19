import React from 'react'

export default React.createClass({
  propTypes: {
    imagePath: React.PropTypes.string.isRequired
  },

  render () {
    return (
      <div className="imageContainer">
        <img className="image" src={this.props.imagePath}/>
      </div>
    )
  }
})
