'use client';
import Link from 'next/link';
import React, { useState } from 'react';

import {
  GithubIcon,
  LinkedinIcon,
  MoonIcon,
  SunIcon,
  TwitterIcon,
} from './../utils/Icons';
import { useThemeSwitch } from './../hooks/useThemeSwitch';
import { cx } from '../utils/index';
import Logo from './Logo';
import siteMetadata from '../../components/utils/siteMetaData';

const Navbar = () => {
  const [mode, setMode] = useThemeSwitch();
  const [click, setClick] = useState(false);

  const toggle = () => {
    setClick(!click);
  };

  return (
    <header className="w-full p-4  px-5 sm:px-10 flex items-center justify-between   ">
      <Logo className="dark:bg-light sm:hidden " />

      <button
        className="inline-block lg:hidden z-500"
        onClick={toggle}
        aria-label="Hamburger Menu"
      >
        <div className="w-6 cursor-pointer transition-all ease duration-300">
          <div className="relative">
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? 'rotate(-45deg) translateY(0)'
                  : 'rotate(0deg) translateY(6px)',
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                opacity: click ? 0 : 1,
              }}
            >
              &nbsp;
            </span>
            <span
              className="absolute top-0 inline-block w-full h-0.5 bg-dark dark:bg-light rounded transition-all ease duration-200"
              style={{
                transform: click
                  ? 'rotate(45deg) translateY(0)'
                  : 'rotate(0deg) translateY(-6px)',
              }}
            >
              &nbsp;
            </span>
          </div>
        </div>
      </button>
      {/* mobile - hides under lg, use 2nd instance below */}
      <nav
        className=" w-max py-3 xs:mt-0 mt-4 px-6 sm:px-8 border border-solid border-dark rounded-full font-medium capitalize  items-center   lg:hidden
        fixed top-6 right-1/2 translate-x-1/2 backdrop-blur-sm z-50  bg-tan/80 dark:bg-dark dark:text-light dark:border-light
        transition-all ease duration-300
        flex
   
        "
        style={{
          top: click ? '1rem' : '-5rem',
        }}
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/experience" className="mr-2">
          Experience
        </Link>
        <Link href="/projects" className="mr-2">
          Projects
        </Link>
        <Link
          target="_blank"
          href="https://my-blog-bice-sigma.vercel.app/"
          className="mr-2"
        >
          Blog
        </Link>
        <Link href="/links" className="mr-2">
          Links
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          )}
          aria-label="theme-switcher"
        >
          {mode === 'light' ? (
            <MoonIcon className={'fill-dark'} />
          ) : (
            <SunIcon className={'fill-dark'} />
          )}
        </button>
      </nav>

      <nav
        className=" w-max py-3 px-8 border border-solid bg-tan dark:bg-dark dark:text-light dark:border-light border-lightBlack rounded-full font-medium capitalize  items-center hidden lg:flex
        fixed top-6 right-1/2 translate-x-1/2 bg-dark/80 backdrop-blur-sm z-50 text-lightBlack opacity-90"
      >
        <Link href="/" className="mr-2">
          Home
        </Link>
        <Link href="/about" className="mr-2">
          About
        </Link>
        <Link href="/experience" className="mr-2">
          Experience
        </Link>
        <Link href="/projects" className="mr-2">
          Projects
        </Link>
        <Link
          target="_blank"
          href="https://my-blog-bice-sigma.vercel.app/"
          className="mr-2"
        >
          Blog
        </Link>
        <Link href="/links" className="mr-2">
          Links
        </Link>
        <button
          onClick={() => setMode(mode === 'light' ? 'dark' : 'light')}
          className={cx(
            'w-6 h-6 ease ml-2 flex items-center justify-center rounded-full p-1',
            mode === 'light' ? 'bg-dark text-light' : 'bg-light text-dark'
          )}
          aria-label="theme-switcher"
        >
          {mode === 'light' ? (
            <MoonIcon className={'fill-dark'} />
          ) : (
            <SunIcon className={'fill-dark'} />
          )}
        </button>
      </nav>
      <div className=" hidden lg:flex items-center">
        <a
          href={siteMetadata.linkedin}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Reach out to me via LinkedIn"
          target="_blank"
        >
          <LinkedinIcon className="hover:scale-125 transition-all ease duration-200 dark:fill-light fill-white" />
        </a>
        <a
          href={siteMetadata.github}
          className="inline-block w-6 h-6 mr-4"
          aria-label="Check my profile on Github"
          target="_blank"
        >
          <GithubIcon className="  hover:scale-125 transition-all ease duration-200 dark:fill-light" />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
