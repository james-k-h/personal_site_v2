'use client';
import React from 'react';
import Slider from 'react-slick';

import './index.css';
import Link from 'next/link';

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
      title: 'Bayview Eatery',
      text: 'The best local eats',
      image: '/images/projects/bayview_eatery.png',
      color: 'whiteAlpha.800',
      click: '/projects/bayview_eatery',
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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
    autoplaySpeed: 6000,
    // cssEase: 'linear',
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
              className="px-2 py-2 pb-2 text-white dark:text-lightGray text-center justify-center align-middle border-8 rounded-3xl border-lightBlack dark:border-light  bg-lightBlack dark:bg-light"
              key={index}
              id="slides"
            >
              <Link href="/projects" className="">
                <img src={card.image} alt={card.title} id="img_card" />
              </Link>
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
