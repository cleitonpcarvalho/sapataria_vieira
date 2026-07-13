"use client";

import Image from "next/image";
import { X, ZoomIn } from "lucide-react";
import { useEffect, useState } from "react";
import { ScrollReveal } from "@/components/ScrollReveal";

const galleryImages = [
  {
    src: "/images/galeria/galeria-01.jpg",
    alt: "Profissional restaurando um calçado na oficina",
    width: 1448,
    height: 1086,
  },
  {
    src: "/images/galeria/galeria-02.jpg",
    alt: "Profissional revitalizando calçado de couro",
    width: 1672,
    height: 941,
  },
  {
    src: "/images/galeria/galeria-03.jpg",
    alt: "Fachada da Sapataria Chrispim Vieira",
    width: 1498,
    height: 1050,
  },
  {
    src: "/images/galeria/galeria-04.jpg",
    alt: "Balcão de atendimento e produtos da sapataria",
    width: 1793,
    height: 877,
  },
  {
    src: "/images/galeria/galeria-05.jpg",
    alt: "Processo de acabamento em máquina de sapataria",
    width: 1023,
    height: 1537,
  },
  {
    src: "/images/galeria/galeria-06.jpg",
    alt: "Clientes sendo atendidos na loja",
    width: 1386,
    height: 591,
  },
  {
    src: "/images/galeria/galeria-07.jpg",
    alt: "Trabalho de costura em bolsa de couro",
    width: 1086,
    height: 1448,
  },
  {
    src: "/images/galeria/galeria-08.jpg",
    alt: "Interior da loja com malas, calçados e acessórios",
    width: 1788,
    height: 880,
  },
  {
    src: "/images/galeria/galeria-09.jpg",
    alt: "Cliente em atendimento no balcão da sapataria",
    width: 1098,
    height: 538,
  },
  {
    src: "/images/galeria/galeria-10.jpg",
    alt: "Fachada da loja vista da rua",
    width: 1535,
    height: 1025,
  },
];

export function GallerySection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const selectedImage =
    selectedIndex === null ? null : galleryImages[selectedIndex];

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedIndex(null);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedIndex]);

  return (
    <section
      id="galeria"
      className="scroll-mt-24 bg-background-cardDark px-4 py-20 text-brand-white sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-ui text-sm font-semibold uppercase text-brand-terracotta">
              Galeria
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-brand-white sm:text-5xl">
              Nosso Trabalho Fala por Si
            </h2>
          </div>
        </ScrollReveal>

        <div className="mt-14 columns-1 gap-4 md:columns-2 lg:columns-3">
          {galleryImages.map((image, index) => (
            <ScrollReveal
              key={image.src}
              delay={index * 80}
              className="mb-4 break-inside-avoid"
            >
              <button
                type="button"
                className="group relative block w-full overflow-hidden bg-background-deep text-left"
                aria-label={`Ampliar imagem: ${image.alt}`}
                onClick={() => setSelectedIndex(index)}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="h-auto w-full object-cover transition-smooth-slow group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-background-deep/0 transition-smooth group-hover:bg-background-deep/28" />
                <span className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-background-deep/70 text-brand-white opacity-0 transition-smooth group-hover:translate-y-0 group-hover:opacity-100">
                  <ZoomIn aria-hidden="true" size={18} strokeWidth={2} />
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {selectedImage ? (
        <div
          className="fixed inset-0 z-[70] flex items-center justify-center bg-background-deep/92 px-4 py-8"
          role="dialog"
          aria-modal="true"
          aria-label="Imagem ampliada da galeria"
          onClick={() => setSelectedIndex(null)}
        >
          <button
            type="button"
            aria-label="Fechar imagem ampliada"
            className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full border border-brand-white/20 text-brand-white transition-smooth hover:border-brand-terracotta hover:text-brand-terracotta"
            onClick={() => setSelectedIndex(null)}
          >
            <X aria-hidden="true" size={22} strokeWidth={2} />
          </button>

          <div
            className="relative h-[78vh] w-full max-w-6xl"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              fill
              sizes="100vw"
              className="object-contain"
            />
          </div>
        </div>
      ) : null}
    </section>
  );
}
