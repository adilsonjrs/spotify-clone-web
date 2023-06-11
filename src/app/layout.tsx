import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: '400',
  preload: false,
})

export const metadata = {
  title: 'Spotify Clone Web',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}
