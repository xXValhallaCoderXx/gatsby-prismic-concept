import React from "react"
import { graphql } from "gatsby"
import Loadable from "@loadable/component"
// import get from "lodash/get";
import Layout from "../components/layout"

const DynamicPageTemplate = props => {
  const { data } = props.data.prismicPage
  console.log("LALAL: ", data)
  return (
    <Layout>
      {data.body &&
        data.body.map((item, index) => {
          const Module = Loadable(() => import(`../slices/${item.slice_type}`))
          return <Module key={item.id} data={item.primary} />
        })}
    </Layout>
  )
}

export const dynamicPageQuery = graphql`
  query($id: String!) {
    prismicPage(id: { eq: $id }) {
      slugs
      data {
        title {
          text
        }
        body {
          ... on PrismicPageBodyBannerWithCaption {
            id
            slice_type
            primary {
              title_of_banner {
                text
              }
              image_banner {
                url
              }
              description {
                text
              }
              button_link {
                url
              }
              button_label {
                text
              }
            }
          }
          ... on PrismicPageBodyHeroSection {
            id
            slice_type
            primary {
              hero_title {
                text
              }
            }
          }
          ... on PrismicPageBodyQuote {
            id
            slice_type
            primary {
              quote {
                text
              }
              portrait_author {
                url
              }
              name_of_the_author {
                text
              }
            }
          }
          ... on PrismicPageBodyContactForm {
            id
            slice_type
            primary {
              hubspot_id
            }
          }
        }
      }
    }
  }
`

export default DynamicPageTemplate
