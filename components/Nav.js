import React from 'react';
import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';
export const Nav = () => {
  return (
    <nav>
      <ul className={navStyles.nav}>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/about'>About</Link>
        </li>
      </ul>
    </nav>
  );
};
