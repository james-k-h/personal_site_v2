'use client';
import Head from 'next/head';
import AnimatedText from './../utils/AnimatedText';
import Link from 'next/link';
import Image from 'next/image';
import article_1 from '../../../../public/images/articles/article_1.png';
import article_2 from '../../../../public/images/articles/article_2.png';
import { motion } from 'framer-motion';
import { links_array } from './LinksSection';

const FramerImage = motion(Image);

const Article = ({ img, title, date, link, summary }) => {
  return (
    <li
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center
    justify-between bg-tan text-lightBlack dark:text-lightGray first:mt-0 border 
    border-solid  border-lightBlack dark:border-light  dark:opacity-80
     dark:bg-dark"
    >
      <div className="col-span-1">
        <Link href={link} target="_blank">
          <h2 className="capitalize text-xl font-semibold hover:underline">
            {title}
          </h2>
        </Link>

        <span className=" font-semibold text-coralPink dark:text-accentDark">
          {date}
        </span>

        <p className="text-sm mb-2 font-semibold">{summary}</p>
      </div>
    </li>
  );
};

const FeaturedArticle = ({ date, img, title, time, summary, link }) => {
  return (
    <li
      className=" relative col-span-1 w-full border border-solid
    rounded-2xl  border-lightBlack dark:border-light p-4 
    bg-tan dark:bg-dark dark:opacity-80"
    >
      <Link
        href={link}
        target="_blank"
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        />
      </Link>
      <Link href={link} target="_blank">
        <h2
          className="capitalize text-2xl font-bold my-2 
        hover:underline mt-2 text-lightBlack dark:text-lightGray"
        >
          {title}
        </h2>
      </Link>
      <p className="text-coralPink dark:text-accentDark font-semibold">
        {date}
      </p>
      <p className="text-sm  text-lightBlack dark:text-lightGray font-semibold">
        {summary}
      </p>
      <span className="text-coralPink dark:text-accentDark font-semibold">
        {time}
      </span>
    </li>
  );
};
const LinksPage = () => {
  return (
    <>
      <Head>
        <title>Links</title>
        <meta
          name="description"
          content="Shortlist of my favourite links."
        ></meta>
      </Head>
      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden">
        <AnimatedText
          text="My Favourite Links - A Collection of Articles"
          className="  text-lightBlack dark:text-lightGray mb-10 mt-12"
        />
        <ul className="md:grid lg:grid-cols-2 gap-16 mb-8 flex flex-col justify-center">
          <FeaturedArticle
            title="Taking stock of the ongoing war in Israel and Gaza"
            summary="After six days of a humanitarian pause at the end of November and the release of more than 100 hostages, fighting has resumed in Gaza and the Israeli offensive has expanded south toward Khan Yunis, Gaza’s second-largest city.
            Natan Sachs reflects on the public mood, Israel’s operational goals, the ongoing threat of wider regional escalation, and what might come next."
            time="9 min read"
            link="https://www.brookings.edu/articles/taking-stock-of-the-ongoing-war-in-israel-and-gaza/"
            img={article_1}
            date={'December 7, 2023'}
          />
          <FeaturedArticle
            title="Propaganda, foreign interference, and generative AI"
            summary="A broad, persistent, asymmetric competition is now underway between democracies and their authoritarian challengers, and the information and technology domains are critical theaters. Against this backdrop, recent advances in generative artificial intelligence (AI) have outpaced expectations, and risks that once seemed remote now appear immediate."
            time="7 min read"
            link="https://www.brookings.edu/articles/propaganda-foreign-interference-and-generative-ai/"
            img={article_2}
            date={'November 8, 2023'}
          />
        </ul>
        <h2
          className="font-bold text-4xl w-full text-center my-4
        mt-12 mb-4 text-lightBlack dark:text-lightGray"
        >
          Additional Articles
        </h2>

        <ul className="w-5/6 mb-8 flex flex-col items-center justify-center overflow-hidden">
          {links_array.map((item) => {
            return (
              <Article
                title={item.Title}
                date={item.Date}
                link={item.see_more}
                key={item.Title}
                summary={item.Subject}
              />
            );
          })}
        </ul>
      </main>
    </>
  );
};
export default LinksPage;
