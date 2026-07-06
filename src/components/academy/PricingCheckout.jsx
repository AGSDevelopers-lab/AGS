export default function PricingCheckout() {
  const features = [
    "120+ Hours of Live, Hands-On Training",
    "13 Industry-Focused AWS-Integrated Modules",
    "Full AWS Cloud Access & Learning",
    "Machine Learning Projects Portfolio",
    "NLP & Computer Vision Projects",
    "Capstone: End-to-End AI Deployment",
    "1-on-1 Mentorship From Industry Engineers",
    "AI & ML Resource Library",
    "Career Guidance & Interview Prep Sessions",
    "Program Completion Certificate",
  ];

  return (
    <section id="pricing" className="py-16 md:py-24 bg-[#070913]">
      <div className="max-w-3xl mx-auto px-6 sm:px-8">
        
        <div className="text-center mb-8">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase">
            SIMPLE PRICING
          </h3>
        </div>

        <div className="bg-[#0D101E] border border-[#7B5CFF]/20 rounded-2xl p-8 md:p-12 relative shadow-[0_0_80px_rgba(123,92,255,0.05)] max-w-2xl mx-auto flex flex-col items-center">
          {/* Badge */}
          <div className="absolute top-6 left-6 md:top-8 md:left-8 px-3 py-1.5 rounded-full bg-[#00E676]/10 text-[#00E676] text-[10px] font-bold uppercase tracking-wider">
            LIMITED BATCH OFFER
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-white leading-tight text-center mt-12 mb-4">
            The Investment: ₹4,000 <br />
            The Return: A Career in AI.
          </h2>
          
          <p className="text-white/60 text-sm md:text-base text-center mb-8 max-w-sm">
            Everything included. Nothing hidden. One price, full access.
          </p>
          
          <div className="flex justify-center items-end gap-3 mb-4">
            <span className="text-5xl md:text-7xl font-bold text-white leading-none">₹4,000</span>
            <span className="text-xl md:text-2xl text-white/40 line-through mb-1">₹12,000</span>
          </div>
          
          <p className="text-white/50 text-xs md:text-sm mb-10 text-center">
            Full Program &middot; All 13 Modules &middot; 12 Weeks
          </p>

          <div className="w-full mb-10 border-t border-white/5">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-center gap-4 py-4 border-b border-white/5">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/70">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span className="text-white/80 text-[13px] md:text-[14px]">{feature}</span>
              </div>
            ))}
          </div>

          <a
            href="#"
            className="block w-full bg-[#7B5CFF] hover:bg-[#6a4cef] text-white text-center py-4 rounded-sm text-[15px] font-bold transition-all shadow-[0_0_20px_rgba(123,92,255,0.4)] hover:shadow-[0_0_30px_rgba(123,92,255,0.6)] mb-6"
          >
            Reserve Your Seat Now &rarr;
          </a>
          
          <p className="text-white/40 text-[11px] md:text-xs text-center leading-relaxed">
            Seats are limited per batch. Price valid for current intake only.<br />
            Secure your spot before it fills.
          </p>
        </div>
      </div>
    </section>
  );
}
