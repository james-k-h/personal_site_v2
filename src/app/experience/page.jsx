'use client';
import { motion, useScroll } from 'framer-motion';
import { useRef } from 'react';
import Lilcon from './../components/utils/Lilcon';

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
     justify-between "
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl  text-dark dark:text-white">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-coralPink capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-bold text-dark/75 dark:text-white/75 italic">
          {time} | {address}
        </span>
        <p className="font-bold w-full text-dark dark:text-white">{work}</p>
      </motion.div>
    </li>
  );
};

const DetailsEducation = ({ type, time, provider, info, url }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
       justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl text-dark dark:text-white">
          {type}&nbsp;
          <a href={url} target="_blank" className="text-coralPink capitalize">
            @{provider}
          </a>
        </h3>
        <span className="capitalize font-bold text-dark/75 dark:text-white/75 italic">
          Completed: {time}
        </span>
        <p className="font-bold w-full text-dark dark:text-white">{info}</p>
      </motion.div>
    </li>
  );
};
const DetailsEducation2 = ({ type, time, provider, info }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col
       justify-between"
    >
      <Lilcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: 'spring' }}
      >
        <h3 className="capitalize font-bold text-2xl text-dark dark:text-white">
          {type}
        </h3>
        <span className="capitalize font-bold text-dark/75 dark:text-white/75 italic">
          {time} | {provider}
        </span>
        <p className="font-bold w-full text-dark dark:text-white">{info}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'center start'],
  });

  return (
    <div className="my-20 mb-20">
      <h2 className="font-bold text-4xl mb-32 w-full text-center text-dark dark:text-white">
        Experience
      </h2>

      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
        />

        <ul className=" w-full flex flex-col items-start justify-between ml-4 text-left">
          <DetailsEducation
            type="AWS Cloud Technology Consultant"
            time="January 2024"
            provider="AWS"
            info="Applying AWS solutions to business goals and drivers, alongside being able to provide
            technical direction and oversight to cloud implementation teams."
            url="https://www.coursera.org/account/accomplishments/professional-cert/WJ5ZAZ3UM25J"
          />{' '}
          <DetailsEducation
            type="DevOps on AWS"
            time="January 2024"
            provider="AWS"
            info="Applying DevOps on AWS, from coding to monitoring and everything in between."
            url="https://www.coursera.org/account/accomplishments/specialization/ZM82PY9U4Y4E"
          />{' '}
          <DetailsEducation
            type="DevOps and Software Engineering Certification"
            time="January 2024"
            provider="IBM"
            info="Essential DevOps skills and how to implement them as a SWE. Includes Microservice development (Docker, Kubernetes, OS),
             CI/CD automation and leveraging serverless technologies."
            url="https://coursera.org/share/5979e2a9bb5b3167eb93a753ddd51fca"
          />{' '}
          <DetailsEducation
            type="Back-End Developer Certification"
            time="November 2023"
            provider="Meta"
            info="Server-side certification focused on API development alongside version control, using Python and Django."
            url="https://www.coursera.org/account/accomplishments/professional-cert/49EW6AM7WC7U"
          />{' '}
          <Details
            position="Manager - Supply Chain Systems"
            company="Loblaw Companies LTD"
            companyLink="https://www.loblaw.ca/"
            time="June 2023 - Present"
            address="1 PCC, Brampton"
            work="Warehouse Management, part of a program team responsible for rolling out and supporting a Cloud-Native WMS Application for Loblaw and Shoppers Distribution Centers."
          />{' '}
          <DetailsEducation
            type="Full Stack Developer Program"
            time="March 2023"
            provider="Web Age Solutions"
            info="Bootcamp spanning roughly 6 months; focused on skilling Loblaw employees into application programming. Involved Java, Spring Boot, JDBC,
            JavaScript and React."
            url="https://www.credly.com/badges/a2394a10-8296-4a04-9881-1833bdca084c/print"
          />{' '}
          <DetailsEducation
            type="IT Automation with Python Certification"
            time="October 2022"
            provider="Google"
            info="Focused on critical automation skills for IT support and system administration tasks."
            url="https://www.coursera.org/account/accomplishments/professional-cert/55U5X948MGUV"
          />{' '}
          <Details
            position="IT Specialist - PMO"
            company="Loblaw Companies LTD"
            companyLink="https://www.loblaw.ca/"
            time="January 2022 - May 2023"
            address="1 PCC, Brampton"
            work="Tool SME for Clarity PPM. Automating tasks programatically E-2-E. Enterprise reporting and data analysis."
          />{' '}
          <Details
            position="Intern - PMO"
            company="Loblaw Companies LTD"
            companyLink="https://www.loblaw.ca/"
            time="May 2021 - December 2021"
            address="1 PCC, Brampton"
            work="Agile tooling. Reporting. End-user support and training."
          />{' '}
          <DetailsEducation2
            type="Honours Bachelor of Arts"
            time="December 2020"
            provider="University of Toronto"
            info="Political Science Major.
            International Relations, International Political Economy, Canadian Government."
          />{' '}
          <Details
            position="Previous Work Experience"
            company="20 Vic Management (Now Cushman & Wakefield) & Capital City Shopping Centers Limited"
            companyLink="https://www.cushmanwakefield.com/en/canada"
            time=" - 2020"
            address="Downtown Toronto"
            work="Property management of large Canadian real estate portfolios. Performed equity analysis and other ad hoc projects."
          />{' '}
        </ul>
      </div>
    </div>
  );
};
export default Experience;
