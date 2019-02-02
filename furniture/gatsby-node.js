const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(
          sort: { order: ASC, fields: [frontmatter___position] }
          filter: { fileAbsolutePath: { regex: "/topics/" } }
        ) {
          edges {
            node {
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `).then(results => {
      results.data.allMarkdownRemark.edges.forEach(({ node }) =>
        createPage({
          path: `/topic${node.frontmatter.slug}`,
          component: path.resolve('./src/components/topicLayout.js'),
          context: {
            slug: node.frontmatter.slug,
          },
        })
      )
      resolve()
    })
  })
}
