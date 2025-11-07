import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import { QueryProvider } from "@/components/providers/query-provider";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Sourceful | AI packaging design",
  description: "Design packaging your customers love by chatting with AI.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-gradient-r-violet-blue-green-subtle`}
      >
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
