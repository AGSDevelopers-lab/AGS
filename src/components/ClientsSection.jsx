import Image from "next/image";

const logos = [
  { name: "Farz", src: "/farz.png", width: 152, height: 48 },
  { name: "JPNR", src: "/jpnr.png", width: 132, height: 44 },
  { name: "EiSamay", src: "/HeaderLogoDarkMode.png", width: 232, height: 54 },
  { name: "Molifera", src: "/molifera.png", width: 184, height: 52 },
  { name: "Renuka", src: "/renuka.png", width: 178, height: 52 },
    { name: "EiSamaysamachar", src: "/eisamaysamacharhindi.png", width: 232, height: 54 },
  { name: "Himalaya", src: "/himalaya.png", width: 192, height: 54 },
  { name: "Dhunseri", src: "/dhunseri.png", width: 178, height: 52 },
  { name: "NewsEiSamay", src: "/newseisamayenglish.png", width: 232, height: 54 },

];

function LogoItem({ logo }) {
  return (
    <div className="flex shrink-0 items-center px-7 sm:px-8">
      <Image
        src={logo.src}
        alt={`${logo.name} logo`}
        width={logo.width}
        height={logo.height}
        className="h-auto max-h-[42px] w-auto object-contain opacity-95 sm:max-h-[50px]"
      />
    </div>
  );
}

export default function ClientsSection() {
  const trackLogos = [...logos, ...logos];

  return (
    <section className="relative z-10 -mt-8 overflow-hidden pb-8 pt-1 sm:-mt-12 sm:pb-12 sm:pt-2">
      <div className="relative w-full py-4 sm:py-6">
        <div className="w-[108%] -translate-x-[2%] rotate-[2.1deg] overflow-hidden border-y border-white/10 bg-[linear-gradient(90deg,#4650ff_0%,#5f5dff_38%,#5f63ff_65%,#6171ff_100%)] py-4 sm:py-5">
          <div className="logo-marquee-track flex items-center">
            {trackLogos.map((logo, index) => (
              <LogoItem key={`${logo.name}-${index}`} logo={logo} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
