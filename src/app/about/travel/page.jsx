'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import '../../globals.css';
import { images as IMAGES } from './../images';

// Full-screen Image Modal
const ImageModal = ({ image, onClose, isPreloaded }) => {
  const [imageLoaded, setImageLoaded] = useState(isPreloaded);

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';

    // Handle escape key
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 bg-black bg-opacity-95"
    >
      {/* Close button - always visible */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 z-[60] w-12 h-12 flex items-center justify-center rounded-full bg-white bg-opacity-20 hover:bg-opacity-30 transition-all text-white shadow-lg"
        aria-label="Close"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Loading indicator */}
      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

      {/* Image container - click background to close */}
      <div
        className="absolute inset-0 flex items-center justify-center p-4 cursor-pointer"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="relative max-w-[90vw] max-h-[90vh] cursor-default"
          onClick={(e) => e.stopPropagation()}
        >
          <img
            src={image.src}
            alt={image.alt || image.caption || 'Travel photo'}
            className={`max-w-full max-h-[90vh] w-auto h-auto object-contain transition-opacity duration-300 ${
              imageLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setImageLoaded(true)}
          />

          {/* Caption */}
          {image.caption && imageLoaded && (
            <div className="absolute -bottom-12 left-0 right-0 text-white text-center">
              <p className="text-sm md:text-base">{image.caption}</p>
            </div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
};

// Optimized Gallery Component with lazy loading and preloading
const OptimizedGallery = ({ images, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const handleMouseEnter = (image, index) => {
    // Preload the full-size image on hover
    if (!preloadedImages.has(index)) {
      const img = new window.Image();
      img.src = image.src;
      img.onload = () => {
        setPreloadedImages((prev) => new Set([...prev, index]));
      };
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
      {images.map((image, index) => (
        <div
          key={`${image.src}-${index}`}
          className="relative aspect-square cursor-pointer overflow-hidden rounded-lg group"
          onClick={() => onImageClick(image, preloadedImages.has(index))}
          onMouseEnter={() => handleMouseEnter(image, index)}
          onTouchStart={() => handleMouseEnter(image, index)}
        >
          {/* Placeholder for loading state */}
          {!loadedImages.has(index) && (
            <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 animate-pulse" />
          )}

          <Image
            src={image.src}
            alt={image.alt || image.caption || `Travel photo ${index + 1}`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
            className={`object-cover transition-all duration-300 ${
              loadedImages.has(index) ? 'opacity-100' : 'opacity-0'
            } group-hover:scale-110`}
            loading={index < 8 ? 'eager' : 'lazy'}
            quality={75}
            onLoadingComplete={() => handleImageLoad(index)}
          />

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

          {/* Expand icon on hover */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <svg
              className="w-12 h-12 text-white drop-shadow-lg"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
              />
            </svg>
          </div>

          {/* Caption overlay on hover */}
          {image.caption && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-2 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {image.caption}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

const AboutTravel = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-12 mx-auto px-4 sm:px-6 lg:px-12 py-4 text-center mb-8">
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-lightBlack dark:text-light mb-4 text-2xl sm:text-3xl lg:text-4xl lg:leading-normal font-extrabold"
        >
          <span className="bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
            All About Travel
          </span>
        </motion.h1>

        <section className="text-lightBlack dark:text-light">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="justify-center items-center gap-4 py-2 px-4"
          >
            <div className="mt-4 md:mt-0 xl:mt-10 text-center flex flex-col h-relative rounded-3xl p-4">
              <p className="lg:text-lg md:text-sm 2xl:text-xl">
                <b>Travel</b>
                <br />
                Traveling is a key interest and a great way to spend time.
                <br />
                Here is a quick summary of some travel goals and facts!
                <br />
                <br />
                <b>Personal Goal:</b> Visit all 7 continents
                <br />
                <b>Next Destination:</b> Greece
                <br />
                <b>Bucket Item:</b> Amazon adventure; travel down the river with
                an experienced guide
                <br />
                <b>Must See:</b> Machu Picchu
                <br />
                <b>Favourite Active Trip: </b> Skiing - Alta, Utah (USA)
                <br />
                <br />
              </p>
            </div>
          </motion.div>
        </section>

        <section className="md:flex">
          <div className="mb-32 py-2 px-4 mt-4 text-lightBlack dark:text-light w-full">
            <h2 className="lg:text-lg md:text-sm 2xl:text-xl mb-6">
              <b>Travel Pictures</b>
            </h2>
            <OptimizedGallery images={IMAGES} onImageClick={handleImageClick} />
          </div>
        </section>
      </div>

      {/* Full-screen modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal image={selectedImage} onClose={handleCloseModal} />
        )}
      </AnimatePresence>
    </main>
  );
};

export default AboutTravel;
