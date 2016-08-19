import React from 'react'

export default React.createClass({
  propTypes: {
    imagePath: React.PropTypes.string
  },

  render () {
    return (
      <div className="imageContainer">
        <img className="image" src={`./images/${this.props.imagePath}.png`}/>
      </div>
    )
  }
})
