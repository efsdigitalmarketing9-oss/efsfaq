import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "EFS FAQ",
  description: "Find quick answers to common questions about EFS services, support hours, team policies, and more. Get the help you need or connect with our customer support team directly.",
  openGraph: {
    title: "EFS FAQ",
    description:
      "Find quick answers to common questions about EFS services.",
    images: [
      {
        url: "/meta.webp",
        width: 1200,
        height: 630,
        alt: "EFS Preview Image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://efsfaq.vercel.app/" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content="" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}

