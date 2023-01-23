const path = require("path");

// Implement the Gatsby API “createPages”. This is called once the
// data layer is bootstrapped to let plugins create pages from data.
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  // Query for markdown nodes to use in creating pages.
  const result = await graphql(`
      {
        site {
          siteMetadata {
            title
          }
        }
        allMdx(filter: { frontmatter: { slug: { ne: "index" }}}) {
          nodes {
            frontmatter {
              title
              slug
            }
            internal {
              contentFilePath
            }
          }
        }
      }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  // Create pages for each markdown file.
  const docsPageTemplate = path.resolve('src/templates/DocsPage.tsx');
  const siteTitle = result.data.site.siteMetadata.title;
  result.data.allMdx.nodes.forEach((node) => {
    const { title, slug } = node.frontmatter;
    const { contentFilePath } = node.internal;
    createPage({
      path: `/docs/${slug}`,
      component: `${docsPageTemplate}?__contentFilePath=${contentFilePath}`,
      // In your blog post template's graphql query, you can use pagePath
      // as a GraphQL variable to query for data from the markdown file.
      context: {
        siteTitle,
        title,
      },
    });
  });
};
