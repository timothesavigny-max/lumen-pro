'use client'
import { useState } from 'react'
import { proposalMetrics } from '@/src/lib/energy'

export default function Dashboard() {
  const [input, setInput] = useState({
    qty: 50, oldW: 58, newW: 18, h: 10, d: 300, rate: 0.22, price: 60, labor: 500, subsidy: 0, discount: 0,
  })
  const metrics = proposalMetrics({
    fixtures: [{ powerW: input.oldW, qty: input.qty, hoursPerDay: input.h, daysPerYear: input.d }],
    lines: [{ newPowerW: input.newW, qty: input.qty, unitPrice: input.price }],
    energyRateCents: input.rate * 100,
    laborCost: input.labor,
    subsidy: input.subsidy,
    discountPct: input.discount,
  })

  return (
    <div className="grid gap-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">Calculateur rapide</h2>
      </div>
      <div className="rounded-2xl border p-4 grid md:grid-cols-2 gap-4">
        <div className="grid grid-cols-2 gap-2">
          {Object.entries(input).map(([k, v]) => (
            <label key={k} className="text-sm grid gap-1">
              <span className="capitalize">{k}</span>
              <input
                type="number"
                value={v as number}
                onChange={e => setInput({ ...input, [k]: parseFloat(e.target.value) || 0 })}
                className="border rounded-xl px-3 py-2"
              />
            </label>
          ))}
        </div>
        <div className="grid gap-1 text-sm">
          <div>Économies annuelles : <b>{metrics.annualSavingsEUR.toFixed(0)} €</b></div>
          <div>kWh évités : <b>{metrics.annualSavingsKWh.toFixed(0)} kWh</b></div>
          <div>Payback : <b>{metrics.paybackYears === Infinity ? '—' : metrics.paybackYears.toFixed(1) + ' ans'}</b></div>
          <div>NPV (10 ans) : <b>{metrics.npvEUR.toFixed(0)} €</b></div>
          <div>CO₂ évité : <b>{metrics.co2SavedKg.toFixed(0)} kg/an</b></div>
        </div>
      </div>
    </div>
  )
}
