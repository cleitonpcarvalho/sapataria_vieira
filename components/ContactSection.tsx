import { Mail, MessageCircle, PhoneCall } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento.",
);
const whatsappUrl = `https://wa.me/5519993927219?text=${whatsappMessage}`;

const contactBlocks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+55 19 99392-7219",
    href: whatsappUrl,
    external: true,
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "vieirasapataria@gmail.com",
    href: "mailto:vieirasapataria@gmail.com",
  },
  {
    icon: PhoneCall,
    label: "Redes sociais",
    value: "Instagram e Facebook",
    social: true,
  },
];

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

export function ContactSection() {
  return (
    <section
      id="contato"
      className="scroll-mt-24 bg-background-institutional px-4 pb-36 pt-20 text-brand-offwhite sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-ui text-sm font-semibold uppercase text-brand-terracotta">
              Contato
            </p>
            <p className="mt-4 text-base leading-8 text-brand-offwhite/85 sm:text-lg">
              Fale agora com a gente e receba seu orçamento sem compromisso,
              com orientação clara para cuidar melhor da sua peça.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {contactBlocks.map((block, index) => {
            const Icon = block.icon;

            return (
              <ScrollReveal key={block.label} delay={index * 130}>
                <div className="flex h-full flex-col border border-dashed border-stitch bg-background-cardDark p-6 transition-smooth hover:-translate-y-2 hover:shadow-cta">
                  <div className="flex h-12 w-12 items-center justify-center rounded-button bg-brand-terracotta/10 text-brand-terracotta">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
                  </div>
                  <h3 className="mt-6 font-ui text-sm font-semibold text-brand-white">
                    {block.label}
                  </h3>

                  {block.social ? (
                    <div className="mt-3 flex items-center gap-3">
                      <a
                        href="https://www.instagram.com/sapatariavieira/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir Instagram da Sapataria Chrispim Vieira"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-brand-white/15 text-brand-offwhite transition-smooth hover:border-brand-terracotta hover:text-brand-terracotta"
                      >
                        <InstagramIcon />
                      </a>
                      <a
                        href="https://www.facebook.com/profile.php?id=61591619799169"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Abrir Facebook da Sapataria Chrispim Vieira"
                        className="inline-flex h-11 w-11 items-center justify-center rounded-button border border-brand-white/15 text-brand-offwhite transition-smooth hover:border-brand-terracotta hover:text-brand-terracotta"
                      >
                        <FacebookIcon />
                      </a>
                    </div>
                  ) : (
                    <a
                      href={block.href}
                      target={block.external ? "_blank" : undefined}
                      rel={block.external ? "noopener noreferrer" : undefined}
                      className="mt-3 text-base leading-7 text-brand-offwhite/85 transition-smooth hover:text-brand-terracotta"
                    >
                      {block.value}
                    </a>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={220}>
          <div className="mt-12 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-button-lg bg-brand-terracotta px-7 py-4 text-center font-ui text-sm font-semibold leading-tight text-brand-white shadow-cta transition-smooth hover:-translate-y-0.5 hover:bg-brand-terracotta/90 focus:outline-none focus:ring-2 focus:ring-brand-terracotta focus:ring-offset-2 focus:ring-offset-background-institutional sm:w-auto sm:text-base"
            >
              <MessageCircle aria-hidden="true" size={20} strokeWidth={2} />
              Solicitar Orçamento Agora
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
