import Image from "next/image";
import Link from "next/link";
import { Heart, Mail, MapPin, Phone } from "lucide-react";

const navigationItems = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Galeria", href: "#galeria" },
  { label: "Localização", href: "#localizacao" },
  { label: "Contato", href: "#contato" },
];

const address =
  "Rua dos Holandeses, 6, Pavimento Inferior, Parque Nova Suíça, Valinhos/SP, CEP 13271-423";

function InstagramIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.8"
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
    </svg>
  );
}

function FacebookIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-5 w-5"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M14.2 8.2V6.9c0-.8.5-1.1 1.1-1.1h1.6V3.1c-.8-.1-1.6-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.2v1H7.8V11h2.6v10h3.2V11h2.7l.4-2.8h-3.1Z" />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-cardDark px-4 pb-28 pt-16 text-brand-offwhite sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-[1.1fr_1.3fr_0.8fr] lg:gap-16">
          <div>
            <a href="#inicio" className="inline-flex items-center gap-4">
              <Image
                src="/images/logo.png"
                alt="Sapataria Chrispim Vieira"
                width={72}
                height={72}
                className="h-16 w-16 object-contain"
              />
              <span className="font-heading text-2xl font-semibold leading-tight text-brand-white">
                Sapataria Chrispim Vieira
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-7 text-brand-offwhite/75">
              Conserto, restauração e revitalização de calçados, bolsas, malas
              e artigos de couro em Valinhos/SP.
            </p>
          </div>

          <div>
            <h2 className="font-ui text-sm font-semibold uppercase text-brand-white">
              Atendimento
            </h2>
            <div className="mt-5 space-y-4 text-sm leading-6 text-brand-offwhite/80">
              <a
                href="https://maps.app.goo.gl/jfwBbeowgMLP1kfJ7"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-3 transition-smooth hover:text-brand-terracotta"
              >
                <MapPin
                  aria-hidden="true"
                  className="mt-1 h-4 w-4 shrink-0 text-brand-terracotta"
                  strokeWidth={1.8}
                />
                <span>{address}</span>
              </a>
              <a
                href="tel:5519993927219"
                className="flex items-center gap-3 transition-smooth hover:text-brand-terracotta"
              >
                <Phone
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-brand-terracotta"
                  strokeWidth={1.8}
                />
                +55 19 99392-7219
              </a>
              <a
                href="mailto:vieirasapataria@gmail.com"
                className="flex items-center gap-3 transition-smooth hover:text-brand-terracotta"
              >
                <Mail
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-brand-terracotta"
                  strokeWidth={1.8}
                />
                vieirasapataria@gmail.com
              </a>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="https://www.instagram.com/sapatariavieira/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Instagram da Sapataria Chrispim Vieira"
                className="inline-flex h-10 w-10 items-center justify-center rounded-button border border-brand-white/15 text-brand-offwhite transition-smooth hover:border-brand-terracotta hover:text-brand-terracotta"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61591619799169"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Abrir Facebook da Sapataria Chrispim Vieira"
                className="inline-flex h-10 w-10 items-center justify-center rounded-button border border-brand-white/15 text-brand-offwhite transition-smooth hover:border-brand-terracotta hover:text-brand-terracotta"
              >
                <FacebookIcon />
              </a>
            </div>
          </div>

          <nav aria-label="Menu do rodapé">
            <h2 className="font-ui text-sm font-semibold uppercase text-brand-white">
              Navegação
            </h2>
            <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-3 text-sm text-brand-offwhite/80 md:grid-cols-1">
              {navigationItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="transition-smooth hover:text-brand-terracotta"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-12 border-t border-dashed border-stitch pt-8 text-center">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-3 font-ui text-sm text-brand-offwhite/80">
            <Link
              href="/politica-de-privacidade"
              className="transition-smooth hover:text-brand-terracotta"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/termos-de-uso"
              className="transition-smooth hover:text-brand-terracotta"
            >
              Termos de Uso
            </Link>
          </div>

          <p className="mt-5 text-sm leading-6 text-brand-offwhite/70">
            © {currentYear} Sapataria Chrispim Vieira. Todos os direitos
            reservados.
          </p>

          <div className="mt-5 flex flex-col items-center justify-center gap-3 text-sm text-brand-offwhite/70 sm:flex-row">
            <span className="inline-flex items-center gap-2">
              Feito com
              <Heart
                aria-hidden="true"
                className="h-4 w-4 text-brand-terracotta"
                fill="currentColor"
                strokeWidth={1.8}
              />
              por
            </span>
            <a
              href="https://automasoluct.com.br"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Abrir site da Automa Soluct"
              className="inline-flex items-center transition-smooth hover:opacity-80"
            >
              <Image
                src="/images/automa-soluct-logo.png"
                alt="Automa Soluct"
                width={115}
                height={50}
                className="h-10 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
