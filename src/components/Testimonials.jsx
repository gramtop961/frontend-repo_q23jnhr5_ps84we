import { useState, useEffect } from 'react'

const testimonials = [
  { q: 'Sanket guided our business through funding with exceptional clarity and precision.', a: 'Rahul T., Manufacturing CEO' },
  { q: 'His financial strategy helped us scale in under six months.', a: 'Aishwarya M., Retail Founder' },
]

export default function Testimonials() {
  const [i, setI] = useState(0)
  useEffect(()=>{
    const t = setInterval(()=> setI(prev => (prev+1)%testimonials.length), 4200)
    return () => clearInterval(t)
  },[])
  const item = testimonials[i]

  return (
    <section className="relative bg-[#000000] text-[#C7C7C7] py-20">
      <div className="max-w-5xl mx-auto px-6">
        <h3 className="font-serif-lux text-3xl text-white text-center gold-underline">Client Success Stories</h3>
        <div className="mt-10 relative">
          <div className="absolute -inset-8 rounded-3xl bg-[radial-gradient(circle_at_center,rgba(247,217,143,0.08),transparent_60%)]"/>
          <div className="relative p-10 rounded-3xl card-glass">
            <svg className="absolute -top-6 left-6 w-24 h-24 opacity-25" viewBox="0 0 200 200" fill="none">
              <path d="M10 100C40 60 70 60 100 10C130 60 160 60 190 100C160 140 130 140 100 190C70 140 40 140 10 100Z" stroke="#E4B34A" strokeWidth="0.8"/>
            </svg>
            <blockquote className="relative text-xl text-[#F7D98F] leading-relaxed text-center max-w-3xl mx-auto">
              “{item.q}”
              <footer className="mt-4 text-sm text-[#E4E4E4]">— {item.a}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
