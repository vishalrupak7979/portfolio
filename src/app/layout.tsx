import type { Metadata } from "next";
import type { ReactNode } from "react";
import { StyledComponentsRegistry } from "./registry";
import { GlobalStyle } from "../styles/global";
import vishal from "../assets/vishalrupak.webp";

import "react-toastify/dist/ReactToastify.css";

const description =
  "Frontend Engineer with 3.5+ years of experience building scalable web applications with React.js, Next.js, and JavaScript.";

export const metadata: Metadata = {
  metadataBase: new URL("https://vishalrupakportfolio.netlify.app"),
  title: "Vishal Rupak V R | Portfolio",
  description,
  keywords:
    "Vishal Rupak, Frontend Engineer, Frontend Developer, React, Next.js, TypeScript, MERN Stack, Coimbatore",
  icons: "/Images/favicon.webp",
  verification: { google: "Yuca5UbpJGE9KOnlEWxQmTwpo4F__IKeQ8qDO6AO91U" },
  openGraph: {
    title: "Vishal Rupak | Portfolio",
    description,
    siteName: "Vishal Rupak",
    type: "website",
    locale: "en_IN",
    images: [vishal.src],
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"
        />
        <link
          rel="sitemap"
          type="application/xml"
          title="Sitemap"
          href="/sitemap.xml"
        />
      </head>
      <body>
        <StyledComponentsRegistry>
          <GlobalStyle />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
