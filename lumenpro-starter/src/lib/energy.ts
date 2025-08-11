export function kWhAnnual(powerW: number, qty: number, hoursPerDay: number, daysPerYear: number) {
  return (powerW * qty * hoursPerDay * daysPerYear) / 1000
}

export function proposalMetrics({
  fixtures,
  lines,
  energyRateCents,
  discountPct = 0,
  laborCost = 0,
  subsidy = 0,
  wacc = 0.08,
  lifetimeYears = 10,
  co2kgPerKWh = 0.25,
}: any) {
  const baselineKWh = fixtures.reduce((s: number, f: any) => s + kWhAnnual(f.powerW, f.qty, f.hoursPerDay, f.daysPerYear), 0)
  const proposedKWh = lines.reduce((s: number, l: any) => s + kWhAnnual(l.newPowerW, l.qty, fixtures[0]?.hoursPerDay || 10, fixtures[0]?.daysPerYear || 300), 0)
  const annualSavingsKWh = Math.max(0, baselineKWh - proposedKWh)
  const annualSavingsEUR = (annualSavingsKWh * energyRateCents) / 100

  const materials = lines.reduce((s: number, l: any) => s + l.qty * l.unitPrice, 0)
  const capexEUR = Math.max(0, materials * (1 - discountPct / 100) + laborCost - subsidy)

  const paybackYears = capexEUR > 0 && annualSavingsEUR > 0 ? capexEUR / annualSavingsEUR : Infinity

  let npv = -capexEUR
  for (let t = 1; t <= lifetimeYears; t++) {
    const discounted = annualSavingsEUR / Math.pow(1 + wacc, t)
    npv += discounted
  }
  const irrPct = paybackYears === Infinity ? 0 : Math.min(100, (1 / paybackYears) * 100)
  const co2SavedKg = annualSavingsKWh * co2kgPerKWh

  return { baselineKWh, proposedKWh, annualSavingsKWh, annualSavingsEUR, capexEUR, paybackYears, npvEUR: npv, irrPct, co2SavedKg }
}
