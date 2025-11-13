import { useState } from 'react'

export default function EligibilityForm() {
  const [form, setForm] = useState({ name:'', business:'', email:'', phone:'', funding:'', overview:'' })

  const onChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const submit = e => {
    e.preventDefault()
    alert('Thank you. Your eligibility request has been received.')
  }

  return (
    <section id="eligibility" className="relative bg-[#000000] text-[#C7C7C7] py-20">
      <div className="max-w-3xl mx-auto px-6">
        <h3 className="font-serif-lux text-3xl text-white text-center gold-underline">Eligibility Form</h3>
        <form onSubmit={submit} className="mt-10 p-8 rounded-2xl card-glass space-y-5">
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm mb-2">Full Name</label>
              <input name="name" value={form.name} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#6f5626] focus:border-[#F7D98F] focus:ring-0 text-white px-4 py-3 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm mb-2">Business Name</label>
              <input name="business" value={form.business} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#6f5626] focus:border-[#F7D98F] focus:ring-0 text-white px-4 py-3 outline-none transition" />
            </div>
          </div>
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm mb-2">Email</label>
              <input type="email" name="email" value={form.email} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#6f5626] focus:border-[#F7D98F] focus:ring-0 text-white px-4 py-3 outline-none transition" />
            </div>
            <div>
              <label className="block text-sm mb-2">Phone</label>
              <input name="phone" value={form.phone} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#6f5626] focus:border-[#F7D98F] focus:ring-0 text-white px-4 py-3 outline-none transition" />
            </div>
          </div>
          <div>
            <label className="block text-sm mb-2">Funding Requirement</label>
            <input name="funding" value={form.funding} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#6f5626] focus:border-[#F7D98F] focus:ring-0 text-white px-4 py-3 outline-none transition" />
          </div>
          <div>
            <label className="block text-sm mb-2">Brief Message</label>
            <textarea rows="5" name="overview" value={form.overview} onChange={onChange} className="w-full rounded-lg bg-[#0a0a0a] border border-[#6f5626] focus:border-[#F7D98F] focus:ring-0 text-white px-4 py-3 outline-none transition" />
          </div>
          <div className="flex justify-center">
            <button className="btn-gold-3d shine-hover" type="submit">Check Eligibility</button>
          </div>
        </form>
      </div>
    </section>
  )
}
