import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';

const BlogPage = ({ data }) => {
    console.log('SLUG', data.allMdx.nodes);

    return (
        <Layout pageTitle="My Blog Posts">
            {data.allMdx.nodes.map((node) => (
                <article key={node.id}>
                    <h2>
                        <Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link>
                    </h2>
                    <p>Posted: {node.frontmatter.date}</p>
                </article>
            ))}
        </Layout>
    );
};

export const query = graphql`
    query {
        allMdx {
            nodes {
                id
                frontmatter {
                    date
                    slug
                    title
                }
            }
        }
    }
`;

export const Head = () => <Seo title="My Blog Posts" />;

export default BlogPage;
