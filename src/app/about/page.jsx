'use client';
import Image from 'next/image';
import '../globals.css';
import {
  p_l_f,
  tools,
  skills_description_array,
} from '../components/utils/index.js';
import { Card, CardContent, Divider, Tooltip, Typography } from '@mui/material';

const About = () => {
  return (
    <main className="flex min-h-screen flex-col about-bg bg-cover ">
      <div className="container mt-12 mx-auto px-12 py-4 text-center">
        <h1 className=" text-white dark:text-light mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold ">
          <span className=" bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 opacity-75">
            A Little About Me...
          </span>
        </h1>
        <section className="text-white dark:text-light ">
          <div className=" md:grid md:grid-cols-3 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
            <Image
              src="/images/about/james_about_me.jpg"
              alt="James"
              width={500}
              height={500}
              className="rounded-3xl  border-white dark:border-light p-1  dark:bg-light
                bg-white"
            />

            <div
              className="mt-4 md:mt-0 col-span-2 text-left flex flex-col h-full border-2 rounded-3xl border-white dark:border-light p-4 opacity-75 dark:bg-dark
            bg-light"
            >
              <p className="text-base lg:text-lg">
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
                <br />I have a broad array of interests, some of which include:
                programming, history (predominantly European), global political
                economy and international relations, traveling, long distance
                running and skiing. Programming is the newest addition to the
                roster and is something I have picked up approximately a year
                ago, but it has quickly become a passion of mine.
                <br />
                <br />
                <b>Why Programming?</b>
                <br />
                <br />I was looking for a way to challenge myself and redefine
                my skillset and it fit the bill for a number of reasons. I
                think, regardless of the trajectory of my career, it is an
                invaluable skill to have and allows for a multitude of
                opportunities; by virtue of learning these skills you inevitably
                become more digitally literate. Plus, without it I could not
                have built this site!
              </p>
            </div>
          </div>
        </section>

        {/* skills section */}
        <div
          className="border-2 rounded-3xl border-white dark:border-light p-4 opacity-75 dark:bg-dark
            bg-light justify-center items-center"
        >
          <p className="text-base lg:text-lg text-center text-white dark:text-light ">
            <b>Programming Languages, Key Frameworks and Libraries</b>
          </p>
          <div className=" grid grid-cols-4 md:grid-cols-8 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            {p_l_f.map((item) => {
              return (
                <div key={item.label}>
                  <Tooltip title={item.label} id="tooltip">
                    <Image
                      src={item.src}
                      alt={item.label}
                      className=" border-white dark:border-light p-2 opacity-75 dark:bg-gray
                bg-white rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125"
                    />
                  </Tooltip>
                </div>
              );
            })}
          </div>
          <p className="text-base lg:text-lg text-center text-white dark:text-light ">
            <b>Tools and Platforms</b>
          </p>
          <div className=" grid grid-cols-4 md:grid-cols-8 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            {tools.map((item) => {
              return (
                <div key={item.label}>
                  <Tooltip title={item.label} id="tooltip">
                    <Image
                      src={item.src}
                      alt={item.label}
                      // id="img_hover"
                      className=" border-white dark:border-light p-2 opacity-75 dark:bg-gray
                bg-white rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-125"
                    />
                  </Tooltip>
                </div>
              );
            })}
          </div>
        </div>
        {/* language overview */}
        <div
          className="border-2 rounded-3xl border-white dark:border-light p-4 opacity-75 dark:bg-dark
            bg-light justify-center items-center mt-10"
        >
          <p className="text-base lg:text-lg text-center text-white dark:text-light ">
            <b>Programming Languages - Summary</b>
          </p>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-8  py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 ">
            {skills_description_array.map((item) => {
              return (
                <div key={item.name}>
                  <Card id="test1">
                    <CardContent>
                      <Typography variant="h5" color="#747474">
                        {item.name}
                      </Typography>
                      <Divider />
                      <Typography color="#747474">
                        {item.frameworks_libraries}
                      </Typography>
                      <Typography color="#747474">
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
