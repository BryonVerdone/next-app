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
        <li>
          <Link href='/projects'>Projects</Link>
        </li>
        <li>
          <Link href='/blog'>Blog</Link>
        </li>
        <li>
          <Link href='/contact'>Contact</Link>
        </li>
      </ul>
    </nav>
  );
};
