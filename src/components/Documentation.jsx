export default function Documentation() {
  return (
    <section className="relative bg-[#0A0A0A] text-[#C7C7C7] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-64">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(228,179,74,0.12),transparent_60%)]"/>
          <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" fill="none">
            <path d="M20 280C60 240 90 230 130 180C170 130 210 120 260 80C300 50 340 40 380 20" stroke="#E4B34A" strokeWidth="1" strokeOpacity="0.5"/>
            <path d="M20 240C60 220 100 190 140 150C180 110 220 90 260 70" stroke="#F7D98F" strokeWidth="0.8" strokeOpacity="0.5"/>
          </svg>
        </div>
        <div>
          <h3 className="font-serif-lux text-3xl text-white gold-underline">Documentation & Funding Support</h3>
          <ul className="mt-6 space-y-3">
            <li>High-accuracy project report drafting</li>
            <li>Compliance and legal documentation</li>
            <li>97%+ approval accuracy</li>
            <li>Application filing & bank coordination</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
