import type React from "react"
import type { Metadata } from "next"
import { Sora, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import NeuralNetworkThree from "@/components/neural-network-three"

const siteName = "Ayush Kumar Portfolio"
const siteDescription =
  "Portfolio of Ayush Kumar, a full-stack developer building scalable web apps, research projects, and production-ready digital products."
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com"
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
const bingVerification = process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
})

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Ayush Kumar | Full-Stack Developer Portfolio",
    template: "%s | Ayush Kumar",
  },
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "Ayush Kumar",
    "Ayush Kumar portfolio",
    "full-stack developer",
    "MERN developer",
    "web developer portfolio",
    "software engineer",
    "projects",
  ],
  alternates: {
    canonical: "/",
  },
  authors: [{ name: "Ayush Kumar", url: siteUrl }],
  creator: "Ayush Kumar",
  publisher: "Ayush Kumar",
  icons: {
    icon: "/placeholder-logo.png",
    shortcut: "/placeholder-logo.png",
    apple: "/placeholder-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName,
    title: "Ayush Kumar | Full-Stack Developer Portfolio",
    description: siteDescription,
    images: [
      {
        url: "/placeholder.jpg",
        width: 1200,
        height: 630,
        alt: "Ayush Kumar portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@ayushspn123",
    creator: "@ayushspn123",
    title: "Ayush Kumar | Full-Stack Developer Portfolio",
    description: siteDescription,
    images: ["/placeholder.jpg"],
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
      <body className={`${sora.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        <NeuralNetworkThree />
        <ThemeProvider>{children}</ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
