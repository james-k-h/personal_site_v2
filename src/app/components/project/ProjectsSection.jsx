'use client';
import React, { useState, useRef } from 'react';
import ProjectCard from './ProjectCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    stack: 'Next.js, JavaScript, TailwindCSS',
    title: 'Portfolio Website',
    description: 'Personal portfolio site.',
    image: '/images/projects/personal_site.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/james-k-h/personal_site_v2',
    previewUrl: 'https://www.jameskhoward.com/',
  },
  {
    id: 2,
    stack: 'Next.js, JavaScript, TailwindCSS, AWS, Stripe',
    title: 'Sneaker Store',
    description: 'View and purchase sneakers. ',
    image: '/images/projects/sneaker_store_v2.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/james-k-h/sneaker_store_v2.1',
    previewUrl: 'https://sneaker-store-v2.vercel.app/',
  },

  {
    id: 3,
    stack: 'Next.js, JavaScript, Supabase, TailwindCSS',
    title: 'My Blog',
    description: 'Sharing my thoughts, one post at a time.',
    image: '/images/projects/my_blog.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/james-k-h/my_blog_',
    previewUrl: 'https://my-blog-bice-sigma.vercel.app/',
  },
  {
    id: 4,
    stack: 'Next.js, JavaScript, TailwindCSS',
    title: 'Bayview Eatery',
    description: 'The best local eats. ',
    image: '/images/projects/bayview_eatery.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/james-k-h/restaurant',
    previewUrl: 'https://bayview-eatery.vercel.app',
  },
  {
    id: 5,
    stack: 'Next.js, TypeScript, Mongo, TailwindCSS',
    title: 'Next Property Rental',
    description: 'Rent your property, or reserve one for yourself.',
    image: '/images/projects/next_property_rental.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/james-k-h/next_property_rental',
    previewUrl: 'https://next-property-rental.vercel.app/',
  },

  {
    id: 6,
    stack: 'Next.js, TypeScript, TailwindCSS, Postgres',
    title: 'Communities',
    description: 'Create and follow your favourite communities. ',
    image: '/images/projects/communities.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/james-k-h/communities/',
    previewUrl: 'https://communities-alpha.vercel.app/',
  },
  {
    id: 7,
    stack: 'MERN',
    title: 'Admin Dashboard',
    description: 'Dashboard for key E-Commerce facts. ',
    image: '/images/projects/mern_dash.png',
    tag: ['All', 'Web'],
    gitUrl: 'https://github.com/james-k-h/mern_dash',
    previewUrl: 'https://mern-client-dash.onrender.com',
  },
  {
    id: 8,
    stack: 'Java',
    title: 'Pirate Platformer',
    description: 'Traverse through various levels.',
    image: '/images/projects/java_platformer.png',
    tag: ['All', 'Game'],
    gitUrl: 'https://github.com/james-k-h/java_platformer',
    previewUrl: '',
  },
  {
    id: 9,
    stack: 'TypeScript, React, GO',
    title: 'Code Editor',
    description: 'Code on the fly. ',
    image: '/images/projects/code_editor.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/james-k-h/code_editor',
    previewUrl: 'https://code-editor-ten-steel.vercel.app/',
  },
  {
    id: 10,
    stack: 'MERN',
    title: 'Job Search App',
    description: 'A web app solution to help organize your job search.',
    image: '/images/projects/job_search_stats.png',
    tag: ['All', 'Web', 'Mobile'],
    gitUrl: 'https://github.com/james-k-h/mern_job_search/tree/main',
    previewUrl: 'https://job-search-d9xp.onrender.com',
  },
  {
    id: 11,
    stack: 'React-Native, JavaScript, Redux, Firebase',
    title: 'Animal Encyclopedia',
    description: 'Handy animal fact guidebook.',
    image: '/images/projects/animal_app2.png',
    tag: ['All', 'Mobile'],
    gitUrl: 'https://github.com/james-k-h/animal_app',
    previewUrl: '',
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects">
      <h1 className="text-center text-4xl font-bold  text-lightBlack dark:text-light mt-4 mb-8 md:mb-12">
        Featured Projects
      </h1>
      <p className="text-center font-semibold text-lightBlack dark:text-light">
        Hover to visit the source code repository and the live-hosted site, if
        applicable.
        <br />
        <b>Note:</b> Some of these projects are hosted on free hosting platforms
        so they might take a up to a minute to load.
      </p>
      <div className="grid grid-cols-2 2xl:grid-cols-4 xl:grid-cols-4 lg:grid-cols-4  text-lightBlack dark:text-light  flex-row justify-center items-center gap-3 py-6 ">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === 'All'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === 'Web'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === 'Mobile'}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Game"
          isSelected={tag === 'Game'}
        />
      </div>
      <ul
        ref={ref}
        className="grid lg:grid-cols-2 md:grid-cols-1 gap-8 md:gap-12"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? 'animate' : 'initial'}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              stack={project.stack}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
