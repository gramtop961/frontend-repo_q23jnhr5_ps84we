export default function Process() {
  const steps = [
    { t: 'Discovery', d: 'Understanding funding needs' },
    { t: 'Analysis', d: 'Financial modeling & forecasting' },
    { t: 'Execution', d: 'Documentation & bank alignment' },
    { t: 'Growth', d: 'Funding disbursal & advisory' },
  ]

  return (
    <section className="relative bg-[#0A0A0A] text-[#C7C7C7] py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="font-serif-lux text-3xl text-white text-center gold-underline">Process & Methodology</h3>
        <div className="mt-12 relative">
          <div className="absolute left-0 right-0 top-1/2 h-[2px] -translate-y-1/2 bg-gradient-to-r from-transparent via-[#E4B34A]/55 to-transparent"/>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((s, i) => (
              <div key={i} className="relative p-6 card-glass">
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-b from-[#F7D98F] to-[#E4B34A] opacity-30 blur-sm"/>
                <div className="text-lg font-serif-lux text-transparent bg-clip-text bg-gradient-to-b from-[#F7D98F] to-[#E4B34A]">{s.t}</div>
                <div className="mt-1 text-sm">{s.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
