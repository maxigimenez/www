import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Lora } from "next/font/google";
import "@/app/globals.css";
import { Providers } from "@/components/Providers";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  variable: "--font-inter" 
});
const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600", "700"],
  variable: "--font-mono" 
});
const lora = Lora({ 
  subsets: ["latin"], 
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-lora" 
});

export const metadata: Metadata = {
  title: "maxi gimenez",
  description: "Engineering Manager & Team Lead. I build tools, lead teams, and write about the craft of software engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} ${lora.variable} font-sans antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            <main className="flex-1">
              <div className="container py-12 md:py-16">
                {children}
              </div>
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
