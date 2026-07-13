"use client";

import Image from "next/image";
import { ArrowDown, MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento.",
);
const whatsappUrl = `https://wa.me/5519993927219?text=${whatsappMessage}`;

export function Hero() {
  const [parallaxOffset, setParallaxOffset] = useState(0);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let animationFrame = 0;

    const updateParallax = () => {
      if (reduceMotion.matches) {
        setParallaxOffset(0);
        return;
      }

      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        setParallaxOffset(window.scrollY * 0.16);
      });
    };

    updateParallax();
    window.addEventListener("scroll", updateParallax, { passive: true });

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", updateParallax);
    };
  }, []);

  return (
    <section
      id="inicio"
      className="relative isolate flex min-h-[100svh] overflow-hidden bg-background-deep text-brand-white"
    >
      <div
        className="absolute inset-x-0 top-[-10%] h-[120%] will-change-transform"
        style={{
          transform: `translate3d(0, ${parallaxOffset}px, 0) scale(1.06)`,
        }}
      >
        <Image
          src="/images/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>

      <div className="hero-overlay absolute inset-0" />
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-background-deep/75 to-transparent" />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col justify-center px-4 pb-28 pt-32 sm:px-6 md:pb-32 lg:px-8 lg:pt-36">
        <div className="max-w-3xl">
          <h1 className="hero-reveal max-w-3xl font-heading text-4xl font-semibold leading-tight text-brand-white sm:text-5xl md:text-6xl lg:text-7xl">
            Tradição e Excelência em Cada Detalhe
          </h1>

          <p className="hero-reveal hero-reveal-delay-1 mt-6 max-w-2xl text-base leading-7 text-brand-offwhite/90 sm:text-lg md:text-xl md:leading-8">
            Há 5 anos cuidando de calçados, bolsas, malas e artigos de couro em
            Valinhos, dando continuidade à tradição da família com a técnica
            artesanal e o acabamento premium que sua peça merece.
          </p>

          <div className="hero-reveal hero-reveal-delay-2 mt-9 flex w-full flex-col gap-4 sm:w-auto sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-button-lg bg-brand-terracotta px-6 py-4 text-center font-ui text-sm font-semibold leading-tight text-brand-white shadow-cta transition-smooth hover:-translate-y-0.5 hover:bg-brand-terracotta/90 focus:outline-none focus:ring-2 focus:ring-brand-white focus:ring-offset-2 focus:ring-offset-background-deep sm:w-auto sm:text-base"
            >
              <MessageCircle aria-hidden="true" size={20} strokeWidth={2} />
              Solicitar Orçamento pelo WhatsApp
            </a>

            <a
              href="#servicos"
              className="inline-flex min-h-12 w-full items-center justify-center rounded-button-lg border border-brand-terracotta bg-transparent px-6 py-4 text-center font-ui text-sm font-semibold leading-tight text-brand-terracotta transition-smooth hover:-translate-y-0.5 hover:bg-brand-terracotta hover:text-brand-white focus:outline-none focus:ring-2 focus:ring-brand-terracotta focus:ring-offset-2 focus:ring-offset-background-deep sm:w-auto sm:text-base"
            >
              Conhecer os Serviços
            </a>
          </div>
        </div>
      </div>

      <a
        href="#sobre"
        aria-label="Rolar para a próxima seção"
        className="animate-scroll-cue absolute bottom-7 left-1/2 z-10 inline-flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-brand-white/30 text-brand-offwhite transition-smooth hover:border-brand-terracotta hover:text-brand-terracotta"
      >
        <ArrowDown aria-hidden="true" size={20} strokeWidth={2} />
      </a>
    </section>
  );
}
