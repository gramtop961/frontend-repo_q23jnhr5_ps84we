export default function CTA() {
  return (
    <section className="relative py-20 text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-[#0A0A0A] to-black"/>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(228,179,74,0.14),transparent_60%)]"/>
      <div className="relative max-w-4xl mx-auto px-6">
        <h3 className="font-serif-lux text-4xl text-white">Let’s Build Your Growth Strategy Together</h3>
        <p className="mt-4 text-[#C7C7C7]">Schedule a consultation to align capital strategy with your expansion goals.</p>
        <div className="mt-8">
          <a href="#eligibility" className="btn-gold-3d shine-hover">Schedule Consultation</a>
        </div>
      </div>
    </section>
  )
}
