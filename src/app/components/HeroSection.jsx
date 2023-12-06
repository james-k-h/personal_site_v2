'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-8 place-self-center text-center sm:text-left justify-self-start"
        >
          <h1 className=" text-white dark:text-light mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
            <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
              Hello, I&apos;m James
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                'Web Developer',
                1000,
                'Mobile Developer',
                1000,
                'UI/UX Designer',
                1000,
                'Project Manager',
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <p className=" text-white dark:text-light text-base sm:text-lg mb-6 lg:text-xl">
            A self-taught IT professional, focused on web development and cloud
            native applications.
          </p>
          <div>
            <Link
              href="/jkh_resume.pdf"
              download="JKH - Resume"
              target="_blank"
              className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 text-white mt-3"
            >
              <span className="opacity-80 inline-block py-2 sm:py-3 px-6 sm:px-10  bg-white dark:bg-light dark:text-white text-light rounded-full capitalize font-semibold border-2 border-solid border-light dark:border-white hover:scale-105 transition-all ease duration-200 text-sm sm:text-base">
                Download Resume
              </span>
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-4 place-self-center mt-4 lg:mt-0"
        >
          <div className="rounded-full bg-white dark:bg-light w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/about/james.jpg"
              alt="hero image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full"
              width={375}
              height={375}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
