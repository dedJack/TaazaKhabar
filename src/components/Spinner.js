import React, { Component } from 'react'
import Spinner from './spinner.gif'

export class spinner extends Component {
  

  render() {
    return (
      <div >
        <center><img src={Spinner} alt="hiii" style={{height: '150px', width: '150px'}} /></center>
      </div>
    )
  }
}

export default spinner
