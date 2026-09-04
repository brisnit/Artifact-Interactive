import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { PageHero } from "@/components/layout/PageHero";
import { CtaBand } from "@/components/layout/CtaBand";
import { InsightsIndex } from "@/components/insights/InsightsIndex";
import { articles } from "@/content/insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Writing from Artifact Intelligence on learning intelligence, predictive learning, institutional data, and the ethics of intelligence systems in education.",
  alternates: { canonical: "/insights" }
};

export default function InsightsPage() {
  return (
    <>
      <PageHero
        deck="Notes, arguments, and open questions from the work of building Learning Intelligence — published as the research develops rather than after it concludes."
        meta={[
          { label: "Published", value: `${articles.length} articles` },
          { label: "Topics", value: "Intelligence, prediction, institutions, ethics" },
          { label: "Author", value: "Artifact Research" },
          { label: "Cadence", value: "As the work produces something worth saying" },
        ]}
        title="Writing on learning, data, behavior, and intelligence."
      />

      <Section tone="light">
        <div className="container-artifact">
          <InsightsIndex />
        </div>
      </Section>

      <CtaBand
        body="If something here is relevant to a question your institution is working on, we would like to hear about it."
        primary={{ label: "Talk With Artifact", href: "/contact" }}
        secondary={{ label: "See our Research", href: "/research" }}
        title="Have a question we should be writing about?"
      />
    </>
  );
}
