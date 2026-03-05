'use client';

import React, { useState } from 'react';
import { TrendingUp, Target, Users, Briefcase, Calendar, Award, DollarSign, Zap, Shield, Database, LineChart, CheckCircle, Globe, Rocket, BarChart3, FileText, Lightbulb } from 'lucide-react';
import { SmoothCursor } from '@/components/ux/smooth-cursor';

export default function Page() {
    const [activeSection, setActiveSection] = useState('overview');

    const sections = [
        { id: 'overview', label: '📊 Overview', icon: Target },
        { id: 'market', label: '📈 Tren Pasar', icon: TrendingUp },
        { id: 'strategy', label: '🎯 Strategi', icon: Briefcase },
        { id: 'roadmap', label: '🗓️ Roadmap', icon: Calendar },
        { id: 'kpi', label: '📊 KPI & Target', icon: LineChart },
        { id: 'operational', label: '⚙️ Operasional', icon: CheckCircle },
        { id: 'longterm', label: '🚀 Visi 2028', icon: Rocket },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            {/* Header */}
            <div className="hidden sm:block">
                    <SmoothCursor />
                  </div>
            <header className="bg-black/40 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
                <div className="container mx-auto px-6 py-4">
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
                        🏢 CV. AKSATEQ
                    </h1>
                    <p className="text-sm text-gray-400">📋 Blueprint Strategi Software House Freelance 2025-2028</p>
                </div>
            </header>

            {/* Navigation */}
            <nav className="bg-black/30 backdrop-blur-sm border-b border-white/10 sticky top-[72px] z-40">
                <div className="container mx-auto px-6">
                    <div className="flex gap-2 overflow-x-auto py-3">
                        {sections.map(section => {
                            const Icon = section.icon;
                            return (
                                <button
                                    key={section.id}
                                    onClick={() => setActiveSection(section.id)}
                                    className={`flex items-center gap-2 px-4 py-2 rounded-lg whitespace-nowrap transition-all ${activeSection === section.id
                                            ? 'bg-gray-700 text-white'
                                            : 'bg-white/10 text-gray-300 hover:bg-white/20'
                                        }`}
                                >
                                    <Icon size={18} />
                                    <span className="text-sm font-medium">{section.label}</span>
                                </button>
                            );
                        })}
                    </div>
                </div>
            </nav>

            {/* Main Content */}
            <main className="container mx-auto px-6 py-8">
                {activeSection === 'overview' && <OverviewSection />}
                {activeSection === 'market' && <MarketSection />}
                {activeSection === 'strategy' && <StrategySection />}
                {activeSection === 'roadmap' && <RoadmapSection />}
                {activeSection === 'kpi' && <KPISection />}
                {activeSection === 'operational' && <OperationalSection />}
                {activeSection === 'longterm' && <LongTermSection />}
            </main>

            {/* Footer */}
            <footer className="bg-black/40 border-t border-white/10 py-6 mt-12">
                <div className="container mx-auto px-6 text-center text-gray-400 text-sm">
                    <p>🏢 CV. AKSATEQ - Kredibel, Terpercaya, Solusi Terintegrasi</p>
                    <p className="mt-2">© 2025 📋 Blueprint Strategi Software House Freelance</p>
                </div>
            </footer>
        </div>
    );
}

function OverviewSection() {
    return (
        <div className="space-y-6">
            {/* Hero Card */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 shadow-2xl">
                <div className="flex items-center gap-4 mb-4">
                    <Target className="w-12 h-12" />
                    <div>
                        <h2 className="text-3xl font-bold">🏢 CV. AKSATEQ</h2>
                        <p className="text-gray-200 text-lg">🛡️ Kredibel, Terpercaya, Solusi Terintegrasi</p>
                    </div>
                </div>
                <p className="text-white/90 text-lg leading-relaxed">
                    💻 Software House Aggregator berstandar enterprise dengan model ekosistem freelance yang fleksibel dan quality control ketat
                </p>
            </div>

            {/* Value Propositions */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gray-400/50 transition-all">
                    <Shield className="w-10 h-10 text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">💰 Sistem Escrow</h3>
                    <p className="text-gray-300">🛡️ Keamanan pembayaran dengan penahanan dana hingga proyek selesai</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gray-400/50 transition-all">
                    <Users className="w-10 h-10 text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">⭐ Talenta Terbaik</h3>
                    <p className="text-gray-300">🎯 Seleksi ketat freelancer dengan status Trusted setelah 3 proyek sukses</p>
                </div>
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-gray-400/50 transition-all">
                    <CheckCircle className="w-10 h-10 text-gray-300 mb-4" />
                    <h3 className="text-xl font-bold mb-2">✅ Quality Control</h3>
                    <p className="text-gray-300">📝 Review code & QA rutin dengan metodologi Agile sprint 2-minggu</p>
                </div>
            </div>

            {/* Model Bisnis */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    💰 Model Bisnis Tahan Krisis
                </h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-3">📦 Pendapatan Proyek</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>• 💸 Komisi proyek ~15% dari nilai kontrak</li>
                            <li>• 🛡️ Sistem escrow untuk keamanan transaksi</li>
                            <li>• 🎯 Fokus proyek bernilai tambah tinggi</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-3">🔄 Recurring Revenue</h4>
                        <ul className="space-y-2 text-gray-300">
                            <li>• 🔧 Paket maintenance & support bulanan</li>
                            <li>• 📊 Subscription SaaS modul tambahan</li>
                            <li>• 🎓 Pelatihan digitalisasi berkelanjutan</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function MarketSection() {
    return (
        <div className="space-y-6">
            {/* Market Growth */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-4 flex items-center gap-3">
                    📈 Peluang Pasar IT Outsourcing Indonesia
                </h2>
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                    <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-4xl font-bold text-gray-200">US$2.11M</div>
                        <div className="text-sm text-white/80 mt-1">💰 Nilai Pasar 2025</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-4xl font-bold text-gray-200">US$3.29M</div>
                        <div className="text-sm text-white/80 mt-1">📊 Proyeksi 2030</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-4">
                        <div className="text-4xl font-bold text-gray-200">9.3%</div>
                        <div className="text-sm text-white/80 mt-1">📈 CAGR Pertumbuhan</div>
                    </div>
                </div>
            </div>

            {/* Tren Global */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-gray-300">🚀 Tren Teknologi 2025-2028</h3>
                    <ul className="space-y-3">
                        {['📝 Kontrak berbasis hasil (outcome-based)', '☁️ Komputasi awan & multi-cloud hybrid', '🤖 RPA & AI automation', '🛡️ Keamanan siber tinggi', '💻 Low-code development', '📡 IoT & Big Data'].map((trend, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <Zap className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300">{trend}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-gray-300">⚠️ Pain Points Industri</h3>
                    <ul className="space-y-3">
                        {[
                            { icon: Shield, text: '🛡️ 40% perusahaan APAC hadapi hambatan keamanan siber' },
                            { icon: Users, text: '👥 Kekurangan SDM TI berkompeten (skill gap AI/IoT)' },
                            { icon: Database, text: '📦 Gangguan rantai pasok & fluktuasi harga bahan baku' },
                            { icon: Zap, text: '⚡ Adopsi sistem digital lambat karena keterbatasan' }
                        ].map((item, i) => {
                            const Icon = item.icon;
                            return (
                                <li key={i} className="flex items-start gap-3">
                                    <Icon className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                                    <span className="text-gray-300">{item.text}</span>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>

            {/* Target Demand */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-gray-300">📈 Permintaan SDM TI Naik 22% hingga 2030</h3>
                <p className="text-gray-300 mb-4">
                    🏢 Perusahaan fintech, e-commerce, dan manufaktur Indonesia terus mendorong permintaan pengembangan perangkat lunak khusus serta solusi data dan pembayaran digital.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                    {['💳 Fintech', '🛒 E-Commerce', '🏭 Manufaktur', '🏥 Healthcare', '🏪 Retail'].map((sector, i) => (
                        <span key={i} className="px-4 py-2 bg-gray-500/20 border border-gray-500/30 rounded-full text-gray-300 text-sm">
                            {sector}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

function StrategySection() {
    return (
        <div className="space-y-6">
            {/* Strategi Utama */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-2">🎯 Strategi Go-to-Market</h2>
                <p className="text-white/90">🏭 Fokus vertikal industri manufaktur & retail untuk diferensiasi cepat</p>
            </div>

            {/* 3 Pilar Strategi */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-gray-300">1️⃣</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">🏷️ Positioning & Branding</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 🌐 Website profesional .co.id/.id</li>
                        <li>• 💼 LinkedIn Company Page aktif</li>
                        <li>• 📜 Sertifikasi ISO/SNI</li>
                        <li>• 📊 Studi kasus naratif ROI klien</li>
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-gray-300">2️⃣</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">📱 Digital Marketing</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 💼 LinkedIn Ads (23M pengguna ID)</li>
                        <li>• 📧 Cold email campaign</li>
                        <li>• 📝 Content marketing (blog, webinar)</li>
                        <li>• 🔍 SEO & Google Ads lokal</li>
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center mb-4">
                        <span className="text-2xl font-bold text-gray-300">3️⃣</span>
                    </div>
                    <h3 className="text-xl font-bold mb-3">🤝 Partnership & Network</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 👥 Channel HR perusahaan industri</li>
                        <li>• 💻 Vendor hardware/ERP besar</li>
                        <li>• 🏢 Komunitas startup & asosiasi IT</li>
                        <li>• 🚀 Program inkubator teknologi</li>
                    </ul>
                </div>
            </div>

            {/* Kriteria Vendor Selection */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">🎯 Faktor Penentu Pemilihan Vendor (B2B)</h3>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-4 flex items-center gap-2">
                            ✅ Faktor Kunci Sukses
                        </h4>
                        <div className="space-y-3">
                            <div className="flex items-center gap-3">
                                <div className="w-24 bg-gray-500/30 h-2 rounded-full"></div>
                                <span className="text-sm text-gray-300">30.2% - 🏆 Reputasi & portofolio</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-20 bg-gray-500/30 h-2 rounded-full"></div>
                                <span className="text-sm text-gray-300">🎯 Keahlian teknis & domain</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-16 bg-gray-500/30 h-2 rounded-full"></div>
                                <span className="text-sm text-gray-300">💬 Komunikasi jelas & SLA</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-14 bg-gray-500/30 h-2 rounded-full"></div>
                                <span className="text-sm text-gray-300">⭐ Testimoni klien nyata</span>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-4">🚫 Penghambat Kerjasama</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>• ⏰ Keterlambatan pengiriman proyek</li>
                            <li>• 💰 Biaya tidak terduga & tidak transparan</li>
                            <li>• 💬 Miskomunikasi & kurang responsif</li>
                            <li>• 📉 Kualitas hasil tidak sesuai ekspektasi</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Channels & Tools */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">🛠️ Platform & Channel Marketing</h3>
                <div className="grid md:grid-cols-4 gap-4">
                    {[
                        { name: '💼 LinkedIn', desc: 'Ads & Company Page' },
                        { name: '⭐ Clutch.co', desc: 'Review & Rating' },
                        { name: '📧 Cold Email', desc: 'Lemlist, Mailshake' },
                        { name: '🔍 Google Ads', desc: 'Target industri lokal' },
                        { name: '🎥 Webinar', desc: 'Lead magnet edukatif' },
                        { name: '🏢 Pameran', desc: 'Manufacturing Indonesia' },
                        { name: '📊 HubSpot CRM', desc: 'Lead management' },
                        { name: '📋 Jira/Trello', desc: 'Project tracking' }
                    ].map((tool, i) => (
                        <div key={i} className="bg-gray-500/10 border border-gray-500/20 rounded-lg p-4">
                            <div className="font-semibold text-gray-300">{tool.name}</div>
                            <div className="text-xs text-gray-400 mt-1">{tool.desc}</div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

function RoadmapSection() {
    const roadmap = [
        {
            quarter: 'Q4 2025',
            title: '🚀 Setup Awal',
            color: 'from-gray-600 to-gray-500',
            items: [
                '📜 Penyelesaian legalitas perusahaan',
                '🌐 Website profesional & LinkedIn Company Page',
                '👥 Rekrutmen tim inti (PM, Tech Lead, QA)',
                '📊 Pitch deck & value proposition'
            ]
        },
        {
            quarter: 'Q1 2026',
            title: '🎯 Validasi Pasar',
            color: 'from-gray-600 to-gray-500',
            items: [
                '📢 Kampanye soft-launch (blog, LinkedIn aktif)',
                '🎁 Demo gratis ke manufaktur Semarang',
                '📦 1-2 proyek pilot klien lokal',
                '⭐ Kumpulkan testimoni awal'
            ]
        },
        {
            quarter: 'Q2 2026',
            title: '🏗️ Konsolidasi',
            color: 'from-gray-600 to-gray-500',
            items: [
                '📈 Evaluasi & perbaiki proses pilot',
                '🏢 Hadir di pameran & networking event',
                '🤝 2-3 kemitraan strategis',
                '📝 Listing di Clutch & kumpulkan review'
            ]
        },
        {
            quarter: 'Q3 2026',
            title: '📈 Skala Awal',
            color: 'from-gray-600 to-gray-500',
            items: [
                '🎯 Penawaran ke klien lebih besar (IoT)',
                '🔍 Optimalisasi SEO & Google Ads',
                '💼 LinkedIn Ads targeting C-level',
                '👥 Rekrut 2-3 freelancer tambahan'
            ]
        },
        {
            quarter: 'Q4 2026',
            title: '🔄 Retensi & Evaluasi',
            color: 'from-gray-600 to-gray-500',
            items: [
                '📦 Paket subscription maintenance',
                '👥 Program referral (diskon klien baru)',
                '📊 Kaji KPI & CLV early clients',
                '🎯 Rencanakan iterasi 2027'
            ]
        }
    ];

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    🗓️ Roadmap Aksi 12 Bulan
                </h2>
                <p className="text-white/90">📈 Fase demi fase menuju 100 proyek per tahun</p>
            </div>

            <div className="space-y-4">
                {roadmap.map((phase, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                        <div className={`bg-gradient-to-r ${phase.color} p-4`}>
                            <div className="flex items-center justify-between">
                                <div>
                                    <div className="text-sm font-semibold text-white/80">{phase.quarter}</div>
                                    <div className="text-2xl font-bold">{phase.title}</div>
                                </div>
                                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                                    <span className="text-2xl font-bold">{index + 1}️⃣</span>
                                </div>
                            </div>
                        </div>
                        <div className="p-6">
                            <ul className="grid md:grid-cols-2 gap-3">
                                {phase.items.map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                                        <span className="text-gray-300 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

function KPISection() {
    const kpiData = [
        {
            phase: 'Validasi',
            duration: '3-6 bulan',
            period: 'Q4 2025 - Q1 2026',
            color: 'from-gray-600 to-gray-500',
            metrics: [
                { label: '👥 Lead terkualifikasi', target: '10 leads/bulan', icon: Users },
                { label: '📦 Proyek pilot', target: '2-3 proyek sukses', icon: CheckCircle },
                { label: '⭐ Kepuasan klien', target: '≥70%', icon: Award }
            ]
        },
        {
            phase: 'Skala',
            duration: '6-9 bulan',
            period: 'Q2 - Q3 2026',
            color: 'from-gray-600 to-gray-500',
            metrics: [
                { label: '📊 Proyek per kuartal', target: '5-10 (Q2), 10-15 (Q3)', icon: TrendingUp },
                { label: '💰 Revenue growth', target: '200% YoY', icon: DollarSign },
                { label: '🎯 Cost per lead', target: '< Rp50K', icon: Target }
            ]
        },
        {
            phase: 'Retensi',
            duration: '3 bulan',
            period: 'Q4 2026',
            color: 'from-gray-600 to-gray-500',
            metrics: [
                { label: '🔄 Repeat order rate', target: '≥50% klien', icon: Users },
                { label: '🏆 Net Promoter Score', target: 'NPS ≥8/10', icon: Award },
                { label: '📦 Revenue subscription', target: '20% dari total', icon: DollarSign }
            ]
        }
    ];

    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    📊 KPI & Target Realistis
                </h2>
                <p className="text-white/90">📈 Metrik terukur setiap fase pertumbuhan</p>
            </div>

            <div className="space-y-6">
                {kpiData.map((phase, index) => (
                    <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                        <div className={`bg-gradient-to-r ${phase.color} p-6`}>
                            <div className="flex items-center justify-between mb-2">
                                <h3 className="text-2xl font-bold">📈 Fase {phase.phase}</h3>
                                <span className="bg-white/20 px-4 py-1 rounded-full text-sm">{phase.duration}</span>
                            </div>
                            <p className="text-white/80">{phase.period}</p>
                        </div>
                        <div className="p-6">
                            <div className="grid md:grid-cols-3 gap-4">
                                {phase.metrics.map((metric, i) => {
                                    const Icon = metric.icon;
                                    return (
                                        <div key={i} className="bg-white/5 rounded-lg p-4 border border-white/10">
                                            <Icon className="w-8 h-8 text-gray-300 mb-3" />
                                            <div className="text-sm text-gray-400 mb-1">{metric.label}</div>
                                            <div className="text-xl font-bold text-white">{metric.target}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Success Factors */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-gray-300">🔑 Kunci Sukses Scale-Up</h3>
                    <ul className="space-y-3">
                        {[
                            '👥 Proses & tim inti kuat (PM, Arsitek berpengalaman)',
                            '🏭 Fokus vertikal industri manufaktur/retail',
                            '🏆 Reputasi terbukti (studi kasus & referensi)',
                            '🤝 Hubungan klien lama & layanan purna jual',
                            '⚡ Teknologi CI/CD & otomasi testing'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{item}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-gray-300">📚 Studi Kasus Inspirasi</h3>
                    <div className="space-y-4">
                        <div>
                            <div className="font-semibold text-white mb-1">🎮 Agate (Indonesia)</div>
                            <p className="text-sm text-gray-300">Developer game terbesar Asia Tenggara, fokus full-cycle & inovasi VR/AR</p>
                        </div>
                        <div>
                            <div className="font-semibold text-white mb-1">🏢 Mitrais (Indonesia/Australia)</div>
                            <p className="text-sm text-gray-300">Melayani kesehatan & pertambangan, ekspansi multinasional</p>
                        </div>
                        <div>
                            <div className="font-semibold text-white mb-1">🤖 GITS Indonesia</div>
                            <p className="text-sm text-gray-300">Fokus IoT/AI, smart city & manufaktur pintar</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final CTA */}
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 text-center shadow-2xl">
                <h3 className="text-3xl font-bold mb-4">🎯 Target: 0 → 100 Proyek/Tahun</h3>
                <p className="text-xl text-white/90 mb-6">⚡ Dengan eksekusi konsisten, AKSATEQ siap menjadi agregator terkemuka tenaga TI freelance Indonesia</p>
                <div className="flex flex-wrap justify-center gap-4">
                    <div className="bg-white/20 px-6 py-3 rounded-lg">
                        <div className="text-2xl font-bold">2025-2028</div>
                        <div className="text-sm">📅 Periode Pertumbuhan</div>
                    </div>
                    <div className="bg-white/20 px-6 py-3 rounded-lg">
                        <div className="text-2xl font-bold">9.3%</div>
                        <div className="text-sm">📈 CAGR Industri</div>
                    </div>
                    <div className="bg-white/20 px-6 py-3 rounded-lg">
                        <div className="text-2xl font-bold">22%</div>
                        <div className="text-sm">👥 Kenaikan Demand SDM</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function OperationalSection() {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    ⚙️ Checklist Operasional & Quality Control
                </h2>
                <p className="text-white/90">📋 Sistem kerja terstandar untuk konsistensi kualitas</p>
            </div>

            {/* Quality Control */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 text-gray-300">✅ Quality Control Internal</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-gray-300" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">📝 Review Code & QA Rutin</h4>
                                <p className="text-sm text-gray-300">Peer review setiap deliverable sebelum dikirim ke klien</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-gray-300" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">🔄 Metodologi Agile</h4>
                                <p className="text-sm text-gray-300">Sprint 2-minggu dengan daily standup untuk transparansi</p>
                            </div>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-gray-300" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">🛠️ Tools Management</h4>
                                <p className="text-sm text-gray-300">Jira/Trello untuk tracking, Slack untuk komunikasi tim</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3">
                            <div className="w-8 h-8 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                <CheckCircle className="w-5 h-5 text-gray-300" />
                            </div>
                            <div>
                                <h4 className="font-semibold mb-1">⚡ Testing Otomatis</h4>
                                <p className="text-sm text-gray-300">CI/CD pipeline untuk automated testing & deployment</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Talent Management */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-gray-300 flex items-center gap-2">
                        👥 Seleksi & Manajemen Talent
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>• 🎯 Proses seleksi ketat: CV, portofolio, test kecil</li>
                        <li>• ⭐ Sistem peringkat/status Trusted setelah 3 proyek</li>
                        <li>• 📚 Pelatihan berkala untuk upgrade skill</li>
                        <li>• 💬 Komunitas freelancer aktif (Telegram/Discord)</li>
                        <li>• 💡 Feedback mutual untuk improvement</li>
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <h3 className="text-xl font-bold mb-4 text-gray-300 flex items-center gap-2">
                        💰 Sistem Escrow & Pembayaran
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-300">
                        <li>• 💳 Klien transfer ke AKSATEQ terlebih dahulu</li>
                        <li>• 🛡️ Dana ditahan hingga deliverable selesai</li>
                        <li>• 📦 Pembayaran ke freelancer setelah approval klien</li>
                        <li>• 🔓 Transparansi penuh untuk semua pihak</li>
                        <li>• ⚖️ Dispute resolution jika ada masalah</li>
                    </ul>
                </div>
            </div>

            {/* Project Flow */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">📋 Alur Proyek Standar</h3>
                <div className="grid md:grid-cols-4 gap-4">
                    {[
                        { step: '1️⃣', title: 'Onboarding', desc: 'NDA, kontrak, kickoff meeting' },
                        { step: '2️⃣', title: 'Planning', desc: 'Scope, timeline, resource allocation' },
                        { step: '3️⃣', title: 'Execution', desc: 'Sprint development, review rutin' },
                        { step: '4️⃣', title: 'Delivery', desc: 'Testing, deployment, post-mortem' }
                    ].map((item, i) => (
                        <div key={i} className="bg-gradient-to-br from-gray-500/10 to-gray-600/10 border border-gray-500/20 rounded-xl p-4">
                            <div className="w-10 h-10 bg-gray-500/20 rounded-full flex items-center justify-center mb-3 mx-auto">
                                <span className="text-xl font-bold text-gray-300">{item.step}</span>
                            </div>
                            <h4 className="font-semibold text-center mb-2">{item.title}</h4>
                            <p className="text-xs text-gray-400 text-center">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Customer Lifecycle */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">🔄 Siklus Hidup Klien (Customer Lifecycle)</h3>
                <div className="space-y-4">
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Target className="w-6 h-6 text-gray-300" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold mb-1">🎯 Akuisisi</h4>
                            <p className="text-sm text-gray-300">Lead generation (LinkedIn, cold email, webinar), proposal terstruktur, demo produk</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <FileText className="w-6 h-6 text-gray-300" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold mb-1">📝 Onboarding</h4>
                            <p className="text-sm text-gray-300">Penandatanganan kontrak, pengaturan ekspektasi, kickoff meeting, SLA agreement</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Zap className="w-6 h-6 text-gray-300" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold mb-1">⚡ Delivery/Support</h4>
                            <p className="text-sm text-gray-300">Pelaksanaan proyek, komunikasi rutin, progress report, quality control ketat</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gray-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                            <Award className="w-6 h-6 text-gray-300" />
                        </div>
                        <div className="flex-1">
                            <h4 className="font-semibold mb-1">🏆 Retensi</h4>
                            <p className="text-sm text-gray-300">Dukungan pasca-luncur, program loyalitas, upsell/cross-sell, maintenance subscription</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Reputation Management */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    🏆 Membangun Reputasi & Kepercayaan
                </h3>
                <div className="grid md:grid-cols-3 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-3">⭐ Social Proof</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>• 📊 Studi kasus naratif dengan ROI jelas</li>
                            <li>• 💬 Testimonial klien di website</li>
                            <li>• 🏢 Logo klien berprofil tinggi</li>
                            <li>• ⭐ Review di Clutch.co & GoodFirms</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-3">📜 Kredibilitas</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>• 🏅 Sertifikasi resmi (ISO, dll)</li>
                            <li>• 🤝 Kemitraan dengan brand ternama</li>
                            <li>• 📚 Publikasi whitepaper/research</li>
                            <li>• 🎖️ Award & pengakuan industri</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-3">🛡️ Garansi & SLA</h4>
                        <ul className="space-y-2 text-sm text-gray-300">
                            <li>• ✅ Garansi hasil (uptime SLA)</li>
                            <li>• 💸 Refund parsial jika tidak puas</li>
                            <li>• ⏰ Response time commitment</li>
                            <li>• 📋 Clear documentation</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

function LongTermSection() {
    return (
        <div className="space-y-6">
            <div className="bg-gradient-to-r from-gray-700 to-gray-600 rounded-2xl p-8 shadow-2xl">
                <h2 className="text-3xl font-bold mb-2 flex items-center gap-3">
                    🚀 Visi Jangka Panjang 2026-2028
                </h2>
                <p className="text-white/90">🏆 Menjadi agregator terkemuka tenaga TI freelance Indonesia</p>
            </div>

            {/* 6 Pilar Pengembangan */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <Globe className="w-8 h-8 text-gray-300" />
                        <h3 className="text-xl font-bold">🌐 Ekspansi Geografis</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 🏠 Fase 1: Kokoh di Semarang & Jawa Tengah</li>
                        <li>• 🏙️ Fase 2: Yogyakarta & Jawa Timur</li>
                        <li>• 🗺️ Fase 3: Skala nasional (Jakarta, Surabaya, Bali)</li>
                        <li>• 🏢 Model: Franchise digital atau kantor cabang kecil</li>
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <Database className="w-8 h-8 text-gray-300" />
                        <h3 className="text-xl font-bold">🛠️ Pengembangan Layanan</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• ☁️ Layanan SaaS/Cloud: modul IoT monitoring</li>
                        <li>• 📊 ERP standar untuk industri manufaktur</li>
                        <li>• 🔬 Kerjasama R&D smart factory/AI</li>
                        <li>• 📦 Subscription model untuk recurring revenue</li>
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <Zap className="w-8 h-8 text-gray-300" />
                        <h3 className="text-xl font-bold">⚡ Skalabilitas Operasional</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 🖥️ Platform internal (portal klien, dashboard)</li>
                        <li>• 🤖 Otomasi workflow untuk efisiensi</li>
                        <li>• 🔌 API integration untuk ekosistem digital</li>
                        <li>• 🎛️ Self-service portal untuk klien</li>
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <Award className="w-8 h-8 text-gray-300" />
                        <h3 className="text-xl font-bold">🏆 Penguatan Merek</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 🤝 Partnership dengan Making Indonesia 4.0</li>
                        <li>• 🏢 Kolaborasi dengan asosiasi industri</li>
                        <li>• 📚 Publikasi whitepaper & research report</li>
                        <li>• 🎤 Speaking engagement di konferensi</li>
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <Users className="w-8 h-8 text-gray-300" />
                        <h3 className="text-xl font-bold">👥 Peningkatan SDM</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 🚀 Program inkubasi developer internal</li>
                        <li>• 💻 Coding bootcamp untuk talent pool</li>
                        <li>• 🏅 Sertifikasi & upskilling berkelanjutan</li>
                        <li>• 👨‍🏫 Mentor program dari senior developer</li>
                    </ul>
                </div>

                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
                    <div className="flex items-center gap-3 mb-4">
                        <DollarSign className="w-8 h-8 text-gray-300" />
                        <h3 className="text-xl font-bold">💰 Keuangan Tahan Banting</h3>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-300">
                        <li>• 📈 Tingkatkan margin profit dengan efisiensi</li>
                        <li>• 🛡️ Dana darurat untuk fluktuasi krisis</li>
                        <li>• 🎯 Diversifikasi klien lintas sektor</li>
                        <li>• 📊 Multiple revenue streams (project + subscription)</li>
                    </ul>
                </div>
            </div>

            {/* Growth Projection */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">📈 Proyeksi Pertumbuhan 2025-2028</h3>
                <div className="grid md:grid-cols-4 gap-6">
                    <div className="text-center">
                        <div className="text-sm text-gray-400 mb-2">2025 (Q4)</div>
                        <div className="text-4xl font-bold text-gray-300 mb-1">2-3</div>
                        <div className="text-sm text-gray-300">📦 Proyek Pilot</div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-gray-400 mb-2">2026</div>
                        <div className="text-4xl font-bold text-gray-300 mb-1">25-40</div>
                        <div className="text-sm text-gray-300">📊 Proyek Total</div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-gray-400 mb-2">2027</div>
                        <div className="text-4xl font-bold text-gray-300 mb-1">60-80</div>
                        <div className="text-sm text-gray-300">📈 Proyek Total</div>
                    </div>
                    <div className="text-center">
                        <div className="text-sm text-gray-400 mb-2">2028</div>
                        <div className="text-4xl font-bold text-gray-300 mb-1">100+</div>
                        <div className="text-sm text-gray-300">🚀 Proyek Total</div>
                    </div>
                </div>
            </div>

            {/* Partnership Strategy */}
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold mb-6">🤝 Strategi Aliansi & Jaringan</h3>
                <div className="grid md:grid-cols-2 gap-6">
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-4">📊 Channel Partner</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Briefcase className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">👥 Channel HR</div>
                                    <p className="text-xs text-gray-400">Hubungan dengan HRD perusahaan & agensi rekrutmen teknologi</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Database className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">🏢 Vendor Industri</div>
                                    <p className="text-xs text-gray-400">Kolaborasi dengan vendor hardware/ERP sebagai subkontraktor</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-semibold text-gray-300 mb-4">🏢 Komunitas & Asosiasi</h4>
                        <div className="space-y-3">
                            <div className="flex items-start gap-3">
                                <Users className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">🚀 Startup & IT Community</div>
                                    <p className="text-xs text-gray-400">1000 Startup Digital, ACCI, Asosiasi TI & OSS</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <Lightbulb className="w-5 h-5 text-gray-300 mt-0.5 flex-shrink-0" />
                                <div>
                                    <div className="font-medium">💡 Inkubator/Accelerator</div>
                                    <p className="text-xs text-gray-400">Program Telkom, Kemenkominfo untuk akses modal & kredibilitas</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Final Vision */}
            <div className="bg-gradient-to-r from-gray-700 via-gray-600 to-gray-700 rounded-2xl p-8 shadow-2xl">
                <div className="text-center">
                    <Rocket className="w-16 h-16 mx-auto mb-4" />
                    <h3 className="text-3xl font-bold mb-4">🎯 Target 2028: Agregator Terkemuka</h3>
                    <p className="text-xl text-white/90 mb-6">
                        ⚡ Dengan eksekusi strategi yang konsisten dan fokus pada kualitas, AKSATEQ akan menjadi pilihan utama perusahaan Indonesia untuk solusi digital
                    </p>
                    <div className="grid md:grid-cols-3 gap-6 mt-8">
                        <div className="bg-white/20 rounded-xl p-6">
                            <BarChart3 className="w-10 h-10 mx-auto mb-3" />
                            <div className="text-2xl font-bold mb-1">100+</div>
                            <div className="text-sm">📦 Proyek per Tahun</div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-6">
                            <Users className="w-10 h-10 mx-auto mb-3" />
                            <div className="text-2xl font-bold mb-1">50+</div>
                            <div className="text-sm">⭐ Freelancer Trusted</div>
                        </div>
                        <div className="bg-white/20 rounded-xl p-6">
                            <Globe className="w-10 h-10 mx-auto mb-3" />
                            <div className="text-2xl font-bold mb-1">🌐 Nasional</div>
                            <div className="text-sm">🗺️ Jangkauan Pasar</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}