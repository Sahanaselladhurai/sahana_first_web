import React from 'react';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';

function StatCard({ title, value }) {
  return (
    <div className="p-6 bg-[#07102a] rounded-2xl border border-white/6">
      <div className="text-sm text-gray-300">{title}</div>
      <div className="text-2xl font-semibold mt-2">{value}</div>
    </div>
  );
}

export default function DashboardPage() {
  const { user, logout } = useAuth();

  const seedItems = [
    {
      name: 'Corn Hybrid Pack',
      description: 'High-yield seeds for warm season planting.',
      image: 'https://images.unsplash.com/photo-1464965911861-746a04b4bca8?w=900&q=80&auto=format&fit=crop'
    },
    {
      name: 'Sunflower Seeds',
      description: 'Fast-growing seeds for bright fields and pollinators.',
      image: 'https://images.unsplash.com/photo-1509395176047-4a66953fd231?w=900&q=80&auto=format&fit=crop'
    },
    {
      name: 'Wheat Starter Mix',
      description: 'Resilient seed blend for strong early season growth.',
      image: 'https://images.unsplash.com/photo-1518655048521-f130df041f66?w=900&q=80&auto=format&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen p-6 bg-gradient-to-b from-[#0b290f] via-[#0c3118] to-[#07140c]">
      <div className="max-w-7xl mx-auto">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mb-8">
          <div>
            <div className="text-sm text-green-200 uppercase tracking-[0.18em]">Farm dashboard</div>
            <h1 className="text-3xl font-bold mt-2">Hello, {user?.name || user?.email}</h1>
            <p className="text-sm text-green-100/80 mt-2 max-w-2xl">Review seed stock, field conditions, and harvest readiness from one place. Your farm data is ready to help every planting season.</p>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={logout} className="px-4 py-2 rounded-md bg-white/10 border border-white/10 text-white hover:bg-white/15">Sign Out</button>
          </div>
        </header>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <StatCard title="Seed packs" value="32" />
            <StatCard title="Fields monitored" value="14" />
            <StatCard title="Forecasts" value="5 days" />
          </div>

          <section className="mt-8 grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 p-6 bg-[#0f2b17] rounded-2xl border border-white/8 shadow-[0_20px_80px_rgba(0,0,0,0.24)]">
              <h2 className="text-lg font-semibold mb-4">Crop analytics</h2>
              <div className="h-64 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_transparent_45%)] rounded-xl flex items-center justify-center text-green-100/70">Field growth chart placeholder</div>
            </div>

            <aside className="p-6 bg-[#0f2b17] rounded-2xl border border-white/8 shadow-[0_20px_80px_rgba(0,0,0,0.18)]">
              <h3 className="font-semibold mb-3">Seed inventory</h3>
              <ul className="text-sm text-green-100 space-y-3">
                <li>Check corn, wheat, and sunflower volume before next planting.</li>
                <li>Track soil health updates to optimize fertilizer timing.</li>
                <li>Review harvest alerts and moisture forecast.</li>
              </ul>
            </aside>
          </section>

          <section className="mt-8">
            <div className="flex items-center justify-between gap-4 mb-5">
              <h2 className="text-xl font-semibold">Seed bundles</h2>
              <span className="text-sm text-green-200/80">Fresh shipments and top picks</span>
            </div>
            <div className="seed-grid">
              {seedItems.map((item) => (
                <div key={item.name} className="seed-card">
                  <img src={item.image} alt={item.name} />
                  <div className="seed-card-content">
                    <h3>{item.name}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}
