import * as React from 'react';
import { graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPost = ({ data, children }) => {
    console.log('props', data);
    return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <p>{data.mdx.frontmatter.date}</p>
            {children}
        </Layout>
    );
};

export const query = graphql`
    query {
        mdx {
            id
            frontmatter {
                date
                slug
                title
            }
        }
    }
`;

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />;

export default BlogPost;
