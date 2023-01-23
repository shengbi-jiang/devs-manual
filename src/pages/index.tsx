import React, { useState, useCallback } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import { graphql } from 'gatsby';
import Container from '@mui/material/Container';
import Layout from '../components/Layout';
import { AccordionContext } from '../components/ControlledAccordion';
import IndexMdx from '../content/index.mdx';

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const [expandedAccordionId, setExpandedAccordionId] = useState<string | null>(null);
  const handleChange = useCallback((accordionId: string) => {
    setExpandedAccordionId((currentId) => {
      return accordionId === currentId ? null : accordionId;
    });
  }, []);

  return (
    <Layout>
      <Container>
        <AccordionContext.Provider value={{ expandedAccordionId, handleChange }}>
          <IndexMdx />
        </AccordionContext.Provider>
      </Container>
    </Layout>
  );
};

export default IndexPage;

export const Head: HeadFC<Queries.IndexPageQuery> = ({ data }) => {
  return <title>{data.site?.siteMetadata?.title}</title>;
};

export const query = graphql`
  query IndexPage {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        excerpt
      }
    }
  }
`;
