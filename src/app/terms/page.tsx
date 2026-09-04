import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description:
    "Terms governing use of the Artifact Interactive website, including how forward-looking and illustrative content should be read.",
};

export default function TermsPage() {
  return (
    <LegalPage
      deck="These terms govern use of this website. They also explain how to read what the site describes — because Artifact Interactive is an early-stage research and technology company, and that distinction matters."
      sections={[
        {
          heading: "Using this site",
          paragraphs: [
            "This website is published by Artifact Interactive for information about the company and its research into Learning Intelligence. By using it, you accept these terms. If you do not accept them, please do not use the site.",
            "You may read, reference, quote, and link to this material with attribution. You may not republish it wholesale as your own, or present it in a way that implies Artifact endorses you or your organization.",
          ],
        },
        {
          heading: "Forward-looking statements",
          paragraphs: [
            "Artifact Interactive is an early-stage research and technology company. Descriptions of the Learning Intelligence Platform on this site describe work in progress, research direction, and intended capability. They are not commitments about features, availability, pricing, timelines, or outcomes, and they may change.",
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
            "The Artifact Interactive name, wordmark, visual identity, written content, diagrams, and the design and code of this site are the property of Artifact Interactive unless otherwise noted, and are protected by copyright and other rights.",
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
            "To the extent permitted by law, Artifact Interactive is not liable for indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, data, or goodwill, arising from your use of this website.",
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
        {
          heading: "Governing law",
          paragraphs: [
            "These terms are governed by the laws of [JURISDICTION TO BE CONFIRMED], and the courts of that jurisdiction have exclusive jurisdiction over any dispute arising from them, without regard to conflict-of-law principles.",
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
            "Questions about these terms: legal@artifactinteractive.com. Anything else: hello@artifactinteractive.com.",
          ],
        },
      ]}
      title="Terms"
      updated="September 4, 2026"
    />
  );
}
