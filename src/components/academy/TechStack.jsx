export default function TechStack() {
  return (
    <section className="py-12 border-b border-white/5 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Desktop: Tech Stack */}
        <div className="hidden lg:block text-center">
          <h3 className="text-xs font-bold tracking-[0.2em] text-white/40 uppercase mb-8">
            Technologies & Platforms You&apos;ll Master
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6 text-white/70 font-medium">
            <span>AWS SageMaker</span>
            <span>TensorFlow</span>
            <span>PyTorch</span>
            <span>Scikit-Learn</span>
            <span>Python</span>
            <span>OpenCV</span>
            <span>AWS Lambda</span>
          </div>
        </div>

        {/* Mobile: Trusted By */}
        <div className="lg:hidden text-center">
          <h3 className="text-[10px] font-bold tracking-[0.15em] text-white/40 uppercase mb-6">
            Trusted By Students From
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {["Brainware University", "TechMahindra", "Wipro", "Infosys"].map((company) => (
              <div 
                key={company} 
                className="px-4 py-2 rounded-sm border border-white/10 bg-white/[0.02] text-xs font-medium text-white/70"
              >
                {company}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
