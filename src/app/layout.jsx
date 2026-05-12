import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import { CtaFormProvider } from "@/components/CtaFormProvider";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "AGS - A Digital Transformation & Growth Consultant Company",
  description: "Innovative digital solutions that transform businesses.",
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
        </CtaFormProvider>
      </body>
    </html>
  );
}
