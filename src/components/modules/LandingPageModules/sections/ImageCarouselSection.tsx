"use client";

import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { ChevronLeft, ChevronRight, Play, Pause } from "lucide-react";

interface CarouselImage {
  src: string;
  alt: string;
  title?: string;
  description?: string;
}

const images: CarouselImage[] = [
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1200&h=600&fit=crop",
    alt: "Business Meeting",
    title: "CEO Sharing Session",
    description: "Belajar langsung dari para pemimpin industri Indonesia",
  },
  {
    src: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&h=600&fit=crop",
    alt: "Students Collaboration",
    title: "Collaborative Learning",
    description:
      "Membangun jaringan dengan mahasiswa terbaik dari seluruh Indonesia",
  },
  {
    src: "https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&h=600&fit=crop",
    alt: "Leadership Workshop",
    title: "Leadership Workshop",
    description: "Mengasah kemampuan kepemimpinan melalui workshop intensif",
  },
  {
    src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=1200&h=600&fit=crop",
    alt: "Networking Event",
    title: "Networking Event",
    description: "Kesempatan networking dengan 100+ corporate partners",
  },
  {
    src: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?w=1200&h=600&fit=crop",
    alt: "Public Speaking",
    title: "Public Speaking Training",
    description: "Melatih kemampuan presentasi dan public speaking",
  },
];

const ImageCarousel = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "center",
      containScroll: "trimSnaps",
    },
    [Autoplay({ delay: 5000, stopOnInteraction: false })],
  );

  const [isPlaying, setIsPlaying] = useState(true);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  const toggleAutoplay = useCallback(() => {
    const autoplay = emblaApi?.plugins()?.autoplay;
    if (!autoplay) return;
    if (isPlaying) {
      autoplay.stop();
    } else {
      autoplay.play();
    }
    setIsPlaying(!isPlaying);
  }, [emblaApi, isPlaying]);

  return (
    <section className="py-16 md:py-24 bg-secondary/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Captured{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">
              Moments
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A visual journey through our transformative programs and events
          </p>
        </motion.div>

        {/* Carousel Viewport */}
        <div className="max-w-7xl mx-auto overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {images.map((image, index) => (
              <div
                key={index}
                className="flex-[0_0_100%] min-w-0 pl-4 md:flex-[0_0_95%] lg:flex-[0_0_90%]">
                <div className="group relative aspect-video overflow-hidden border-2 border-primary/20 shadow-2xl shadow-primary/10 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/20 transition-all duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 1024px"
                    className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                    priority={index === 0}
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-linear-to-t from-secondary/90 via-secondary/20 to-transparent" />

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                      {image.title}
                    </h3>
                    <p className="text-white/80 text-sm md:text-base">
                      {image.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="mt-4 md:mt-8 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto gap-8 border-t border-white/5 pt-10 px-2">
          <button
            onClick={toggleAutoplay}
            className="flex h-12 w-12 items-center justify-center bg-white/5 border border-white/10 text-foreground hover:bg-primary hover:text-white transition-all shadow-sm group">
            {isPlaying ? (
              <Pause size={18} className="fill-current" />
            ) : (
              <Play size={18} className="fill-current translate-x-0.5" />
            )}
          </button>

          <div className="flex items-center gap-8 lg:gap-12">
            <div className="flex items-baseline font-mono">
              <span className="text-4xl md:text-5xl font-black text-foreground tracking-tighter">
                0{selectedIndex + 1}
              </span>
              <span className="mx-3 text-muted-foreground font-light text-xl">
                /
              </span>
              <span className="text-muted-foreground text-xs font-bold tracking-[0.2em] uppercase opacity-50">
                0{images.length}
              </span>
            </div>

            <div className="flex gap-px">
              <button
                onClick={() => emblaApi?.scrollPrev()}
                className="flex h-12 w-12 items-center justify-center bg-card text-foreground hover:bg-primary hover:text-white transition-all border border-white/5 shadow-sm">
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={() => emblaApi?.scrollNext()}
                className="flex h-12 w-12 items-center justify-center bg-card text-foreground hover:bg-primary hover:text-white transition-all border border-white/5 shadow-sm">
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === selectedIndex
                  ? "bg-primary w-8"
                  : "bg-muted hover:bg-primary/50"
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Preview */}
        <div className="hidden md:flex justify-center gap-4 mt-8">
          {images.map((image, index) => (
            <motion.button
              key={index}
              onClick={() => emblaApi?.scrollTo(index)}
              className={`relative w-20 h-14 rounded-lg overflow-hidden transition-all duration-300 ${
                index === selectedIndex
                  ? "ring-2 ring-primary ring-offset-2 ring-offset-background scale-110"
                  : "opacity-60 hover:opacity-100"
              }`}
              whileHover={{ scale: index === selectedIndex ? 1.1 : 1.05 }}>
              <Image
                src={image.src}
                alt={image.alt}
                width={80}
                height={56}
                className="object-cover w-full h-full"
              />
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageCarousel;
