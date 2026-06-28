"use client";

const variants = {
  web: WebVisual,
  design: DesignVisual,
  digital: DigitalVisual,
  mobile: MobileVisual,
  ai: AiVisual,
  security: SecurityVisual,
};

export default function ServiceVisual({ variant = "web", label }) {
  const Visual = variants[variant] ?? WebVisual;

  return (
    <div
      className="service-visual-root group relative aspect-[4/3] w-full overflow-hidden rounded-lg border border-white/10 bg-[#06060f] transition duration-500 hover:border-[#9795FF]/35 hover:shadow-[0_0_48px_-12px_rgba(151,149,255,0.45)]"
      aria-hidden={label ? undefined : true}
      role={label ? "img" : undefined}
      aria-label={label}
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-[linear-gradient(90deg,transparent_0%,#9795FF_40%,#ffffff_50%,#BE9FFF_60%,transparent_100%)] opacity-80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_25%_15%,rgba(151,149,255,0.16),transparent_42%),radial-gradient(circle_at_85%_85%,rgba(96,124,255,0.12),transparent_38%)]" />
      <div className="service-visual-glow pointer-events-none absolute inset-0 opacity-60 transition duration-500 group-hover:opacity-100" />
      <AmbientParticles count={10} />
      <div className="absolute inset-0 opacity-[0.06] bg-[linear-gradient(rgba(255,255,255,0.6)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.6)_1px,transparent_1px)] bg-size-[28px_28px]" />
      <div className="service-visual-scan pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#9795FF]/50 to-transparent" />
      <Visual variant={variant} />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#06060f] via-[#06060f]/80 to-transparent" />
    </div>
  );
}

function AmbientParticles({ count = 8 }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className="service-visual-particle absolute h-1 w-1 rounded-full bg-[#9795FF]"
          style={{
            left: `${8 + (i * 9) % 84}%`,
            top: `${12 + (i * 13) % 76}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${4 + (i % 3)}s`,
            opacity: 0.25 + (i % 4) * 0.12,
          }}
        />
      ))}
    </div>
  );
}

function WebVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8 sm:p-10">
      <div className="service-visual-float relative w-[80%] max-w-[340px]">
        <div className="absolute -inset-4 rounded-2xl bg-[#9795FF]/10 blur-2xl" />
        <div className="relative overflow-hidden rounded-xl border border-white/15 bg-white/[0.05] shadow-[0_0_80px_rgba(151,149,255,0.2)] backdrop-blur-md">
          <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
            <span className="h-2 w-2 rounded-full bg-[#9795FF]" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <span className="h-2 w-2 rounded-full bg-white/25" />
            <div className="ml-3 h-2 flex-1 max-w-[100px] rounded-full bg-white/10" />
            <span className="font-mono text-[0.55rem] text-[#9795FF]/70">&lt;/&gt;</span>
          </div>
          <div className="space-y-3 p-5">
            <div className="flex items-center gap-2">
              <div className="service-visual-shimmer h-2.5 w-3/4 rounded-full bg-white/12" />
              <span className="service-visual-cursor h-3 w-0.5 bg-[#9795FF]" />
            </div>
            <div
              className="service-visual-shimmer relative h-24 overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#9795FF]/30 via-[#9795FF]/10 to-transparent"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="service-visual-shine absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {[0, 1, 2].map((i) => (
                <div
                  key={i}
                  className="service-visual-pulse h-9 rounded-md bg-white/10"
                  style={{ animationDelay: `${i * 0.35}s` }}
                />
              ))}
            </div>
            <div className="font-mono text-[0.6rem] text-white/30 space-y-1 pt-1">
              <p className="service-visual-type" style={{ animationDelay: "0s" }}>const site = build();</p>
              <p className="service-visual-type" style={{ animationDelay: "1.2s" }}>deploy(aws);</p>
            </div>
          </div>
        </div>
        <div className="service-visual-orbit absolute -right-5 -top-5 h-16 w-16 rounded-full border border-[#9795FF]/40 bg-[#9795FF]/15 shadow-[0_0_20px_rgba(151,149,255,0.3)]" />
        <div className="service-visual-orbit-reverse absolute -bottom-4 -left-4 h-11 w-11 rounded-lg border border-white/20 bg-white/8" />
      </div>
      <svg className="absolute inset-0 h-full w-full" viewBox="0 0 400 300" fill="none">
        <path className="service-visual-dash" d="M30 230 Q130 110 210 150 T370 70" stroke="#9795FF" strokeWidth="1" strokeOpacity="0.45" />
        <path className="service-visual-dash" d="M50 260 Q180 200 280 120" stroke="#BE9FFF" strokeWidth="0.8" strokeOpacity="0.3" style={{ animationDelay: "1s" }} />
      </svg>
    </div>
  );
}

function DesignVisual({ variant }) {
  const gradId = `designGrad-${variant}`;
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="relative h-[74%] w-[74%] max-w-[300px]">
        {[0, 1, 2].map((layer) => (
          <div
            key={layer}
            className="service-visual-float absolute inset-0 rounded-2xl border border-white/14 bg-white/[0.04] backdrop-blur-sm"
            style={{
              transform: `translate(${layer * 16}px, ${layer * -14}px)`,
              animationDelay: `${layer * 0.55}s`,
              zIndex: 3 - layer,
              boxShadow: layer === 0 ? "0 0 40px rgba(151,149,255,0.12)" : undefined,
            }}
          >
            <div className="p-5 space-y-3">
              <div className="flex gap-1.5">
                {["#9795FF", "#BE9FFF", "#ffffff"].map((c, i) => (
                  <div
                    key={c}
                    className="service-visual-pulse h-3 w-3 rounded-full"
                    style={{ backgroundColor: c, opacity: 0.5 + i * 0.15, animationDelay: `${i * 0.3}s` }}
                  />
                ))}
              </div>
              <div className="h-14 rounded-lg border border-dashed border-white/18 bg-white/[0.02]" />
              <div className="flex gap-2">
                <div className="h-9 w-9 rounded-full border border-white/25" />
                <div className="flex-1 space-y-2 pt-1">
                  <div className="h-1.5 w-full rounded-full bg-white/12" />
                  <div className="h-1.5 w-2/3 rounded-full bg-white/8" />
                </div>
              </div>
            </div>
          </div>
        ))}
        <svg className="absolute -right-4 top-1/2 h-28 w-28 -translate-y-1/2" viewBox="0 0 100 100" fill="none">
          <circle cx="50" cy="50" r="32" stroke={`url(#${gradId})`} strokeWidth="0.8" strokeOpacity="0.5" className="service-visual-radar" />
          <circle cx="50" cy="50" r="10" fill="#9795FF" fillOpacity="0.6" className="service-visual-pulse" />
          <path
            d="M15 70 Q50 20 85 55"
            stroke="#BE9FFF"
            strokeWidth="1"
            strokeOpacity="0.4"
            className="service-visual-draw"
          />
          <circle cx="72" cy="48" r="3" fill="#fff" fillOpacity="0.8" className="service-visual-pulse" style={{ animationDelay: "0.8s" }} />
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#9795FF" />
              <stop offset="1" stopColor="#BE9FFF" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function DigitalVisual({ variant }) {
  const id = `digital-${variant}`;
  const paths = [
    { d: "M50 50 L20 30", delay: "0s" },
    { d: "M50 50 L80 28", delay: "0.4s" },
    { d: "M50 50 L25 75", delay: "0.8s" },
    { d: "M50 50 L78 72", delay: "1.2s" },
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <svg className="h-[82%] w-[82%] max-w-[320px]" viewBox="0 0 100 100" fill="none">
        <defs>
          <radialGradient id={`${id}-hub`}>
            <stop stopColor="#9795FF" stopOpacity="0.5" />
            <stop offset="1" stopColor="#9795FF" stopOpacity="0" />
          </radialGradient>
        </defs>
        {[18, 28, 38].map((r, i) => (
          <circle key={r} cx="50" cy="50" r={r} stroke="#BE9FFF" strokeWidth="0.4" strokeOpacity="0.2" fill="none" className="service-visual-radar" style={{ animationDelay: `${i * 0.8}s` }} />
        ))}
        <circle cx="50" cy="50" r="12" fill={`url(#${id}-hub)`} className="service-visual-pulse" />
        {[
          [50, 50, 20, 30], [50, 50, 80, 28], [50, 50, 25, 75], [50, 50, 78, 72],
          [20, 30, 25, 75], [80, 28, 78, 72],
        ].map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#9795FF" strokeWidth="0.5" strokeOpacity="0.35" className="service-visual-dash" style={{ animationDelay: `${i * 0.25}s` }} />
        ))}
        {paths.map(({ d, delay }, i) => (
          <g key={i}>
            <path id={`${id}-path-${i}`} d={d} stroke="none" fill="none" />
            <circle r="2" fill="#fff" fillOpacity="0.9" className="service-visual-pulse">
              <animateMotion dur={`${2.5 + i * 0.4}s`} repeatCount="indefinite" begin={delay}>
                <mpath href={`#${id}-path-${i}`} />
              </animateMotion>
            </circle>
          </g>
        ))}
        {[
          { x: 50, y: 50, r: 5 }, { x: 20, y: 30, r: 3.5 }, { x: 80, y: 28, r: 3.5 },
          { x: 25, y: 75, r: 3.5 }, { x: 78, y: 72, r: 3.5 },
        ].map((node, i) => (
          <circle key={i} cx={node.x} cy={node.y} r={node.r} fill="#9795FF" fillOpacity={i === 0 ? 0.85 : 0.5} className="service-visual-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
        ))}
      </svg>
      <div className="service-visual-shimmer absolute bottom-[16%] right-[14%] flex h-9 w-28 items-center gap-2 rounded-md border border-white/12 bg-white/[0.06] px-2">
        <div className="h-1.5 flex-1 rounded-full bg-[#9795FF]/40" />
        <div className="h-4 w-4 rounded bg-white/10" />
      </div>
    </div>
  );
}

function MobileVisual() {
  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="service-visual-float relative">
        <div className="absolute -inset-6 rounded-[40px] bg-[#9795FF]/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[260px] w-[130px] -translate-x-1/2 -translate-y-1/2 rounded-[32px] border border-white/8 bg-white/[0.02] rotate-6 scale-95 opacity-40" />
        <div className="relative h-[250px] w-[124px] rounded-[30px] border-2 border-white/25 bg-gradient-to-b from-white/10 to-white/[0.02] p-2 shadow-[0_0_60px_rgba(151,149,255,0.25)]">
          <div className="absolute left-1/2 top-3 h-1.5 w-11 -translate-x-1/2 rounded-full bg-white/25" />
          <div className="service-visual-pulse absolute -right-1 top-8 h-3 w-3 rounded-full border-2 border-[#06060f] bg-[#9795FF]" style={{ animationDuration: "1.5s" }} />
          <div className="mt-7 space-y-2.5 rounded-[22px] bg-[#0a0a16] p-3.5">
            <div className="service-visual-shimmer h-2 w-14 rounded-full bg-[#9795FF]/55" />
            <div className="service-visual-pulse h-16 rounded-xl bg-gradient-to-br from-[#9795FF]/25 to-[#BE9FFF]/10 border border-white/10" />
            <div className="grid grid-cols-2 gap-2">
              {[0, 1, 2, 3].map((i) => (
                <div key={i} className="h-7 rounded-lg bg-white/10" style={{ opacity: 0.5 + (i % 2) * 0.2 }} />
              ))}
            </div>
            <div className="mx-auto h-1 w-10 rounded-full bg-white/20" />
          </div>
        </div>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className="service-visual-signal absolute left-1/2 top-1/2 h-[200px] w-[200px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9795FF]/25"
            style={{ animationDelay: `${i * 0.9}s` }}
          />
        ))}
      </div>
    </div>
  );
}

function AiVisual({ variant }) {
  const gradId = `aiGrad-${variant}`;
  const connections = [
    [200, 100, 120, 160], [200, 100, 280, 160], [200, 180, 120, 160],
    [200, 180, 280, 160], [200, 180, 160, 230], [200, 180, 240, 230],
    [120, 160, 160, 230], [280, 160, 240, 230], [200, 100, 200, 180],
  ];

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="absolute inset-0 opacity-30">
        <svg className="h-full w-full" viewBox="0 0 400 300" fill="none">
          {[0, 1, 2, 3, 4].map((row) =>
            [0, 1, 2, 3, 4].map((col) => (
              <circle
                key={`${row}-${col}`}
                cx={40 + col * 80}
                cy={30 + row * 60}
                r="1.5"
                fill="#9795FF"
                fillOpacity="0.15"
                className="service-visual-pulse"
                style={{ animationDelay: `${(row + col) * 0.1}s` }}
              />
            ))
          )}
        </svg>
      </div>
      <svg className="relative h-[88%] w-[88%] max-w-[360px]" viewBox="0 0 400 300" fill="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#9795FF" />
            <stop offset="1" stopColor="#BE9FFF" />
          </linearGradient>
          <filter id={`${gradId}-glow`}>
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        {connections.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke={`url(#${gradId})`} strokeWidth="1" strokeOpacity="0.45" className="service-visual-dash" style={{ animationDelay: `${i * 0.15}s` }} />
        ))}
        <circle cx="200" cy="180" r="28" stroke="#BE9FFF" strokeWidth="0.6" strokeOpacity="0.25" fill="none" className="service-visual-radar" />
        <circle cx="200" cy="180" r="38" stroke="#9795FF" strokeWidth="0.4" strokeOpacity="0.15" fill="none" className="service-visual-radar" style={{ animationDelay: "1s" }} />
        {[
          { cx: 200, cy: 100, r: 7 }, { cx: 120, cy: 160, r: 5 }, { cx: 280, cy: 160, r: 5 },
          { cx: 160, cy: 230, r: 5 }, { cx: 240, cy: 230, r: 5 },
        ].map((node, i) => (
          <circle key={i} cx={node.cx} cy={node.cy} r={node.r} fill="#9795FF" fillOpacity="0.55" className="service-visual-pulse" style={{ animationDelay: `${i * 0.12}s` }} />
        ))}
        <circle cx="200" cy="180" r="12" fill="#9795FF" fillOpacity="0.9" filter={`url(#${gradId}-glow)`} className="service-visual-pulse" style={{ animationDuration: "2s" }} />
      </svg>
      <div className="service-visual-orbit absolute right-[10%] top-[12%] h-2.5 w-2.5 rounded-full bg-[#BE9FFF] shadow-[0_0_12px_#BE9FFF]" />
      <div className="service-visual-orbit-reverse absolute bottom-[18%] left-[8%] h-2 w-2 rounded-full bg-[#9795FF] shadow-[0_0_10px_#9795FF]" />
    </div>
  );
}

function SecurityVisual({ variant }) {
  const gradId = `securityGrad-${variant}`;

  return (
    <div className="absolute inset-0 flex items-center justify-center p-8">
      <div className="service-visual-float relative w-[78%] max-w-[300px]">
        <div className="absolute -inset-6 rounded-full bg-[#9795FF]/12 blur-3xl" />
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            className="service-visual-signal absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9795FF]/20"
            style={{ animationDelay: `${i * 0.85}s` }}
          />
        ))}
        <svg className="relative mx-auto h-[200px] w-[200px]" viewBox="0 0 200 200" fill="none">
          <defs>
            <linearGradient id={gradId} x1="0" y1="0" x2="1" y2="1">
              <stop stopColor="#9795FF" />
              <stop offset="1" stopColor="#BE9FFF" />
            </linearGradient>
          </defs>
          <path
            d="M100 24 L168 52 V98 C168 138 138 166 100 178 C62 166 32 138 32 98 V52 Z"
            stroke={`url(#${gradId})`}
            strokeWidth="1.5"
            fill="rgba(151,149,255,0.08)"
            className="service-visual-pulse"
          />
          <rect x="82" y="88" width="36" height="28" rx="4" stroke="#9795FF" strokeWidth="1.2" fill="rgba(151,149,255,0.12)" />
          <path d="M100 88 V78 C100 72 104 68 110 68 C116 68 120 72 120 78 V88" stroke="#BE9FFF" strokeWidth="1.2" fill="none" />
          <circle cx="100" cy="102" r="4" fill="#9795FF" className="service-visual-pulse" />
          <line x1="100" y1="106" x2="100" y2="112" stroke="#9795FF" strokeWidth="1.5" strokeLinecap="round" />
          {[
            [52, 62], [148, 62], [44, 118], [156, 118],
          ].map(([cx, cy], i) => (
            <g key={i}>
              <line x1="100" y1="100" x2={cx} y2={cy} stroke="#9795FF" strokeWidth="0.6" strokeOpacity="0.35" className="service-visual-dash" style={{ animationDelay: `${i * 0.3}s` }} />
              <circle cx={cx} cy={cy} r="3" fill="#BE9FFF" fillOpacity="0.7" className="service-visual-pulse" style={{ animationDelay: `${i * 0.25}s` }} />
            </g>
          ))}
        </svg>
        <div className="service-visual-shimmer absolute -right-2 top-6 flex items-center gap-2 rounded-md border border-white/12 bg-white/[0.06] px-2.5 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 service-visual-pulse" />
          <span className="font-mono text-[0.55rem] text-white/50">SECURE</span>
        </div>
        <div className="service-visual-shimmer absolute -left-1 bottom-8 rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 font-mono text-[0.5rem] text-[#9795FF]/80" style={{ animationDelay: "0.5s" }}>
          VAPT SCAN
        </div>
      </div>
    </div>
  );
}
