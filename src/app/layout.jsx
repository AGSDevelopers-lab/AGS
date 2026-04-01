import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import { CtaFormProvider } from "@/components/CtaFormProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "AGS - A Digital Transformation & Growth Consultant Company",
  description: "Innovative digital solutions that transform businesses.",
  icons: {
    icon: "/favicon.webp",
    shortcut: "/favicon.webp",
    apple: "/favicon.webp",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={manrope.variable}>
      <body className="antialiased bg-[#0A0A14] text-white">
        <CtaFormProvider>
          <Navbar />
          {children}
        </CtaFormProvider>
      </body>
    </html>
  );
}
