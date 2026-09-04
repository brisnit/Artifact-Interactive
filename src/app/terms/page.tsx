import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Terms",
  description: "Terms governing use of the Artifact Interactive website.",
};

export default function TermsPage() {
  return (
    <LegalPage
      deck="These terms govern use of this website. They are a placeholder pending legal review and will be replaced before any production launch."
      sections={[
        {
          heading: "Use of this site",
          paragraphs: [
            "This website is provided for information about Artifact Interactive and its research into Learning Intelligence. You may read, reference, and quote it with attribution.",
          ],
        },
        {
          heading: "Forward-looking statements",
          paragraphs: [
            "Artifact Interactive is an early-stage research and technology company. Descriptions of the Learning Intelligence Platform on this site describe work in progress and research direction. They are not commitments about features, availability, timelines, or outcomes.",
            "Where this site describes what an intelligence layer can do, it describes a capability under active research. Nothing here should be read as a guarantee of any particular institutional result, and no claim is made that any system can predict the behavior of an individual person.",
          ],
        },
        {
          heading: "Illustrative content",
          paragraphs: [
            "Diagrams, sample interactions, and data visualizations on this site are conceptual and illustrative. They do not depict real students, real institutions, or real institutional data.",
          ],
        },
        {
          heading: "Intellectual property",
          paragraphs: [
            "The Artifact Interactive name, wordmark, and the content of this site are the property of Artifact Interactive unless otherwise noted.",
          ],
        },
        {
          heading: "Platform agreements",
          paragraphs: [
            "Any deployment of a Learning Intelligence Platform is governed by a separate written agreement with the institution. These website terms do not create any right to the platform or to services.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Questions about these terms can be sent to hello@artifactinteractive.com.",
          ],
        },
      ]}
      title="Terms"
      updated="This page is a placeholder"
    />
  );
}
