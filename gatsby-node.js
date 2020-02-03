/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require("path");

exports.createPages = async({reporter,actions,graphql}) => {
  const {createPage} = actions;
  const dynamicPageTemplate = path.resolve("./src/templates/dynamic-page.js");

  const results = await graphql(`
    {
      dynamicPages: allPrismicPage {
        edges {
          node {
            id
            slugs
          }
        }
      }
    }
  `)

  if (results.errors) {
    reporter.panic(result.errors);
  }

  results.data.dynamicPages.edges.forEach(({node}) => {
    // Create Dynamic Page
    createPage({
      path: `/${node.slugs}`,
      component: dynamicPageTemplate,
      context: {
        id: node.id
      }
    })
  })
}