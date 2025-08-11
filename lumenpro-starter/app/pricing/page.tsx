export default function Pricing() {
  const tiers = [
    { name: 'Solo', price: 19, features: ['1 utilisateur', '10 projets/mois'] },
    { name: 'Pro', price: 49, features: ['5 utilisateurs', 'Projets illimités'] },
    { name: 'Team', price: 99, features: ['10+ utilisateurs', 'Support prioritaire'] },
  ]
  return (
    <div className="grid md:grid-cols-3 gap-4">
      {tiers.map(t => (
        <div key={t.name} className="rounded-2xl border p-6 shadow-sm">
          <h3 className="text-xl font-semibold">{t.name}</h3>
          <p className="text-3xl font-bold mt-2">€{t.price}<span className="text-base">/mo</span></p>
          <ul className="mt-3 text-sm list-disc list-inside">
            {t.features.map(f => <li key={f}>{f}</li>)}
          </ul>
          <button className="mt-4 w-full rounded-xl bg-black text-white py-2" disabled>Stripe à configurer</button>
        </div>
      ))}
    </div>
  )
}
