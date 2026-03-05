"use client";

import React, { useState, type FC, type ReactNode } from 'react';
import { 
  ChevronRight, 
  ChevronDown, 
  Lightbulb, 
  Target, 
  Settings, 
  BarChart3, 
  BookOpen, 
  Award,
  type LucideIcon
} from 'lucide-react';
import { SmoothCursor } from '@/components/ux/smooth-cursor';

const NotionPage: FC = () => {
  const [expandedSections, setExpandedSections] = useState({
    ide: true,
    judul: true,
    latar: true,
    rumusan: true,
    tujuan: true,
    batasan: true,
    metodologi: true,
    evaluasi: true,
    manfaat: true,
    struktur: true,
    perbandingan: true
  });

  type SectionId = keyof typeof expandedSections;

  const toggleSection = (section: SectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  interface TableRowProps {
    label: string;
    baseline: string;
    refactor: string;
    improvement: string;
    isGreen?: boolean;
  }

  const TableRow: FC<TableRowProps> = ({ label, baseline, refactor, improvement, isGreen = true }) => (
    <tr className="border-b border-gray-100 dark:border-gray-800">
      <td className="py-3 px-4 text-sm font-medium text-gray-900 dark:text-gray-100">{label}</td>
      <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{baseline}</td>
      <td className="py-3 px-4 text-sm text-gray-600 dark:text-gray-400">{refactor}</td>
      <td className="py-3 px-4 text-sm">
        <span className={`px-2 py-1 rounded-full text-xs font-medium ${isGreen 
          ? 'bg-green-100 text-green-800 dark:bg-green-900/50 dark:text-green-300' 
          : 'bg-blue-100 text-blue-800 dark:bg-blue-900/50 dark:text-blue-300'
        }`}>
          {improvement}
        </span>
      </td>
    </tr>
  );

  interface SectionProps {
    id: SectionId;
    title: string;
    icon?: LucideIcon;
    children: ReactNode;
    highlight?: boolean;
  }

  const Section: FC<SectionProps> = ({ id, title, icon: Icon, children, highlight = false }) => (
    <div className={`mb-6 ${highlight ? 'bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-500/30 rounded-lg p-4' : ''}`}>
      <div 
        className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-800/50 rounded p-2 -ml-2"
        onClick={() => toggleSection(id)}
      >
        {expandedSections[id] ? (
          <ChevronDown className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        ) : (
          <ChevronRight className="w-4 h-4 text-gray-600 dark:text-gray-400" />
        )}
        {Icon && <Icon className="w-5 h-5 text-gray-700 dark:text-gray-300" />}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100">{title}</h2>
      </div>
      {expandedSections[id] && (
        <div className="ml-6 mt-3">
          {children}
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header */}
      <SmoothCursor />
      <div id="draft" className="border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="text-2xl">📑</div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Draft Proposal TA</h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-8">
        {/* IDE Section - Highlighted */}
        <Section id="ide" title="💡 IDE: Refactoring / Re-Engineering" icon={Lightbulb} highlight={true}>
          <div className="bg-white dark:bg-gray-900/30 rounded-lg p-4 border border-yellow-300 dark:border-yellow-500/50">
            <p className="text-gray-700 dark:text-gray-300 mb-3 font-medium">Pada intinya seperti ini:</p>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Pada magang TVKU, saya berprofesi sebagai Frontend. saya disuruh untuk memodernisasi dengan cara memigrasi dari CI2 ke Next.js.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Instruksi dari atasan sangat amburadul sehingga website akhirnya jadi, tapi sangat tidak efektif secara code.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>Saya berencana untuk membuat ulang (Refactoring) versi best practice saya sendiri dan membandingkannya dengan versi baseline (ikut arahan atasan(magang)).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>sehingga membuat <em className="bg-yellow-200 dark:bg-yellow-400/20 dark:text-yellow-200 px-1 rounded">best practice</em> ini lebih baik dengan bukti data data perbandingan dalam bentuk angka.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>harapannya hasil TA bisa dianggap <em className="bg-yellow-200 dark:bg-yellow-400/20 dark:text-yellow-200 px-1 rounded">guideline atau benchmark</em>: bagaimana refactoring modern dengan Next.js bisa meningkatkan kualitas web dari sistem lama.</span>
              </li>
            </ul>
          </div>
        </Section>

        {/* Calon Judul */}
        <Section id="judul" title="🎓 Calon Judul Sementara" icon={BookOpen}>
          <div className="space-y-3">
            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-500/30">
              <p className="font-semibold text-blue-900 dark:text-blue-200">Perancangan Ulang Arsitektur Frontend Sistem Informasi Perusahaan TVKU dengan Next.js dan Tailwind CSS untuk Meningkatkan Maintainability dan Performa</p>
            </div>
            <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-500/30">
              <p className="font-semibold text-green-900 dark:text-green-200">Modernisasi Frontend Website TVKU Menggunakan Next.js: Studi Kasus Refactoring dari CodeIgniter</p>
            </div>
            <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-500/30">
              <p className="font-semibold text-purple-900 dark:text-purple-200">Perbandingan Performa dan Maintainability pada Migrasi Website TVKU dari CodeIgniter 2 ke Next.js: Studi Kasus Implementasi Mitra vs Refactoring Best Practice</p>
            </div>
          </div>
        </Section>

        {/* Latar Belakang */}
        <Section id="latar" title="✨ Latar Belakang" icon={Target}>
          <ul className="space-y-3">
            <li className="flex items-start gap-3 text-gray-800 dark:text-gray-300">
              <span className="text-xl">🌐</span>
              <span><strong>Kebutuhan industri</strong> saat ini menuntut website yang cepat, responsif, dan mudah dipelihara.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-800 dark:text-gray-300">
              <span className="text-xl">🏢</span>
              <span>Pada praktik magang di <strong>Perusahaan TVKU</strong>, saya diminta melakukan migrasi sistem dari <strong>CodeIgniter 2</strong> ke <strong>Next.js</strong>.</span>
            </li>
            <li className="flex items-start gap-3 text-gray-800 dark:text-gray-300">
              <span className="text-xl">⚠️</span>
              <div>
                <span><strong>Hasil migrasi awal memiliki sejumlah kelemahan:</strong></span>
                <ul className="mt-2 ml-4 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• Struktur kode <strong>tidak konsisten</strong> dan sulit dipelihara,</li>
                  <li>• <strong>Performa kurang optimal</strong> (loading lambat, bundle besar),</li>
                  <li>• Pemanfaatan Next.js modern <strong>belum maksimal</strong> (masih mirip SPA biasa).</li>
                </ul>
              </div>
            </li>
            <li className="flex items-start gap-3 text-gray-800 dark:text-gray-300">
              <span className="text-xl">💡</span>
              <div>
                <span>Hal ini membuka peluang untuk melakukan <strong>rekayasa ulang (refactoring)</strong> arsitektur frontend agar:</span>
                <ul className="mt-2 ml-4 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>• lebih <strong>maintainable</strong>,</li>
                  <li>• lebih <strong>performant</strong>,</li>
                  <li>• dan sesuai <strong>best practice modern web development</strong>.</li>
                </ul>
              </div>
            </li>
          </ul>
        </Section>

        {/* Rumusan Masalah */}
        <Section id="rumusan" title="❓ Rumusan Masalah">
          <ol className="space-y-2 text-gray-800 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 dark:text-blue-400">1.</span>
              <span>Bagaimana merancang ulang arsitektur frontend Next.js yang <strong>modular dan maintainable</strong>?</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 dark:text-blue-400">2.</span>
              <span>Sejauh mana refactoring meningkatkan <strong>performa</strong> website (LCP, CLS, TTFB, bundle size)?</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-blue-600 dark:text-blue-400">3.</span>
              <span>Bagaimana evaluasi perbandingan antara versi migrasi awal dan versi refactor?</span>
            </li>
          </ol>
        </Section>

        {/* Tujuan */}
        <Section id="tujuan" title="🎯 Tujuan Penelitian">
          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-xl">📌</span>
              <span>Merancang arsitektur frontend berbasis <strong>Next.js + Tailwind CSS</strong> yang rapi dan konsisten.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">⚡</span>
              <span>Mengoptimalkan <strong>performa rendering</strong> dengan strategi Next.js (CSR, SSR, SSG, ISR).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">📊</span>
              <span>Mengevaluasi peningkatan <strong>maintainability dan performa</strong> dibanding versi baseline (hasil magang).</span>
            </li>
          </ul>
        </Section>

        {/* Batasan Masalah */}
        <Section id="batasan" title="📍 Batasan Masalah">
          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-xl">🚫</span>
              <span>Fokus pada <strong>frontend</strong> (tidak membahas backend CI2 atau API internal).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">🧩</span>
              <span>Refactoring dilakukan pada <strong>modul inti saja</strong> (contoh: halaman produk, dashboard admin, daftar artikel).</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">🛠️</span>
              <span>Evaluasi dibatasi pada <strong>performa web, maintainability kode, dan developer experience dasar</strong>.</span>
            </li>
          </ul>
        </Section>

        {/* Metodologi */}
        <Section id="metodologi" title="🛠️ Metodologi" icon={Settings}>
          <ol className="space-y-3 text-gray-800 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="font-bold text-green-600 dark:text-green-400">1.</span>
              <span><strong>Identifikasi Masalah</strong> → analisis kelemahan versi migrasi magang.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-600 dark:text-green-400">2.</span>
              <span><strong>Perancangan Solusi</strong> → desain ulang arsitektur Next.js (App Router, Tailwind, modular components).</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-600 dark:text-green-400">3.</span>
              <span><strong>Implementasi Refactor</strong> → bangun versi ideal pada subset fitur.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-600 dark:text-green-400">4.</span>
              <div>
                <span><strong>Evaluasi</strong>:</span>
                <ul className="mt-2 ml-4 space-y-1 text-gray-600 dark:text-gray-400">
                  <li>📊 <strong>Performa</strong>: uji Web Vitals (Lighthouse/PageSpeed).</li>
                  <li>📈 <strong>Maintainability</strong>: kompleksitas kode, duplikasi, struktur komponen, linting.</li>
                  <li>👨‍💻 <strong>Developer Experience</strong>: kemudahan memahami & mengembangkan ulang modul.</li>
                </ul>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-green-600 dark:text-green-400">5.</span>
              <span><strong>Kesimpulan & Rekomendasi</strong>.</span>
            </li>
          </ol>
        </Section>

        {/* Evaluasi */}
        <Section id="evaluasi" title="📊 Evaluasi (Before vs After)" icon={BarChart3}>
          <div className="bg-gray-50 dark:bg-gray-800/50 p-4 rounded-lg text-gray-800 dark:text-gray-300">
            <ul className="space-y-2">
              <li><strong>Baseline</strong>: versi magang (Bootstrap, kode acak).</li>
              <li><strong>Refactor</strong>: versi best practice (Next.js modern + Tailwind).</li>
            </ul>
            <div className="mt-4">
              <p className="font-medium mb-2">📌 Aspek yang diuji:</p>
              <ul className="space-y-1 text-gray-600 dark:text-gray-400 ml-4">
                <li>🚀 Loading performance (LCP, INP, CLS, TTFB, FCP),</li>
                <li>📦 Bundle size & request count,</li>
                <li>🧩 Reusability & struktur komponen,</li>
                <li>✅ Konsistensi linting & code quality.</li>
              </ul>
            </div>
            <p className="mt-3 text-gray-600 dark:text-gray-400">Hasil akan ditampilkan dalam <strong>tabel perbandingan + grafik</strong>.</p>
          </div>
        </Section>

        {/* Manfaat */}
        <Section id="manfaat" title="🎁 Manfaat Penelitian" icon={Award}>
          <ul className="space-y-3 text-gray-800 dark:text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-xl">🏫</span>
              <span><strong>Akademis</strong>: kontribusi ilmiah berupa panduan refactor dari legacy → modern frontend.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">🏢</span>
              <span><strong>Industri</strong>: rekomendasi nyata bagi perusahaan untuk membangun aplikasi web yang lebih <strong>efisien dan mudah dikelola</strong>.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-xl">👨‍💻</span>
              <span><strong>Pribadi</strong>: meningkatkan kemampuan praktis dalam <strong>arsitektur frontend modern</strong>.</span>
            </li>
          </ul>
        </Section>

        {/* Struktur Laporan */}
        <Section id="struktur" title="🗂️ Struktur Laporan (rencana BAB)">
          <ol className="space-y-2 text-gray-800 dark:text-gray-300">
            <li className="flex gap-3">
              <span className="font-bold text-purple-600 dark:text-purple-400">1.</span>
              <span><strong>Pendahuluan</strong> → latar belakang, rumusan masalah, tujuan, batasan, manfaat.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600 dark:text-purple-400">2.</span>
              <span><strong>Tinjauan Pustaka</strong> → Next.js, rendering (CSR/SSR/SSG/ISR), Tailwind vs Bootstrap, maintainability metrics.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600 dark:text-purple-400">3.</span>
              <span><strong>Metodologi Penelitian</strong> → DSR/case study, tahapan refactor, instrumen evaluasi.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600 dark:text-purple-400">4.</span>
              <span><strong>Implementasi & Evaluasi</strong> → deskripsi baseline, refactor, hasil pengukuran & analisis.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-bold text-purple-600 dark:text-purple-400">5.</span>
              <span><strong>Kesimpulan & Saran</strong> → jawaban rumusan masalah, rekomendasi.</span>
            </li>
          </ol>
        </Section>

        {/* Catatan Presentasi */}
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-500/30 rounded-lg p-4 mb-6">
          <h3 className="flex items-center gap-2 font-semibold text-blue-900 dark:text-blue-200 mb-3">
            <span className="text-xl">💡</span>
            Catatan Presentasi ke Dosen:
          </h3>
          <ul className="space-y-2 text-blue-800 dark:text-blue-300">
            <li>• Tekankan bahwa kamu <strong>sudah punya mitra nyata (perusahaan magang)</strong>.</li>
            <li>• Jelaskan masalah yang <strong>real (kode kocar-kacir, maintainability buruk)</strong>.</li>
            <li>• Tunjukkan kontribusi ilmiah: <strong>perbandingan sebelum–sesudah dengan metrik objektif</strong>.</li>
            <li>• Sampaikan bahwa scope terbatas → <strong>tidak refactor semua fitur</strong>, hanya subset representatif.</li>
          </ul>
        </div>

        {/* Perbandingan Tables */}
        <Section id="perbandingan" title="📊 Contoh Perbandingan Before vs After Refactor">
          <div className="space-y-6">
            {/* Performance Table */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100 mb-3">
                <span className="text-xl">🔎</span>
                Aspek Performa
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Aspek Uji</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Versi Magang (Bootstrap, acak)</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Versi Refactor (Next.js + Tailwind)</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Peningkatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow label="⏱️ LCP (Largest Contentful Paint)" baseline="4.8s" refactor="2.3s" improvement="✅ Lebih cepat" />
                    <TableRow label="⚡ TTFB (Time to First Byte)" baseline="600ms" refactor="180ms" improvement="✅ Lebih ringan" />
                    <TableRow label="📦 Bundle Size" baseline="1.2 MB" refactor="600 KB" improvement="✅ Lebih kecil" />
                    <TableRow label="📉 Request Count" baseline="90+" refactor="45" improvement="✅ Lebih efisien" />
                    <TableRow label="🌀 CLS (Cumulative Layout Shift)" baseline="0.28" refactor="0.02" improvement="✅ Lebih stabil" />
                    <TableRow label="🖥️ Responsiveness (mobile/desktop)" baseline="Tidak konsisten" refactor="Optimal (responsif)" improvement="✅" />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Maintainability Table */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100 mb-3">
                <span className="text-xl">🧩</span>
                Aspek Maintainability
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Aspek Uji</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Versi Magang</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Versi Refactor</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow label="📁 Struktur Folder" baseline="Campur, tidak modular" refactor="Modular (by feature/component)" improvement="Lebih mudah dipahami" isGreen={false} />
                    <TableRow label="🎨 UI Framework" baseline="Bootstrap (via AI, tidak konsisten)" refactor="Tailwind (utility-first, konsisten)" improvement="Modern & maintainable" isGreen={false} />
                    <TableRow label="🧹 Code Duplication" baseline="Tinggi" refactor="Rendah" improvement="Komponen reusable" isGreen={false} />
                    <TableRow label="✅ Linting & Format" baseline="Tidak ada standar" refactor="ESLint + Prettier" improvement="Developer friendly" isGreen={false} />
                    <TableRow label="📖 Documentation" baseline="Tidak ada" refactor="Ada README + guideline" improvement="Lebih jelas" isGreen={false} />
                  </tbody>
                </table>
              </div>
            </div>

            {/* Developer Experience Table */}
            <div>
              <h4 className="flex items-center gap-2 font-semibold text-gray-900 dark:text-gray-100 mb-3">
                <span className="text-xl">👨‍💻</span>
                Developer Experience
              </h4>
              <div className="overflow-x-auto">
                <table className="w-full bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <thead className="bg-gray-50 dark:bg-gray-800/50">
                    <tr>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Aspek Uji</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Versi Magang</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Versi Refactor</th>
                      <th className="py-3 px-4 text-left text-sm font-semibold text-gray-900 dark:text-gray-100 border-b border-gray-200 dark:border-gray-700">Catatan</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow label="🛠️ Kemudahan Debugging" baseline="Sulit (kode bercampur)" refactor="Mudah (clear separation)" improvement="-" isGreen={false} />
                    <TableRow label="🚀 Kecepatan Develop" baseline="Lambat (banyak ulang tulis)" refactor="Cepat (reusable components)" improvement="-" isGreen={false} />
                    <TableRow label="📚 Learning Curve" baseline="Tidak jelas" refactor="Jelas, best practice Next.js" improvement="Bisa jadi pedoman" isGreen={false} />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
};

export default NotionPage;