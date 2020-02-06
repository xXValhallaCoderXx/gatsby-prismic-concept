import React from "react"

const HeroSection = (props: any) => {
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
      <h1 style={{color: "red"}}>{props.data.hero_title.text}</h1>
    </div>
  )
}

export default HeroSection
