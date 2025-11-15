import React, { useMemo, useState } from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Spline from '@splinetool/react-spline'

const ElectricBadge = () => (
  <div className="flex items-center gap-3 px-4 py-2 rounded-full glass neon-ring">
    <div className="h-2 w-2 rounded-full bg-sky-400 animate-pulse shadow-[0_0_16px_4px_rgba(56,189,248,0.6)]" />
    <span className="uppercase tracking-widest text-xs text-sky-200">AI Financial Guardian</span>
  </div>
)

const FlameButton = ({ children, variant='primary', onClick }) => {
  const base = 'relative overflow-hidden rounded-lg px-5 py-2.5 font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-0';
  const styles = variant === 'primary'
    ? 'bg-gradient-to-br from-sky-500/90 to-blue-600/90 text-white shadow-[0_0_20px_rgba(56,189,248,0.55)] hover:from-sky-400 hover:to-blue-500'
    : variant === 'ghost'
      ? 'bg-white/5 text-sky-200 hover:bg-white/10'
      : 'bg-emerald-500/90 text-white hover:bg-emerald-400/90';
  return (
    <button onClick={onClick} className={`${base} ${styles} energy-border flame-pulse`}>
      <span className="relative z-10">{children}</span>
      <span className="pointer-events-none absolute inset-0 holo-sheen opacity-40" />
    </button>
  )
}

const Nav = () => (
  <div className="fixed top-0 left-0 right-0 z-40">
    <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
      <Link to="/" className="flex items-center gap-3">
        <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-sky-500 to-blue-700 grid place-items-center shadow-[0_0_24px_rgba(56,189,248,0.6)]">
          <span className="holo-text font-black">ƒ</span>
        </div>
        <div>
          <div className="text-white font-semibold tracking-wide">MoneyFyi</div>
          <div className="text-[10px] text-sky-300/80 -mt-1">Blue-Flame Compliance</div>
        </div>
      </Link>
      <div className="flex items-center gap-2">
        <Link to="/login" className="text-sky-300 hover:text-white transition">Login</Link>
        <Link to="/dashboard" className="text-sky-300 hover:text-white transition">Dashboard</Link>
        <Link to="/ocr" className="text-sky-300 hover:text-white transition">Invoice OCR</Link>
        <Link to="/refunds" className="text-sky-300 hover:text-white transition">Refunds</Link>
        <Link to="/investigate" className="text-sky-300 hover:text-white transition">Investigation</Link>
        <Link to="/compliance" className="text-sky-300 hover:text-white transition">Compliance</Link>
        <Link to="/whatsapp" className="text-sky-300 hover:text-white transition">WhatsApp</Link>
        <Link to="/mobile" className="text-sky-300 hover:text-white transition">Mobile</Link>
        <Link to="/settings" className="text-sky-300 hover:text-white transition">Settings</Link>
      </div>
    </div>
  </div>
)

const Hero = () => (
  <section className="relative min-h-[88vh] overflow-hidden">
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute -top-40 -right-32 h-[600px] w-[600px] rounded-full blur-3xl bg-sky-700/30" />
      <div className="absolute -bottom-40 -left-32 h-[600px] w-[600px] rounded-full blur-3xl bg-sky-500/20" />
    </div>

    <div className="mx-auto max-w-7xl px-4 pt-28 grid lg:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <ElectricBadge />
        <h1 className="text-4xl md:text-6xl font-black leading-tight">
          <span className="holo-text">MoneyFyi</span>
          <span className="block text-sky-200">Futuristic Fraud & Compliance Guardian</span>
        </h1>
        <p className="text-sky-200/80 max-w-xl">AI Financial Guardian for Clinics & SMEs. Detect suspicious refunds, reconcile invoices, forecast cashflow, and stay compliant — wrapped in an electric blue flame experience.</p>
        <div className="flex gap-3 pt-2">
          <Link to="/dashboard"><FlameButton>Launch Dashboard</FlameButton></Link>
          <Link to="/login"><FlameButton variant='ghost'>Secure Login</FlameButton></Link>
        </div>
      </div>
      <div className="relative h-[520px] w-full holo-border rounded-2xl glass energy-border">
        <Spline scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 holo-sheen opacity-30" />
      </div>
    </div>
  </section>
)

// 1. Login Screen
const Login = () => (
  <div className="min-h-screen pt-20">
    <div className="mx-auto max-w-5xl px-4 grid md:grid-cols-2 gap-10 items-center">
      <div className="relative h-80 rounded-2xl glass energy-border overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(50%_60%_at_50%_50%,rgba(4,92,255,0.25),transparent_60%)]" />
        <div className="absolute -inset-20 bg-[conic-gradient(from_0deg,rgba(0,168,255,0.15),transparent,rgba(4,92,255,0.25))] animate-[spin_18s_linear_infinite]" />
        <div className="absolute inset-0 grid place-items-center">
          <div className="text-center">
            <div className="text-5xl font-black holo-text">MoneyFyi</div>
            <p className="text-sky-200 mt-2">AI Financial Guardian for Clinics & SMEs</p>
          </div>
        </div>
      </div>
      <div className="glass rounded-2xl p-6 energy-border">
        <div className="text-sky-200/90 mb-4">Secure Sign-in</div>
        <div className="space-y-4">
          <div>
            <label className="text-xs text-sky-300">Email / UPI</label>
            <input className="mt-1 w-full glass rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="you@clinic.com" />
          </div>
          <div>
            <label className="text-xs text-sky-300">Password</label>
            <input type="password" className="mt-1 w-full glass rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-sky-400" placeholder="••••••••" />
          </div>
          <FlameButton>Login Securely</FlameButton>
          <div className="text-xs text-sky-300/80">AES-256 end-to-end · No bank login required · Upload-first approach</div>
        </div>
      </div>
    </div>
  </div>
)

// Common card wrapper
const Card = ({ title, children, right }) => (
  <div className="glass rounded-2xl p-5 energy-border">
    <div className="flex items-center justify-between mb-3">
      <div className="font-semibold text-sky-100">{title}</div>
      {right}
    </div>
    {children}
  </div>
)

// 2. Main Dashboard
const Dashboard = () => {
  const alerts = [
    { label: 'Suspicious Refund Activity', severity: 'high' },
    { label: 'Invoice Total Mismatch', severity: 'medium' },
    { label: 'Cash-Flow Risk', severity: 'medium' },
  ]
  return (
    <div className="min-h-screen pt-24 mx-auto max-w-7xl px-4 space-y-6">
      {/* Alerts Overview */}
      <Card title="Alerts Overview" right={<ElectricBadge />}>
        <div className="grid md:grid-cols-3 gap-4">
          {alerts.map((a, i) => (
            <div key={i} className={`rounded-xl p-4 relative overflow-hidden ${a.severity==='high'?'flame-surge':'flame-pulse'} glass` }>
              <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-sky-600/30 blur-2xl" />
              <div className="text-sky-100 font-medium">{a.label}</div>
              <div className="text-xs text-sky-300 mt-2">Severity: <span className={a.severity==='high'?'text-sky-200':'text-sky-300'}>{a.severity}</span></div>
              <div className="mt-4">
                <FlameButton variant={a.severity==='high'?'primary':'ghost'}>Investigate</FlameButton>
              </div>
            </div>
          ))}
        </div>
      </Card>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Document Upload Panel */}
        <Card title="Upload Invoice / Bank Statement" right={<span className="text-xs text-sky-300">OCR Extracting...</span>}>
          <div className="rounded-xl border border-sky-500/30 bg-sky-500/5 p-6 text-center energy-border">
            <div className="text-sky-200 mb-2">Drag & Drop files here</div>
            <div className="text-xs text-sky-300">Parsing · Cross-checking</div>
            <div className="mt-4 text-sky-300 text-xs">Blue flames will engulf files while parsing</div>
          </div>
        </Card>

        {/* Quick Insights */}
        <Card title="Quick Insights">
          <div className="grid grid-cols-2 gap-3">
            {[['Revenue','72%'],['Refunds','18%'],['Risk Level','42%'],['Compliance','88%']].map(([k,v],i)=> (
              <div key={i} className="relative glass rounded-xl p-4 text-center energy-border">
                <div className="text-2xl font-black holo-text">{v}</div>
                <div className="text-xs text-sky-300">{k}</div>
                <div className="absolute inset-0 rounded-xl pointer-events-none flame-pulse" />
              </div>
            ))}
          </div>
        </Card>

        {/* 7-Day Cash Flow Forecast */}
        <Card title="7-Day Cash Flow Forecast">
          <div className="h-40 relative rounded-lg glass energy-border overflow-hidden">
            <div className="absolute inset-0 scanline opacity-40" />
            <svg viewBox="0 0 300 120" className="w-full h-full">
              <defs>
                <linearGradient id="grad" x1="0" x2="1" y1="0" y2="0">
                  <stop offset="0%" stopColor="#00A8FF" />
                  <stop offset="100%" stopColor="#045CFF" />
                </linearGradient>
              </defs>
              <path d="M5 80 C 40 60, 80 100, 120 70 S 200 30, 260 60 S 295 40, 295 40" stroke="url(#grad)" strokeWidth="3" fill="none" className="drop-shadow-[0_0_12px_rgba(56,189,248,0.8)]" />
              <circle cx="260" cy="60" r="4" fill="#7FDBFF" className="animate-pulse" />
            </svg>
            <div className="absolute bottom-2 right-3 text-xs text-sky-300">Predicted shortfall on Thu</div>
          </div>
        </Card>
      </div>
    </div>
  )
}

// 3. Invoice OCR Viewer
const OCR = () => (
  <div className="min-h-screen pt-24 mx-auto max-w-7xl px-4 grid lg:grid-cols-2 gap-6 items-start">
    <Card title="Scanned Invoice">
      <div className="h-[420px] rounded-xl glass energy-border relative overflow-hidden">
        <div className="absolute inset-0 grid place-items-center text-sky-300">Invoice Image Placeholder</div>
        <div className="absolute left-8 top-16 px-2 py-1 rounded bg-sky-500/20 border border-sky-400/40 text-xs text-sky-100 flame-pulse">Low confidence: Total</div>
      </div>
    </Card>
    <Card title="Extracted Fields" right={<span className="text-xs text-sky-300">OCR + NLP</span>}>
      <div className="space-y-3">
        {['Invoice No','Subtotal','GST','Total'].map((k,i)=> (
          <div key={i} className="flex items-center gap-3">
            <div className="w-32 text-sky-200/80 text-sm">{k}</div>
            <input className="flex-1 glass rounded-lg px-3 py-2 focus:ring-2 focus:ring-sky-400" defaultValue={k==='Total'?'₹ 12,950.00':k==='GST'?'₹ 1,950.00':k==='Subtotal'?'₹ 11,000.00':'INV-39214'} />
            <FlameButton variant='ghost'>Correct</FlameButton>
          </div>
        ))}
      </div>
      <div className="mt-4 text-xs text-sky-300">Editing stabilizes the flame and locks the value</div>
    </Card>
  </div>
)

// 4. Suspicious Refund Detector
const Refunds = () => (
  <div className="min-h-screen pt-24 mx-auto max-w-7xl px-4">
    <Card title="Suspicious Refund Timeline" right={<span className="text-xs text-sky-300">Pattern clustering</span>}>
      <div className="relative h-56">
        <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gradient-to-r from-sky-800 via-sky-500/60 to-sky-800" />
        {[40,90,120,170,172,210,260].map((x,i)=> (
          <div key={i} className="absolute -top-4" style={{ left: x }}>
            <div className={`h-10 w-10 rounded-full bg-sky-500/20 border border-sky-400/40 energy-border ${i>3?'flame-surge':'flame-pulse'} grid place-items-center text-xs`}>₹</div>
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-3 gap-3 mt-4">
        {[
          {label:'Refund count', value:'7'},
          {label:'UPI handle', value:'clinic@upi'},
          {label:'Rule', value:'Repeated refunds <72h'},
        ].map((it,i)=> (
          <div key={i} className="glass rounded-xl p-4 energy-border">
            <div className="text-sky-300 text-xs">{it.label}</div>
            <div className="text-xl font-bold text-sky-100">{it.value}</div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 mt-4">
        <FlameButton>Investigate Now</FlameButton>
        <FlameButton variant='ghost'>Mark As False Positive</FlameButton>
        <FlameButton>Escalate to CA</FlameButton>
      </div>
    </Card>
  </div>
)

// 5. Investigation Workflow
const Investigate = () => (
  <div className="min-h-screen pt-24 mx-auto max-w-7xl px-4 space-y-6">
    <Card title="1. Refund Timeline">
      <div className="h-24 relative">
        <div className="absolute left-0 right-0 top-1/2 h-[3px] bg-sky-700/70" />
        <div className="absolute left-10 top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-sky-400 shadow-[0_0_16px_rgba(56,189,248,0.8)]" />
        <div className="absolute left-40 top-1/2 -translate-y-1/2 h-4 w-4 rounded-full bg-blue-500 flame-surge" />
      </div>
    </Card>
    <Card title="2. Transaction Comparison">
      <div className="grid md:grid-cols-2 gap-4">
        <div className="glass rounded-lg p-3 energy-border">
          <div className="text-xs text-sky-300 mb-2">Invoice</div>
          <div className="text-sky-100">₹ 12,950 vs Paid ₹ 12,450</div>
        </div>
        <div className="glass rounded-lg p-3 energy-border">
          <div className="text-xs text-sky-300 mb-2">Bank</div>
          <div className="text-sky-100">Refunds within 24h of payment</div>
        </div>
      </div>
    </Card>
    <Card title="3. Staff Activity Log">
      <div className="space-y-2 text-sm text-sky-200/90">
        <div>Admin A initiated refund · 10:24 AM</div>
        <div>Cashier B approved · 10:26 AM</div>
      </div>
    </Card>
    <Card title="4. Recommended Action Steps">
      <ul className="list-disc pl-5 text-sky-200/90 text-sm space-y-2">
        <li>Freeze refunds > ₹5,000 for 24 hours</li>
        <li>Require dual approval during peak hours</li>
        <li>Auto-flag UPI handle clinic@upi</li>
      </ul>
    </Card>
    <Card title="5. Escalation">
      <FlameButton>Open Escalation Modal</FlameButton>
      <div className="text-xs text-sky-300 mt-2">Modal shows spiking flame animation</div>
    </Card>
  </div>
)

// 6. Compliance Page
const Compliance = () => (
  <div className="min-h-screen pt-24 mx-auto max-w-7xl px-4 space-y-6">
    <Card title="GST / TDS Checker" right={<span className="text-xs text-sky-300">Deadline watch</span>}>
      <div className="grid md:grid-cols-3 gap-4">
        {['Missing GST number','Late filing risk','Invoice/Statement mismatch'].map((t,i)=> (
          <div key={i} className="rounded-xl p-4 glass energy-border relative overflow-hidden">
            <div className="absolute -top-6 -right-6 h-24 w-24 rounded-full bg-sky-600/20 blur-2xl" />
            <div className="text-sky-100">{t}</div>
            <div className="text-xs text-sky-300 mt-1">Smoky flame around issue</div>
          </div>
        ))}
      </div>
      <div className="mt-4">
        <div className="h-3 w-full rounded-full bg-white/10 overflow-hidden">
          <div className="h-full w-2/3 bg-gradient-to-r from-sky-500 to-blue-600 flame-pulse" />
        </div>
        <div className="text-xs text-sky-300 mt-1">Monthly filing progress – flames intensify near deadline</div>
      </div>
    </Card>
  </div>
)

// 7. WhatsApp Alert Preview
const WhatsApp = () => (
  <div className="min-h-screen pt-24 mx-auto max-w-7xl px-4">
    <Card title="WhatsApp Alert Preview" right={<span className="text-xs text-sky-300">Clinic / SME</span>}>
      <div className="mx-auto max-w-md rounded-[36px] p-4 glass energy-border">
        <div className="text-center text-sky-200 text-sm">Blue flame emblem · High Priority</div>
        <div className="mt-3 glass rounded-2xl p-3">
          <div className="text-sky-100 font-semibold">MoneyFyi Alert</div>
          <div className="text-sky-300 text-sm mt-1">Refund cluster detected for clinic@upi. 3 refunds in 2 hours. Risk: High.</div>
          <div className="flex gap-2 mt-3">
            <FlameButton variant='ghost'>Investigate</FlameButton>
            <FlameButton variant='ghost'>Escalate</FlameButton>
          </div>
        </div>
        <div className="mt-4 h-16 glass rounded-xl relative overflow-hidden">
          <svg viewBox="0 0 300 60" className="w-full h-full">
            <path d="M0 40 C 60 20, 120 50, 180 25 S 260 50, 300 20" stroke="#7FDBFF" strokeWidth="2" fill="none" className="drop-shadow-[0_0_10px_rgba(127,219,255,0.7)]" />
          </svg>
          <div className="absolute inset-0 pointer-events-none scanline opacity-30" />
        </div>
      </div>
    </Card>
  </div>
)

// 8. Mobile UI Screens
const Mobile = () => (
  <div className="min-h-screen pt-24 mx-auto max-w-7xl px-4 space-y-6">
    <Card title="Mobile Dashboard">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
        {['Alerts','Revenue','Risk','Compliance','Uploads','Agents'].map((t,i)=> (
          <div key={i} className="aspect-[4/3] glass rounded-xl p-3 energy-border">
            <div className="text-sky-200 text-sm">{t}</div>
            <div className="mt-2 text-xs text-sky-300">Flame halo on critical</div>
          </div>
        ))}
      </div>
    </Card>
    <Card title="Mobile OCR Fix">
      <div className="grid grid-cols-2 gap-3">
        {['Total','GST','Sub-total','Invoice#'].map((t,i)=> (
          <div key={i} className="p-3 glass rounded-xl energy-border">
            <div className="text-sky-300 text-xs">{t}</div>
            <input className="mt-1 w-full glass rounded-lg px-2 py-1" defaultValue={t==='Total'?'12950':'INV-39214'} />
          </div>
        ))}
      </div>
    </Card>
    <Card title="Mobile Refund Alert">
      <div className="glass rounded-xl p-4 energy-border text-center">
        <div className="text-4xl">🔥</div>
        <div className="text-sky-100">Swipe to Escalate →</div>
        <div className="text-xs text-sky-300">Flame trail follows swipe</div>
      </div>
    </Card>
  </div>
)

// 9. Settings
const Settings = () => {
  const [ocr, setOcr] = useState(true)
  const [privacy, setPrivacy] = useState(true)
  const [aa, setAa] = useState(false)
  return (
    <div className="min-h-screen pt-24 mx-auto max-w-7xl px-4 space-y-6">
      <Card title="Data Privacy">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sky-100">AES-256 Encryption</div>
            <div className="text-xs text-sky-300">On-device redaction supported</div>
          </div>
          <button onClick={()=>setPrivacy(v=>!v)} className="toggle-flame" data-on={privacy}>
            <span className="toggle-knob" />
          </button>
        </div>
      </Card>
      <Card title="On-device OCR">
        <div className="flex items-center justify-between">
          <div>
            <div className="text-sky-100">OCR Local Parse</div>
            <div className="text-xs text-sky-300">Keeps invoices on device</div>
          </div>
          <button onClick={()=>setOcr(v=>!v)} className="toggle-flame" data-on={ocr}>
            <span className="toggle-knob" />
          </button>
        </div>
      </Card>
      <Card title="Account Aggregator (Optional)">
        <div className="flex items-center justify-between">
          <div className="text-sky-300">Connect for seamless statement fetch</div>
          <button onClick={()=>setAa(v=>!v)} className="toggle-flame" data-on={aa}>
            <span className="toggle-knob" />
          </button>
        </div>
      </Card>
      <Card title="Team Permissions">
        <div className="grid md:grid-cols-3 gap-3">
          {['Admin','Accountant','Cashier'].map((r,i)=> (
            <div key={i} className="glass rounded-xl p-4 energy-border">
              <div className="text-sky-100">{r}</div>
              <div className="text-xs text-sky-300">Adjust access & approvals</div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  )
}

const Home = () => (
  <>
    <Hero />
    <section className="mx-auto max-w-7xl px-4 pb-24">
      <Card title="Concepts Shown" right={<span className="text-xs text-sky-300">Multi-Agent · OCR/NLP · Forecast · Audit</span>}>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3 text-sm text-sky-200/90">
          <div className="glass rounded-xl p-4 energy-border">Multi-Agent System</div>
          <div className="glass rounded-xl p-4 energy-border">OCR + NLP Extraction</div>
          <div className="glass rounded-xl p-4 energy-border">Fraud Detection Patterns</div>
          <div className="glass rounded-xl p-4 energy-border">Timeline-based Refund Anomalies</div>
          <div className="glass rounded-xl p-4 energy-border">Cash-flow Forecasting</div>
          <div className="glass rounded-xl p-4 energy-border">Compliance Tracking</div>
          <div className="glass rounded-xl p-4 energy-border">Human-in-the-loop Confirmation</div>
          <div className="glass rounded-xl p-4 energy-border">WhatsApp/Email Escalation</div>
          <div className="glass rounded-xl p-4 energy-border">Audit Logs</div>
          <div className="glass rounded-xl p-4 energy-border">AES-256 Privacy Controls</div>
          <div className="glass rounded-xl p-4 energy-border">Upload-first (No bank login)</div>
          <div className="glass rounded-xl p-4 energy-border">Clinic + SME Scenarios</div>
        </div>
      </Card>
    </section>
  </>
)

function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/ocr" element={<OCR />} />
        <Route path="/refunds" element={<Refunds />} />
        <Route path="/investigate" element={<Investigate />} />
        <Route path="/compliance" element={<Compliance />} />
        <Route path="/whatsapp" element={<WhatsApp />} />
        <Route path="/mobile" element={<Mobile />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
