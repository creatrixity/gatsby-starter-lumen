// @flow strict
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/Layout';
import Sidebar from '../components/Sidebar';
import Feed from '../components/Feed';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import { useArticlesList, useSiteMetadata } from '../hooks';
import type { PageContext, AllMarkdownRemark } from '../types';

type Props = {
  data: AllMarkdownRemark,
  pageContext: PageContext,
};

const ArticleTemplate = ({ pageContext }: Props) => {
  const { title: siteTitle, subtitle: siteSubtitle } = useSiteMetadata();
  const data = useArticlesList();

  const { currentPage, hasNextPage, hasPrevPage, prevPagePath, nextPagePath } = pageContext;

  const { edges } = data;
  const pageTitle = currentPage > 0 ? `Posts - Page ${currentPage} - ${siteTitle}` : siteTitle;

  return (
    <Layout title={pageTitle} description={siteSubtitle}>
      <Sidebar isIndex />
      <Page>
        <Feed edges={edges} />
        <Pagination
          prevPagePath={prevPagePath}
          nextPagePath={nextPagePath}
          hasPrevPage={hasPrevPage}
          hasNextPage={hasNextPage}
        />
      </Page>
    </Layout>
  );
};

// export const query = graphql`
//   query ArticleTemplate($postsLimit: Int!, $postsOffset: Int!) {
//     allMarkdownRemark(
//       limit: $postsLimit
//       skip: $postsOffset
//       filter: { frontmatter: { template: { eq: "post" }, draft: { ne: true } } }
//       sort: { order: DESC, fields: [frontmatter___date] }
//     ) {
//       edges {
//         node {
//           fields {
//             slug
//             categorySlug
//           }
//           frontmatter {
//             title
//             date
//             category
//             description
//           }
//         }
//       }
//     }
//   }
// `;

export default ArticleTemplate;
