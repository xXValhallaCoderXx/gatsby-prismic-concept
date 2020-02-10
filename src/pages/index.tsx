import React from "react"
import Layout from "../components/layout"
import { Button } from "../components"

const IndexPage = () => (
  <Layout>
    Hello
    <Button onClick={() => console.log("Hello")}>Hello</Button>
  </Layout>
)

export default IndexPage
