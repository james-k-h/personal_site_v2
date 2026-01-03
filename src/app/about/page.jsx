'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Tooltip } from '@mui/material';
import '../globals.css';
import { p_l_f, tools } from '../components/utils/index.js';

// Animated Section Wrapper
const AnimatedSection = ({ children, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay }}
    >
      {children}
    </motion.div>
  );
};

// Story Card Component
const StoryCard = ({ title, content, icon, delay }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="group relative bg-tan dark:bg-black/80 dark:opacity-80 dark:opacity-80 rounded-2xl p-8 border-2 border-lightBlack dark:border-light transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
        {/* Icon */}
        <div className="mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-2xl flex items-center justify-center text-white text-3xl shadow-lg group-hover:scale-110 transition-transform duration-300">
            {icon}
          </div>
        </div>

        {/* Title */}
        <h3 className="text-2xl font-bold mb-4 text-lightBlack dark:text-light">
          {title}
        </h3>

        {/* Content */}
        <p className="text-base lg:text-lg text-lightBlack dark:text-light leading-relaxed">
          {content}
        </p>
      </div>
    </AnimatedSection>
  );
};

// Skills Section Component
const SkillsSection = ({ title, items, delay }) => {
  return (
    <AnimatedSection delay={delay}>
      <div className="relative bg-tan dark:bg-dark rounded-3xl p-8 lg:p-12 border-2 border-lightBlack dark:border-light overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary-400/10 to-secondary-600/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-secondary-600/10 to-primary-400/10 rounded-full blur-3xl" />

        <div className="relative z-10">
          <h3 className="text-2xl lg:text-3xl font-bold text-center mb-2 text-lightBlack dark:text-light">
            {title}
          </h3>
          <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded-full mb-10" />

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-6 lg:gap-8">
            {items.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, scale: 0.5, rotateY: -180 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.03,
                  duration: 0.5,
                  type: 'spring',
                  stiffness: 100,
                }}
                className="flex justify-center"
              >
                <Tooltip title={item.label} placement="top" arrow>
                  <div className="group cursor-pointer relative">
                    {/* Glow effect container */}
                    <div className="absolute -inset-2 bg-gradient-to-br from-primary-400 via-secondary-600 to-primary-400 rounded-full opacity-0 group-hover:opacity-75 blur-xl transition-all duration-500 group-hover:animate-pulse" />

                    {/* Main icon container */}
                    <div className="relative w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-tan dark:bg-gray rounded-full border-2 border-lightBlack dark:border-light shadow-lg transition-all duration-300 group-hover:border-primary-400 dark:group-hover:border-primary-400 group-hover:-translate-y-3 group-hover:shadow-2xl group-hover:scale-110 p-3">
                      <Image
                        src={item.src}
                        alt={item.label}
                        width={80}
                        height={80}
                        className="w-full h-full object-contain"
                      />

                      {/* Shine effect on hover */}
                      <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/40 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                    </div>
                  </div>
                </Tooltip>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
};

// Main About Component
const About = () => {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Main Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16">
        {/* Combined Hero + Journey Section */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-lightBlack dark:text-light">
              A Little{' '}
              <span className="bg-clip-text text-coralPink dark:text-accentDark bg-gradient-to-r from-primary-400 to-secondary-600">
                About Me...
              </span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded-full" />
          </motion.div>

          {/* Main Content Grid with Image and Cards */}
          <div className="grid lg:grid-cols-12 gap-8 items-start">
            {/* Left Column - Image and Buttons */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-4 flex flex-col items-center lg:sticky lg:top-24"
            >
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-secondary-600 rounded-3xl blur-2xl opacity-20 animate-pulse" />
                <Image
                  src="https://utfs.io/f/vp3TJw7SgFuVdtTDSyLM0tECi4qP8aIYRQpfhgNB9Hy3eGmT"
                  alt="James"
                  width={350}
                  height={350}
                  className="relative rounded-3xl border-4 border-lightBlack dark:border-light shadow-2xl w-full max-w-sm object-cover"
                  priority
                />
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3 w-full max-w-sm">
                <Link
                  href="/about/travel"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-400 to-secondary-600text-lightBlack dark:text-light text-center rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  🌍 View My Travels
                </Link>
                <a
                  href="#skills"
                  className="w-full px-6 py-3 bg-gradient-to-r from-primary-400 to-secondary-600text-lightBlack dark:text-light text-center rounded-xl font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300"
                >
                  💻 See My Skills
                </a>
              </div>
            </motion.div>

            {/* Right Column - Journey Cards */}
            <div className="lg:col-span-8 space-y-6">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-3xl sm:text-4xl font-extrabold mb-6 text-lightBlack dark:text-light text-center lg:text-left"
              >
                My{' '}
                <span className="bg-clip-text text-coralPink dark:text-accentDark bg-gradient-to-r from-primary-400 to-secondary-600">
                  Journey
                </span>
              </motion.h2>

              <StoryCard
                title="Professionally"
                icon="💼"
                delay={0.4}
                content="I currently work in the tech sector, acting in a management role for one of our large Canadian retailers. My day-to-day varies but is usually focused on helping to lead the team to drive production stability and application innovation, while collaborating with our business and vendor partners. I am interested in both full-stack development or engineering and project management, along with integrating technology into the supply chain."
              />

              <StoryCard
                title="Personally"
                icon="✨"
                delay={0.5}
                content="My interests span across a number of different areas, some of which include: programming, history (predominantly European), global political economy and international relations, traveling, long distance running and skiing. Programming is the newest addition to the roster and is something I picked up approximately 2 years ago, but it has quickly become a passion of mine."
              />

              <StoryCard
                title="Why Programming?"
                icon="💻"
                delay={0.6}
                content="I was looking for a way to challenge myself and redefine my skillset and it fit the bill for a number of reasons. I think, regardless of the trajectory of my career, it is an invaluable skill to have and allows for a multitude of opportunities; by virtue of learning these skills you inevitably become more digitally literate. Plus, without it I wouldn't have been able to build this site!"
              />
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="scroll-mt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 text-lightBlack dark:text-light">
              Technical{' '}
              <span className="bg-clip-text text-coralPink dark:text-accentDark bg-gradient-to-r from-primary-400 to-secondary-600">
                Skillset
              </span>
            </h2>
            <p className="text-lg text-lightBlack/80 dark:text-light/80 max-w-2xl mx-auto mb-4">
              A comprehensive toolkit of languages, frameworks, and platforms
              that power my development journey
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded-full" />
          </motion.div>

          <div className="space-y-10">
            <SkillsSection
              title="Languages, Frameworks & Libraries"
              items={p_l_f}
              delay={0.1}
            />

            <SkillsSection
              title="Tools & Platforms"
              items={tools}
              delay={0.2}
            />
          </div>
        </section>

        {/* CTA Section */}
        <AnimatedSection delay={0.3}>
          <section className="mt-20">
            <div className="relative overflow-hidden bg-gradient-to-br from-primary-400 to-secondary-600 rounded-3xl p-12 text-center text-lightBlack dark:text-light shadow-2xl ">
              <div className="absolute inset-0 bg-black/10 dark:bg-black/80 dark:opacity-80" />

              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
                  Ready to Explore More?
                </h2>
                <p className="text-lg sm:text-xl mb-8 opacity-90">
                  Review my personal accomplishments, including professional
                  experience, in-depth
                </p>
                <Link
                  href="/experience"
                  className="inline-block px-8 py-4 bg-lightBlack dark:bg-light dark:text-white text-white  rounded-full font-bold text-lg hover:scale-105 transition-all duration-300 shadow-lg "
                >
                  View My Experience →
                </Link>
              </div>
            </div>
          </section>
        </AnimatedSection>
      </div>
    </main>
  );
};

export default About;
