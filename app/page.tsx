export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6">
          For Shopify stores doing $10k+/mo
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Stop guessing when to send<br />
          <span className="text-[#58a6ff]">abandoned cart emails</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          CartTiming analyzes your Shopify purchase data to recommend the exact timing for each email in your abandoned cart sequence — so you recover more revenue without annoying customers.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors text-base"
        >
          Start recovering carts — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">Cancel anytime. No contracts.</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            { stat: '23%', label: 'avg. recovery rate lift' },
            { stat: '< 5 min', label: 'setup time' },
            { stat: '3 emails', label: 'sequence optimized' },
          ].map((item) => (
            <div key={item.label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{item.stat}</div>
              <div className="text-sm text-[#8b949e] mt-1">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="flex items-end gap-1 mb-1">
            <span className="text-4xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-1">/month</span>
          </div>
          <p className="text-[#8b949e] text-sm mb-6">Everything you need to optimize your cart recovery</p>
          <ul className="space-y-3 mb-8">
            {[
              'Connect unlimited Shopify stores',
              'ML-powered timing recommendations',
              'Klaviyo, Omnisend & Mailchimp guides',
              'Weekly performance reports',
              'Slack & email alerts',
            ].map((feature) => (
              <li key={feature} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block text-center bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-6 py-3 rounded-lg transition-colors"
          >
            Get started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does CartTiming analyze my store data?',
              a: 'We connect to your Shopify store via the official API and webhooks. Our algorithm analyzes the time-to-purchase patterns of your completed orders to identify when customers are most likely to convert after abandoning a cart.',
            },
            {
              q: 'Which email platforms are supported?',
              a: 'We provide step-by-step integration guides for Klaviyo, Omnisend, and Mailchimp. The timing recommendations work with any platform that supports scheduled email sequences.',
            },
            {
              q: 'How long before I see results?',
              a: 'Most stores see improved recovery rates within the first 30 days. CartTiming needs at least 100 completed orders to generate reliable timing recommendations.',
            },
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="font-semibold text-white mb-2">{item.q}</h3>
              <p className="text-sm text-[#8b949e] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-xs text-[#6e7681]">
        © {new Date().getFullYear()} CartTiming. All rights reserved.
      </footer>
    </main>
  )
}
