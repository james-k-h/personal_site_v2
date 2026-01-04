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
        className="h-52 md:h-72 rounded-t-xl relative group border-lightBlack dark:border-light"
        style={{
          background: `url(${imgUrl})`,
          backgroundSize: 'cover',
          borderWidth: '2px',
          border: 'lightBlack',
        }}
      >
        <div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-dark bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500">
          {/* GitHub Repo Link with Tooltip */}
          <div className="relative group/tooltip mr-2">
            <Link
              href={gitUrl}
              className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
              target="_blank"
            >
              <CodeBracketIcon className="h-10 w-10 text-light cursor-pointer group-hover/link:text-white" />
            </Link>
            {/* Tooltip */}
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">
              <div className="bg-lightBlack dark:bg-light text-white dark:text-dark px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
                Visit Repo
                {/* Arrow */}
                <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-lightBlack dark:border-t-light"></div>
              </div>
            </div>
          </div>

          {/* Preview Link with Tooltip */}
          {previewUrl !== '' ? (
            <div className="relative group/tooltip">
              <Link
                href={previewUrl}
                className="h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link flex items-center justify-center"
                target="_blank"
              >
                <EyeIcon className="h-10 w-10 text-light dark:text-light cursor-pointer group-hover/link:text-white" />
              </Link>
              {/* Tooltip */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none">
                <div className="bg-lightBlack dark:bg-light text-white dark:text-dark px-3 py-2 rounded-lg text-sm font-semibold whitespace-nowrap shadow-lg">
                  Visit Site
                  {/* Arrow */}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-lightBlack dark:border-t-light"></div>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      <div className="text-lightBlack dark:text-light rounded-b-xl px-4 border-2 border-lightBlack dark:border-light p-4 opacity-90 bg-tan dark:bg-dark">
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-lightBlack dark:text-light">
          <b>Stack:</b> {stack}
        </p>
        <p className="text-coralPink font-semibold dark:text-accentDark">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
