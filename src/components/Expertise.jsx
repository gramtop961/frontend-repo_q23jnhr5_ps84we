export default function Expertise() {
  const items = [
    'Strategic Capital Structuring',
    'Government-Backed Funding Programs',
    'Business Growth & Expansion Strategy',
    'Financial Advisory for MSMEs',
    'Banking & NBFC Partnerships',
  ]

  return (
    <section id="expertise" className="relative bg-[#000000] text-[#C7C7C7] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif-lux text-3xl sm:text-4xl text-white gold-underline">Core Expertise</h2>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {items.map((t,i)=> (
            <div key={i} className="relative p-6 card-glass shine-hover border-l-2" style={{borderLeftColor:'#E4B34A'}}>
              <div className="text-[#F7D98F] font-medium leading-relaxed">{t}</div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#E4B34A]/50 to-transparent"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
