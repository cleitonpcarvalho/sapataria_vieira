import Image from "next/image";
import { Award, Gem, Handshake } from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const highlights = [
  {
    icon: Award,
    title: "Tradição herdada",
    description: "Uma história de confiança que segue viva em Valinhos.",
  },
  {
    icon: Gem,
    title: "Materiais de qualidade",
    description: "Produtos selecionados para acabamento e durabilidade.",
  },
  {
    icon: Handshake,
    title: "Atendimento personalizado",
    description: "Cada peça recebe avaliação cuidadosa e orientação clara.",
  },
];

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="scroll-mt-24 bg-background-neutral px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <ScrollReveal>
          <div>
            <p className="font-ui text-sm font-semibold uppercase text-brand-terracotta">
              Sobre a Sapataria
            </p>
            <h2 className="mt-4 max-w-2xl font-heading text-4xl font-semibold leading-tight text-brand-text sm:text-5xl">
              Uma Tradição que Atravessa Gerações
            </h2>
            <div className="mt-6 space-y-5 text-base leading-8 text-brand-leather sm:text-lg">
              <p>
                Inspirada pela trajetória da antiga Sapataria Chrispim, que
                marcou Campinas até meados dos anos 1990, a Sapataria Chrispim
                Vieira mantém esse legado vivo em Valinhos com um olhar atento
                ao que cada peça carrega: uso, memória e valor.
              </p>
              <p>
                Há cerca de cinco anos, a casa une técnica artesanal, materiais
                de alta qualidade e atendimento próximo para consertar,
                restaurar e revitalizar sapatos, tênis, bolsas, malas, cintos e
                artigos de couro. O resultado é um acabamento cuidadoso, feito
                para devolver beleza, conforto e vida útil aos seus itens.
              </p>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-3">
              {highlights.map((highlight, index) => {
                const Icon = highlight.icon;

                return (
                  <ScrollReveal key={highlight.title} delay={140 + index * 120}>
                    <div className="h-full border-t border-dashed border-stitch pt-5">
                      <Icon
                        aria-hidden="true"
                        className="h-6 w-6 text-brand-terracotta"
                        strokeWidth={1.8}
                      />
                      <h3 className="mt-4 font-ui text-sm font-semibold text-brand-text">
                        {highlight.title}
                      </h3>
                      <p className="mt-2 text-sm leading-6 text-brand-leather">
                        {highlight.description}
                      </p>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={180}>
          <div className="relative">
            <div className="absolute -bottom-4 -left-4 hidden h-full w-full border border-dashed border-stitch lg:block" />
            <div className="relative overflow-hidden bg-background-cardDark shadow-soft">
              <Image
                src="/images/sobre.jpg"
                alt="Fachada da Sapataria Chrispim Vieira em Valinhos"
                width={1498}
                height={1050}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
