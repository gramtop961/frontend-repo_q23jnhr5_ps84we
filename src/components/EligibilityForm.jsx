import { useState } from 'react'

export default function EligibilityForm() {
  const [form, setForm] = useState({ name:'', business:'', email:'', phone:'', funding:'', overview:'' })

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    alert('Thank you. Your eligibility request has been received.')
  }

  return (
    <section id="eligibility" className="relative bg-[#050505] text-[#EDE8D5] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="font-playfair text-3xl text-transparent bg-clip-text bg-gradient-to-b from-[#F9E6A3] to-[#D1A33A] text-center">Eligibility Check</h3>
        <form onSubmit={submit} className="mt-10 p-8 rounded-2xl bg-[#0b0b0b] border border-[#D1A33A]/30 shadow-[inset_0_0_1px_#F9E6A3,0_10px_60px_rgba(209,163,58,0.08)] space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-[#CFC6A7] mb-2">Full Name</label>
              <input name="name" value={form.name} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#705C2E] focus:border-[#F9E6A3] focus:ring-0 text-[#EDE8D5] px-4 py-3 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm text-[#CFC6A7] mb-2">Business Name</label>
              <input name="business" value={form.business} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#705C2E] focus:border-[#F9E6A3] focus:ring-0 text-[#EDE8D5] px-4 py-3 outline-none transition" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-[#CFC6A7] mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#705C2E] focus:border-[#F9E6A3] focus:ring-0 text-[#EDE8D5] px-4 py-3 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm text-[#CFC6A7] mb-2">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#705C2E] focus:border-[#F9E6A3] focus:ring-0 text-[#EDE8D5] px-4 py-3 outline-none transition" />
            </div>
          </div>
          <div>
            <label className="block text-sm text-[#CFC6A7] mb-2">Required Funding</label>
            <input name="funding" value={form.funding} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#705C2E] focus:border-[#F9E6A3] focus:ring-0 text-[#EDE8D5] px-4 py-3 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm text-[#CFC6A7] mb-2">Business Overview</label>
            <textarea rows="5" name="overview" value={form.overview} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#705C2E] focus:border-[#F9E6A3] focus:ring-0 text-[#EDE8D5] px-4 py-3 outline-none transition" />
          </div>
          <div className="flex justify-center">
            <button className="btn-molten-gold" type="submit">Check My Eligibility</button>
          </div>
        </form>
      </div>
    </section>
  )
}
