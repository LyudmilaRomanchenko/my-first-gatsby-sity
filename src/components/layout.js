import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
// import { container } from './layout.module.css';
import * as s from './layout.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);
    console.log('data', data);
    return (
        <div className={s.container}>
            <StaticImage className={s.cover} src="../images/wall.jpg" alt="wall" />

            {/* <div className={s.navContainer}> */}
            <header className={s.siteTitle}>{data.site.siteMetadata.title}</header>

            <nav className={s.nav}>
                <ul className={s.links}>
                    <li className={s.item}>
                        <Link to="/" className={s.text}>
                            Home
                        </Link>
                    </li>
                    <li className={s.item}>
                        <Link to="/about" className={s.text}>
                            About
                        </Link>
                    </li>
                    <li className={s.item}>
                        <Link to="/blog" className={s.text}>
                            Blog
                        </Link>
                    </li>
                </ul>
            </nav>
            {/* </div> */}

            <main>
                <h1 className={s.heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
