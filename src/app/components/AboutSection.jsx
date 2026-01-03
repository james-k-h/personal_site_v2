'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className=" text-lightBlack dark:text-lightGray" id="about">
      <div className=" grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="https://utfs.io/f/vp3TJw7SgFuV2Yk2uaPXHEehtLjS0cKUwWR62qTkgo3y97mN"
          width={600}
          height={500}
          className="border-8 rounded-3xl border-lightBlack dark:border-light"
          alt="James"
        />
        <div
          className="opacity-90 mt-4 md:mt-0 text-left flex flex-col h-full  rounded-3xl border-lightBlack dark:border-light p-4 
       "
        >
          <h2 className="text-4xl font-bold  text-lightBlack dark:text-lightGray mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a self-taught programmer focused on developing full-stack web
            or mobile applications, using industry-leading frameworks.
            <br />
            <br />
            Another area of expertise would be working cross-functionally to
            solve real world business problems, from a technology perspective.
            <br />
            <br />
            Personally, I have a wide array of interests ranging from
            international political relations to football to European history
            and everything in between.
            <br />
            <br />
            <Link
              href="/about"
              className="inline-block py-2 sm:py-3 px-6 sm:px-10  bg-lightBlack dark:bg-light dark:text-white text-white rounded-full capitalize font-semibold border-2 border-solid border-white dark:border-white hover:scale-105 transition-all ease duration-200 text-sm sm:text-base"
            >
              {' '}
              Learn More About Me
              <span className="ml-2">→</span>
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
