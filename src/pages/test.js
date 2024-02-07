import * as React from 'react';
import { Link } from 'gatsby';

const pageStyles = {
    color: '#232129',
    padding: '96px',
    fontFamily: '-apple-system, Roboto, sans-serif, serif',
};

const paragraphStyles = {
    marginBottom: 48,
};

const Test = () => {
    return (
        <main style={pageStyles}>
            <p style={paragraphStyles}>
                Test
                <Link to="/">Go home</Link>.
            </p>
        </main>
    );
};

export default Test;

export const Head = () => <title>Test</title>;
