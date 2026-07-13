import {
  BriefcaseBusiness,
  CircleCheck,
  Footprints,
  Luggage,
  MessageCircle,
  ShieldCheck,
} from "lucide-react";
import { ScrollReveal } from "@/components/ScrollReveal";

const services = [
  {
    title: "Calçados",
    icon: Footprints,
    items: [
      "Troca de solados e meias-solas",
      "Troca e reparo de saltos",
      "Costuras e colagens",
      "Revitalização e pintura",
      "Reformas e manutenção em geral",
    ],
  },
  {
    title: "Bolsas e Mochilas",
    icon: BriefcaseBusiness,
    items: [
      "Troca de zíperes",
      "Substituição e reparo de alças",
      "Costuras",
      "Revitalização e pintura",
      "Reparos em ferragens, forros e acessórios",
    ],
  },
  {
    title: "Malas de Viagem",
    icon: Luggage,
    items: [
      "Troca de zíperes",
      "Reparo e substituição de alças",
      "Troca de rodas",
      "Reparo ou substituição de carrinhos retráteis",
      "Costuras e manutenção geral",
    ],
  },
  {
    title: "Artigos de Couro",
    icon: ShieldCheck,
    items: [
      "Higienização e limpeza especializada",
      "Tratamento e hidratação do couro",
      "Revitalização da cor",
      "Pintura e restauração",
      "Cuidados para maior conservação e durabilidade",
    ],
  },
];

const whatsappMessage = encodeURIComponent(
  "Olá! Gostaria de solicitar um orçamento para os serviços da Sapataria Chrispim Vieira.",
);
const whatsappUrl = `https://wa.me/5519993927219?text=${whatsappMessage}`;

export function ServicesSection() {
  return (
    <section
      id="servicos"
      className="scroll-mt-24 bg-background-clean px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="font-ui text-sm font-semibold uppercase text-brand-terracotta">
              Serviços
            </p>
            <h2 className="mt-4 font-heading text-4xl font-semibold leading-tight text-brand-text sm:text-5xl">
              Nossos Serviços
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-leather sm:text-lg">
              Consertos, restaurações e revitalizações com acabamento de alta
              qualidade, preservando a aparência, o conforto e a durabilidade
              dos seus itens.
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <ScrollReveal key={service.title} delay={index * 130}>
                <article className="group flex h-full flex-col border border-dashed border-stitch bg-background-neutral p-6 transition-smooth hover:-translate-y-2 hover:shadow-cta">
                  <div className="flex h-12 w-12 items-center justify-center rounded-button bg-brand-terracotta/10 text-brand-terracotta transition-smooth group-hover:bg-brand-terracotta group-hover:text-brand-white">
                    <Icon aria-hidden="true" size={24} strokeWidth={1.8} />
                  </div>

                  <h3 className="mt-6 font-heading text-2xl font-semibold text-brand-text">
                    {service.title}
                  </h3>

                  <ul className="mt-5 space-y-3 text-sm leading-6 text-brand-leather">
                    {service.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <CircleCheck
                          aria-hidden="true"
                          className="mt-1 h-4 w-4 shrink-0 text-brand-terracotta"
                          strokeWidth={2}
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={180}>
          <div className="mt-12 flex justify-center">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-button-lg bg-brand-terracotta px-7 py-4 text-center font-ui text-sm font-semibold leading-tight text-brand-white shadow-cta transition-smooth hover:-translate-y-0.5 hover:bg-brand-terracotta/90 focus:outline-none focus:ring-2 focus:ring-brand-terracotta focus:ring-offset-2 focus:ring-offset-background-clean sm:w-auto sm:text-base"
            >
              <MessageCircle aria-hidden="true" size={20} strokeWidth={2} />
              Pedir Orçamento
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
