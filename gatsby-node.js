const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === `Mdx`) {
    const slug = createFilePath({
      node,
      getNode,
      basePath: `src/projects`,
    })
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
  }
}

/**/

/*

const path = require("path")
const projectTemplate = path.resolve(`./src/templates/project.jsx`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allMdx {
        nodes {
          id
          fields {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors)
  }

  // Create blog post pages.
  const projects = result.data.allMdx.nodes

  // you'll call `createPage` for each result
  projects.forEach((node) => {
    createPage({
      // As mentioned above you could also query something else like frontmatter.title above and use a helper function
      // like slugify to create a slug
      path: node.fields.slug,
      // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
      //component: require.resolve(`./src/templates/project.js`),
      component: `${projectTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    })
  })
}

*/
