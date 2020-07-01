import React, { Component } from "react"
import PropTypes from "prop-types"

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="h-16 p-2 bg-gray-600 flex justify-center items-center">
        <h2 className="text-white text-2xl">Home Page</h2>
      </div>
    )
  }
}

export default Navbar
