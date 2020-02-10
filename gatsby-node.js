/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");
const lodash = require("lodash");

exports.createPages = async ({ reporter, actions, graphql }) => {
  const { createPage } = actions
  const dynamicPageTemplate = path.resolve("./src/templates/dynamic-page.js")

  const results = await graphql(`
    {
      dynamicPages: prismic {
        allPages {
          edges {
            node {
              title
              _meta {
                id
              }
            }
          }
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panic(result.errors);
  }
  results.data.dynamicPages.allPages.edges.forEach(({node}) => {
    // Create Dynamic Page
    createPage({
      path: `/${lodash.snakeCase(node.title[0].text)}`,
      component: dynamicPageTemplate,
      context: {
        id: node._meta.id
      }
    })
  })
}
