'use client'

import { useMemo, useState } from 'react'
import {
  Activity,
  AlertTriangle,
  ArrowDownRight,
  ArrowUpRight,
  BarChart3,
  Bell,
  CheckCircle2,
  ChevronDown,
  CircleHelp,
  Database,
  Download,
  FileText,
  Filter,
  Globe2,
  Languages,
  MapPin,
  Menu,
  Search,
  Server,
  Settings2,
  ShieldCheck,
  Table2,
  TrendingUp,
  X,
  Zap,
} from 'lucide-react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { getTranslation, type Language } from '@/lib/i18n'
import { mockAirlines, mockAlerts, mockCityData, mockDataQuality, mockKPIs, mockLiveFares, mockRoutes, mockTrendData } from '@/lib/mock-data'

const languages: { code: Language; label: string }[] = [
  { code: 'en', label: 'English' }, { code: 'te', label: 'తెలుగు' }, { code: 'hi', label: 'हिन्दी' }, { code: 'ta', label: 'தமிழ்' },
  { code: 'kn', label: 'ಕನ್ನಡ' }, { code: 'ml', label: 'മലയാളം' }, { code: 'mr', label: 'मराठी' }, { code: 'bn', label: 'বাংলা' },
]

const navKeys = ['dashboard', 'index', 'liveMonitor', 'routes', 'airlines', 'dataSources', 'analytics', 'reports', 'methodology', 'about'] as const
const chartColors = ['#0b3a68', '#0c7691', '#f28c28', '#6998ad', '#e2b24c', '#56727d']

function formatNumber(value: number) { return new Intl.NumberFormat('en-IN').format(value) }
function getCityColor(activity: number) { return activity > 80 ? '#0b3a68' : activity > 60 ? '#0c7691' : activity > 45 ? '#e2b24c' : '#f28c28' }

export default function Page() {
  const [language, setLanguage] = useState<Language>('en')
  const [activeNav, setActiveNav] = useState('dashboard')
  const [range, setRange] = useState<'today' | '7days' | '30days' | '3months' | '6months' | '1year'>('30days')
  const [search, setSearch] = useState('')
  const [mobileMenu, setMobileMenu] = useState(false)
  const [selectedCity, setSelectedCity] = useState(mockCityData[0])
  const t = (path: string, fallback = '') => getTranslation(language, path, fallback)
  const filteredFares = useMemo(() => mockLiveFares.filter((fare) => `${fare.airline} ${fare.origin} ${fare.destination}`.toLowerCase().includes(search.toLowerCase())), [search])
  const navLabel = (key: string) => t(`nav.${key}`, key)

  return (
    <main className="min-h-screen bg-[#f4f7fa] text-[#15344b]">
      <header className="border-b border-[#d7e0e6] bg-white">
        <div className="h-1 bg-[#f28c28]" />
        <div className="mx-auto flex max-w-[1600px] items-center justify-between gap-4 px-4 py-3 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <div className="grid size-11 shrink-0 place-items-center rounded-full border-2 border-[#0b3a68] text-[#0b3a68]" aria-label="Government emblem placeholder"><Globe2 size={25} strokeWidth={1.4} /></div>
            <div className="hidden leading-tight sm:block"><p className="font-serif text-sm font-bold text-[#0b3a68]">Government of India</p><p className="max-w-[265px] text-[10px] text-slate-500">{t('header.ministry')}</p><p className="text-[10px] text-slate-500">{t('header.division')}</p></div>
          </div>
          <div className="min-w-0 flex-1 text-center"><p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#f28c28]">SIH 2026 • SIH26056</p><h1 className="truncate font-serif text-lg font-bold text-[#0b3a68] md:text-2xl">{t('header.title')}</h1><p className="hidden text-xs text-slate-500 md:block">{t('header.subtitle')}</p></div>
          <div className="flex items-center gap-2"><div className="relative hidden md:block"><Languages className="absolute left-2 top-2.5 text-[#0b3a68]" size={15} /><select value={language} onChange={(e) => setLanguage(e.target.value as Language)} className="h-9 w-[116px] appearance-none rounded border border-[#d7e0e6] bg-white pl-8 pr-6 text-xs font-semibold text-[#0b3a68] outline-none"><option value="en">English</option>{languages.slice(1).map((item) => <option key={item.code} value={item.code}>{item.label}</option>)}</select><ChevronDown className="pointer-events-none absolute right-2 top-3 text-slate-400" size={13} /></div><button className="grid size-9 place-items-center rounded border border-[#d7e0e6] text-[#0b3a68] hover:bg-[#eef4f7]" aria-label="Notifications"><Bell size={17} /></button><button className="grid size-9 place-items-center rounded bg-[#0b3a68] text-white md:hidden" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Open menu">{mobileMenu ? <X size={18} /> : <Menu size={18} />}</button></div>
        </div>
        <div className="mx-auto max-w-[1600px] border-t border-[#edf1f3] px-4 lg:px-8"><nav className={`${mobileMenu ? 'flex' : 'hidden'} flex-col gap-1 py-2 md:flex md:flex-row md:items-center md:gap-5`} aria-label="Main navigation">{navKeys.map((key) => <button key={key} onClick={() => { setActiveNav(key); setMobileMenu(false) }} className={`border-b-2 px-1 py-3 text-left text-xs font-semibold transition-colors ${activeNav === key ? 'border-[#f28c28] text-[#0b3a68]' : 'border-transparent text-slate-500 hover:text-[#0b3a68]'}`}>{navLabel(key)}</button>)}</nav></div>
      </header>

      <div className="mx-auto max-w-[1600px] px-4 py-5 lg:px-8">
        <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end"><div><div className="mb-2 flex flex-wrap gap-2"><span className="rounded bg-[#eaf1f6] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0b3a68]">Demo Mode</span><span className="rounded bg-[#fff2e4] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#a3530c]">Smart Automation</span><span className="rounded bg-[#eaf1f6] px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-[#0b3a68]">MoSPI • DIID</span></div><h2 className="font-serif text-2xl font-bold text-[#15344b] md:text-3xl">{activeNav === 'dashboard' ? 'Executive Dashboard' : navLabel(activeNav)}</h2><p className="mt-1 max-w-3xl text-sm text-slate-500">{t('header.subtitle')}</p></div><div className="flex items-center gap-2"><div className="relative"><Search className="absolute left-2.5 top-2.5 text-slate-400" size={15} /><input value={search} onChange={(e) => setSearch(e.target.value)} className="h-9 w-48 rounded border border-[#d7e0e6] bg-white pl-8 text-xs outline-none ring-[#0b3a68] focus:ring-1" placeholder={t('common.search', 'Search')} /></div><button className="flex h-9 items-center gap-2 rounded border border-[#d7e0e6] bg-white px-3 text-xs font-semibold text-[#0b3a68]"><Filter size={14} />{t('common.filter', 'Filter')}</button></div></div>

        <section className="grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-8" aria-label="Key performance indicators">
          <KpiCard label={t('dashboard.kpi.currentIndex')} value={mockKPIs.currentIndex.toFixed(1)} suffix="base 100" accent="navy" icon={<TrendingUp size={17} />} />
          <KpiCard label={t('dashboard.kpi.dailyChange')} value={`+${mockKPIs.dailyChange}%`} suffix="vs yesterday" accent="orange" icon={<ArrowUpRight size={17} />} />
          <KpiCard label={t('dashboard.kpi.weeklyChange')} value={`+${mockKPIs.weeklyChange}%`} suffix="vs last week" accent="teal" icon={<ArrowUpRight size={17} />} />
          <KpiCard label={t('dashboard.kpi.monthlyChange')} value={`+${mockKPIs.monthlyChange}%`} suffix="vs last month" accent="orange" icon={<ArrowUpRight size={17} />} />
          <KpiCard label={t('dashboard.kpi.routesTracked')} value={formatNumber(mockKPIs.routesTracked)} suffix="active routes" accent="navy" icon={<MapPin size={17} />} />
          <KpiCard label={t('dashboard.kpi.dataPointsCollected')} value="1.28M" suffix="last 24 hours" accent="teal" icon={<Database size={17} />} />
          <KpiCard label={t('dashboard.kpi.airlinesCovered')} value={String(mockKPIs.airlinesCovered)} suffix="demo partners" accent="navy" icon={<Activity size={17} />} />
          <KpiCard label={t('dashboard.kpi.dataSources')} value={String(mockKPIs.dataSourcesCount)} suffix="configured" accent="orange" icon={<Server size={17} />} />
        </section>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.6fr)_minmax(320px,0.9fr)]">
          <Panel title={t('dashboard.trend')} icon={<BarChart3 size={18} />} action={<div className="flex rounded border border-[#d7e0e6] bg-white p-0.5">{(['today','7days','30days','3months','6months','1year'] as const).map((item) => <button key={item} onClick={() => setRange(item)} className={`px-2 py-1 text-[10px] font-semibold ${range === item ? 'rounded bg-[#0b3a68] text-white' : 'text-slate-500'}`}>{t(`common.${item}`, item)}</button>)}</div>}>
            <div className="h-[285px] w-full"><ResponsiveContainer width="100%" height="100%"><AreaChart data={mockTrendData} margin={{ top: 12, right: 12, left: -20, bottom: 0 }}><defs><linearGradient id="indexFill" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#0c7691" stopOpacity={0.22} /><stop offset="100%" stopColor="#0c7691" stopOpacity={0} /></linearGradient></defs><CartesianGrid stroke="#e8eef1" vertical={false} /><XAxis dataKey="date" tick={{ fontSize: 10, fill: '#78909c' }} axisLine={false} tickLine={false} /><YAxis domain={[95, 135]} tick={{ fontSize: 10, fill: '#78909c' }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ border: '1px solid #d7e0e6', borderRadius: 4, fontSize: 12 }} /><Area type="monotone" dataKey="index" stroke="#0c7691" fill="url(#indexFill)" strokeWidth={2.5} name="Index" /></AreaChart></ResponsiveContainer></div><div className="flex items-center justify-between border-t border-[#edf1f3] pt-3 text-xs"><span className="text-slate-500">Current index <strong className="ml-1 text-lg text-[#0b3a68]">128.6</strong></span><span className="flex items-center gap-1 font-semibold text-emerald-600"><ArrowUpRight size={14} /> +8.2% this month</span><span className="hidden text-slate-400 sm:block">Previous period: 118.9</span></div>
          </Panel>
          <Panel title={t('dashboard.cityActivity')} icon={<MapPin size={18} />} action={<button className="text-[11px] font-semibold text-[#0c7691]">View map →</button>}>
            <div className="flex gap-4"><div className="relative hidden h-[225px] w-[160px] shrink-0 items-center justify-center overflow-hidden rounded bg-[#edf4f7] sm:flex"><div className="absolute inset-x-5 top-6 h-44 rotate-[22deg] rounded-[45%_55%_38%_62%] border-2 border-dashed border-[#8eb4c3] bg-[#dfeef2]" />{mockCityData.slice(0, 7).map((city, index) => <button key={city.city} onClick={() => setSelectedCity(city)} className="absolute z-10 size-3 rounded-full border-2 border-white shadow" style={{ backgroundColor: getCityColor(city.activity), left: `${35 + (index % 3) * 20}%`, top: `${23 + index * 10}%` }} aria-label={city.city} />)}</div><div className="min-w-0 flex-1"><div className="mb-3 rounded border border-[#d7e0e6] bg-[#f8fafb] p-3"><p className="text-xs font-bold text-[#0b3a68]">{selectedCity.city}</p><p className="mt-1 text-xl font-bold text-[#15344b]">₹{formatNumber(selectedCity.avgFare)}</p><p className="text-[10px] text-slate-500">Average fare • {selectedCity.routes} routes</p></div><div className="space-y-2">{mockCityData.slice(0, 5).map((city) => <button key={city.city} onClick={() => setSelectedCity(city)} className="flex w-full items-center gap-2 text-left"><span className="size-2 rounded-full" style={{ backgroundColor: getCityColor(city.activity) }} /><span className="flex-1 text-xs text-slate-600">{city.city}</span><span className="text-[10px] font-bold text-[#0b3a68]">{city.activity}%</span><div className="h-1.5 w-16 overflow-hidden rounded-full bg-[#e4edf0]"><div className="h-full rounded-full" style={{ width: `${city.activity}%`, backgroundColor: getCityColor(city.activity) }} /></div></button>)}</div></div></div>
          </Panel>
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(300px,0.8fr)]">
          <Panel title={t('dashboard.liveFares')} icon={<Activity size={18} />} action={<button onClick={() => setActiveNav('liveMonitor')} className="text-[11px] font-semibold text-[#0c7691]">Open monitor →</button>}><div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-xs"><thead><tr className="border-b border-[#d7e0e6] text-[10px] uppercase tracking-wider text-slate-400"><th className="pb-2 font-semibold">Time</th><th className="pb-2 font-semibold">Airline / Source</th><th className="pb-2 font-semibold">Route</th><th className="pb-2 font-semibold">Travel date</th><th className="pb-2 text-right font-semibold">Fare</th><th className="pb-2 text-right font-semibold">Status</th></tr></thead><tbody>{filteredFares.map((fare) => <tr key={`${fare.timestamp}-${fare.airline}`} className="border-b border-[#edf1f3] last:border-0"><td className="py-3 text-slate-500">{fare.timestamp}</td><td className="py-3"><p className="font-semibold text-[#15344b]">{fare.airline}</p><p className="text-[10px] text-slate-400">{fare.source}</p></td><td className="py-3 font-medium">{fare.origin} <span className="text-slate-400">→</span> {fare.destination}</td><td className="py-3 text-slate-500">{fare.travelDate}</td><td className="py-3 text-right font-bold text-[#0b3a68]">₹{formatNumber(fare.fare)}</td><td className="py-3 text-right"><span className="inline-flex items-center gap-1 rounded-full bg-[#e7f5ef] px-2 py-1 text-[10px] font-semibold text-emerald-700"><CheckCircle2 size={11} /> {fare.status}</span></td></tr>)}</tbody></table></div><div className="mt-3 flex items-center justify-between border-t border-[#edf1f3] pt-3 text-[10px] text-slate-400"><span>Showing {filteredFares.length} of 128,000 observations</span><span className="flex items-center gap-1"><span className="size-1.5 rounded-full bg-emerald-500" /> Updated 2 minutes ago</span></div></Panel>
          <Panel title={t('dashboard.alerts')} icon={<Bell size={18} />} action={<button className="text-[11px] font-semibold text-[#0c7691]">View all</button>}><div className="space-y-1">{mockAlerts.map((alert) => <div key={alert.id} className="flex gap-3 border-b border-[#edf1f3] py-3 last:border-0"><div className={`mt-0.5 grid size-7 shrink-0 place-items-center rounded ${alert.type === 'warning' ? 'bg-[#fff2e4] text-[#d96f08]' : alert.type === 'success' ? 'bg-[#e7f5ef] text-emerald-700' : 'bg-[#eaf1f6] text-[#0c7691]'}`}>{alert.type === 'warning' ? <AlertTriangle size={14} /> : alert.type === 'success' ? <CheckCircle2 size={14} /> : <Bell size={14} />}</div><div><p className="text-xs leading-5 text-[#15344b]">{alert.message}</p><p className="mt-0.5 text-[10px] text-slate-400">{alert.time}</p></div></div>)}</div></Panel>
        </div>

        <div className="mt-5 grid gap-5 md:grid-cols-3">
          <Panel title="Data Quality" icon={<ShieldCheck size={18} />}><div className="flex items-center gap-5"><div className="relative grid size-28 shrink-0 place-items-center rounded-full" style={{ background: `conic-gradient(#0c7691 ${mockDataQuality.validationSuccessRate * 3.6}deg, #e6eef1 0deg)` }}><div className="grid size-20 place-items-center rounded-full bg-white"><span className="text-xl font-bold text-[#0b3a68]">{mockDataQuality.validationSuccessRate}%</span></div></div><div className="flex-1 space-y-2 text-[11px]"><div className="flex justify-between"><span className="text-slate-500">Records collected</span><strong>{formatNumber(mockDataQuality.recordsCollected)}</strong></div><div className="flex justify-between"><span className="text-slate-500">Validated</span><strong className="text-emerald-700">{formatNumber(mockDataQuality.recordsValidated)}</strong></div><div className="flex justify-between"><span className="text-slate-500">Rejected</span><strong className="text-[#d96f08]">{formatNumber(mockDataQuality.recordsRejected)}</strong></div></div></div></Panel>
          <Panel title="Smart Automation" icon={<Zap size={18} />}><div className="grid grid-cols-2 gap-2">{[['Scraping engine','Demo mode','orange'],['Data processing','Running','teal'],['Validation engine','Active','green'],['Index calculation','Active','green']].map(([label, status, color]) => <div key={label} className="rounded border border-[#e3eaee] p-2.5"><p className="text-[10px] text-slate-500">{label}</p><p className={`mt-1 flex items-center gap-1 text-xs font-bold ${color === 'orange' ? 'text-[#d96f08]' : color === 'green' ? 'text-emerald-700' : 'text-[#0c7691]'}`}><span className="size-1.5 rounded-full bg-current" />{status}</p></div>)}</div><p className="mt-3 text-[10px] leading-4 text-slate-400">Demo pipeline is ready for future scraper, API and database connections.</p></Panel>
          <Panel title="Quick Reports" icon={<FileText size={18} />}><div className="space-y-2">{['Daily Airfare Price Index Report','Weekly Airfare Trend Report','Data Quality Report'].map((report) => <button key={report} className="flex w-full items-center justify-between rounded border border-[#e3eaee] px-3 py-2 text-left text-[11px] text-[#15344b] hover:border-[#0c7691] hover:bg-[#f4fafb]"><span className="flex items-center gap-2"><FileText size={13} className="text-[#0c7691]" />{report}</span><Download size={13} className="text-slate-400" /></button>)}</div></Panel>
        </div>

        <section className="mt-6 grid gap-5 lg:grid-cols-2"><Panel title="Route-wise Airfare Comparison" icon={<Table2 size={18} />} action={<button className="text-[11px] font-semibold text-[#0c7691]">All routes →</button>}><ResponsiveContainer width="100%" height={220}><BarChart data={mockRoutes.slice(0, 6)} layout="vertical" margin={{ left: 15, right: 12 }}><CartesianGrid stroke="#e8eef1" horizontal={false} /><XAxis type="number" tick={{ fontSize: 10, fill: '#78909c' }} axisLine={false} tickLine={false} /><YAxis type="category" dataKey="route" width={108} tick={{ fontSize: 10, fill: '#56727d' }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ border: '1px solid #d7e0e6', borderRadius: 4, fontSize: 12 }} /><Bar dataKey="avg" fill="#0b3a68" radius={[0, 3, 3, 0]} name="Average fare" /></BarChart></ResponsiveContainer></Panel><Panel title="Airline Market Observations" icon={<BarChart3 size={18} />}><ResponsiveContainer width="100%" height={220}><BarChart data={mockAirlines} margin={{ left: -18, right: 8 }}><CartesianGrid stroke="#e8eef1" vertical={false} /><XAxis dataKey="name" tick={{ fontSize: 9, fill: '#78909c' }} axisLine={false} tickLine={false} interval={0} tickFormatter={(value) => value.replace(' Demo','')} /><YAxis tick={{ fontSize: 10, fill: '#78909c' }} axisLine={false} tickLine={false} /><Tooltip contentStyle={{ border: '1px solid #d7e0e6', borderRadius: 4, fontSize: 12 }} /><Bar dataKey="observations" fill="#0c7691" radius={[3, 3, 0, 0]} name="Observations" /></BarChart></ResponsiveContainer></Panel></section>

        <section className="mt-6 grid gap-5 rounded border border-[#d7e0e6] bg-white p-5 md:grid-cols-[1.2fr_1fr]"><div><div className="mb-2 flex items-center gap-2 text-[#0b3a68]"><CircleHelp size={18} /><h3 className="font-serif text-lg font-bold">About this prototype</h3></div><p className="max-w-2xl text-sm leading-6 text-slate-600">The Consumer Price Index is an important measure of retail inflation in India. This prototype demonstrates an automated approach to collecting airfare observations from airline and online travel aggregator portals, converting them into structured data for statistical analysis and potential CPI augmentation.</p></div><div className="border-l border-[#e3eaee] pl-5"><h3 className="mb-3 flex items-center gap-2 font-serif text-lg font-bold text-[#0b3a68]"><Settings2 size={18} />Methodology at a glance</h3><div className="flex flex-wrap items-center gap-1 text-[10px] font-semibold text-slate-600">{['Collection','Cleaning','Validation','Normalization','Weighting','Index calculation'].map((item, i) => <span key={item} className="flex items-center gap-1"><span className="rounded bg-[#eaf1f6] px-2 py-1">{item}</span>{i < 5 && <span className="text-[#f28c28]">→</span>}</span>)}</div><p className="mt-3 text-[10px] leading-4 text-slate-400">Official methodology and weights require validation and approval by the concerned statistical authorities.</p></div></section>
      </div>

      <footer className="mt-8 border-t border-[#d7e0e6] bg-white"><div className="mx-auto flex max-w-[1600px] flex-col justify-between gap-4 px-4 py-5 text-xs text-slate-500 md:flex-row md:items-center lg:px-8"><div><p className="font-bold text-[#0b3a68]">Government of India • MoSPI • DIID</p><p className="mt-1 text-[10px]">SIH 2026 | Problem Statement SIH26056</p></div><p className="max-w-xl text-[10px] leading-4">{t('footer.disclaimer')}</p><div className="flex gap-4 text-[10px]"><button>{t('footer.privacy')}</button><button>{t('footer.contact')}</button><button>Methodology</button></div></div></footer>
    </main>
  )
}

function Panel({ title, icon, action, children }: { title: string; icon: React.ReactNode; action?: React.ReactNode; children: React.ReactNode }) { return <section className="rounded border border-[#d7e0e6] bg-white p-4 shadow-[0_1px_2px_rgba(15,55,80,0.03)]"><div className="mb-4 flex items-center justify-between gap-3"><h3 className="flex items-center gap-2 font-serif text-base font-bold text-[#0b3a68]"><span className="text-[#0c7691]">{icon}</span>{title}</h3>{action}</div>{children}</section> }
function KpiCard({ label, value, suffix, accent, icon }: { label: string; value: string; suffix: string; accent: string; icon: React.ReactNode }) { const accentClass = accent === 'orange' ? 'text-[#d96f08] bg-[#fff2e4]' : accent === 'teal' ? 'text-[#0c7691] bg-[#eaf6f7]' : 'text-[#0b3a68] bg-[#eaf1f6]'; return <div className="rounded border border-[#d7e0e6] bg-white p-3 shadow-[0_1px_2px_rgba(15,55,80,0.03)]"><div className={`mb-3 grid size-7 place-items-center rounded ${accentClass}`}>{icon}</div><p className="min-h-[28px] text-[10px] font-semibold leading-3 text-slate-500">{label}</p><p className="mt-1 text-xl font-bold tracking-tight text-[#15344b]">{value}</p><p className="mt-0.5 text-[9px] text-slate-400">{suffix}</p></div> }

// Keep chart imports available for future drill-down modules in this single-page prototype.
void Line; void LineChart; void Pie; void PieChart; void Cell
    
