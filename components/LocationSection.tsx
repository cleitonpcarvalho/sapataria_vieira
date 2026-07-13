import { Clock, MapPin, Phone } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const address =
  "Rua dos Holandeses, 6, Pavimento Inferior, Parque Nova Suíça, Valinhos/SP, CEP 13271-423";
const mapsUrl = "https://maps.app.goo.gl/jfwBbeowgMLP1kfJ7";
const mapEmbedUrl =
  "https://www.google.com/maps?q=Rua%20dos%20Holandeses%2C%206%2C%20Pavimento%20Inferior%2C%20Parque%20Nova%20Su%C3%AD%C3%A7a%2C%20Valinhos%2FSP%2C%20CEP%2013271-423&output=embed";

const locationInfo = [
  {
    icon: MapPin,
    label: "Endereço",
    content: address,
    href: mapsUrl,
    external: true,
  },
  {
    icon: Clock,
    label: "Horário de funcionamento",
    content: "Segunda a sexta: das 8h às 18h | Sábado: das 8h às 12h",
  },
  {
    icon: Phone,
    label: "Telefone",
    content: "+55 19 99392-7219",
    href: "tel:5519993927219",
  },
];

export function LocationSection() {
  return (
    <section
      id="localizacao"
      className="scroll-mt-24 bg-background-neutral px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <ScrollReveal>
          <div>
            <p className="font-ui text-sm font-semibold uppercase text-brand-terracotta">
              Localização
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-brand-text sm:text-5xl">
              Onde Estamos
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-brand-leather sm:text-lg">
              Visite a Sapataria Chrispim Vieira em Valinhos e traga sua peça
              para uma avaliação cuidadosa.
            </p>

            <div className="mt-10 space-y-5">
              {locationInfo.map((item, index) => {
                const Icon = item.icon;
                const content = item.href ? (
                  <a
                    href={item.href}
                    target={item.external ? "_blank" : undefined}
                    rel={item.external ? "noopener noreferrer" : undefined}
                    className="transition-smooth hover:text-brand-terracotta"
                  >
                    {item.content}
                  </a>
                ) : (
                  item.content
                );

                return (
                  <ScrollReveal key={item.label} delay={index * 120}>
                    <div className="flex gap-4 border-t border-dashed border-stitch pt-5">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-button bg-brand-terracotta/10 text-brand-terracotta">
                        <Icon aria-hidden="true" size={22} strokeWidth={1.8} />
                      </div>
                      <div>
                        <h3 className="font-ui text-sm font-semibold text-brand-text">
                          {item.label}
                        </h3>
                        <p className="mt-2 text-base leading-7 text-brand-leather">
                          {content}
                        </p>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="overflow-hidden rounded-button border border-dashed border-stitch bg-background-clean shadow-soft">
            <iframe
              title="Mapa da Sapataria Chrispim Vieira"
              src={mapEmbedUrl}
              className="h-[420px] w-full border-0 md:h-[520px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
