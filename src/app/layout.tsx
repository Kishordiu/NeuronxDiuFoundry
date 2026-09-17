import type { Metadata } from "next";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";
import { eventConfig } from "@/config/eventConfig";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${eventConfig.eventName} — ${eventConfig.organization} 8-Hour Hackathon`,
  description: `${eventConfig.eventName} — ${eventConfig.organization} 8-Hour Hackathon on ${eventConfig.date}. Build above the ordinary.`,
  authors: [{ name: eventConfig.organization }],
  openGraph: {
    title: `${eventConfig.eventName} — ${eventConfig.organization} 8-Hour Hackathon`,
    description: `${eventConfig.eventName} • ${eventConfig.organization} • 8-Hour Hackathon • ${eventConfig.date}`,
    siteName: eventConfig.eventName,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${eventConfig.eventName} — ${eventConfig.organization} 8-Hour Hackathon`,
    description: `${eventConfig.eventName} • ${eventConfig.organization} • 8-Hour Hackathon • ${eventConfig.date}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${sora.variable}`}>
      <body className="antialiased selection:bg-slate-700 selection:text-white">
        <SmoothScrolling>
          <CustomCursor />
          {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
