export default function AcademyStats() {
  const stats = [
    { value: "120+", label: "Practical Learning Hours", mobileLabel: "Hours of live training" },
    { value: "13", label: "Industry-Focused Modules", mobileLabel: "In-depth modules" },
    { value: "100%", label: "Project-Based Learning", mobileLabel: "Project-Based" },
    { value: "200+", label: "Students Successfully Trained", mobileLabel: "Students Trained" },
  ];

  return (
    <section className="py-16 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Mobile Header */}
        <h3 className="lg:hidden text-[11px] font-bold tracking-[0.2em] text-white/50 uppercase mb-6">
          Program At A Glance
        </h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 divide-x-0 lg:divide-x divide-white/10">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className={`flex-col items-center justify-center text-center ${
                index >= 2 ? "hidden lg:flex" : "flex"
              } lg:p-0 p-6 ${index < 2 ? 'bg-[#0D101E] lg:bg-transparent border border-white/5 lg:border-none rounded-lg' : ''}`}
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.value}</div>
              <div className="text-xs md:text-sm text-white/60 font-medium max-w-[150px]">
                <span className="hidden lg:inline">{stat.label}</span>
                <span className="lg:hidden">{stat.mobileLabel}</span>
              </div>
            </div>
          ))}
          {/* Mobile actually shows all 4 but in a grid, let's fix the class logic */}
        </div>
      </div>
    </section>
  );
}
