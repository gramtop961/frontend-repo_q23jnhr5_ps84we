export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0A0A] text-[#C7C7C7] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(228,179,74,0.08),transparent_60%)]"/>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-serif-lux text-3xl sm:text-4xl text-white gold-underline">About Sanket</h2>
        <p className="mt-5 max-w-3xl leading-relaxed">
          Sanket Kumar is a strategic business leader with 8+ years of expertise across corporate finance, MSME advisory, and high-value funding models. He has worked with 1,200+ businesses, enabling more than ₹300 Crore in structured funding and expansion across India.
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            {label: 'Businesses Assisted', value: '1,200+'},
            {label: 'Years Experience', value: '8+'},
            {label: 'Funding Facilitated', value: '₹300+ Cr'},
          ].map((card, i) => (
            <div key={i} className="relative p-6 card-glass overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(247,217,143,0.06),transparent_30%)]"/>
              <div className="text-3xl font-numeric text-transparent bg-clip-text bg-gradient-to-b from-[#F7D98F] to-[#E4B34A]">
                {card.value}
              </div>
              <div className="mt-1 text-sm tracking-wide text-[#E4E4E4]">
                {card.label}
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#E4B34A]/50 to-transparent"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
