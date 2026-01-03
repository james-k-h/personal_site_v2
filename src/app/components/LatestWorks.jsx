// 'use client';
// import React from 'react';
// import Slider from 'react-slick';

// import './index.css';
// import Link from 'next/link';

// const LatestWorks = () => {
//   const [slider, setSlider] = React.useState(null);
//   //   const top = useBreakpointValue({ base: '90%', md: '50%' });
//   //   const side = useBreakpointValue({ base: '30%', md: '40px' });

//   const cards = [
//     {
//       title: 'Next Property Rental',
//       text: 'Property Rental inspired by Airbnb',
//       image: '/images/projects/next_property_rental.png',
//       color: 'whiteAlpha.800',
//       click: '/projects/mern_dash',
//     },
//     {
//       title: 'Bayview Eatery',
//       text: 'The best local eats',
//       image: '/images/projects/bayview_eatery.png',
//       color: 'whiteAlpha.800',
//       click: '/projects/bayview_eatery',
//     },
//     {
//       title: 'My Blog',
//       text: 'My thoughts....',
//       image: '/images/projects/my_blog.png',
//       color: 'whiteAlpha.800',
//       click: '/projects/my_blog',
//     },
//     {
//       title: 'Next E-Commerce',
//       text: 'E-Commerce PoC, a mock-up sneaker store.',
//       image: '/images/projects/sneaker_store_v2.png',
//       color: 'blackAlpha.700',
//       click: '/projects/ecommerce_poc',
//     },
//     {
//       title: 'MERN Job Tracking App',
//       text: 'Web app to help you track and organize your job search.',
//       image: '/images/projects/job_search_stats.png',
//       color: 'blackAlpha.700',
//       click: '/projects/job_search',
//     },
//     {
//       title: 'Admin Dashboard',
//       text: 'E-Commerce Admin Dashboard for a detailed summary.',
//       image: '/images/projects/mern_dash.png',
//       color: 'whiteAlpha.800',
//       click: '/projects/mern_dash',
//     },
//     {
//       title: 'Communities',
//       text: 'Create and follow your favourite communities',
//       image: '/images/projects/communities.png',
//       color: 'whiteAlpha.800',
//       click: '/projects/communities',
//     },
//     {
//       title: 'Code Editor',
//       text: 'Code on the fly',
//       image: '/images/projects/code_editor.png',
//       color: 'whiteAlpha.800',
//       click: '/projects/code_editor',
//     },
//     {
//       title: 'Java Platformer',
//       text: 'Pirate themed scroller',
//       image: '/images/projects/java_platformer.png',
//     },
//   ];
//   const settings = {
//     dots: true,
//     infinite: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     autoplay: true,
//     speed: 100,
//     autoplaySpeed: 6000,
//     // cssEase: 'linear',
//   };
//   return (
//     <main className="py-12">
//       <h2 className=" text-center text-4xl font-bold  text-lightBlack dark:text-dark mt-4 mb-8 md:mb-12 opacity-75">
//         <span>Portfolio Projects</span>
//       </h2>
//       <div>
//         {/* CSS files for react-slick */}
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
//         />
//         <link
//           rel="stylesheet"
//           type="text/css"
//           href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
//         />
//         <Slider {...settings} ref={(slider) => setSlider(slider)}>
//           {cards.map((card, index) => (
//             <div
//               className="px-2 py-2 pb-2 text-white dark:text-lightGray text-center justify-center align-middle border-8 rounded-3xl border-lightBlack dark:border-light  bg-lightBlack dark:bg-light"
//               key={index}
//               id="slides"
//             >
//               <Link href="/projects" className="">
//                 <img src={card.image} alt={card.title} id="img_card" />
//               </Link>
//               {/* <p>{card.title}</p> */}
//             </div>
//           ))}
//         </Slider>
//       </div>
//       <br />
//     </main>
//   );
// };
// export default LatestWorks;

'use client';
import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import { motion } from 'framer-motion';
import './index.css';

const LatestWorks = () => {
  const [slider, setSlider] = React.useState(null);

  const cards = [
    {
      title: 'Next Property Rental',
      text: 'Property Rental inspired by Airbnb',
      image: '/images/projects/next_property_rental.png',
      click: '/projects/mern_dash',
    },
    {
      title: 'Bayview Eatery',
      text: 'The best local eats',
      image: '/images/projects/bayview_eatery.png',
      click: '/projects/bayview_eatery',
    },
    {
      title: 'My Blog',
      text: 'My thoughts....',
      image: '/images/projects/my_blog.png',
      click: '/projects/my_blog',
    },
    {
      title: 'Next E-Commerce',
      text: 'E-Commerce PoC, a mock-up sneaker store.',
      image: '/images/projects/sneaker_store_new.png',
      // image: '/images/projects/sneaker_store_v2.png',
      click: '/projects/ecommerce_poc',
    },
    {
      title: 'MERN Job Tracking App',
      text: 'Web app to help you track and organize your job search.',
      image: '/images/projects/job_search_stats.png',
      click: '/projects/job_search',
    },
    {
      title: 'Admin Dashboard',
      text: 'E-Commerce Admin Dashboard for a detailed summary.',
      image: '/images/projects/mern_dash.png',
      click: '/projects/mern_dash',
    },
    {
      title: 'Communities',
      text: 'Create and follow your favourite communities',
      image: '/images/projects/communities.png',
      click: '/projects/communities',
    },
    {
      title: 'Code Editor',
      text: 'Code on the fly',
      image: '/images/projects/code_editor.png',
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
    speed: 500,
    autoplaySpeed: 5000,
    cssEase: 'ease-in-out',
  };

  return (
    <section className="py-12 sm:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl sm:text-5xl font-extrabold text-lightBlack dark:text-light mb-4">
          Portfolio{' '}
          <span className="bg-clip-text text-coralPink dark:text-accentDark bg-gradient-to-r from-primary-400 to-secondary-600">
            Projects
          </span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded-full" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
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

        <div className="bg-tan dark:bg-dark rounded-3xl p-8 border-8 border-lightBlack dark:border-light  overflow-hidden">
          <Slider {...settings} ref={(slider) => setSlider(slider)}>
            {cards.map((card, index) => (
              <div key={index} className="px-2 outline-none">
                <Link href="/projects" className="block group">
                  <div className="relative rounded-2xl overflow-hidden">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="w-full h-auto transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <h3 className="text-white text-xl font-bold mb-2">
                          {card.title}
                        </h3>
                        <p className="text-white/90 text-sm">{card.text}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/projects"
            className=" inline-block py-2 sm:py-3 px-6 sm:px-10  bg-lightBlack dark:bg-light dark:text-white text-white rounded-full capitalize font-semibold border-2 border-solid border-white dark:border-white hover:scale-105 transition-all ease duration-200 text-sm sm:text-base"
          >
            View All Projects
            <span className="ml-2">→</span>
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default LatestWorks;
