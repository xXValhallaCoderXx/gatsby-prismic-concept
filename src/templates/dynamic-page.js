import React from "react"
import { graphql } from "gatsby"

const DynamicPageTemplate = props => {
  const { data } = props.data.prismicPage
  console.log("DATA: ", data);
  return <div>{data.title.text}</div>
}

export const dynamicPageQuery = graphql`
  query($id: String!) {
    prismicPage(id: { eq: $id }) {
      data {
        title {
          text
        }
      }
    }
  }
`

export default DynamicPageTemplate
