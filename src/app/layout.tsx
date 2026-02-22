import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "Portfolio of Kbamol, Full Stack Developer and DevOps Engineer. Coming soon.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-background text-foreground relative min-h-screen grid grid-rows-[auto_1fr_auto]`}
      >
        {/* Background glow effects */}
        <div className="fixed top-[-20%] left-[-10%] w-[50vw] h-[50vw] bg-[radial-gradient(circle,rgba(139,92,246,0.15)_0%,rgba(3,7,18,0)_70%)] rounded-full -z-10 pointer-events-none"></div>
        <div className="fixed top-[50%] right-[-50%] w-[40vw] h-[40vw] bg-[radial-gradient(circle,rgba(59,130,246,0.1)_0%,rgba(3,7,18,0)_70%)] rounded-full -z-10 pointer-events-none"></div>

        {/* <header className="w-full py-6 flex justify-center items-center z-50">
          <a href="#" className="font-outfit text-3xl font-extrabold tracking-tight">kbamol<span className="text-blue-500">.dev</span></a>
        </header> */}

        {children}

        <footer className="py-8 text-center text-muted-foreground text-sm z-50">
          <p>&copy; 2026 Amol Bhavar. Built for exploring Full Stack & DevOps on AWS.</p>
        </footer>
      </body>
    </html>
  );
}
