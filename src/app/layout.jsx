import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CtaFormProvider } from "@/components/CtaFormProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata = {
  title: "AGS — Digital Transformation & Growth Consultant Company",
  description:
    "Innovative digital solutions that transform businesses. Web Development, UI/UX Design, Branding, AI Solutions, and Cyber Security — built on AWS.",
  keywords: [
    "AGS",
    "Amrut Global Solutions",
    "web development",
    "UI/UX design",
    "branding",
    "digital solutions",
    "AI solutions",
    "cyber security",
    "Kolkata",
  ],
  openGraph: {
    title: "AGS — Digital Transformation & Growth Consultant Company",
    description:
      "Partner with AGS for web development, UI/UX design, branding, and digital solutions built to help your business grow.",
    url: "https://amrutglobalsolutions.com",
    siteName: "AGS",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "AGS — Digital Transformation & Growth Consultant",
    description:
      "Smart Design. Scalable Technology. Real Results.",
  },
  icons: {
    icon: "/ags_favicon.png",
    shortcut: "/ags_favicon.png",
    apple: "/ags_favicon.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased bg-background text-white">
        <GoogleAnalytics />
        <CtaFormProvider>
          <Navbar />
          {children}
          <Footer />
        </CtaFormProvider>
      </body>
    </html>
  );
}
