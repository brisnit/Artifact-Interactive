import type { Metadata } from "next";
import { LegalPage } from "@/components/layout/LegalPage";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "How Artifact Interactive handles personal information collected through this website, and how learner data is governed in platform deployments.",
};

export default function PrivacyPage() {
  return (
    <LegalPage
      deck="This notice explains what Artifact Interactive collects through this website, what we do with it, and how data in a Learning Intelligence Platform deployment is governed separately."
      sections={[
        {
          heading: "Who we are",
          paragraphs: [
            "Artifact Interactive researches, designs, and builds Learning Intelligence Platforms for universities, schools, and organizations. In this notice, “we”, “us”, and “Artifact” mean Artifact Interactive.",
            "For any question about this notice, or to exercise a right described below, write to privacy@artifactinteractive.com.",
          ],
        },
        {
          heading: "Two different things this notice covers",
          paragraphs: [
            "This notice covers this website. It describes the small amount of personal information we receive when you contact us or browse the site.",
            "It does not govern a deployed Learning Intelligence Platform. Where Artifact processes learner, faculty, or staff data for an institution, that institution is the controller of the data and Artifact acts as a processor on its documented instructions, under a separate written data processing agreement. That agreement — not this notice — determines what is collected, who may access it, how long it is retained, and for what purposes it may be used. The final section below describes the commitments we hold ourselves to in those engagements.",
          ],
        },
        {
          heading: "What the website collects",
          paragraphs: [
            "If you submit the contact form, we receive what you enter: your name, organization, role, email address, the institution type you select, and your message. We use it only to respond to you and to continue that conversation.",
            "Our hosting provider records standard server logs when a page is requested — IP address, timestamp, user agent, and the page requested. These are used to operate and secure the site and are retained for a short period by the provider.",
            "That is the whole of it. We do not ask for anything else, and the site has no account system, no login, and no user profiles.",
          ],
        },
        {
          heading: "What the website does not do",
          paragraphs: [
            "This site sets no advertising cookies, runs no third-party analytics, embeds no tracking pixels, and does not fingerprint your device. There is no consent banner because there is nothing to consent to beyond the functional requests needed to serve the page.",
            "We do not sell personal information, share it for cross-context behavioural advertising, or use it to build advertising profiles. We have never done so.",
          ],
        },
        {
          heading: "Why we may process your information",
          paragraphs: [
            "Where the UK GDPR or EU GDPR applies, our lawful basis for handling contact-form information is legitimate interest — specifically, responding to someone who has asked to hear from us. For server logs, the basis is our legitimate interest in operating and securing the site.",
            "If we ever wish to use your details for anything beyond replying to you, we will ask first.",
          ],
        },
        {
          heading: "Who else sees it",
          paragraphs: [
            "We use a small number of service providers to run the site and our correspondence — website hosting and email. They process information on our instructions and are not permitted to use it for their own purposes.",
            "We may disclose information where we are legally required to, or to establish or defend a legal claim. We will not do so voluntarily otherwise.",
          ],
        },
        {
          heading: "Where information is held",
          paragraphs: [
            "Our providers may process information in countries outside the one you are writing from, including the United States. Where required, transfers are made under appropriate safeguards such as the UK and EU standard contractual clauses.",
          ],
        },
        {
          heading: "How long we keep it",
          paragraphs: [
            "Correspondence is retained for as long as the conversation it belongs to remains useful, and deleted on request. Server logs are retained for a short operational period by our hosting provider.",
          ],
        },
        {
          heading: "Your rights",
          paragraphs: [
            "You may ask what personal information we hold about you, ask for it to be corrected, ask for it to be deleted, ask us to restrict how we use it, object to our use of it, or ask for a copy in a portable format. Where you are in the UK or EU, you may also complain to your supervisory authority — in the UK, the Information Commissioner's Office.",
            "Residents of California, Colorado, Connecticut, Virginia, and other US states with comparable laws have equivalent rights to know, correct, delete, and opt out. Because we do not sell personal information or use it for targeted advertising, there is nothing to opt out of, but the right to know and to delete applies in full.",
            "Write to privacy@artifactinteractive.com and we will respond within the period the applicable law allows, and sooner where we can. We will not treat you differently for exercising a right.",
          ],
        },
        {
          heading: "Security",
          paragraphs: [
            "We keep the surface small deliberately: the website holds no database of visitors, no accounts, and no credentials. Correspondence is held in access-controlled systems. No system is perfectly secure, and we do not claim otherwise, but we work to keep what we hold proportionate to what we actually need.",
          ],
        },
        {
          heading: "Children",
          paragraphs: [
            "This website is intended for adults acting on behalf of institutions and organizations. It is not directed at children, and we do not knowingly collect personal information from children through it.",
            "Where a platform deployment involves students under 18, that processing is governed by the institution's agreement with us, by district or school policy, and by the applicable student privacy laws — not by this website notice.",
          ],
        },
        {
          heading: "Commitments in platform engagements",
          paragraphs: [
            "These are the principles we hold ourselves to wherever Artifact processes learner data. They sit alongside, and do not replace, the written agreement with each institution.",
            "The institution controls the data. Artifact processes it on documented instructions, does not use it to train models for other customers, and does not use it for any purpose the institution has not agreed to.",
            "Purpose limitation is enforced in the data model. Signals collected to support learning are architecturally separated from disciplinary and punitive processes, so that separation is a property of the system rather than a promise about behaviour.",
            "Participation is visible to the participant. People can see that a signal is being collected, and learners have access to their own intelligence rather than being only the subject of it.",
            "Where deployments involve US educational records, we support institutions in meeting their obligations under FERPA, including operating under the school official exception where the institution designates us as such. Where they involve students under 13, we support compliance with COPPA and with applicable state student privacy laws. We do not claim any certification we have not obtained.",
          ],
        },
        {
          heading: "Changes to this notice",
          paragraphs: [
            "We will update this notice as the company and the platform develop. Material changes will be reflected in the date at the top of this page. Where a change materially affects how we handle information we already hold about you, we will tell you directly.",
          ],
        },
        {
          heading: "Contact",
          paragraphs: [
            "Privacy questions and rights requests: privacy@artifactinteractive.com. Anything else: hello@artifactinteractive.com.",
          ],
        },
      ]}
      title="Privacy"
      updated="September 4, 2026"
    />
  );
}
