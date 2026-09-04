import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { Prose } from "@/components/ui/Editorial";

export type LegalSection = { heading: string; paragraphs: string[] };

/** Shared shell for Privacy and Terms so both stay in the design system. */
export function LegalPage({
  title,
  deck,
  updated,
  sections,
}: {
  title: string;
  deck: string;
  updated: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <PageHero
        deck={deck}
        meta={[{ label: "Last updated", value: updated }]}
        title={title}
      />
      <Section tone="light">
        <div className="container-narrow">
          <Prose>
            {sections.map((section) => (
              <section key={section.heading}>
                <h2 className="text-subheading pt-4 text-ink-900">
                  {section.heading}
                </h2>
                {section.paragraphs.map((paragraph, i) => (
                  <p className="mt-6" key={i}>
                    {paragraph}
                  </p>
                ))}
              </section>
            ))}
          </Prose>
        </div>
      </Section>
    </>
  );
}
