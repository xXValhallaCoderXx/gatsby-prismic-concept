import React from "react"
import { graphql } from "gatsby"
import Loadable from "@loadable/component"
// import get from "lodash/get";
import Layout from "../components/layout"

const DynamicPageTemplate = props => {
  const data = props.data.prismic.allPages.edges[0];
  const components = data.node.body;
  return (
    <Layout>
      {data.node.title[0].text}
      {components &&
        components.map((item, index) => {
          const Module = Loadable(() => import(`../slices/${item.type}`))
          return <Module key={item.id} data={item.primary} />
        })}
    </Layout>
  )
}

export const dynamicPageQuery = graphql`
  query($id: String!) {
    prismic {
    allPages(id: $id) {
      edges {
        node {
          title
          body {
            ... on PRISMIC_PageBodyHero_section {
              type
              label
              primary {
                hero_title
              }
            }
            ... on PRISMIC_PageBodyContact_form {
              type
              label
              primary {
                hubspot_id
              }
            }
          }
        }
      }
    }
  }
  }
`

export default DynamicPageTemplate
