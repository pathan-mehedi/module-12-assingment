'use client'

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="header">
      <nav className="nav">
        <Link href="/">
          <Image
            src="/logo-blog.png"
            alt="Logo"
            className="logo"
            width={80}
            height={40}
          />
        </Link>
        <button
          className={`mobileMenuButton ${
            isMobileMenuOpen ? 'open' : ''
          }`}
          onClick={toggleMobileMenu}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </button>
        <ul
          className={`navLinks ${
            isMobileMenuOpen ? 'open' : ''
          }`}
        >
          <li>
            <Link href="/" className="menu_link">Home</Link>
          </li>
          <li>
            <Link href="/blog" className="menu_link">Blog</Link>
          </li>
          <li>
            <Link href="/about" className="menu_link">About Us</Link>
          </li>
          <li>
            <Link href="/about" className="menu_link">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;