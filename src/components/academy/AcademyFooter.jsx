import Link from "next/link";

export default function AcademyFooter() {
  return (
    <footer className="bg-[#0A0C16]">
      {/* Final CTA Section */}
      <div className="py-20 md:py-32 border-b border-white/5 relative">
        {/* Subtle background glow behind CTA */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#7B5CFF]/10 blur-[100px] pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-[1.2]">
            Stop Reading About AI. <br />
            <span className="text-[#9D7AFF]">
              Start Building It.
            </span>
          </h2>
          <p className="text-white/70 text-[15px] md:text-[17px] max-w-2xl mx-auto mb-10 leading-relaxed">
            Join the next AGS Academy cohort and gain the practical AI &amp; Machine Learning experience that employers actually look for.
          </p>
          <div className="flex justify-center">
            <a
              href="#pricing"
              className="inline-flex items-center justify-center bg-[#7B5CFF] hover:bg-[#6a4cef] text-white px-8 py-4 rounded-sm text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.4)] hover:shadow-[0_0_30px_rgba(123,92,255,0.6)]"
            >
              Reserve Your Seat Now &rarr;
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-8">
          
          {/* Brand */}
          <div className="md:col-span-12 lg:col-span-5">
            <Link href="/academy" className="inline-block mb-6">
              <h3 className="text-white font-bold text-xl tracking-tight">
                <span className="text-[#9D7AFF]">AGS</span> Academy
              </h3>
            </Link>
            <p className="text-white/50 text-[13px] md:text-[14px] leading-relaxed max-w-sm">
              Practical AI &amp; Machine Learning training built around real projects, live cloud deployments, and industry mentorship. Build a portfolio employers can actually evaluate.
            </p>
          </div>

          {/* Links Column 1 */}
          <div className="md:col-span-4 lg:col-span-2 lg:col-start-7">
            <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">
              PROGRAM
            </h4>
            <ul className="space-y-4">
              {[
                "Curriculum",
                "Outcomes",
                "Mentors",
                "Pricing"
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href={`#${link.toLowerCase()}`} className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">
              RESOURCES
            </h4>
            <ul className="space-y-4">
              {[
                "Student Stories",
                "Project Gallery",
                "Blog",
                "FAQ"
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Links Column 3 */}
          <div className="md:col-span-4 lg:col-span-2">
            <h4 className="text-white font-bold text-[11px] tracking-widest uppercase mb-6">
              CONTACT
            </h4>
            <ul className="space-y-4">
              {[
                "hello@agsacademy.in",
                "WhatsApp Us",
                "Instagram",
                "LinkedIn"
              ].map((link, idx) => (
                <li key={idx}>
                  <Link href="#" className="text-white/50 hover:text-white text-[13px] md:text-[14px] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-[12px] md:text-[13px]">
            © {new Date().getFullYear()} AGS Academy. All rights reserved.
          </p>
          <div className="flex gap-4 md:gap-6 text-white/40 text-[12px] md:text-[13px]">
            <a href="#" className="hover:text-white transition-colors">Instagram</a>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-white transition-colors">Twitter / X</a>
            <a href="#" className="hover:text-white transition-colors">YouTube</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
