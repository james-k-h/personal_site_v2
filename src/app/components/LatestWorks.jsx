'use client';
import React from 'react';
import Slider from 'react-slick';

import './index.css';

const LatestWorks = () => {
  const [slider, setSlider] = React.useState(null);
  //   const top = useBreakpointValue({ base: '90%', md: '50%' });
  //   const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: 'Next Property Rental',
      text: 'Property Rental inspired by Airbnb',
      image: '/images/projects/next_property_rental.png',
      color: 'whiteAlpha.800',
      click: '/projects/mern_dash',
    },
    {
      title: 'My Blog',
      text: 'My thoughts....',
      image: '/images/projects/my_blog.png',
      color: 'whiteAlpha.800',
      click: '/projects/my_blog',
    },
    {
      title: 'Next E-Commerce',
      text: 'E-Commerce PoC, a mock-up sneaker store.',
      image: '/images/projects/sneaker_store.png',
      color: 'blackAlpha.700',
      click: '/projects/ecommerce_poc',
    },
    {
      title: 'MERN Job Tracking App',
      text: 'Web app to help you track and organize your job search.',
      image: '/images/projects/job_search_stats.png',
      color: 'blackAlpha.700',
      click: '/projects/job_search',
    },
    {
      title: 'Admin Dashboard',
      text: 'E-Commerce Admin Dashboard for a detailed summary.',
      image: '/images/projects/mern_dash.png',
      color: 'whiteAlpha.800',
      click: '/projects/mern_dash',
    },
    {
      title: 'Communities',
      text: 'Create and follow your favourite communities',
      image: '/images/projects/communities.png',
      color: 'whiteAlpha.800',
      click: '/projects/communities',
    },
    {
      title: 'Code Editor',
      text: 'Code on the fly',
      image: '/images/projects/code_editor.png',
      color: 'whiteAlpha.800',
      click: '/projects/code_editor',
    },
    {
      title: 'Java Platformer',
      text: 'Pirate themed scroller',
      image: '/images/projects/java_platformer.png',
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <main className="py-12">
      <h2 className=" text-center text-4xl font-bold  text-lightBlack dark:text-dark mt-4 mb-8 md:mb-12 opacity-75">
        <span>Portfolio Projects</span>
      </h2>
      <div>
        {/* CSS files for react-slick */}
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <Slider {...settings} ref={(slider) => setSlider(slider)}>
          {cards.map((card, index) => (
            <div
              className="p-4 py-4 text-white dark:text-lightGray text-center justify-center align-middle border-2 rounded-3xl border-white dark:border-lightGray  bg-lightBlack dark:bg-dark"
              key={index}
              id="slides"
            >
              <img src={card.image} alt={card.title} />
              {/* <p>{card.title}</p> */}
            </div>
          ))}
        </Slider>
      </div>
      <br />
    </main>
  );
};
export default LatestWorks;
