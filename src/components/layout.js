import React, { useEffect } from "react"
import PropTypes from "prop-types"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useStaticQuery, graphql } from "gatsby"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  //Calculate the available browser height
  useEffect(() => {
    //grab innerheight of window for mobile devices
    let vh = window.innerHeight * 0.01
    //set css variable vh
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="my-20 mx-auto flex-1">
          <main>{children}</main>
        </div>

        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
