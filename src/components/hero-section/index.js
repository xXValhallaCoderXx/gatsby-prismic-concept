import React from "react"
import PropTypes from "prop-types"

const HeroSection = ({title}) => {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "black"
      }}
    >
      <h1 style={{color: "red"}}>{title}</h1>
    </div>
  )
}

HeroSection.propTypes = {
  /**
     onClick function
  **/
  title: PropTypes.string,
}

export default HeroSection
