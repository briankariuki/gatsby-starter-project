import React, { Component } from "react"
import PropTypes from "prop-types"

export class Footer extends Component {
  static propTypes = {}

  render() {
    return (
      <div className="h-16 p-2 bg-gray-600 flex justify-center items-center">
        <footer className="text-white text-xl">
          © {new Date().getFullYear()}, Brian Kariuki
          {` `}
        </footer>
      </div>
    )
  }
}

export default Footer
