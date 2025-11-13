export default function Documentation() {
  return (
    <section className="relative bg-[#0A0A0A] text-[#EDE8D5] py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative h-64">
          <div className="absolute inset-0 rounded-2xl bg-[radial-gradient(circle_at_top_left,rgba(209,163,58,0.12),transparent_60%)]"/>
          <svg viewBox="0 0 400 300" className="absolute inset-0 w-full h-full" fill="none">
            <path d="M20 280C60 240 90 230 130 180C170 130 210 120 260 80C300 50 340 40 380 20" stroke="#D1A33A" strokeWidth="1" strokeOpacity="0.5"/>
            <path d="M20 240C60 220 100 190 140 150C180 110 220 90 260 70" stroke="#F9E6A3" strokeWidth="0.8" strokeOpacity="0.5"/>
          </svg>
        </div>
        <div>
          <h3 className="font-playfair text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A]">Documentation & Compliance</h3>
          <ul className="mt-6 space-y-3 text-[#D6D0BE]">
            <li>Advanced project report preparation</li>
            <li>98% documentation accuracy</li>
            <li>Full compliance support (registrations, filings, regulatory processes)</li>
          </ul>
        </div>
      </div>
      <div className="absolute inset-0 pointer-events-none bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjI5MTcyNDJ8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-[0.03] bg-cover bg-center mix-blend-lighten"/>
    </section>
  )
}
