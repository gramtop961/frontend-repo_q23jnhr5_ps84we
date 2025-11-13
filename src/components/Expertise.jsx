export default function Expertise() {
  const items = [
    'Strategic Capital Structuring',
    'High-Value Funding Advisory',
    'Government Lending Expertise (CGTMSE, SIDBI, PMEGP, etc.)',
    'Business Expansion & Growth Roadmapping',
    'Enterprise Financial Optimization',
  ]

  return (
    <section id="expertise" className="relative bg-[#050505] text-[#EDE8D5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A]">Core Expertise</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((t,i)=> (
            <div key={i} className="relative p-6 rounded-xl bg-[#0b0b0b] border border-[#705C2E]/50 shadow-[inset_0_0_1px_#F9E6A3,0_10px_40px_rgba(209,163,58,0.06)]">
              <div className="absolute -top-6 -left-6 w-24 h-24 opacity-20">
                <svg viewBox="0 0 200 200" className="w-full h-full" fill="none">
                  <path d="M10 100C40 60 70 60 100 10C130 60 160 60 190 100C160 140 130 140 100 190C70 140 40 140 10 100Z" stroke="#D1A33A" strokeWidth="0.8"/>
                </svg>
              </div>
              <div className="text-[#F3E7B9] font-medium leading-relaxed">{t}</div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#D1A33A]/50 to-transparent"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
