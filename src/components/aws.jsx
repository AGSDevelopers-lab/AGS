import Image from "next/image";

export default function AwsSection() {
  return (
    <section className="relative z-10 w-full overflow-hidden pb-12 pt-8 sm:pb-20 sm:pt-12">
      <div className="relative w-full px-6 sm:px-8 lg:px-26">
        <div className="relative grid items-center gap-8 lg:grid-cols-[0.92fr_1.08fr] lg:gap-10">
          <div className="relative mx-auto w-full max-w-[430px] lg:mx-0">
            <div className="absolute -bottom-4 -right-4 h-full w-full bg-[rgba(150,150,156,0.22)] sm:-bottom-5 sm:-right-5" />
            <div className="relative aspect-[1.18] w-full overflow-hidden bg-black">
              <Image
                src="https://res.cloudinary.com/dhxgwo5r4/image/upload/v1775027624/aws_vo4uvs.png"
                alt="AWS cloud solutions"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 36vw, 100vw"
              />
            </div>
          </div>

          <div className="relative max-w-[760px]">
            <h2 className="max-w-[14ch] bg-[linear-gradient(90deg,#9795FF_0%,#FFFFFF_42%,#FFFFFF_59%,#BE9FFF_100%)] bg-clip-text pb-2 text-[2.25rem] leading-[0.98] font-normal tracking-[-0.06em] text-transparent sm:text-[3.35rem] lg:text-[4.2rem]">
              Built on{" "}
              <span className="inline-flex translate-y-[-0.08em] align-baseline">
                <Image
                  src="/aws.png"
                  alt="AWS"
                  width={92}
                  height={40}
                  className="h-auto w-[70px] sm:w-[82px] lg:w-[92px]"
                />
              </span>
              <br />
              Designed for Scale
            </h2>

            <p className="mt-5 max-w-[540px] text-[0.98rem] leading-[1.65] text-white/74 sm:text-[1.02rem]">
              We are an AWS Ecosystem, leveraging world-class cloud
              infrastructure to build secure, scalable, and high-performance
              digital solutions. From startups to enterprises, we ensure your
              technology grows without limits.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
