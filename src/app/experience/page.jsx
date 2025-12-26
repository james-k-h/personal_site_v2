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
        <h3 className="capitalize font-bold text-2xl  text-lightBlack dark:text-light">
          {position}&nbsp;
          <a
            href={companyLink}
            target="_blank"
            className="text-coralPink dark:text-accentDark capitalize hover:italic transition-all ease duration-200"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-bold text-lightBlack/75 dark:text-light/75 italic">
          {time} | {address}
        </span>
        <p className="font-bold w-full text-lightBlack dark:text-light">
          {work}
        </p>
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
        <h3 className="capitalize font-bold text-2xl text-lightBlack dark:text-light">
          {type}&nbsp;
          <a
            href={url}
            target="_blank"
            className="text-coralPink  dark:text-accentDark capitalize hover:italic transition-all ease duration-200"
          >
            @{provider}
          </a>
        </h3>
        <span className="capitalize font-bold text-lightBlack/75 dark:text-light/75 italic ">
          Completed: {time}
        </span>
        <p className="font-bold w-full text-lightBlack dark:text-light">
          {info}
        </p>
      </motion.div>
    </li>
  );
};
const DetailsEducation2 = ({ type, time, provider, info, url }) => {
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
        <h3 className="capitalize font-bold text-2xl text-lightBlack dark:text-light">
          {type}&nbsp;{' '}
          <a
            href={url}
            target="_blank"
            className="text-coralPink  dark:text-accentDark capitalize hover:italic transition-all ease duration-200"
          >
            @{provider}
          </a>
        </h3>
        <span className="capitalize font-bold text-lightBlack/75 dark:text-light/75 italic">
          {time}
        </span>
        <p className="font-bold w-full text-lightBlack dark:text-light">
          {info}
        </p>
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
      <h1 className="font-bold text-4xl mb-32 w-full text-center text-lightBlack dark:text-light">
        Experience
      </h1>

      <div className="w-[75%] mx-auto relative" ref={ref}>
        <motion.div
          style={{ scaleY: scrollYProgress }}
          className="absolute left-9 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top"
        />

        <ul className=" w-full flex flex-col items-start justify-between ml-4 text-left">
          <DetailsEducation
            type="Certification: Generative AI for Software Development"
            time="December 2025"
            provider="DeepLearning.AI"
            info="Embedding AI in software and systems design, in tandem with engineering."
            url="https://learn.deeplearning.ai/certificates/c6ab2053-6701-43e8-b2b4-68e088335696"
          />
          <DetailsEducation2
            type="DevOps Program"
            time=" Feb 2025 - [In Progress] "
            provider="University of Toronto"
            info=<ul>
              <p> Four part program, consisting of the following:</p>
              <li>1. Principles and Practices [Done]</li>
              <li>
                2. Ecosystem, Architecture and Continuous Software Delivery
                [IPR]
              </li>
              <li>3. Tools and Applications [Spring 2026]</li>
              <li> 4. Design and Architecture of Cloud Systems [Done]</li>
            </ul>
            url="https://learn.utoronto.ca/programs-courses/certificates/devops"
          />
          <Details
            position="Senior Manager - Supply Chain Technology: Strategic Initiatives"
            company="Loblaw Companies LTD"
            companyLink="https://www.loblaw.ca/"
            time="October 2025 - Present"
            address="1 PCC, Brampton"
            work="Release and Change management, New Features and Program projects alongside other key efforts for the continued adoption 
            of a Cloud-Native Warehouse, Yard and Labour Management solution across the Loblaw and Shoppers Drug Mart distribution network."
          />{' '}
          <Details
            position="Manager - Supply Chain Technology: Strategic Initiatives"
            company="Loblaw Companies LTD"
            companyLink="https://www.loblaw.ca/"
            time="August 2024 - September 2025"
            address="1 PCC, Brampton"
            work="Release and Change management, New Features and Program projects alongside other key efforts for the continued adoption 
            of a Cloud-Native Warehouse, Yard and Labour Management solution across the Loblaw and Shoppers Drug Mart distribution network."
          />{' '}
          <DetailsEducation
            type="Certification: AWS Cloud Technology Consultant"
            time="January 2024"
            provider="AWS"
            info="Applying AWS solutions to business goals and drivers, alongside being able to provide
            technical direction and oversight to cloud implementation teams."
            url="https://www.coursera.org/account/accomplishments/professional-cert/WJ5ZAZ3UM25J"
          />{' '}
          <DetailsEducation
            type="Certification: DevOps on AWS"
            time="January 2024"
            provider="AWS"
            info="Applying DevOps on AWS, from coding to monitoring and everything in between."
            url="https://www.coursera.org/account/accomplishments/specialization/ZM82PY9U4Y4E"
          />{' '}
          <DetailsEducation
            type="Certification: DevOps and Software Engineering"
            time="January 2024"
            provider="IBM"
            info="Essential DevOps skills and how to implement them as a SWE. Includes Microservice development (Docker, Kubernetes, OS),
             CI/CD automation and leveraging serverless technologies."
            url="https://coursera.org/share/5979e2a9bb5b3167eb93a753ddd51fca"
          />{' '}
          <DetailsEducation
            type="Certification: Back-End Developer"
            time="November 2023"
            provider="Meta"
            info="Server-side certification focused on API development alongside version control, using Python and Django."
            url="https://www.coursera.org/account/accomplishments/professional-cert/49EW6AM7WC7U"
          />{' '}
          <Details
            position="Manager - Supply Chain Technology: Site Stability"
            company="Loblaw Companies LTD"
            companyLink="https://www.loblaw.ca/"
            time="June 2023 - July 2024"
            address="1 PCC, Brampton"
            work="Warehouse Management, part of a program team responsible for rolling out and supporting a Cloud-Native WMS Application for Loblaw and Shoppers Distribution Centers.
            Post conversion, owned the Support, Release and Change Management for multiple Distribution Centers spanning across Canada."
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
            type="Certification: IT Automation with Python"
            time="October 2022"
            provider="Google"
            info="Focused on critical automation skills for IT support and system administration tasks."
            url="https://www.coursera.org/account/accomplishments/professional-cert/55U5X948MGUV"
          />{' '}
          <Details
            position="IT Specialist - Project Management Office"
            company="Loblaw Companies LTD"
            companyLink="https://www.loblaw.ca/"
            time="January 2022 - May 2023"
            address="1 PCC, Brampton"
            work="Tool SME for Clarity PPM. Automating tasks programatically E-2-E. Enterprise reporting and data analysis."
          />{' '}
          <Details
            position="Intern - Project Management Office"
            company="Loblaw Companies LTD"
            companyLink="https://www.loblaw.ca/"
            time="May 2021 - December 2021"
            address="1 PCC, Brampton"
            work="Agile tooling. Reporting. End-user support and training."
          />{' '}
          <DetailsEducation2
            type="Honours Bachelor of Arts"
            time=" - December 2020"
            provider="University of Toronto"
            info="Political Science Major.
            International Relations, International Political Economy, Canadian Government."
            url="https://www.utoronto.ca/"
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
