export default function Footer(){
  return (
    <footer className="relative bg-[#050505] text-[#D6D0BE] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full bg-[#0a0a0a] border border-[#D1A33A]/50">
            <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_30%_30%,#222_0%,#0b0b0b_60%)]"/>
            <div className="absolute inset-1 rounded-full flex items-center justify-center font-playfair text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A]">SK</div>
          </div>
          <div>
            <div className="text-[#F3E7B9]">Sanket Kumar — Director, Finsera Ventures Pvt. Ltd.</div>
            <div className="text-sm text-[#CFC6A7]">✉️ sanket@finseraa.com · 📞 +91 84488 81419</div>
          </div>
        </div>
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#D1A33A]/50 to-transparent"/>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="italic text-[#EDE8D5]">“Strategic leadership meets financial excellence.”</div>
          <div className="text-sm text-[#AFA78C]">© 2025 Finsera Ventures Pvt. Ltd.</div>
        </div>
      </div>
    </footer>
  )
}
