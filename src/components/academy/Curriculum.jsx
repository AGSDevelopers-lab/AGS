export default function Curriculum() {
  const modules = [
    {
      title: "Orientation to AI/ML & AWS Setup",
      desc: "Understand the AI project lifecycle and set up your AWS development environment using SageMaker Studio, CloudShell, IAM, and core AWS services.",
    },
    {
      title: "Data Storage & Management",
      desc: "Build cloud-native data pipelines using Amazon S3, AWS Glue, Athena, and industry-standard data engineering practices.",
    },
    {
      title: "Data Cleaning & Preprocessing",
      desc: "Prepare real-world datasets using Pandas and NumPy through feature preparation, scaling, encoding, and transformation techniques.",
    },
    {
      title: "Exploratory Data Analysis",
      desc: "Visualize trends, discover insights, identify patterns, and communicate findings using modern data analysis techniques.",
    },
    {
      title: "Classical Machine Learning on AWS",
      desc: "Build classification, regression, and clustering models using Scikit-Learn and Amazon SageMaker.",
    },
    {
      title: "Model Evaluation & Optimization",
      desc: "Improve model accuracy through hyperparameter tuning, validation strategies, and performance evaluation techniques.",
    },
    {
      title: "Feature Engineering & Pipelines",
      desc: "Design reusable machine learning workflows and feature pipelines used in production environments.",
    },
    {
      title: "Deep Learning on AWS",
      desc: "Train neural networks using TensorFlow and PyTorch while leveraging AWS cloud infrastructure.",
    },
    {
      title: "Natural Language Processing",
      desc: "Build sentiment analysis, text classification, and language understanding systems using modern NLP techniques.",
    },
    {
      title: "Computer Vision Applications",
      desc: "Create image recognition and computer vision solutions using OpenCV and AWS AI services.",
    },
    {
      title: "Deployment & API Integration",
      desc: "Transform trained models into live applications using SageMaker Endpoints, Lambda, and API Gateway.",
    },
    {
      title: "MLOps & Monitoring",
      desc: "Learn deployment automation, model versioning, CI/CD workflows, and monitoring practices for production AI.",
    },
  ];

  return (
    <section id="curriculum" className="py-16 md:py-24 bg-[#070913]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="mb-12">
          <h3 className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#9D7AFF] uppercase mb-4">
            Full Curriculum
          </h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            13 Modules. 12 Weeks. One Portfolio
            <br className="hidden md:block" />
            <span className="text-[#9D7AFF]">
              {" "}That Gets You Hired.
            </span>
          </h2>
          <p className="text-white/70 max-w-2xl text-base md:text-lg">
            Every module closes with a deliverable — not a quiz. You&apos;ll graduate with work that proves your skills, not a certificate that claims them.
          </p>
        </div>

        {/* Grid: 3 columns on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0">
          {modules.map((mod, idx) => (
            <div
              key={idx}
              className="bg-[#0D101E] border border-white/5 p-6 md:p-8 hover:bg-[#111526] hover:border-white/10 transition-colors"
            >
              <div className="text-[10px] font-bold text-[#9D7AFF] uppercase mb-3 tracking-widest">
                Module {String(idx + 1).padStart(2, "0")}
              </div>
              <h4 className="text-white font-semibold text-[15px] md:text-[17px] mb-3 leading-snug">
                {mod.title}
              </h4>
              <p className="text-white/60 text-[13px] md:text-sm leading-relaxed">
                {mod.desc}
              </p>
            </div>
          ))}
          
          {/* Capstone spans all 3 columns */}
          <div className="md:col-span-2 lg:col-span-3 bg-gradient-to-br from-[#7B5CFF]/20 to-[#0D101E] border border-white/5 p-6 md:p-8 hover:border-[#7B5CFF]/30 transition-colors mt-0">
            <div className="text-[10px] font-bold text-[#9D7AFF] uppercase mb-3 tracking-widest">
              Module 13 - Capstone
            </div>
            <h4 className="text-white font-bold text-lg md:text-xl mb-3">
              Capstone Project — End-to-End AI Deployment
            </h4>
            <p className="text-white/70 text-sm md:text-base max-w-4xl">
              Build a complete end-to-end AI application from data collection to cloud deployment and live presentation. This is your portfolio centerpiece.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
