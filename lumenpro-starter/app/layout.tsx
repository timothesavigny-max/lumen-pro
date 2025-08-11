import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'LumenPro',
  description: 'Auditez et chiffrez vos projets d’éclairage en minutes.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className="min-h-screen">
        <div className="max-w-6xl mx-auto p-6">{children}</div>
      </body>
    </html>
  )
}
