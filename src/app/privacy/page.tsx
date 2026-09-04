import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Artifact Interactive handles information collected through this website.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      deck="This page describes how Artifact Interactive handles information collected through this website. It is a placeholder pending legal review and will be replaced before any production launch."
      sections={[
        {
          heading: "Scope",
          paragraphs: [
            "This notice covers artifactinteractive.com. It does not cover any Learning Intelligence Platform deployed with an institutional partner. Platform deployments are governed by a separate data processing agreement negotiated with the institution, which determines what is collected, who may access it, how long it is retained, and for what purposes it may be used.",
            "Where a platform deployment involves learner data, the institution remains the controller of that data. Artifact operates as a processor under the institution's instructions and its own governance policies.",
          ],
        },
        {
          heading: "What this site collects",
          paragraphs: [
            "If you submit the contact form, we receive the information you enter: your name, organization, role, email address, the institution type you select, and your message. We use that information only to respond to you.",
            "This site does not use advertising trackers or sell information to third parties.",
          ],
        },
        {
          heading: "Retention",
          paragraphs: [
            "Correspondence is retained for as long as it is useful to the conversation it belongs to, and deleted on request.",
          ],
        },
        {
          heading: "Your choices",
          paragraphs: [
            "You may ask us what we hold about you, ask for it to be corrected, or ask for it to be deleted. Write to hello@artifactinteractive.com and we will respond.",
          ],
        },
        {
          heading: "Principles that apply to platform data",
          paragraphs: [
            "Signals collected to support learning should be architecturally separated from processes that could penalise a learner. Purpose limitation is enforced in the data model, not only in policy. Participation is visible to the participant. Learners have access to their own intelligence. These commitments are described in more detail in our research on data ethics.",
          ],
        },
        {
          heading: "Changes",
          paragraphs: [
            "This notice will be updated as the company and the platform develop. Material changes will be reflected in the last-updated date above.",
          ],
        },
      ]}
      title="Privacy"
      updated="This page is a placeholder"
    />
  );
}
