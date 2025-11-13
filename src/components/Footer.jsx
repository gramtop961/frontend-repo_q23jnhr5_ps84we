export default function Footer(){
  return (
    <footer className="relative bg-[#000000] text-[#C7C7C7] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center gap-4">
          <div className="relative w-14 h-14 rounded-full bg-[#0a0a0a] border border-[#E4B34A]/50">
            <div className="absolute inset-1 rounded-full bg-[radial-gradient(circle_at_30%_30%,#222_0%,#0b0b0b_60%)]"/>
            <div className="absolute inset-1 rounded-full flex items-center justify-center font-serif-lux text-lg text-transparent bg-clip-text bg-gradient-to-b from-[#F7D98F] to-[#E4B34A]">SK</div>
          </div>
          <div>
            <div className="text-[#F7D98F]">Sanket Kumar — Director, Finsera Ventures Pvt. Ltd.</div>
            <div className="text-sm">✉️ sanket@finseraa.com · 📞 +91 84488 81419</div>
          </div>
        </div>
        <div className="my-6 h-px bg-gradient-to-r from-transparent via-[#E4B34A]/50 to-transparent"/>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="italic text-white">“Strategic leadership meets financial excellence.”</div>
          <div className="text-sm">© 2025 Finsera Ventures Pvt. Ltd.</div>
        </div>
      </div>
    </footer>
  )
}
