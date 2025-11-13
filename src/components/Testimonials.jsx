import { useState, useEffect } from 'react'

const testimonials = [
  { q: 'Sanket’s strategic guidance helped us secure enterprise funding faster than expected.', a: 'Rahul T., Manufacturing CEO' },
  { q: 'Exceptional clarity and precision—true leadership in financial advisory.', a: 'Aishwarya M., Retail Business Owner' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setI(prev => (prev+1)%testimonials.length), 4000)
    return () => clearInterval(t)
  },[])
  const item = testimonials[i]

  return (
    <section className="relative bg-[#050505] text-[#EDE8D5] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="font-playfair text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A] text-center">Client Impact</h3>
        <div className="mt-10 relative">
          <div className="absolute -inset-8 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(249,230,163,0.08),transparent_60%)]"/>
          <div className="relative p-10 rounded-3xl bg-[#0b0b0b]/90 border border-[#D1A33A]/30 shadow-[inset_0_0_1px_#F9E6A3,0_10px_60px_rgba(209,163,58,0.08)]">
            <svg className="absolute -top-6 left-6 w-24 h-24 opacity-25" viewBox="0 0 200 200" fill="none">
              <path d="M10 100C40 60 70 60 100 10C130 60 160 60 190 100C160 140 130 140 100 190C70 140 40 140 10 100Z" stroke="#D1A33A" strokeWidth="0.8"/>
            </svg>
            <blockquote className="relative text-xl text-[#F3E7B9] leading-relaxed text-center max-w-3xl mx-auto">
              “{item.q}”
              <footer className="mt-4 text-sm text-[#D0C7A8]">— {item.a}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
