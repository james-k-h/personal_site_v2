'use client';
import Image from 'next/image';
import '../globals.css';
import {
  p_l_f,
  tools,
  skills_description_array,
} from '../components/utils/index.js';
import { Card, CardContent, Divider, Tooltip, Typography } from '@mui/material';
import { useState } from 'react';

const About = () => {
  const [open, setOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col  ">
      <div className="container mt-12 mx-auto px-12 py-4 text-center mb-12">
        <h1 className=" text-lightBlack dark:text-light mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold ">
          <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            A Little About Me...
          </span>
        </h1>
        <section className="text-lightBlack dark:text-light ">
          <div
            className="justify-center items-center grid 
          xl:grid-cols-2 
          gap-4  py-4 px-4  sm:py-16"
          >
            <Image
              src="/images/about/james_about_me.jpg"
              alt="James"
              width={600}
              height={600}
              sizes="20vw"
              style={{
                width: '100%',
                height: 'auto ',
              }}
              className="rounded-3xl  border-lightBlack dark:border-light p-1  dark:bg-light
                bg-lightBlack 
          sm:hidden
          xl:flex
                "
            />

            <div
              //   className="mt-4 md:mt-0  xl:mt-10 text-center flex flex-col h-relative  rounded-3xl  p-4
              //    border-lightBlack dark:border-light dark:bg-dark bg-tan border-2
              // "
              className="mt-4 md:mt-0  xl:mt-10 text-center flex flex-col h-relative  rounded-3xl  p-4 
        
         "
            >
              <p className="lg:text-lg md:text-sm 2xl:text-xl ">
                <b>Professionally</b>
                <br />
                <br />
                I currently work in the IT sector, acting as a manager for one
                of our large Canadian retailers. My day to day varies but it is
                usually focused on helping to lead the team in order to drive
                production stability and application innovation, while
                collaborating with our business and vendor partners. I am
                interested in both full-stack development or engineering and
                project management.
                <br />
                <br />
                <b>Personally</b>
                <br />
                <br />
                My interests span across a number of different areas, some of
                which include: programming, history (predominantly European),
                global political economy and international relations, traveling,
                long distance running and skiing. Programming is the newest
                addition to the roster and is something I picked up
                approximately 2 years ago, but it has quickly become a passion
                of mine.
                <br />
                <br />
                <b>Why Programming?</b>
                <br />
                <br />I was looking for a way to challenge myself and redefine
                my skillset and it fit the bill for a number of reasons. I
                think, regardless of the trajectory of my career, it is an
                invaluable skill to have and allows for a multitude of
                opportunities; by virtue of learning these skills you inevitably
                become more digitally literate. Plus, without it I wouldn&apos;t
                have been able to build this site!
              </p>
            </div>
          </div>
        </section>

        {/* skills section */}
        <div
          className="border-2 rounded-3xl border-lightBlack dark:border-light p-4  dark:bg-dark
            bg-tan justify-center items-center"
        >
          <p className="text-base lg:text-lg text-center text-lightBlack dark:text-light ">
            <b>Programming Languages, Key Frameworks and Libraries</b>
          </p>
          <div className=" grid grid-cols-4 md:grid-cols-8 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            {p_l_f.map((item) => {
              return (
                <div key={item.label}>
                  <Tooltip
                    title={<p style={{ fontSize: '1vw' }}>{item.label} </p>}
                    id="tooltip"
                    disableFocusListener
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      className=" border-lightBlack dark:border-light p-2 opacity-90 dark:bg-gray
                bg-lightBlack rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125"
                    />
                  </Tooltip>
                </div>
              );
            })}
          </div>
          <p className="text-base lg:text-lg text-center text-lightBlack dark:text-light ">
            <b>Tools and Platforms</b>
          </p>
          <div className=" grid grid-cols-4 md:grid-cols-8 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            {tools.map((item) => {
              return (
                <div key={item.label}>
                  <Tooltip
                    title={<p style={{ fontSize: '1vw' }}>{item.label} </p>}
                    id="tooltip"
                  >
                    <Image
                      src={item.src}
                      alt={item.label}
                      // id="img_hover"
                      className=" border-lightBlack dark:border-light p-2 opacity-90 dark:bg-gray
                bg-lightBlack rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125"
                    />
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
        {/* language overview */}
        <div
          className="border-2 rounded-3xl border-lightBlack dark:border-light p-4 opacity-90 dark:bg-dark
            bg-tan justify-center items-center mt-10"
        >
          <p className="text-base lg:text-lg text-center text-lightBlack dark:text-light ">
            <b>Programming Languages - Summary</b>
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            {skills_description_array.map((item) => {
              return (
                <div key={item.name}>
                  <Card
                    // class="test1"
                    className="bg-tan dark:bg-light"
                  >
                    <CardContent>
                      <Typography variant="h5" color="#474744">
                        {item.name}
                      </Typography>
                      <Divider />
                      <Typography color="#474744">
                        {item.frameworks_libraries}
                      </Typography>
                      <Typography color="#474744">
                        {item.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
};
export default About;
