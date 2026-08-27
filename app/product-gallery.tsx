"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const images = [
  { src: "/images/praquel/barrera-reparadora.jpg", alt: "Características de la barrera reparadora Praquel" },
  { src: "/images/praquel/producto-principal.jpg", alt: "Barra de silicona Praquel abierta y cerrada" },
  { src: "/images/praquel/soluciones-cicatrices.jpg", alt: "Fórmula y beneficios de la barra Praquel" },
  { src: "/images/praquel/tratamiento-cicatrices.jpg", alt: "Tratamiento para cicatrices Praquel" },
  { src: "/images/praquel/como-usar.jpg", alt: "Cómo usar la barra de silicona Praquel" },
  { src: "/images/praquel/cronologia-colageno.jpg", alt: "Cronología de remodelación del colágeno" },
];

export function ProductGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeImage, setActiveImage] = useState(0);

  function selectImage(index: number) {
    const track = trackRef.current;

    if (!track) return;

    setActiveImage(index);
    track.scrollTo({ left: track.clientWidth * index, behavior: "smooth" });
  }

  function updateActiveImage() {
    const track = trackRef.current;

    if (!track || track.clientWidth === 0) return;

    setActiveImage(Math.round(track.scrollLeft / track.clientWidth));
  }

  return (
    <div className="product-gallery reveal">
      <nav className="gallery-thumbnails" aria-label="Imágenes del producto">
        {images.map((image, index) => (
          <button
            type="button"
            className={activeImage === index ? "is-active" : undefined}
            onClick={() => selectImage(index)}
            aria-label={`Ver imagen ${index + 1} del producto`}
            aria-pressed={activeImage === index}
            key={image.src}
          >
            <Image src={image.src} alt="" width={120} height={120} sizes="78px" unoptimized />
          </button>
        ))}
      </nav>
      <div className="gallery-track" ref={trackRef} onScroll={updateActiveImage}>
        {images.map((image, index) => (
          <figure key={image.src} aria-hidden={activeImage !== index}>
            <Image src={image.src} alt={image.alt} width={1536} height={1536} priority={index === 0} sizes="(max-width: 850px) 420px, 510px" unoptimized />
          </figure>
        ))}
      </div>
    </div>
  );
}
