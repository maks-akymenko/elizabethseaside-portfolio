const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const loadPhotoshootTypes = new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulTypes {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
      .then(result => {
        result.data.allContentfulTypes.edges.map(({ node }) => {
          createPage({
            path: `${node.slug}/`,
            component: path.resolve(`./src/templates/types.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })

  const loadGallery = new Promise((resolve, reject) => {
    graphql(`
    {
      allContentfulImageGallery {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
      .then(result => {
        result.data.allContentfulImageGallery.edges.map(({ node }) => {
          createPage({
            path: `${node.slug}/`,
            component: path.resolve(`./src/templates/gallery.js`),
            context: {
              slug: node.slug,
            },
          })
        })
        resolve()
      })
  })


  return Promise.resolve([loadPhotoshootTypes, loadGallery]);
}
