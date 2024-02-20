import React from 'react';

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? ' text-coralPink dark:text-light border-primary-500 bg-tan dark:bg-dark opacity-90 font-bold'
    : 'text-dark dark:text-white border-lightBlack dark:border-silver hover:bg-tan hover:dark:bg-dark hover:dark:border-light hover:dark:text-light hover:text-coralPink hover:border-coralPink';
  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-6 py-3 text-xl cursor-pointer`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
