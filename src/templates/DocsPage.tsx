import React, { useState, useCallback } from 'react';
import type { PageProps, HeadFC } from 'gatsby';
import { Link } from 'gatsby';
import Container from '@mui/material/Container';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { TabControlContext } from '../components/TabControl';
import Layout from '../components/Layout';

interface DocsBreadcrumbsProps {
  siteName: string;
  pageName: string;
}

const DocsBreadcrumbs = ({ siteName, pageName }: DocsBreadcrumbsProps) => {
  return (
    <Breadcrumbs sx={{ mt: 1 }} aria-label="breadcrumb">
      <Link to="/">{siteName}</Link>
      <Typography color="text.primary">Docs</Typography>
      <Typography color="text.primary">{pageName}</Typography>
    </Breadcrumbs>
  );
};

interface PageContext {
  siteTitle: string;
  title: string;
}

const DocsPage = ({ children, pageContext }: PageProps<unknown, PageContext>) => {
  const [openedTabId, setOpenedTabId] = useState<number | null>(0);
  const handleTabClick = useCallback((tabId: number) => {
    setOpenedTabId(tabId);
  }, []);

  return (
    <Layout>
      <TabControlContext.Provider value={{ openedTabId, handleTabClick }}>
        <Container>
          <DocsBreadcrumbs siteName={pageContext.siteTitle} pageName={pageContext.title} />
          {children}
        </Container>
      </TabControlContext.Provider>
    </Layout>
  );
};

export default DocsPage;

export const Head: HeadFC<unknown, PageContext> = ({ pageContext }) => {
  return (
    <title>
      {pageContext.title} - {pageContext.siteTitle}
    </title>
  );
};
