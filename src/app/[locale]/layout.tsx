import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Inter,
  Roboto,
  Source_Sans_3,
} from "next/font/google";
import "./globals.css";
import { SidebarProvider } from "@/components/ui/sidebar";
import Providers from "./providers";
import { Toaster } from "sonner";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";

import Header from "@/components/Layout/header/header";
import Footer from "@/components/Layout/footer/footer";
import { AnimatedWrapper } from "@/components/AnimatedWrapper";
import StoreProvider from "@/store/StoreProvider";
interface Props {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}
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
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://mymedlinks.com";
  const { locale } = await params;
  const lang = locale.split("-")[0];

  const description = lang.startsWith("en")
    ? "MedLinks is your trusted platform for medical equipment, rental services, hospital appointments, and specialized medical solutions across the UAE. Quality care at your fingertips."
    : "ميد لينكس هي منصتك الموثوقة للمعدات الطبية، وخدمات التأجير، وحجز مواعيد الأطباء والمستشفيات، وحلول طبية متخصصة في الإمارات. رعايتك تبدأ من هنا.";

  const keywords = lang.startsWith("en")
    ? "medical equipment, rental, hospital appointments, healthcare services, clinics, doctors, UAE, MedLinks, online medical, medical supplies"
    : "معدات طبية، تأجير، مواعيد مستشفيات، خدمات صحية، عيادات، أطباء، الإمارات، ميد لينكس، طب، مستلزمات طبية، رعاية صحية";

  return {
    metadataBase: new URL(baseUrl || "http://localhost:3000"),
    title: "MedLinks",
    description,
    keywords,
    icons: {
      icon: [
        {
          url: "https://ibb.co/hFJh6Hyc",
          type: "image/x-icon",
          sizes: "32x32",
        },
      ],
    },
    openGraph: {
      title: "MedLinks - Medical Equipment & Health Services",
      type: "website",
      url: "https://mymedlinks.com",
      images: [
        {
          url: "https://ibb.co/hFJh6Hyc",
          width: 1200,
          height: 630,
          alt: "MedLinks UAE",
        },
      ],
      description,
      siteName: "MedLinks",
    },
    twitter: {
      site: "@MedLinks_2025",
      title: "MedLinks UAE",
      description,
      creator: "@MedLinks_2025",
      images: [
        {
          url: "https://ibb.co/hFJh6Hyc",
          width: 1200,
          height: 630,
          alt: "MedLinks",
        },
      ],
    },
    other: {
      author: "MedLinks UAE",
      "facebook-domain-verification": "vrgxc7hnw55utj3an9quypmaj4eyrs",
      "msvalidate.01": "597692DEE268A15546C4E0F78EEBD51D",
      "csrf-token": "your-token-here",
      "app-url": "https://mymedlinks.com",
      "itemprop:name": "MedLinks",
      "itemprop:description": description,
      "itemprop:image": "https://ibb.co/hFJh6Hyc",
    },
  };
}

export async function generateStaticParams() {
  const locales = ["en", "ar"];
  return locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;
  const messages = await getMessages({ locale }).catch(() => ({}));

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <html
        lang={locale}
        dir={locale === "ar" ? "rtl" : "ltr"}
        className={`${inter.variable} ${sourceSans.variable} ${roboto.variable} ${geistSans.variable} ${geistMono.variable}`}
        suppressHydrationWarning
      >
        <body className="antialiased font-inter">
          <AnimatedWrapper>
            <StoreProvider>
              <Providers>
                <Header />
                <Toaster richColors position="top-right" />
                <SidebarProvider>{children}</SidebarProvider>
                <Footer />
              </Providers>
            </StoreProvider>
          </AnimatedWrapper>
        </body>
      </html>
    </NextIntlClientProvider>
  );
}
