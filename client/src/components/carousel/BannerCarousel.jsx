import { useState, useEffect, useRef, useCallback } from 'react';
import './BannerCarousel.css';
import image1 from './../../assets/announcement.svg';

const DEFAULT_SLIDES = [
  {
    id: 1,
    image: image1,
    title: 'Explore the Mountains',
    subtitle: 'Discover breathtaking peaks and scenic trails',
    cta: 'Learn More',
  },
  {
    id: 2,
    image: image1,
    title: 'Relax on the Beach',
    subtitle: 'Sun, sand, and serenity await you',
    cta: 'Book Now',
  },
  {
    id: 3,
    image: image1,
    title: 'Experience the City',
    subtitle: 'Vibrant streets, culture, and endless energy',
    cta: 'Explore',
  },
  {
    id: 4,
    image: image1,
    title: 'Into the Forest',
    subtitle: 'Find peace among towering trees and nature',
    cta: 'Discover',
  },
];

export default function BannerCarousel({
  slides = DEFAULT_SLIDES,
  autoPlayInterval = 4000,
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);
  const total = slides.length;

  const goTo = useCallback((index) => {
    setCurrent((index + total) % total);
  }, [total]);

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-play
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, autoPlayInterval);
    return () => clearInterval(timer);
  }, [paused, next, autoPlayInterval]);

  // Touch / swipe support
  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const delta = touchStartX.current - touchEndX.current;
    if (Math.abs(delta) > 50) {
      delta > 0 ? next() : prev();
    }
  };

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-label="Banner carousel"
      role="region"
    >
      {/* Slides */}
      <div
        className="carousel__track"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className="carousel__slide"
            aria-hidden={index !== current}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="carousel__image"
              draggable={false}
            />

          </div>
        ))}
      </div>

      {/* Dot indicators */}
      <div className="carousel__dots" role="tablist" aria-label="Slide indicators">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            className={`carousel__dot ${index === current ? 'carousel__dot--active' : ''}`}
            onClick={() => goTo(index)}
            role="tab"
            aria-selected={index === current}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
