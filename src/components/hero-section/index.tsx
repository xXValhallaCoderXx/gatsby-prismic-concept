import React from "react"

interface Props {
  title: string;
}

const HeroSection = (props: Props) => {
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
      <h1 style={{color: "red"}}>{props.title}</h1>
    </div>
  )
}

export default HeroSection
