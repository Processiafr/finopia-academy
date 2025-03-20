import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FINOPIA Academy',
  description: 'Venez vivre une expérience immersive et innovante pour redynamiser la formation et la montée en compétence de vos équipes. Inscrivez-vous à notre Business Game le 30 avril 2025.',
  generator: 'Next.js',
  keywords: ['formation', 'business game', 'expérience immersive', 'finance', 'supply chain', 'management', 'finopia'],
  icons: {
    icon: '/Logo_F_Academy.png',
    apple: '/Logo_F_Academy.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
