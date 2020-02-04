import React from "react"

interface Props {
  onClick: () => void;
  children: React.ReactNode;
}

const Button = (props: Props) => {
  return <button onClick={props.onClick}>{props.children}</button>
}


export default Button
