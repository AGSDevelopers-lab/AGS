import { Manrope } from "next/font/google";
import Navbar from "@/components/Navbar";
import { CtaFormProvider } from "@/components/CtaFormProvider";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
});

export const metadata = {
  title: "Creative Design Meets Smart Technology",
  description: "Innovative digital solutions that transform businesses.",
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
