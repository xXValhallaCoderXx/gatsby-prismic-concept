import React from "react"
import PropTypes from "prop-types"

const Button = props => {
  return <button onClick={props.onClick}>{props.children}</button>
}

Button.propTypes = {
  /**
     onClick function
  **/
  onClick: PropTypes.func,
  /**
     Single React child node
  **/
  children: PropTypes.node,
}

export default Button
