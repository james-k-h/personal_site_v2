'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AboutSection = () => {
  return (
    <section className=" text-lightBlack dark:text-lightGray" id="about">
      <div className=" grid lg:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/landing/james_grad.jpg"
          width={600}
          height={500}
          className="border-2 rounded-3xl border-lightBlack dark:border-light"
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
            or mobile applications, using industry-leading frameworks and
            practices with a focus on JavaScript.
            <br />
            <br />
            Another area of interest would be working cross-functionally to
            solve real world business problems, from an IT perspective.
            <br />
            <br />
            Personally, I have a wide array of interests ranging from
            international political relations to football to European history
            and everything in between.
            <br />
            <br />
            <Link href="/about" className="hover:font-semibold">
              To learn more about me, visit the About section.
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
