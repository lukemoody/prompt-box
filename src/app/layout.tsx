import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sourceful | AI packaging design | Test",
  description: "Design packaging your customers love by chatting with AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${spaceGrotesk.variable} antialiased bg-gradient-r-violet-blue-green-subtle`}
      >
        {children}
      </body>
    </html>
  );
}
