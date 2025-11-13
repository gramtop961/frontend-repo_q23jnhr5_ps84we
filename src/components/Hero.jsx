import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#000000] text-white">
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft golden aura */}
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full opacity-30 blur-3xl bg-[radial-gradient(circle_at_center,rgba(228,179,74,0.22)_0%,rgba(0,0,0,0)_60%)]"></div>
        {/* Animated particles */}
        <div className="particles pointer-events-none"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left copy */}
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[#F7D98F]/40 bg-[#1A1A1A]/40 backdrop-blur-sm shadow-[inset_0_0_0.5px_#F7D98F]">
              <div className="h-1.5 w-1.5 rounded-full bg-gradient-to-br from-[#F7D98F] to-[#E4B34A] animate-pulse" />
              <span className="text-[13px] tracking-wide text-[#F7D98F]">Director – Finsera Ventures Private Limited</span>
            </div>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl leading-tight font-serif-lux text-transparent bg-clip-text bg-gradient-to-b from-[#F7D98F] via-[#E4B34A] to-[#B7852E] drop-shadow-[0_6px_24px_rgba(228,179,74,0.22)]">
              Strategic Leadership for Modern Business Growth
            </h1>
            <p className="mt-6 text-lg text-[#C7C7C7] max-w-2xl font-subtitle">
              Director at Finsera Ventures delivering high-value financial strategy, structured funding, and business transformation.
            </p>

            <div className="mt-8 p-5 rounded-xl bg-[#0b0b0b] border border-[#E4B34A]/35 shadow-[inset_0_0_1px_#F7D98F,0_10px_40px_rgba(228,179,74,0.10)]">
              <div className="text-[#F7D98F] font-medium">Sanket Kumar — Director, Finsera Ventures Pvt. Ltd.</div>
              <div className="mt-1 text-[#e9ddba]">✉️ sanket@finseraa.com</div>
              <div className="text-[#e9ddba]">📞 +91 84488 81419</div>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#eligibility" className="btn-gold-3d shine-hover">Book a Consultation</a>
              <a href="#expertise" className="btn-gold-outline">Explore Expertise</a>
            </div>
          </div>

          {/* Right visual */}
          <div className="relative flex justify-center">
            {/* Floating gold ring */}
            <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:1}}
              className="absolute -top-10 right-8 w-72 h-72 sm:w-96 sm:h-96 opacity-40">
              <svg viewBox="0 0 600 600" className="w-full h-full" fill="none">
                <circle cx="300" cy="300" r="190" stroke="#E4B34A" strokeWidth="1.4" strokeOpacity="0.5"/>
                <circle cx="300" cy="300" r="210" stroke="#F7D98F" strokeWidth="0.8" strokeOpacity="0.35"/>
              </svg>
            </motion.div>

            {/* Portrait frame */}
            <div className="relative">
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full bg-[#0a0a0a]">
                <div className="absolute inset-0 rounded-full border-[1.5px] border-[#F7D98F]/70 shadow-[inset_0_0_2px_#F7D98F,0_0_40px_rgba(228,179,74,0.25)]"/>
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-[#E4B34A]/40 via-transparent to-transparent blur-xl"/>
                <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_30%_30%,#1d1d1d_0%,#0b0b0b_60%)]"/>
                {/* Placeholder initials */}
                <div className="absolute inset-3 rounded-full flex items-center justify-center font-serif-lux text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#F7D98F] to-[#E4B34A]">
                  SK
                </div>
              </div>
              {/* Thin modern ring */}
              <svg className="absolute -inset-4 w-[calc(100%+2rem)] h-[calc(100%+2rem)]" viewBox="0 0 400 400" fill="none">
                <circle cx="200" cy="200" r="195" stroke="#6f5626" strokeOpacity="0.5" strokeWidth="1" strokeDasharray="2 6"/>
                <circle cx="200" cy="200" r="185" stroke="#E4B34A" strokeOpacity="0.5" strokeWidth="1"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
