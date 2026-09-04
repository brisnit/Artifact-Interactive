import type { Metadata, Viewport } from "next";
import { Montserrat, Newsreader } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { MotionProvider } from "@/components/motion";
import { Footer } from "@/components/layout/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700"],
});

const newsreader = Newsreader({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-newsreader",
  weight: ["300", "400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.category}`,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} — ${site.category}`,
    description: site.description,
  },
  twitter: { card: "summary_large_image" },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* suppressHydrationWarning: the inline script below adds `js` to the
       root element before hydration, which React would otherwise flag as an
       attribute mismatch. */
    <html
      className={`${montserrat.variable} ${newsreader.variable}`}
      lang="en"
      suppressHydrationWarning
    >
      <head>
        {/*
          Scroll-reveal styles are gated on `.js`. Setting the flag before first
          paint means motion is available when JavaScript is, and every element
          renders visible when it is not.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "document.documentElement.classList.add('js');" +
              // Safety valve: if the bundle never hydrates, stop hiding
              // GSAP-managed elements so the page is still readable.
              "setTimeout(function(){document.documentElement.classList.add('motion-fallback')},5000);",
          }}
        />
      </head>
      <body className="min-h-dvh antialiased">
        <MotionProvider />
        <div aria-hidden="true" className="grain-field" />
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
