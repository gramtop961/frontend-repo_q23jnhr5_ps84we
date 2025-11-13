export default function Process() {
  const steps = [
    { t: 'Discovery', d: 'understanding vision & capital needs' },
    { t: 'Strategy', d: 'designing high-impact financial roadmaps' },
    { t: 'Execution', d: 'documentation + funding alignment' },
    { t: 'Growth', d: 'long-term support and expansion planning' },
  ]

  return (
    <section className="relative bg-[#0A0A0A] text-[#EDE8D5] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="font-playfair text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A] text-center">Process & Methodology</h3>
        <div className="mt-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#D1A33A]/50 to-transparent"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((s, i) => (
              <div key={i} className="relative p-6 rounded-xl bg-[#0b0b0b] border border-[#705C2E]/50 shadow-[inset_0_0_1px_#F9E6A3,0_10px_40px_rgba(209,163,58,0.06)]">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A] opacity-30 blur-sm"/>
                <div className="text-lg font-playfair text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A]">{s.t}</div>
                <div className="mt-1 text-sm text-[#D0C7A8]">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
