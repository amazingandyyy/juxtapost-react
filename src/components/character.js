import React, {Component} from 'react'

export default class Character extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
        <div>
        {this.props.characters.map((item, index) => (
          <span className='index' key={index}> <img className='circular--square' src='http://kyliesdogblog.weebly.com/uploads/1/7/5/4/17540869/2146739_orig.jpg'/> </span>
        ))}
      </div>
    )
  }
}
