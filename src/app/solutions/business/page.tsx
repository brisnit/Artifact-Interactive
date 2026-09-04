import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SolutionPage } from "@/components/layout/SolutionPage";
import { getSolution } from "@/content/solutions";

const solution = getSolution("business");

export const metadata: Metadata = {
  title: solution?.name,
  description: solution?.deck,
};

export default function Page() {
  if (!solution) notFound();
  return <SolutionPage solution={solution} />;
}
