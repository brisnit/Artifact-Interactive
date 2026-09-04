/*
  ─────────────────────────────────────────────────────────────────────────────
  PROVISIONAL LEGAL DOCUMENT — REQUIRES COUNSEL REVIEW BEFORE IT IS RELIED ON.

  These terms were drafted to be accurate about what the site actually does and
  conventional in structure. They have not been reviewed by a lawyer. Areas that
  most warrant review: the governing law and venue clause, the limitation of
  liability, and the interaction between these terms and the separate platform
  and data processing agreements.

  Nothing on the page tells visitors it is under review — this note is for us.
  ─────────────────────────────────────────────────────────────────────────────
*/
import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms governing use of the Artifact Intelligence website, including how forward-looking and illustrative content should be read.",
  alternates: { canonical: "/terms" }
};

export default function TermsPage() {
  return (
    <LegalPage
      deck="These terms govern use of this website. They also explain how to read what the site describes — because Artifact Intelligence is an early-stage research and technology company, and that distinction matters."
      sections={[
        {
          heading: "Using this site",
          paragraphs: [
            "This website is published by Artifact Intelligence for information about the company and its research into Learning Intelligence. By using it, you accept these terms. If you do not accept them, please do not use the site.",
            "You may read, reference, quote, and link to this material with attribution. You may not republish it wholesale as your own, or present it in a way that implies Artifact endorses you or your organization.",
          ],
        },
        {
          heading: "Forward-looking statements",
          paragraphs: [
            "Artifact Intelligence is an early-stage research and technology company. Descriptions of the Learning Intelligence Platform on this site describe work in progress, research direction, and intended capability. They are not commitments about features, availability, pricing, timelines, or outcomes, and they may change.",
            "Where the site describes what an intelligence layer can do, it describes a capability under active research. Nothing here is a guarantee of any institutional result. In particular, no claim is made that any system can predict the behaviour of an individual person, and language throughout has been chosen to say what we mean: identify signals, surface patterns, model possible pathways, support decisions.",
          ],
        },
        {
          heading: "Illustrative content",
          paragraphs: [
            "Diagrams, architecture drawings, sample interactions, interface concepts, and data visualizations on this site are conceptual and illustrative. They do not depict real students, real institutions, real institutional data, or a shipped product.",
            "Photography on this site is illustrative. It does not depict Artifact clients, partners, employees, or premises, and no relationship with any institution, business, or individual should be inferred from it. Any figures appearing in visualizations are examples chosen to explain a concept and are not results, benchmarks, or measurements.",
          ],
        },
        {
          heading: "No advice, no reliance",
          paragraphs: [
            "Nothing on this site is legal, regulatory, compliance, financial, or professional advice, and it should not be relied on as such. Institutions considering how student or employee data may be collected and used should take their own advice on their obligations.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The Artifact Intelligence name, wordmark, visual identity, written content, diagrams, and the design and code of this site are the property of Artifact Intelligence unless otherwise noted, and are protected by copyright and other rights.",
            "Any third-party names or marks referred to remain the property of their respective owners, and their appearance does not imply any affiliation or endorsement.",
          ],
        },
        {
          heading: "Acceptable use",
          paragraphs: [
            "Please do not attempt to gain unauthorised access to the site or its infrastructure, interfere with its operation, scrape it at a volume that degrades it for others, or use it to distribute malicious code or unlawful material.",
          ],
        },
        {
          heading: "Links to other sites",
          paragraphs: [
            "Where this site links to a third-party resource, that link is provided for convenience. We do not control those sites and are not responsible for their content, their accuracy, or their handling of your information.",
          ],
        },
        {
          heading: "No warranty",
          paragraphs: [
            "This site is provided as-is and as-available. We work to keep it accurate and current, but we make no warranty that it is free from error or interruption, and to the extent permitted by law we exclude implied warranties of merchantability, fitness for a particular purpose, and non-infringement.",
          ],
        },
        {
          heading: "Limitation of liability",
          paragraphs: [
            "To the extent permitted by law, Artifact Intelligence is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, data, or goodwill, arising from your use of this website.",
            "Nothing in these terms excludes or limits liability that cannot lawfully be excluded or limited — including liability for death or personal injury caused by negligence, or for fraud or fraudulent misrepresentation.",
          ],
        },
        {
          heading: "Platform agreements are separate",
          paragraphs: [
            "Any deployment of a Learning Intelligence Platform is governed by a separate written agreement with the institution or organization, together with a data processing agreement. These website terms create no right to the platform, to services, or to any engagement, and where they conflict with a signed agreement, that agreement prevails.",
          ],
        },
        {
          heading: "Privacy",
          paragraphs: [
            "Our handling of personal information is described in our Privacy notice, which forms part of these terms.",
          ],
        },
        /*
          PROVISIONAL — pending counsel review.
          Governing law and venue below were supplied by the company, not by a
          lawyer. County-level venue is stated because it was specified; counsel
          may prefer state-level venue, or a different forum entirely, and may
          want an arbitration or jury-waiver clause that is deliberately absent
          here. Do not treat this section as settled.
        */
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of the State of California, United States, without regard to its conflict-of-law principles.",
            "Any dispute arising from these terms or from use of this website will be brought exclusively in the state or federal courts located in San Diego County, California, and you consent to the personal jurisdiction of those courts.",
          ],
        },
        {
          heading: "Changes to these terms",
          paragraphs: [
            "We may update these terms as the company and the platform develop. The date at the top of this page shows when they last changed, and continued use of the site after a change means you accept the updated terms.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            `Questions about these terms, and anything else: ${site.email}.`,
          ],
        },
      ]}
      title="Terms"
      updated="September 4, 2026"
    />
  );
}
