'use client';
import React, { useTransition, useState } from 'react';
import Image from 'next/image';

const AboutSection = () => {
  return (
    <section className=" text-white dark:text-lightGray" id="about">
      <div className=" md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/landing/james_grad.jpg"
          width={600}
          height={500}
          className="border-2 rounded-3xl border-white dark:border-light"
          alt="James"
        />
        <div
          className="mt-4 md:mt-0 text-left flex flex-col h-full border-2 rounded-3xl border-white dark:border-light p-4 opacity-75
        bg-light dark:bg-dark"
        >
          <h2 className="text-4xl font-bold  text-white dark:text-lightGray mb-4">
            About Me
          </h2>
          <p className="text-base lg:text-lg">
            I am a self-taught programmer, focused on developing full-stack web
            or mobile applications, using industry-leading frameworks and
            practices with a focus on JavaScript.
            <br />
            <br />
            Another area of interest would be working cross-functionally to
            solve real world business problems, from an IT perspective. To learn
            more, visit the About section.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
