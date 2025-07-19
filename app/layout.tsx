import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ambika Das - AI Researcher & Developer',
  description: 'Portfolio of Ambika Das, AI Researcher and Developer specializing in Computer Vision and Machine Learning',
  generator: 'Next.js',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-white antialiased">
        {children}
      </body>
    </html>
  )
}
