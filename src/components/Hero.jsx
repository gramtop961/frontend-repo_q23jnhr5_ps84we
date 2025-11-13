import { motion } from 'framer-motion'

const goldGradient = 'from-[#D1A33A] via-[#F9E6A3] to-[#705C2E]'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#050505] text-white">
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft golden rays */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(209,163,58,0.25)_0%,rgba(5,5,5,0)_60%)]"></div>
        {/* Micro particles */}
        <div className="particles pointer-events-none"></div>
        {/* Filigree corners */}
        <svg className="absolute top-0 left-0 w-40 h-40 opacity-40" viewBox="0 0 200 200" fill="none">
          <path d="M5 195C45 160 65 135 80 90C95 45 130 25 195 5" stroke="#D1A33A" strokeOpacity="0.35" strokeWidth="1.2"/>
        </svg>
        <svg className="absolute top-0 right-0 w-40 h-40 opacity-40 rotate-90" viewBox="0 0 200 200" fill="none">
          <path d="M5 195C45 160 65 135 80 90C95 45 130 25 195 5" stroke="#D1A33A" strokeOpacity="0.35" strokeWidth="1.2"/>
        </svg>
      </div>
      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#F9E6A3]/40 bg-[#1A1A1A]/40 backdrop-blur-sm shadow-[inset_0_0_0.5px_#F9E6A3]">
              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#F9E6A3] to-[#D1A33A] animate-pulse" />
              <span className="text-[13px] tracking-wide text-[#F9E6A3]">Director – Finsera Ventures Private Limited</span>
            </div>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight font-[400] font-playfair text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] via-[#D1A33A] to-[#705C2E] drop-shadow-[0_6px_24px_rgba(209,163,58,0.2)]">
              Empowering Businesses with Vision, Strategy & Elite Financial Leadership
            </h1>
            <p className="mt-6 text-lg text-[#D6D6D6] max-w-2xl">
              Director at Finsera Ventures, delivering strategic capital solutions, advisory excellence, and long-term business transformation.
            </p>
            <div className="mt-8 p-5 rounded-xl bg-[#0b0b0b] border border-[#D1A33A]/30 shadow-[inset_0_0_1px_#F9E6A3,0_10px_40px_rgba(209,163,58,0.06)]">
              <div className="text-[#F9E6A3] font-medium">Sanket Kumar — Director, Finsera Ventures Pvt. Ltd.</div>
              <div className="mt-1 text-[#d8cfae]">✉️ sanket@finseraa.com</div>
              <div className="text-[#d8cfae]">📞 +91 84488 81419</div>
            </div>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#eligibility" className="btn-molten-gold">
                Book a Consultation
              </a>
              <a href="#expertise" className="btn-champagne-outline">
                Explore Expertise
              </a>
            </div>
          </div>
          <div className="relative flex justify-center">
            {/* Crest silhouette */}
            <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:1}}
              className="absolute -top-10 right-8 w-72 h-72 sm:w-96 sm:h-96 opacity-20">
              <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
                <path d="M300 40C340 100 410 130 500 150C480 230 440 310 300 560C160 310 120 230 100 150C190 130 260 100 300 40Z" stroke="#D1A33A" strokeOpacity="0.6" strokeWidth="1.2"/>
                <path d="M300 90C330 130 380 150 460 170C445 230 410 290 300 490C190 290 155 230 140 170C220 150 270 130 300 90Z" stroke="#F9E6A3" strokeOpacity="0.45" strokeWidth="0.9"/>
              </svg>
            </motion.div>
            {/* Portrait frame */}
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#0a0a0a]">
                <div className="absolute inset-0 rounded-full border-[1.5px] border-[#F9E6A3]/70 shadow-[inset_0_0_2px_#F9E6A3,0_0_40px_rgba(209,163,58,0.25)]"/>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#D1A33A]/40 via-transparent to-transparent blur-xl"/>
                <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#222_0%,#0b0b0b_60%)]"/>
                {/* Placeholder initials */}
                <div className="absolute inset-3 rounded-full flex items-center justify-center font-playfair text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A]">
                  SK
                </div>
              </div>
              {/* Engraved ring */}
              <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="195" stroke="#705C2E" strokeOpacity="0.6" strokeWidth="1" strokeDasharray="2 6"/>
                <circle cx="200" cy="200" r="185" stroke="#D1A33A" strokeOpacity="0.5" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
