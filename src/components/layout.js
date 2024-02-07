import * as React from 'react';
import { Link } from 'gatsby';
// import { container } from './layout.module.css';
import * as s from './layout.module.css';

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={s.container}>
            <nav className={s.links}>
                <ul className={s.links}>
                    <li className={s.item}>
                        <Link to="/" className={s.ext}>
                            Home
                        </Link>
                    </li>
                    <li className={s.item}>
                        <Link to="/about" className={s.text}>
                            About
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={s.heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
