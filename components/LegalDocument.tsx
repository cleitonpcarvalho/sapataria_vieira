import Link from "next/link";
import type { ReactNode } from "react";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalDocumentProps = {
  title: string;
  intro: string;
  sections: LegalSection[];
};

export function LegalDocument({ title, intro, sections }: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-background-neutral px-4 py-12 sm:px-6 lg:px-8">
      <article className="mx-auto max-w-4xl bg-background-clean px-5 py-10 shadow-soft sm:px-8 lg:px-12 lg:py-14">
        <Link
          href="/"
          className="font-ui text-sm font-semibold text-brand-terracotta transition-smooth hover:text-brand-leather"
        >
          Voltar para a página inicial
        </Link>

        <h1 className="mt-8 font-heading text-4xl font-semibold leading-tight text-brand-text sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 text-base leading-8 text-brand-leather">{intro}</p>

        <div className="mt-10 space-y-9">
          {sections.map((section) => (
            <section key={section.title} className="border-t border-dashed border-stitch pt-7">
              <h2 className="font-heading text-2xl font-semibold text-brand-text">
                {section.title}
              </h2>
              <div className="mt-4 space-y-4 text-base leading-8 text-brand-leather">
                {section.content}
              </div>
            </section>
          ))}
        </div>
      </article>
    </main>
  );
}
