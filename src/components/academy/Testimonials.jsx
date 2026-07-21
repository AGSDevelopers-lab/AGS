export default function Testimonials() {
  const testimonials = [
    {
      name: "Aman Kumar Singh,",
      role: "B.Tech (Computer Science)",
      review: "Before joining this program, I had only theoretical knowledge of Machine Learning. The hands-on projects and AWS deployment experience helped me understand how AI solutions are built in the industry. The portfolio I developed during the training played a major role in helping me secure a Data Analyst internship.",
      initial: "A",
      color: "bg-[#7B5CFF]",
    },
    {
      name: "Sutirtha Chatterjee,",
      role: "B.Tech (IT)",
      review: "What makes this program different is its focus on real implementation. From data preprocessing to model deployment, every stage was covered through practical exercises. The live projects significantly strengthened my resume and improved my placement opportunities.",
      initial: "S",
      color: "bg-[#7B5CFF]",
    },
    {
      name: "Arindam Sengupta,",
      role: "Computer Science Graduate",
      review: "I was looking for a program that could help me transition into the AI/ML domain. The curriculum, mentor guidance, and cloud-based projects on AWS gave me industry-relevant skills. Within a few months of completing the training, I received interview calls for AI and Data Science roles",
      initial: "A",
      color: "bg-[#7B5CFF]",
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12 text-left">
          <h4 className="text-[#7B5CFF] text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase mb-4">
            STUDENT OUTCOMES
          </h4>
          <h2 className="text-3xl md:text-5xl lg:text-[4rem] font-bold text-white leading-[1.1] mb-6 tracking-tight">
            Real Students. Real Projects. <br className="hidden md:block" />
            <span className="text-[#7B5CFF]">Real Outcomes.</span>
          </h2>
          <p className="text-white/50 text-[14px] max-w-2xl">
            These aren't motivational quotes. These are people who came in without AI experience and left with deployed projects and job-ready portfolios.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div key={idx} className="bg-[#0D101E] border border-white/5 rounded-sm p-8 flex flex-col hover:border-white/10 transition-colors">
              <div className="flex gap-1 text-[#FDB022] mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              
              <p className="text-white/50 text-[14px] leading-relaxed mb-8 flex-grow">
                &quot;{test.review}&quot;
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className={`w-10 h-10 rounded-full ${test.color} flex items-center justify-center text-white font-bold text-sm shrink-0`}>
                  {test.initial}
                </div>
                <div>
                  <h4 className="text-white font-bold text-[14px]">{test.name}</h4>
                  <p className="text-white/40 text-[13px] mt-0.5">{test.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
