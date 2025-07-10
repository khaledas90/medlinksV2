import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Roboto, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SidebarProvider } from "@/components/ui/sidebar";
import Providers from "./providers";
import { Toaster } from "sonner";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import Header from "@/components/Layout/header/header";
import Footer from "@/components/Layout/footer/footer";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
 
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});
 
const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});
 
const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});
 
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {};

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  return locales.map((local) => ({ local }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  
  const messages = await getMessages({ locale }).catch(() => ({}));

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html
        lang={locale}
        dir={locale === "ar" ? 'rtl' : 'ltr'}
        className={`${inter.variable} ${sourceSans.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <body className="antialiased font-inter">
          <AnimatedWrapper>
            <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <Header />
              <Toaster richColors position="top-right" />
              <SidebarProvider>{children}</SidebarProvider>
              <Footer />
            </ThemeProvider>
          </Providers>
          </AnimatedWrapper>
         
        </body>
      </html>
    </NextIntlClientProvider>
  );
}