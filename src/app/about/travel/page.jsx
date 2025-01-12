'use client';
import React from 'react';

import Image from 'next/image';
import '../../globals.css';
import { p_l_f, tools } from '../../components/utils/index.js';
import { Tooltip } from '@mui/material';
import { useState } from 'react';
import { motion, useScroll } from 'framer-motion';

import { Gallery } from 'react-grid-gallery';
import { images as IMAGES } from './../images';

const AboutTravel = () => {
  const [images, setImages] = useState(IMAGES);
  const hasSelected = images.some((image) => image.isSelected);
  const [open, setOpen] = useState(false);

  const handleSelect = (index) => {
    const nextImages = images.map((image, i) =>
      i === index ? { ...image, isSelected: !image.isSelected } : image
    );
    setImages(nextImages);
  };

  const handleSelectAllClick = () => {
    const nextImages = images.map((image) => ({
      ...image,
      isSelected: !hasSelected,
    }));
    setImages(nextImages);
  };

  return (
    <main className="flex min-h-screen flex-col  ">
      <div className="container mt-12 mx-auto px-12 py-4 text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className=" text-lightBlack dark:text-light mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold "
        >
          <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            All About Travel
          </span>
        </motion.h1>

        {/* about part 2 */}

        <section className="text-lightBlack dark:text-light ">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="justify-center items-center 
  
          gap-4  py-2 px-4  
         
          "
          >
            {/* <div
              //   className="mt-4 md:mt-0  xl:mt-10 text-center flex flex-col h-relative  rounded-3xl  p-4
              //    border-lightBlack dark:border-light dark:bg-dark bg-tan border-2
              // "
              className="mt-4 md:mt-0  xl:mt-10 text-center flex flex-col h-relative  rounded-3xl  p-4 
         "
            > */}

            <div
              //   className="mt-4 md:mt-0  xl:mt-10 text-center flex flex-col h-relative  rounded-3xl  p-4
              //    border-lightBlack dark:border-light dark:bg-dark bg-tan border-2
              // "
              className="mt-4 md:mt-0  xl:mt-10 text-center flex flex-col h-relative  rounded-3xl  p-4 
        
         "
            >
              <p className="lg:text-lg md:text-sm 2xl:text-xl">
                <b>Travel</b>
                <br />
                As mentioned above, traveling is a key interest.
                <br />
                Here is a quick summary of some travel goals and facts!
                <br />
                <br />
                <b>Personal Goal:</b> Visit all 7 continents
                <br />
                <b>Next Destination:</b> Greece
                <br />
                <b>Bucket Item:</b> Amazon adventure; travel down the river with
                an experienced guide
                <br />
                <b>Must See:</b> Machu Picchu
                <br />
                <b>Favourite Active Trip: </b> Skiing - Alta, Utah (USA)
                <br />
                <br />
              </p>
            </div>
          </motion.div>
        </section>

        <section
          className="
          hidden
          md:flex
"
        >
          {/* add in https://jkh-personal.web.app/ areas of focus */}
          {/* refactor this into /about/travel */}
          <div
            className="mb-32
        py-2 px-4  mt-4
           text-lightBlack dark:text-light
        "
          >
            <h2 className="lg:text-lg md:text-sm 2xl:text-xl ">
              <b>Travel Pictures</b>
            </h2>
            <div
              className="p-t-1 p-b-1
       
          "
            >
              <button onClick={handleSelectAllClick}>
                {hasSelected ? 'Clear selection' : 'Select all'}
              </button>
            </div>
            <Gallery images={images} onSelect={handleSelect} />
          </div>
        </section>
      </div>
    </main>
  );
};
export default AboutTravel;
