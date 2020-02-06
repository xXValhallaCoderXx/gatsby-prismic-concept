import React from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"


const Navigation = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      prismicNavigation(id: { eq: "Prismic__Navigation__XjuDBxEAACMACGOT" }) {
        data {
          body {
            items {
              internal_link {
                type
                slug
              }
            }
          }
        }
      }
    }
  `)
  const links = data.prismicNavigation.data.body
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
      {links[0].items.map((link, index) => (
        <div key={index} style={{ padding: 5 }} onClick={() => navigate(`/${link.internal_link.slug}`)}>
          {link.internal_link.slug}
        </div>
      ))}
    </div>
  )
}

export default Navigation
