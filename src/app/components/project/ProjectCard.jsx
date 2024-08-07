import React from 'react';
import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  stack,
}) => {
  return (
    <div className="">
      <div
        className="h-52 md:h-72 rounded-t-xl relative group  border-lightBlack dark:border-light"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          borderWidth: '2px',
          border: 'lightBlack',
          // border: 'dark:border-light',
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-dark bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 ">
          <Link
            href={gitUrl}
            className="h-14 w-14 mr-2 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
            target="_blank"
          >
            <CodeBracketIcon className="h-10 w-10 text-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
          </Link>
          {previewUrl !== '' ? (
            <Link
              href={previewUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link"
              target="_blank"
            >
              <EyeIcon className="h-10 w-10 text-light dark:text-light absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  cursor-pointer group-hover/link:text-white" />
            </Link>
          ) : null}
        </div>
      </div>
      <div
        className=" text-lightBlack dark:text-light rounded-b-xl 
      
        px-4 border-2  border-lightBlack dark:border-light p-4 opacity-90
        bg-tan dark:bg-dark"
      >
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className=" text-lightBlack dark:text-light">
          <b>Stack:</b> {stack}
        </p>
        <p className=" text-coralPink font-semibold dark:text-accentDark">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
