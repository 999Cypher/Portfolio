import type { Metadata } from "next";
import { Inter, Fira_Mono, Space_Mono } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

// Modern, clean typography with a cyber feel
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const firaMono = Fira_Mono({
  variable: "--font-fira-mono",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Cypher | Full Stack Developer",
  description: "Portfolio and CV of Cypher, a Full Stack Developer specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${firaMono.variable} ${spaceMono.variable} antialiased`}
      >
        <div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
          <main className="flex-1 md:ml-72">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
