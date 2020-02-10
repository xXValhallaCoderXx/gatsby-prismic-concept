import React from "react"
import lodash from "lodash";
import { useStaticQuery, graphql, Link, navigate } from "gatsby"

const Navigation = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      prismic {
        allNavigations {
          edges {
            node {
              body {
                ... on PRISMIC_NavigationBodyInternal_links {
                  type
                  label
                  fields {
                    internal_link {
                      ... on PRISMIC_Page {
                        title
                        _meta {
                          id
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  const links = data.prismic.allNavigations.edges
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 10,
      }}
    >
      <Link style={{ padding: 5 }} to="/">
        Home
      </Link>
      {links[0].node.body[0].fields.map((link, index) => {
        const url = lodash.snakeCase(link.internal_link.title[0].text)
        return (
          <div
            key={index}
            style={{ padding: 5 }}
            onClick={() => navigate(`/${url}`)}
          >
            {lodash.snakeCase(link.internal_link.title[0].text)}
          </div>
        )
      })}
    </div>
  )
}

export default Navigation
