// Step 1: Import React
import * as React from 'react';
import Layout from '../components/layout';
import Seo from '../components/seo';
// import { StaticImage } from 'gatsby-plugin-image';

// Step 2: Define your component
const IndexPage = () => {
    return (
        <Layout pageTitle={'Home page'}>
            <p>I'm making this by following the Gatsby Tutorial.</p>
            {/* <StaticImage src="../images/wall.jpg" alt="wall" /> */}
        </Layout>
    );
};

// You'll learn about this in the next task, just copy it for now
export const Head = () => <Seo title="Home Page" />;

// Step 3: Export your component
export default IndexPage;
