import type React from "react"
import type { Metadata } from "next"
import { Fraunces, IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { TabVisibility } from "@/components/tab-visibility"

const siteName = "Ayush Kumar | Software Developer & Full-Stack Engineer"
const siteDescription =
  "Official portfolio of Ayush Kumar, a Full-Stack Software Developer & Engineer specializing in React, Next.js, Node.js, MERN stack, microservices, and scalable web apps."
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
  weight: "variable",
  style: ["normal", "italic"],
  axes: ["opsz", "SOFT", "WONK"],
})

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-mono-face",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayush Kumar | Software Developer & Full-Stack Engineer",
    template: "%s | Ayush Kumar - Software Developer",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Ayush Kumar",
    "Ayush Kumar developer",
    "Ayush Kumar software developer",
    "Ayush Kumar software engineer",
    "Ayush Kumar portfolio",
    "Ayush Kumar full stack developer",
    "developer",
    "software developer",
    "full stack developer",
    "software engineer",
    "full stack software developer",
    "web developer",
    "MERN stack developer",
    "React developer",
    "Next.js developer",
    "Node.js developer",
    "ayushspn123",
    "ayushkumar-dev",
    "developer portfolio",
    "software engineer portfolio",
  ],
  alternates: {
    canonical: siteUrl,
  },
  authors: [{ name: "Ayush Kumar", url: siteUrl }],
  creator: "Ayush Kumar",
  publisher: "Ayush Kumar",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/ayush-kumar.jpg", type: "image/jpeg" },
    ],
    shortcut: "/favicon.svg",
    apple: "/ayush-kumar.jpg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Ayush Kumar - Software Developer Portfolio",
    title: "Ayush Kumar | Software Developer & Full-Stack Engineer",
    description: siteDescription,
    images: [
      {
        url: "/ayush-kumar.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar — Software Developer & Full-Stack Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayushspn123",
    creator: "@ayushspn123",
    title: "Ayush Kumar | Software Developer & Full-Stack Engineer",
    description: siteDescription,
    images: ["/ayush-kumar.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: googleVerification,
    other: {
      "msvalidate.01": bingVerification,
    },
  },
  category: "technology",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${fraunces.variable} ${plexSans.variable} ${plexMono.variable} font-sans antialiased`}>
        <ThemeProvider>
          <TabVisibility />
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}

