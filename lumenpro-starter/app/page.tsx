import Link from 'next/link'

export default function Home() {
  return (
    <main className="grid gap-8">
      <section className="text-center">
        <h1 className="text-4xl font-bold">LumenPro</h1>
        <p className="mt-2 text-lg">Auditez, chiffez et signez vos projets d’éclairage en minutes.</p>
        <div className="mt-6 flex justify-center gap-3">
          <Link href="/pricing" className="px-4 py-2 rounded-xl bg-black text-white">Démarrer l’essai</Link>
          <Link href="/dashboard" className="px-4 py-2 rounded-xl border">Voir le produit</Link>
        </div>
      </section>
    </main>
  )
}
