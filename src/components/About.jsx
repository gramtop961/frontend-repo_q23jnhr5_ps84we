export default function About() {
  return (
    <section id="about" className="relative bg-[#0A0A0A] text-[#EDE8D5] py-20">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_top,rgba(209,163,58,0.08),transparent_60%)]"/>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="font-playfair text-3xl sm:text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A]">
          Professional Overview
        </h2>
        <p className="mt-5 text-[#D6D0BE] max-w-3xl leading-relaxed">
          “Sanket Kumar is a strategic business leader with over 8 years of experience in corporate finance, growth advisory, and enterprise-level funding frameworks. He has supported 1,250+ businesses across India, facilitating more than ₹300 Crore in advanced financing and government-backed programs.”
        </p>

        <div className="mt-10 grid sm:grid-cols-3 gap-6">
          {[
            {label: 'Businesses Supported', value: '1,250+'},
            {label: 'Years of Leadership Experience', value: '8+'},
            {label: 'Funding Facilitated', value: '₹300 Cr+'},
          ].map((card, i) => (
            <div key={i} className="relative p-6 rounded-xl bg-[#0b0b0b] border border-[#D1A33A]/30 shadow-[inset_0_0_1px_#F9E6A3,0_10px_40px_rgba(209,163,58,0.06)] overflow-hidden">
              <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(120deg,rgba(249,230,163,0.06),transparent_30%)]"/>
              <div className="text-3xl font-playfair text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A]">
                {card.value}
              </div>
              <div className="mt-1 text-sm tracking-wide text-[#D0C7A8]">
                {card.label}
              </div>
              <div className="mt-4 h-px bg-gradient-to-r from-transparent via-[#D1A33A]/50 to-transparent"/>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
