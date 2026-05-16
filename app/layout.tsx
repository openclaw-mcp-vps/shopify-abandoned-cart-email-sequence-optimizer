import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'CartTiming — Optimize Abandoned Cart Email Sequences',
  description: 'Analyze your Shopify purchase patterns to find the perfect timing for abandoned cart emails. Recover more revenue with data-driven sequences.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="4e908faf-591c-4330-8163-d37594c5b680"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
