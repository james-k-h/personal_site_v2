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
    document.body.style.overflow = 'hidden';

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

      {!imageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}

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

// Optimized Gallery Component
const OptimizedGallery = ({ images, onImageClick }) => {
  const [loadedImages, setLoadedImages] = useState(new Set());
  const [preloadedImages, setPreloadedImages] = useState(new Set());

  const handleImageLoad = (index) => {
    setLoadedImages((prev) => new Set([...prev, index]));
  };

  const handleMouseEnter = (image, index) => {
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

          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

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
  const [isPreloaded, setIsPreloaded] = useState(false);

  const handleImageClick = (image, preloaded) => {
    setSelectedImage(image);
    setIsPreloaded(preloaded);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
    setIsPreloaded(false);
  };

  const travelStats = [
    {
      icon: '🌍',
      label: 'Continents Goal',
      value: '7',
      color: 'from-blue-400 to-blue-600',
    },
    {
      icon: '✈️',
      label: 'Next Destination',
      value: 'Greece',
      color: 'from-purple-400 to-purple-600',
    },
    {
      icon: '🎿',
      label: 'Favorite Trip',
      value: 'Alta, Utah',
      color: 'from-green-400 to-green-600',
    },
  ];

  const bucketList = [
    {
      icon: '🌊',
      title: 'Amazon Adventure',
      description: 'Travel down the river with an experienced guide',
    },
    {
      icon: '⛰️',
      title: 'Machu Picchu',
      description: 'Ancient Incan citadel in the Andes Mountains',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <div className="container mt-12 mx-auto px-4 sm:px-6 lg:px-12 py-4 mb-8">
        {/* Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-lightBlack dark:text-light">
            Exploring The{' '}
            <span className="bg-clip-text text-coralPink dark:text-accentDark bg-gradient-to-r from-primary-400 to-secondary-600">
              World
            </span>
          </h1>
          <p className="text-lg lg:text-xl text-lightBlack/80 dark:text-light/80 max-w-2xl mx-auto">
            Journeying the planet, one adventure at a time
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-secondary-600 mx-auto rounded-full mt-4" />
        </motion.div>

        {/* Travel Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
        >
          {travelStats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="group"
            >
              <div className="relative bg-tan dark:bg-dark rounded-2xl p-6 border-2 border-lightBlack dark:border-light hover:border-primary-400 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                <div
                  className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${stat.color} opacity-10 rounded-full blur-2xl group-hover:opacity-20 transition-opacity`}
                />

                <div className="relative z-10 text-center">
                  <div className="text-5xl mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl lg:text-3xl font-bold text-lightBlack dark:text-light mb-2">
                    {stat.value}
                  </h3>
                  <p className="text-sm lg:text-base text-lightBlack/70 dark:text-light/70 font-semibold">
                    {stat.label}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bucket List Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-lightBlack dark:text-light">
            Bucket{' '}
            <span className="bg-clip-text text-coralPink dark:text-accentDark bg-gradient-to-r from-primary-400 to-secondary-600">
              List
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {bucketList.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: index === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                className="group"
              >
                <div className="relative bg-gradient-to-br from-primary-400/10 to-secondary-600/10 dark:from-primary-400/20 dark:to-secondary-600/20 rounded-2xl p-6 border-2 border-primary-400/50 dark:border-primary-400/50 hover:border-primary-400 dark:hover:border-primary-400 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 overflow-hidden">
                  <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-primary-400/20 to-secondary-600/20 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500" />

                  <div className="relative z-10 flex items-start">
                    <div className="text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="text-xl lg:text-2xl font-bold text-lightBlack dark:text-light mb-2">
                        {item.title}
                      </h3>
                      <p className="text-base lg:text-lg text-lightBlack/80 dark:text-light/80">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Travel Pictures Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-center mb-8 text-lightBlack dark:text-light">
            Image{' '}
            <span className="bg-clip-text text-coralPink dark:text-accentDark bg-gradient-to-r from-primary-400 to-secondary-600">
              Gallery
            </span>
          </h2>
          <OptimizedGallery images={IMAGES} onImageClick={handleImageClick} />
        </motion.div>
      </div>

      {/* Full-screen modal */}
      <AnimatePresence>
        {selectedImage && (
          <ImageModal
            image={selectedImage}
            onClose={handleCloseModal}
            isPreloaded={isPreloaded}
          />
        )}
      </AnimatePresence>
    </main>
  );
};

export default AboutTravel;
