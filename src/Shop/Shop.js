import React, { Component } from 'react'
import Header from '../Header'

export default class Print extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    return (
      <div className="flex justify-center home">
        <Header />
        <div className="main flex justify-center"></div>
      </div>
    )
  }
}
