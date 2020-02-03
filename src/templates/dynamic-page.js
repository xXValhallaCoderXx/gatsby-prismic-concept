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
        body {
          slice_type
          primary {
            background_color
            quote {
              text
            }
            name_of_the_author {
              text
            }
            portrait_author {
              url
            }
          }
        }
      }
    }
  }
`

export default DynamicPageTemplate
