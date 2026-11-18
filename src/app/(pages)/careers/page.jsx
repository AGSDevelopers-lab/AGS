"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { DM_Sans } from "next/font/google";
import { useCtaForm } from "@/components/CtaFormProvider";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import ScrollReveal from "@/components/ScrollReveal";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

/* ─────────────────────────────────────────────────────────────────────────────
   DATA DEFINITIONS
   ───────────────────────────────────────────────────────────────────────────── */

// 1. Culture Cards (Section 2)
const cultureCards = [
  {
    title: "Company Values",
    description:
      "Trust, learning, honesty, and co-operation are the pillars that sit at the core of what we do.",
    image: "/careers/Rectangle 5501.jpg",
  },
  {
    title: "Friendly atmosphere",
    description:
      "We hold a positive attitude in order to foster respect and decency for our entire team.",
    image: "/careers/Rectangle 5502.jpg",
  },
  {
    title: "Work-life balance",
    description:
      "For us, a healthy personal life is just as important as the time you spend in the office.",
    image: "/careers/Rectangle 5503.jpg",
  },
  {
    title: "Everyday grow",
    description:
      "We provide the necessary support to ensure your skills never stop growing.",
    image: "/careers/Rectangle 5505.jpg",
  },
];

// 2. Benefits (Section 3) - 9 official benefits matching Figma
const benefits = [
  {
    text: "Flexible working hours",
    icon: "/careers/Clock.png",
  },
  {
    text: "Competitive salary",
    icon: "/careers/Wallet.png",
  },
  {
    text: "Fun team events",
    icon: "/careers/Confetti.png",
  },
  {
    text: "Marriage bonus",
    icon: "/careers/HandsClapping.png",
  },
  {
    text: "30 days paid vacation",
    icon: "/careers/Calendar.png",
  },
  {
    text: "Health care Insurance",
    icon: "/careers/ShieldCheck.png",
  },
  {
    text: "Employee referral bonus",
    icon: "/careers/Target.png",
  },
  {
    text: "Perfessional grow budget",
    icon: "/careers/RocketLaunch.png",
  },
  {
    text: "Birthdays celebration",
    icon: "/careers/Cake.png",
  },
];

// 3. Testimonials (Section 5)
const testimonials = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Frontend Engineer",
    quote:
      "Working here has completely transformed my career trajectory. The emphasis on continuous learning and the supportive environment are unparalleled. Every day brings a new challenge and an opportunity to excel with cutting-edge tools.",
    linkedin: "https://www.linkedin.com",
    image: "/careers/Rectangle 5522.jpg",
    stripImage: "/careers/Rectangle 5522-strip.png",
  },
  {
    id: 2,
    name: "Elena Rodriguez",
    role: "Project Manager",
    quote:
      "Collaboration is at the heart of everything we do. I've never worked with a more dedicated, passionate, and intelligent group of people. Delivery is streamlined, and feedback is always constructive.",
    linkedin: "https://www.linkedin.com",
    image: "/careers/Rectangle 5524-feature.png",
    stripImage: "/careers/Rectangle 5524.png",
  },
  {
    id: 3,
    name: "James Olson",
    role: "Product Designer",
    quote:
      "I do admire the company culture and, I like that. AGS is truly the place where good attitudes have blended with proficiency. If you’re going to craft something great and you have a strong eagerness to do that, AGS will remove all hassles in your journey.",
    linkedin: "https://www.linkedin.com",
    image: "/careers/Rectangle 5525-feature.png",
    stripImage: "/careers/Rectangle 5525.png",
  },
  {
    id: 4,
    name: "Marcus Chen",
    role: "Backend Architect",
    quote:
      "The leadership team genuinely cares about our well-being and professional growth. We are given the autonomy to make impactful decisions while having a safety net of brilliant colleagues.",
    linkedin: "https://www.linkedin.com",
    image: "/careers/Rectangle 5526-feature.png",
    stripImage: "/careers/Rectangle 5526.png",
  },
];

// 4. Timeline (Section 6: How to become a AGS'er?)
const timelineSteps = [
  {
    number: "01",
    title: "Find a role that suits you",
    description:
      "Discover open positions and find your desired one in the Visioncraft website, job listings or social media.",
    side: "right",
    highlight: true,
  },
  {
    number: "02",
    title: "Send your application",
    description:
      "Some simple questions should be answered and your contact information is required",
    side: "left",
  },
  {
    number: "03",
    title: "Receive your interview invite",
    description:
      "We review all applications within 3 working days and send invitation to candidates",
    side: "right",
  },
  {
    number: "04",
    title: "Choose an interview slot",
    description:
      "You will have a friendly discution with the CEO and your supervisor to talk about the work, life and etc.",
    side: "left",
  },
  {
    number: "05",
    title: "Preliminary Interview",
    description:
      "Sometimes, we ask candidates to participate in some technical challenge that is designated to demonstrate candidates' proficiency.",
    side: "right",
  },
  {
    number: "06",
    title: "Meet the your teammates",
    description:
      "To us is crucial to make sure all team members feel comfortable. It is why we do try to have diverse but culturally fitted team members.",
    side: "left",
  },
  {
    number: "07",
    title: "Interview with our CEO",
    description: "Your colleagues are waiting for you to say a warm welcome.",
    side: "right",
  },
  {
    number: "08",
    emoji: "🤝",
    title: "Start a new journey!",
    description: "",
    side: "left",
  },
];

// 5. Open Positions (Section 7)
const categories = [
  { key: "all", label: "All positions (17)" },
  { key: "engineering", label: "Enginering (7)" },
  { key: "product", label: "Product (3)" },
  { key: "design", label: "Design (1)" },
  { key: "operation", label: "Operation (4)" },
  { key: "marketing", label: "Marketing (2)" },
];

const jobPositions = [
  {
    id: 1,
    title: "Full-Stack Developers",
    category: "engineering",
    tags: ["Tartu", "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 2,
    title: "Application developer (react native)",
    category: "engineering",
    tags: ["Tartu", "Full-time"],
    description:
      "Due to growing workload, we are looking for experienced and talented Full-Stack Developers to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features.",
  },
  {
    id: 3,
    title: "Senior Product designer",
    category: "design",
    tags: ["Hybrid", "Tallinn", "Full-time"],
    description:
      "Since 2019 we've worked on 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries. Need full-cycle product development or an improvement cycle? Let's talk!",
  },
  {
    id: 4,
    title: "Product Manager",
    category: "product",
    tags: ["Remote", "Netherlands", "Full-time"],
    description:
      "If you are PM and you eager to join our fast-paced Engineering team. You will work closely with Product, Design and Marketing to analyze, develop, debug, test, roll-out and support new and existing product features. 30+ major projects from 8 different industries that are being used by 500,000+ users and 1000+ businesses from 70+ different countries.",
  },
  {
    id: 5,
    title: "Product Owner",
    category: "product",
    tags: ["Tartu", "Full-time"],
    description:
      "We've worked on 30+ major projects from 8 different industries that are being. Need full-cycle product development or an improvement cycle? Let's talk!",
  },
];

// 6. Stories by AGS! (Section 9)
const blogStories = [
  {
    id: 1,
    title: "How we build the Dagmarket on 6 months",
    author: "Kaur Kaljuma",
    date: "May 20th 2020",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    image: "/careers/Image.png",
    authorImg: "/careers/author-kaljuma.png",
  },
  {
    id: 2,
    title: "The last anoncement for success factory",
    author: "Raigo Tuulik",
    date: "May 20th 2020",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    image: "/careers/Image (1).png",
    authorImg: "/careers/author-tuulik.png",
  },
  {
    id: 3,
    title: "The Role of Repetition in Conversation Design",
    author: "Jüri Siilivask",
    date: "May 20th 2020",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    image: "/careers/Image (2).png",
    authorImg: "/careers/author-siilivask.png",
  },
  {
    id: 4,
    title: "What I Learned From Getting Hired",
    author: "Mazdak Shakiba",
    date: "May 20th 2020",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    image: "/careers/Image (3).png",
    authorImg: "/careers/author-shakiba.png",
  },
  {
    id: 5,
    title: "Motion Design Doesn’t Have to be Hard",
    author: "Kaur Kaljuma",
    date: "May 20th 2020",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....",
    image: "/careers/Modern Presentation Dashboard UI.png",
    authorImg: "/careers/author-kaljuma.png",
  },
];

/* ─────────────────────────────────────────────────────────────────────────────
   MAIN CAREERS PAGE COMPONENT
   ───────────────────────────────────────────────────────────────────────────── */

export default function CareersPage() {
  const { openForm } = useCtaForm();
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isTestimonialHovered, setIsTestimonialHovered] = useState(false);

  // Moving 6-slide carousel with auto-cycle (pauses when user hovers to read)
  useEffect(() => {
    if (isTestimonialHovered) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isTestimonialHovered]);

  // Filter positions by selected category
  const filteredPositions =
    selectedCategory === "all"
      ? jobPositions
      : jobPositions.filter((job) => job.category === selectedCategory);

  const scrollToPositions = () => {
    const el = document.getElementById("open-positions");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [currentStory, setCurrentStory] = useState(0);
  const storiesTrackRef = useRef(null);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const scrollToStory = (index) => {
    const track = storiesTrackRef.current;
    if (!track) return;
    const targetIndex = (index + blogStories.length) % blogStories.length;
    const cards = track.querySelectorAll("[data-story-card]");
    if (cards[targetIndex]) {
      const card = cards[targetIndex];
      const scrollPos = card.offsetLeft - track.offsetLeft;
      track.scrollTo({
        left: scrollPos,
        behavior: "smooth",
      });
      setCurrentStory(targetIndex);
    }
  };

  const handleTrackScroll = () => {
    const track = storiesTrackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll("[data-story-card]");
    if (!cards.length) return;
    const trackLeft = track.scrollLeft;
    let closestIndex = 0;
    let minDiff = Infinity;
    cards.forEach((card, idx) => {
      const diff = Math.abs(card.offsetLeft - track.offsetLeft - trackLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closestIndex = idx;
      }
    });
    setCurrentStory(closestIndex);
  };

  const nextStory = () => {
    scrollToStory(currentStory + 1);
  };

  const prevStory = () => {
    scrollToStory(currentStory - 1);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.targetTouches[0].clientX;
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (diff > 45) {
      nextStory();
    } else if (diff < -45) {
      prevStory();
    }
  };

  const handleMouseDown = (e) => {
    if (!storiesTrackRef.current) return;
    isDragging.current = true;
    dragStartX.current = e.pageX - storiesTrackRef.current.offsetLeft;
    dragScrollLeft.current = storiesTrackRef.current.scrollLeft;
  };

  const handleMouseMove = (e) => {
    if (!isDragging.current || !storiesTrackRef.current) return;
    e.preventDefault();
    const x = e.pageX - storiesTrackRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    storiesTrackRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDragging.current = false;
  };

  return (
    <main className="relative min-h-screen bg-white">
      {/* ─────────────────────────────────────────────────────────────
          1. HERO SECTION ("Join the team")
          Instant render on mount: zero black void, instant typography
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full min-h-[640px] lg:h-[780px] flex items-center justify-start overflow-hidden pt-20 pb-16">
        {/* Background Image: Fast-loading blurred luxury purple room matching Figma */}
        <Image
          src="/careers/hero-bg.jpg"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center filter blur-[22px] scale-110 transform-gpu"
          aria-hidden="true"
        />

        {/* Ambient Gradient Overlay for Readability (Figma-Matched) */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(270deg, rgba(21, 17, 46, 0.15) 0%, rgba(21, 17, 46, 0.75) 55%, #15112E 100%)",
          }}
        />

        {/* Hero Content: Directly rendered so it is 100% visible immediately */}
        <div className="relative z-10 w-full max-w-[1290px] mx-auto px-6 sm:px-8 lg:px-12">
          <h1
            className={`${dmSans.className} text-[36px] xs:text-[44px] sm:text-[58px] md:text-[68px] leading-[1.12] font-normal tracking-tight bg-[linear-gradient(91.16deg,#9795FF_1.74%,#FFFFFF_43.71%,#FFFFFF_61.62%,#BE9FFF_102.48%)] bg-clip-text text-transparent max-w-xl`}
          >
            Join the team
          </h1>

          <p className="mt-6 text-[15px] sm:text-[17px] md:text-[18px] text-white/85 font-light leading-relaxed max-w-[650px]">
            AGS is an employee-centred company that looks after every employee,
            gives autonomy to make choices, supports self-development and career
            growth. Our development team is always in search of talented
            individuals to join our employee-centred culture.
          </p>

          <p className="mt-5 text-[15px] sm:text-[16px] text-white/90 font-normal">
            Navigate below to see our current open positions!
          </p>

          <div className="mt-8 sm:mt-10">
            <button
              type="button"
              onClick={scrollToPositions}
              style={{
                width: "167px",
                height: "49px",
                padding: "14px 24px",
                gap: "10px",
                borderWidth: "1.5px",
                borderStyle: "solid",
                borderImage: "linear-gradient(98.29deg, #504CFF 0%, #480091 100%) 1",
                background: "rgba(20, 14, 44, 0.7)",
              }}
              className="group inline-flex items-center justify-center text-white font-medium text-[15px] backdrop-blur-sm transition-all duration-300 hover:bg-[#504CFF]/20 hover:scale-[1.02] cursor-pointer rounded-none"
            >
              <span className="whitespace-nowrap">Get Started</span>
              <span className="flex h-5 w-5 items-center justify-center shrink-0 rounded-full border border-white/80 text-white transition-transform duration-300 group-hover:rotate-45">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  className="w-3 h-3"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          2. CULTURE CARDS ("What make AGS a great place to work?")
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-14 sm:pt-20 pb-4 sm:pb-6 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-[1290px] mx-auto">
          {/* Text appearing from top to its original place */}
          <ScrollReveal direction="down" distance={110} duration={1.1}>
            <h2 className="text-[#111111] font-manrope font-normal text-[32px] sm:text-[42px] lg:text-[48px] text-center tracking-tight leading-[1.18]">
              What make <span className="text-[#854CFF]">AGS</span> a great place to work?
            </h2>
          </ScrollReveal>

          {/* Images below coming from down towards up */}
          <ScrollReveal direction="up" distance={130} duration={1.2} delay={60}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1290px] mx-auto mt-10 sm:mt-14">
              {cultureCards.map((card, idx) => (
                <div
                  key={idx}
                  className="group flex flex-col bg-white border border-[#E9EAF0] p-4 sm:p-5 rounded-none shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full"
                >
                  <div className="relative w-full aspect-[233/200] overflow-hidden bg-neutral-100 mb-5 rounded-none">
                    <Image
                      src={card.image}
                      alt={card.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <h3 className="text-[#111111] font-manrope font-medium text-[19px] sm:text-[20px] mb-2.5">
                    {card.title}
                  </h3>
                  <p className="text-[#555E70] font-manrope font-light text-[13.5px] leading-relaxed">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          3. BENEFITS ("What benefits are waiting for you?")
          Seamless tight spacing to features section matching Figma
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-4 sm:pt-6 pb-14 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-[1290px] mx-auto">
          {/* Text coming from the right */}
          <ScrollReveal direction="right" distance={140} duration={1.2}>
            <h2 className="text-[#111111] font-manrope font-normal text-[32px] sm:text-[42px] lg:text-[48px] text-center tracking-tight leading-[1.18]">
              What benefits are <span className="text-[#854CFF]">waiting for you?</span>
            </h2>
            <p className="mt-3 text-[#555E70] font-manrope font-light text-[15px] sm:text-[16px] text-center">
              AGS offers a variety of hand-picked benefits that you can take advantage of!
            </p>
          </ScrollReveal>

          {/* 9 Benefit Cards in 5-column layout matching Figma */}
          <ScrollReveal direction="up" distance={120} duration={1.1} delay={80}>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4 max-w-[1290px] mx-auto mt-8 sm:mt-10">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3.5 px-4 py-4 min-h-[82px] bg-[#F8F9FD] border border-[#ECEFF8] rounded-none transition-all duration-300 hover:bg-[#F2F4FD] hover:border-[#DCE2F8] hover:shadow-md"
                >
                  <div className="relative w-8 h-8 shrink-0 flex items-center justify-center">
                    <Image
                      src={b.icon}
                      alt={b.text}
                      width={32}
                      height={32}
                      className="w-8 h-8 object-contain"
                    />
                  </div>
                  <span className="text-[#111111] font-manrope font-medium text-[13.5px] sm:text-[14px] leading-tight">
                    {b.text}
                  </span>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          4. PHOTO COLLAGE ("Take a peep at what goes on at AGS")
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0D17] text-white overflow-hidden">
        <div className="max-w-[1290px] mx-auto">
          {/* Text appearing from top up above to the perfect place */}
          <ScrollReveal direction="down" distance={110} duration={1.1}>
            <h2 className="font-manrope font-normal text-[32px] sm:text-[42px] lg:text-[48px] text-center tracking-tight mb-10 sm:mb-14">
              Take a peep at what goes on at AGS
            </h2>
          </ScrollReveal>

          {/* Images below coming from the right */}
          <ScrollReveal direction="right" distance={150} duration={1.25} delay={60}>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 max-w-[1290px] mx-auto items-stretch">
              {/* Left Column (Span 6): Top Big Coder + Bottom Split (2 photos) */}
              <div className="lg:col-span-6 flex flex-col gap-4 sm:gap-6">
                {/* Top Big Coder Photo (Img 1.jpg) - 592x206 matching Figma */}
                <div className="relative w-full aspect-[592/206] overflow-hidden rounded-none group bg-neutral-900">
                  <Image
                    src="/careers/Img 1.jpg"
                    alt="AGS Engineer at desk"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Bottom 2 Photos Side by Side (Group 4903.jpg and Img 3.jpg) */}
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div className="relative w-full aspect-[287/206] overflow-hidden rounded-none group bg-neutral-900">
                    <Image
                      src="/careers/Group 4903.jpg"
                      alt="Engineer sitting at standing desk with bonsai"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="relative w-full aspect-[287/206] overflow-hidden rounded-none group bg-neutral-900">
                    <Image
                      src="/careers/Img 3.jpg"
                      alt="Team members chatting in purple lounge chairs"
                      fill
                      sizes="(max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Middle Column (Span 3): Single Full-Height Patchwork Chair (Imag 5.jpg) */}
              <div className="lg:col-span-3 flex flex-col">
                <div className="relative w-full h-full min-h-[300px] sm:min-h-[420px] lg:min-h-0 aspect-[287/428] lg:aspect-auto overflow-hidden rounded-none group bg-neutral-900 flex-1">
                  <Image
                    src="/careers/Imag 5.jpg"
                    alt="Modern office corridor lounge with patchwork chair"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Right Column (Span 3): Top Laptop Meeting Photo + Bottom "Explore About Us ↗" tile */}
              <div className="lg:col-span-3 flex flex-col gap-4 sm:gap-6">
                {/* Top: Two people typing on laptops in meeting (Img 6.jpg) */}
                <div className="relative w-full aspect-[287/206] overflow-hidden rounded-none group bg-neutral-900">
                  <Image
                    src="/careers/Img 6.jpg"
                    alt="Engineers collaborating with laptops in meeting"
                    fill
                    sizes="(max-width: 1024px) 50vw, 25vw"
                    className="object-cover object-bottom transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Bottom: Interactive dark tile navigating to About Us (Exact Figma Spec) */}
                <Link
                  href="/about"
                  className="relative w-full aspect-[287/206] bg-[#212430] hover:bg-[#282B3B] p-6 sm:p-7 lg:p-8 rounded-none flex items-end justify-start border border-white/5 hover:border-white/20 transition-all duration-300 group cursor-pointer"
                >
                  <span className="inline-flex items-center gap-2 text-white font-manrope text-[16px] sm:text-[18px] lg:text-[20px] font-normal leading-tight">
                    <span>Explore About Us</span>
                    <svg
                      className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <line x1="7" y1="17" x2="17" y2="7" />
                      <polyline points="7 7 17 7 17 17" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          5. TESTIMONIALS ("Don't just take our word for it!")
          Full-bleed right overflow with zero empty gap on the right
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 sm:py-24 bg-white border-t border-[#F0EDF6] overflow-hidden">
        {/* Header with Top-Right Navigation Controls */}
        <div className="max-w-[1290px] mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
          <ScrollReveal direction="down" distance={80} duration={1.0}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="text-[#111111] font-manrope font-normal text-[32px] sm:text-[42px] lg:text-[48px] tracking-tight leading-[1.18]">
                  Don&apos;t just take our word for it!
                </h2>
                <p className="mt-3 text-[#555E70] font-manrope font-light text-[15px] sm:text-[16px]">
                  See the feedback from your teammates.
                </p>
              </div>

              {/* Top Navigation Controls */}
              <div className="flex items-center gap-4 shrink-0">
                <span className="text-[#555E70] font-manrope text-[14px]">
                  <strong className="text-[#111111] font-semibold">{activeTestimonial + 1}</strong> / {testimonials.length} Testimonials
                </span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                    }
                    aria-label="Previous testimonial"
                    style={{ borderRadius: "9999px" }}
                    className="w-10 h-10 rounded-full border border-neutral-300 text-[#111111] flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] hover:text-white transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <svg width="15" height="12" viewBox="0 0 16 12" fill="none" className="w-3.5 h-3">
                      <path d="M14.5 6H1.5M6 1.5L1.5 6L6 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
                    }
                    aria-label="Next testimonial"
                    style={{ borderRadius: "9999px" }}
                    className="w-10 h-10 rounded-full border border-neutral-300 text-[#111111] flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] hover:text-white transition-all duration-200 cursor-pointer shadow-xs"
                  >
                    <svg width="15" height="12" viewBox="0 0 16 12" fill="none" className="w-3.5 h-3">
                      <path d="M1.5 6H14.5M10 1.5L14.5 6L10 10.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Carousel Viewport: Left Content Aligned, Right Strips Bleed to Browser Border */}
        <ScrollReveal direction="up" distance={90} duration={1.1} delay={60}>
          <div
            className="w-full pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-1290px)/2))] pr-0 overflow-hidden"
            onMouseEnter={() => setIsTestimonialHovered(true)}
            onMouseLeave={() => setIsTestimonialHovered(false)}
          >
            <div className="relative flex flex-col lg:flex-row items-center lg:items-stretch justify-start">
              {/* 1. Left Main Portrait (Full 302x422 Rich Portrait, No White Gaps) */}
              <div className="hidden lg:block relative w-[302px] h-[422px] shrink-0 overflow-hidden shadow-lg z-0 bg-neutral-100 rounded-none transition-all duration-500">
                <Image
                  key={testimonials[activeTestimonial].image}
                  src={testimonials[activeTestimonial].image}
                  alt={testimonials[activeTestimonial].name}
                  fill
                  sizes="302px"
                  className="object-cover object-center transition-opacity duration-300"
                  priority
                />
              </div>

              {/* 2. Center White Quote Card (Overlaps Left Portrait & Right Teammate Strips) */}
              <div className="relative z-20 w-full max-w-[620px] bg-white border border-[#E9EAF0]/60 p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.08)] -mx-0 lg:-ml-16 lg:-mr-12 my-4 lg:my-0 flex flex-col justify-between min-h-[390px] sm:min-h-[422px] rounded-none shrink-0 transition-all duration-300">
                {/* Left Quotation Icon */}
                <div className="flex items-start gap-4">
                  <svg
                    width="32"
                    height="24"
                    viewBox="0 0 32 24"
                    fill="none"
                    className="text-[#CBD5E1] shrink-0 mt-1 select-none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0 13.7143C0 6.13626 5.25368 0 12.3684 0V4.57143C8.42105 4.57143 5.52632 7.77143 5.52632 11.4286H12.3684V24H0V13.7143ZM19.6316 13.7143C19.6316 6.13626 24.8853 0 32 0V4.57143C28.0526 4.57143 25.1579 7.77143 25.1579 11.4286H32V24H19.6316V13.7143Z"
                      fill="currentColor"
                    />
                  </svg>

                  <p className="text-[#222222] font-manrope font-light text-[15.5px] sm:text-[16.5px] leading-[1.68] flex-grow transition-opacity duration-300">
                    {testimonials[activeTestimonial].quote}
                  </p>
                </div>

                {/* Author Meta & Mobile Thumbnail */}
                <div className="pt-6 mt-6 border-t border-neutral-100 flex items-end justify-between">
                  <div>
                    <h4 className="text-[#111111] font-manrope font-bold text-[18px]">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-[#6B7280] font-manrope font-normal text-[14px] mt-0.5">
                      {testimonials[activeTestimonial].role}
                    </p>

                    {/* LinkedIn Profile Badge */}
                    <a
                      href={testimonials[activeTestimonial].linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3.5 text-[13px] text-[#4B5563] hover:text-[#0A66C2] transition-colors"
                    >
                      <span className="w-4 h-4 bg-[#0A66C2] rounded-none flex items-center justify-center text-white text-[10px] font-bold font-sans">
                        in
                      </span>
                      <span className="font-manrope font-normal">LinkedIn profile</span>
                    </a>
                  </div>

                  {/* Compact thumbnail for mobile/tablet */}
                  <div className="lg:hidden relative w-14 h-14 rounded-none overflow-hidden border border-neutral-200 shrink-0">
                    <Image
                      src={testimonials[activeTestimonial].image}
                      alt={testimonials[activeTestimonial].name}
                      fill
                      className="object-cover object-center"
                    />
                  </div>
                </div>
              </div>

              {/* 3. Right Teammate Strips (Extends all the way to screen border like grocery/food apps) */}
              <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0 flex-1 overflow-x-visible pr-0 z-10">
                {[1, 2, 3].map((offset) => {
                  const teammateIndex = (activeTestimonial + offset) % testimonials.length;
                  const teammate = testimonials[teammateIndex];
                  return (
                    <button
                      key={teammate.id}
                      type="button"
                      onClick={() => setActiveTestimonial(teammateIndex)}
                      className="relative w-[110px] sm:w-[130px] lg:w-[145px] xl:w-[175px] 2xl:w-[200px] h-[422px] shrink-0 overflow-hidden bg-neutral-100 rounded-none shadow-sm cursor-pointer group transition-all duration-300 hover:brightness-105 hover:scale-[1.01] focus:outline-none"
                      title={`View feedback from ${teammate.name}`}
                    >
                      <Image
                        src={teammate.stripImage}
                        alt={teammate.name}
                        fill
                        sizes="200px"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Bottom Progress Controls matching design */}
            <div className="flex items-center justify-between mt-8 max-w-[620px] px-2 sm:px-4">
              <div>
                <span className="text-[#333333] font-manrope font-medium text-[13px] sm:text-[14px]">
                  {activeTestimonial + 1}/{testimonials.length} Testimonials
                </span>
                <div className="w-24 sm:w-32 h-[2px] bg-neutral-200 mt-2 rounded-none overflow-hidden">
                  <div
                    className="h-full bg-[#111111] transition-all duration-300"
                    style={{
                      width: `${((activeTestimonial + 1) / testimonials.length) * 100}%`,
                    }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
                  }
                  className="font-manrope font-medium text-[13px] sm:text-[14px] text-[#111111] hover:text-[#854CFF] transition-colors flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Next</span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          6. TIMELINE ("How to become a AGS'er?")
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#080B15] text-white overflow-hidden">
        <div className="max-w-[1290px] mx-auto">
          {/* Section heading coming from above */}
          <ScrollReveal direction="down" distance={110} duration={1.1}>
            <h2 className="text-[32px] sm:text-[44px] lg:text-[52px] font-normal text-center tracking-tight bg-[linear-gradient(91.16deg,#9795FF_1.74%,#FFFFFF_43.71%,#FFFFFF_61.62%,#BE9FFF_102.48%)] bg-clip-text text-transparent">
              How to become a AGS&apos;er?
            </h2>
            <p className="mt-4 text-white/70 font-manrope font-light text-[15px] sm:text-[16px] text-center max-w-2xl mx-auto leading-relaxed">
              Joining us couldn&apos;t be easier! Check out our application process down below.
              If you have what we need, then we&apos;ll be meeting you soon!
            </p>
          </ScrollReveal>

          {/* Vertical Stepped Timeline */}
          <ScrollReveal direction="up" distance={120} duration={1.15} delay={60}>
            <div className="mt-16 sm:mt-20 max-w-3xl mx-auto relative pb-8">
              {/* Center Vertical Connecting Line */}
              <div className="absolute left-[24px] md:left-1/2 top-4 bottom-4 w-[2px] bg-white/20 transform md:-translate-x-1/2" />

              {timelineSteps.map((step, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col md:flex-row items-start md:items-center justify-between mb-10 md:mb-14 ${
                    step.side === "left" ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Empty Spacer Column for Desktop Alternate */}
                  <div className="hidden md:block w-5/12" />

                  {/* Center Circle Node */}
                  <div
                    className={`absolute left-[24px] md:left-1/2 w-14 h-14 rounded-full bg-white text-black font-semibold text-[1.2rem] flex items-center justify-center transform -translate-x-1/2 shadow-lg z-10 transition-transform duration-300 hover:scale-110 ${
                      step.highlight
                        ? "border-[3px] border-[#2C5BF2] text-[#2C5BF2]"
                        : "border border-neutral-300"
                    }`}
                  >
                    {step.emoji || step.number}
                  </div>

                  {/* Text Content Block */}
                  <div
                    className={`w-full md:w-5/12 pl-20 md:pl-0 ${
                      step.side === "left" ? "md:text-right md:pr-10" : "md:pl-10"
                    }`}
                  >
                    <h4 className="text-white font-manrope font-semibold text-[18px] sm:text-[19px] mb-2">
                      {step.title}
                    </h4>
                    {step.description && (
                      <p className="text-white/60 font-manrope font-light text-[14px] sm:text-[14.5px] leading-relaxed">
                        {step.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          7. OPEN POSITIONS ("We have 17 open positions now!")
          Clean transition without gap into Internship Program
          ───────────────────────────────────────────────────────────── */}
      <section
        id="open-positions"
        className="relative z-10 w-full pt-16 sm:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      >
        <div className="max-w-[1290px] mx-auto">
          {/* Heading coming from top above */}
          <ScrollReveal direction="down" distance={110} duration={1.1}>
            <h2 className="text-[#111111] font-manrope font-normal text-[32px] sm:text-[44px] lg:text-[52px] text-center tracking-tight mb-14 sm:mb-16">
              We have 17 open positions now!
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left Sidebar (Categories + LinkedIn Note) coming from left */}
            <ScrollReveal direction="left" distance={140} duration={1.2} className="lg:col-span-4 flex flex-col">
              <div className="flex flex-col space-y-1 mb-10 border-l border-neutral-200">
                {categories.map((cat) => {
                  const isActive = selectedCategory === cat.key;
                  return (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => setSelectedCategory(cat.key)}
                      className={`text-left pl-5 py-3 font-manrope text-[15px] sm:text-[16px] transition-all cursor-pointer ${
                        isActive
                          ? "font-semibold text-[#111111] border-l-2 border-[#0052FF] -ml-[1.5px]"
                          : "text-[#555E70] hover:text-[#111111] font-normal"
                      }`}
                    >
                      {cat.label}
                    </button>
                  );
                })}
              </div>

              <div className="pt-4 border-t border-neutral-200">
                <p className="text-[#555E70] font-manrope font-light text-[14px] leading-relaxed mb-6">
                  We are always seeking talented people. In case you cannot find your desired
                  position here, please send us your LinkedIn profile and give us your contact
                  information. We will be in touch.
                </p>
                <button
                  type="button"
                  onClick={() => openForm()}
                  className="inline-flex items-center justify-center px-6 py-3 border border-neutral-400 bg-white text-neutral-900 font-manrope font-medium text-[13.5px] hover:border-black hover:bg-neutral-50 transition-colors cursor-pointer rounded-none"
                >
                  Share your LinkedIn profile
                </button>
              </div>
            </ScrollReveal>

            {/* Right Job Cards List coming from right */}
            <ScrollReveal direction="right" distance={140} duration={1.2} className="lg:col-span-8 flex flex-col divide-y divide-neutral-200">
              {filteredPositions.map((job) => (
                <div key={job.id} className="py-8 first:pt-0 last:pb-0 flex flex-col relative">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 mb-3">
                    <h3 className="text-[#111111] font-manrope font-bold text-[22px] sm:text-[24px]">
                      {job.title}
                    </h3>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {job.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-4 py-1 rounded-full border border-neutral-300 text-neutral-700 text-[12px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Description */}
                  <p className="text-[#444444] font-manrope font-light text-[14.5px] leading-relaxed mb-6 max-w-2xl">
                    {job.description}
                  </p>

                  {/* Action Button: right-aligned with black default and vivid blue hover matching Figma */}
                  <div className="flex justify-end mt-2">
                    <button
                      type="button"
                      onClick={() => openForm()}
                      className="inline-flex items-center gap-2.5 bg-black hover:bg-[#0052FF] text-white px-7 py-3 font-manrope font-medium text-[14px] rounded-none transition-all duration-200 group cursor-pointer"
                    >
                      <span>See positions</span>
                      <span className="transition-transform duration-200 group-hover:translate-x-1">→</span>
                    </button>
                  </div>
                </div>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          8. INTERNSHIP PROGRAM ("Launch Your Career with Our Internship Program")
          Directly integrated with tightened spacing and unified signature button
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-6 sm:pt-8 pb-16 sm:pb-20 px-4 sm:px-6 lg:px-8 bg-white text-center overflow-hidden">
        <div className="max-w-[1290px] mx-auto">
          {/* Heading coming from above */}
          <ScrollReveal direction="down" distance={110} duration={1.1}>
            <h2 className="text-[#111111] font-manrope font-normal text-[32px] sm:text-[44px] lg:text-[52px] tracking-tight leading-[1.18]">
              Launch Your Career with Our{" "}
              <span className="text-[#854CFF]">Internship Program</span>
            </h2>
            <p className="mt-4 text-[#555E70] font-manrope font-light text-[15px] sm:text-[17px] max-w-2xl mx-auto leading-relaxed">
              Get hands-on experience, work on real-world projects, and learn from industry experts
              who are invested in your success.
            </p>
          </ScrollReveal>

          {/* Dual-Block Signature Button coming from below */}
          <ScrollReveal direction="up" distance={90} duration={1.1} delay={80}>
            <div className="mt-8 sm:mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => openForm()}
                className="inline-flex items-stretch shadow-xl hover:scale-[1.02] transition-transform duration-300 group cursor-pointer"
              >
                <div className="w-[52px] h-[52px] bg-white border border-[#6C38FF]/40 flex items-center justify-center text-[#111111] text-[18px] transition-colors group-hover:bg-[#FAF7FF]">
                  →
                </div>
                <div className="h-[52px] px-8 bg-gradient-to-r from-[#504CFF] to-[#480090] text-white flex items-center justify-center font-manrope font-medium text-[13px] tracking-widest uppercase transition-opacity group-hover:opacity-95">
                  CHOOSE YOUR PATH
                </div>
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          9. STORIES BY AGS! (Horizontal Carousel with Full-Bleed Right Edge)
          ───────────────────────────────────────────────────────────── */}
      <section className="relative z-10 w-full pt-16 pb-20 sm:pt-24 sm:pb-28 bg-[#0A0D17] text-white overflow-hidden">
        {/* Header with Top-Right Navigation Controls */}
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-10 mb-10 sm:mb-14">
          <ScrollReveal direction="down" distance={60} duration={1.0}>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
              <div>
                <h2 className="font-manrope font-normal text-[32px] sm:text-[44px] lg:text-[52px] tracking-tight text-white leading-tight">
                  Stories by AGS!
                </h2>
                <p className="mt-2 text-white/60 font-manrope font-light text-[15px] sm:text-[16px]">
                  Read more on our blog
                </p>
              </div>

              {/* Top Navigation Controls */}
              <div className="hidden sm:flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  onClick={prevStory}
                  aria-label="Previous story"
                  style={{ borderRadius: "9999px" }}
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
                >
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="w-4 h-3 text-current">
                    <path d="M14.5 6H1.5M6 1.5L1.5 6L6 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
                <button
                  type="button"
                  onClick={nextStory}
                  aria-label="Next story"
                  style={{ borderRadius: "9999px" }}
                  className="w-11 h-11 rounded-full border border-white/20 bg-white/5 text-white flex items-center justify-center hover:bg-[#854CFF] hover:border-[#854CFF] transition-all duration-200 cursor-pointer shadow-lg hover:scale-105"
                >
                  <svg width="16" height="12" viewBox="0 0 16 12" fill="none" className="w-4 h-3 text-current">
                    <path d="M1.5 6H14.5M10 1.5L14.5 6L10 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Carousel Track: Bleeds to Right Screen Edge */}
        <div className="w-full pl-4 sm:pl-6 lg:pl-[max(1.5rem,calc((100vw-1440px)/2))] pr-0 overflow-hidden">
          <div className="relative">
            {/* Horizontal Scrollable Track */}
            <div
              ref={storiesTrackRef}
              onScroll={handleTrackScroll}
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onMouseLeave={handleMouseUpOrLeave}
              className="flex items-stretch gap-6 overflow-x-auto pt-2 pb-6 pr-6 sm:pr-10 scroll-smooth select-none cursor-grab active:cursor-grabbing no-scrollbar snap-x snap-mandatory"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {blogStories.map((story) => (
                <div
                  key={story.id}
                  data-story-card
                  className="w-[85vw] max-w-[340px] sm:w-[340px] shrink-0 snap-start bg-[#161B26] border border-white/10 rounded-none overflow-hidden flex flex-col justify-between hover:border-white/25 transition-all duration-300 hover:-translate-y-1 shadow-xl group"
                >
                  {/* Card Feature Image */}
                  <div className="relative w-full aspect-[340/215] overflow-hidden bg-[#1D2230]">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      quality={90}
                      sizes="(max-width: 640px) 85vw, 340px"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>

                  {/* Card Body */}
                  <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                    <div>
                      <h3 className="text-white font-manrope font-semibold text-[19px] sm:text-[21px] leading-[1.3] mb-4">
                        {story.title}
                      </h3>

                      {/* Author Row */}
                      <div className="flex items-center gap-3.5 mb-4">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-white/15 bg-neutral-800">
                          <Image
                            src={story.authorImg}
                            alt={story.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <div className="text-white text-[14px] font-semibold leading-tight">
                            {story.author}
                          </div>
                          <div className="text-white/50 text-[12px] mt-0.5">
                            {story.date}
                          </div>
                        </div>
                      </div>

                      <p className="text-white/60 font-manrope font-light text-[13.5px] leading-relaxed line-clamp-3 mb-6">
                        {story.description}
                      </p>
                    </div>

                    {/* Solid White Rectangular Button matching design file */}
                    <div className="pt-2">
                      <Link
                        href="/blog"
                        className="inline-flex items-center gap-2 self-start bg-white text-black px-4 sm:px-5 py-2 sm:py-2.5 rounded-none font-manrope font-medium text-[12.5px] sm:text-[13px] hover:bg-neutral-100 transition-colors duration-200 group/btn cursor-pointer shadow-sm"
                      >
                        <span>Read more</span>
                        <span className="transition-transform duration-200 group-hover/btn:translate-x-1">→</span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Controls: Dots & Mobile Buttons */}
          <div className="flex items-center justify-between sm:justify-center gap-5 mt-8 sm:mt-10 max-w-[1440px] px-4">
            {/* Mobile Prev Button */}
            <button
              type="button"
              onClick={prevStory}
              aria-label="Previous story"
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer sm:hidden"
            >
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none" className="w-3.5 h-2.5 text-current">
                <path d="M14.5 6H1.5M6 1.5L1.5 6L6 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center gap-2">
              {blogStories.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => scrollToStory(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                  className={`transition-all duration-300 rounded-full cursor-pointer ${
                    currentStory === idx
                      ? "w-8 h-2 bg-white"
                      : "w-2 h-2 bg-white/25 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>

            {/* Mobile Next Button */}
            <button
              type="button"
              onClick={nextStory}
              aria-label="Next story"
              className="w-10 h-10 rounded-full border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer sm:hidden"
            >
              <svg width="14" height="10" viewBox="0 0 16 12" fill="none" className="w-3.5 h-2.5 text-current">
                <path d="M1.5 6H14.5M10 1.5L14.5 6L10 10.5" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* ─────────────────────────────────────────────────────────────
          10. LET'S WORK WITH US (CTA Section)
          ───────────────────────────────────────────────────────────── */}
      <CTASection />

      {/* ─────────────────────────────────────────────────────────────
          11. GLOBAL FOOTER
          ───────────────────────────────────────────────────────────── */}
      <Footer />
    </main>
  );
}
