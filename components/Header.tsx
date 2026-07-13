"use client";

import Image from "next/image";
import { Menu, MessageCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para conserto/restauração.",
);
const whatsappUrl = `https://wa.me/5519993927219?text=${whatsappMessage}`;

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const updateHeaderState = () => {
      setIsScrolled(window.scrollY > 24);
    };

    updateHeaderState();
    window.addEventListener("scroll", updateHeaderState, { passive: true });

    return () => window.removeEventListener("scroll", updateHeaderState);
  }, []);

  const closeMenu = () => setIsMenuOpen(false);
  const hasSolidBackground = isScrolled || isMenuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-smooth ${
        hasSolidBackground
          ? "border-brand-white/10 bg-background-institutional shadow-soft"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-24 lg:px-8">
        <a
          href="#inicio"
          aria-label="Ir para o início"
          className="flex shrink-0 items-center"
          onClick={closeMenu}
        >
          <Image
            src="/images/logo.png"
            alt="Sapataria Chrispim Vieira"
            width={72}
            height={72}
            priority
            className="h-14 w-14 object-contain drop-shadow-[0_12px_26px_rgba(20,10,5,0.32)] lg:h-16 lg:w-16"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center justify-center gap-7 lg:flex"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative font-ui text-sm font-medium text-brand-white/90 transition-smooth hover:text-brand-terracotta"
            >
              {item.label}
              <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-brand-terracotta transition-smooth group-hover:scale-x-100" />
            </a>
          ))}
        </nav>

        <div className="hidden shrink-0 items-center lg:flex">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center justify-center gap-2 rounded-button-lg bg-brand-terracotta px-5 py-3 font-ui text-sm font-semibold text-brand-white shadow-cta transition-smooth hover:-translate-y-0.5 hover:bg-brand-terracotta/90 focus:outline-none focus:ring-2 focus:ring-brand-white focus:ring-offset-2 focus:ring-offset-background-institutional"
          >
            <MessageCircle aria-hidden="true" size={18} strokeWidth={2} />
            Pedir Orçamento
          </a>
        </div>

        <button
          type="button"
          aria-controls="mobile-navigation"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-brand-white/20 text-brand-white transition-smooth hover:border-brand-terracotta hover:text-brand-terracotta focus:outline-none focus:ring-2 focus:ring-brand-terracotta lg:hidden"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="relative block h-6 w-6">
            <Menu
              aria-hidden="true"
              size={24}
              strokeWidth={2}
              className={`absolute inset-0 transition-smooth ${
                isMenuOpen
                  ? "rotate-90 scale-75 opacity-0"
                  : "rotate-0 scale-100 opacity-100"
              }`}
            />
            <X
              aria-hidden="true"
              size={24}
              strokeWidth={2}
              className={`absolute inset-0 transition-smooth ${
                isMenuOpen
                  ? "rotate-0 scale-100 opacity-100"
                  : "-rotate-90 scale-75 opacity-0"
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-navigation"
        className={`overflow-hidden bg-background-institutional transition-all duration-smooth ease-smooth lg:hidden ${
          isMenuOpen
            ? "max-h-[430px] border-t border-brand-white/10 opacity-100"
            : "max-h-0 border-t border-transparent opacity-0"
        }`}
      >
        <nav
          aria-label="Navegação mobile"
          className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6"
        >
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-button px-2 py-3 font-ui text-base font-medium text-brand-white/90 transition-smooth hover:bg-brand-white/5 hover:text-brand-terracotta"
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-button-lg bg-brand-terracotta px-5 py-3 text-center font-ui text-sm font-semibold leading-tight text-brand-white shadow-cta transition-smooth hover:bg-brand-terracotta/90"
            onClick={closeMenu}
          >
            <MessageCircle aria-hidden="true" size={18} strokeWidth={2} />
            Pedir Orçamento
          </a>
        </nav>
      </div>
    </header>
  );
}
