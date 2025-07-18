import { Html, Head, Main, NextScript } from "next/document";

export const metadata = {
  charset: "utf-8",
  title: "Vishal Godalkar - Portfolio",
  description:
    "Portfolio website of Vishal Godalkar, full stack developer, problem solver, and tech enthusiast from Pune, India.",
  keywords:
    "Vishal Godalkar, Full Stack Developer, Node.js, React, Python, Web Developer, PCCOE, Pune, India",
  author: "Vishal Godalkar",
  openGraph: {
    url: "https://github.com/Vishalgodalkar", // You can replace this with a hosted portfolio URL
    title: "Vishal Godalkar - Portfolio",
    description:
      "Explore Vishal Godalkar’s projects, skills, and achievements as a full stack developer and open-source contributor.",
    siteName: "Vishal Godalkar - Portfolio",
    images: [
      {
        url: "https://raw.githubusercontent.com/Vishalgodalkar/portfolio/main/public/preview.png", // Replace with your actual portfolio screenshot
        width: 800,
        height: 600,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Vishal Godalkar - Portfolio",
    description:
      "Explore Vishal Godalkar’s personal portfolio showcasing development work and achievements.",
    images: [
      {
        url: "https://raw.githubusercontent.com/Vishalgodalkar/portfolio/main/public/preview.png", // Replace with your actual portfolio screenshot
        width: 800,
        height: 600,
      },
    ],
  },
};

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet={metadata.charset} />
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="author" content={metadata.author} />

        {/* Open Graph */}
        <meta property="og:url" content={metadata.openGraph.url} />
        <meta property="og:title" content={metadata.openGraph.title} />
        <meta property="og:description" content={metadata.openGraph.description} />
        <meta property="og:image" content={metadata.openGraph.images[0].url} />
        <meta property="og:type" content={metadata.openGraph.type} />
        <meta property="og:locale" content={metadata.openGraph.locale} />

        {/* Twitter */}
        <meta name="twitter:card" content={metadata.twitter.card} />
        <meta name="twitter:title" content={metadata.twitter.title} />
        <meta name="twitter:description" content={metadata.twitter.description} />
        <meta name="twitter:image" content={metadata.twitter.images[0].url} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
