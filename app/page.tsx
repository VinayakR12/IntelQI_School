"use client";
import React, { useEffect, useState } from "react"; // Add React import
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  GraduationCap, ArrowRight, Sparkles, Users, BookOpen, ShieldCheck,
  School, Building2, Wallet, Library, Video, FileText, ClipboardList, Bus,
  BarChart3, CalendarCheck, CreditCard, CheckCircle2, Quote, Star, TrendingUp,
  Award, PlayCircle, Layers, Rocket, Globe2, Lock, Zap, Target, Cpu, Phone, MapPin,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
/* ============ Design Tokens (internal CSS, strict) ============ */
const STYLES = `
  :root{
    --iq-font-sans: "Inter","Helvetica Neue",Arial,sans-serif;
    --iq-font-display: Georgia, Charter, "Inter Display", serif;
    --iq-bg:#ffffff;
    --iq-text:#0e1116;
    --iq-muted:#3a4048;
    --iq-brand:#0b3c5d;
    --iq-brand-hover:#072f49;
    --iq-brand-contrast:#ffffff;
    --iq-accent:#37ecb0;
    --iq-dark:#001b29;
    --iq-dark-2:#001e2b;
    --iq-border:#e6ebef;
    --iq-surface:#f6f9fb;
    --iq-radius:10px;
    --iq-radius-pill:999px;
    --iq-shadow-sm:0 1px 2px rgba(0,0,0,.05);
    --iq-shadow-md:0 8px 24px -12px rgba(11,60,93,.18);
  }
  .iq-root{font-family:var(--iq-font-sans);color:var(--iq-text);background:var(--iq-bg);}
  .iq-display{font-family:var(--iq-font-display);letter-spacing:-.02em;}
  .iq-muted{color:var(--iq-muted);}
  .iq-container{max-width:1200px;margin:0 auto;padding:0 24px;}

  /* Hero */
  .iq-hero{
    position:relative;background:var(--iq-dark);color:#fff;overflow:hidden;isolation:isolate;
    background-image:
      radial-gradient(80vw 50vh at 75% 15%, rgba(55,236,176,.18), transparent 55%),
      radial-gradient(60vw 40vh at 10% 90%, rgba(11,60,93,.55), transparent 60%),
      linear-gradient(180deg,#001b29 0%, #001e2b 100%);
  }
  .iq-hero::before{
    content:"";position:absolute;inset:0;z-index:0;pointer-events:none;
    background-image:
      linear-gradient(rgba(55,236,176,.10) 1px, transparent 1px),
      linear-gradient(90deg, rgba(55,236,176,.10) 1px, transparent 1px);
    background-size:64px 64px;
    -webkit-mask-image:radial-gradient(ellipse 100% 80% at center, #000 30%, rgba(0,0,0,.5) 65%, transparent 100%);
            mask-image:radial-gradient(ellipse 100% 80% at center, #000 30%, rgba(0,0,0,.5) 65%, transparent 100%);
  }

  /* Buttons */
  .iq-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 20px;border-radius:var(--iq-radius);font-weight:600;font-size:14px;transition:all .25s ease;border:1px solid transparent;}
  .iq-btn-primary{background:var(--iq-accent);color:var(--iq-dark);}
  .iq-btn-primary:hover{background:#2bd9a0;transform:translateY(-1px);box-shadow:0 12px 28px -10px rgba(55,236,176,.5);}
  .iq-btn-ghost{background:transparent;color:#fff;border-color:rgba(255,255,255,.18);}
  .iq-btn-ghost:hover{border-color:rgba(55,236,176,.6);color:var(--iq-accent);}
  .iq-btn-brand{background:var(--iq-brand);color:#fff;}
  .iq-btn-brand:hover{background:var(--iq-brand-hover);}
  .iq-btn-outline{background:#fff;color:var(--iq-brand);border-color:var(--iq-border);}
  .iq-btn-outline:hover{border-color:var(--iq-brand);}

  /* Eyebrow */
  .iq-eyebrow{display:inline-flex;align-items:center;gap:10px;font-size:11px;font-weight:700;letter-spacing:.22em;text-transform:uppercase;color:var(--iq-brand);}
  .iq-eyebrow .bar{width:28px;height:1px;background:var(--iq-accent);}
  .iq-eyebrow.on-dark{color:var(--iq-accent);}

  /* Cards */
  .iq-card{background:#fff;border:1px solid var(--iq-border);border-radius:var(--iq-radius);transition:all .3s ease;}
  .iq-card:hover{border-color:var(--iq-brand);transform:translateY(-3px);box-shadow:var(--iq-shadow-md);}
  .iq-icon-chip{width:44px;height:44px;display:inline-flex;align-items:center;justify-content:center;border-radius:10px;background:rgba(11,60,93,.08);color:var(--iq-brand);}

  /* Glass dashboard */
  .iq-glass{background:rgba(255,255,255,.06);backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.12);border-radius:14px;}

  /* Marquee */
  @keyframes iq-marquee { from{transform:translateX(0)} to{transform:translateX(-50%)} }
  .iq-marquee{display:flex;gap:64px;width:max-content;animation:iq-marquee 28s linear infinite;}

  /* Divider */
  .iq-divider{height:1px;background:var(--iq-border);}

  /* Section heading */
  .iq-h2{font-family:var(--iq-font-display);font-size:clamp(28px,3.6vw,44px);line-height:1.1;letter-spacing:-.02em;color:var(--iq-text);}
  .iq-h1{font-family:var(--iq-font-display);font-size:clamp(40px,5.6vw,68px);line-height:1.05;letter-spacing:-.025em;}
  .iq-lead{font-size:17px;line-height:1.65;color:var(--iq-muted);}

  /* Pulse dot */
  @keyframes iq-pulse {0%,100%{opacity:1}50%{opacity:.4}}
  .iq-pulse{animation:iq-pulse 2s ease-in-out infinite;}

  /* Solution split */
  .iq-split-card{position:relative;border-radius:14px;padding:36px;overflow:hidden;border:1px solid var(--iq-border);background:#fff;transition:all .3s;}
  .iq-split-card:hover{transform:translateY(-4px);box-shadow:var(--iq-shadow-md);}
  .iq-split-card.dark{background:linear-gradient(160deg,#001b29 0%, #073049 100%);color:#fff;border-color:transparent;}
  .iq-split-card.dark::after{content:"";position:absolute;inset:0;background:radial-gradient(60% 60% at 80% 0%, rgba(55,236,176,.18), transparent 60%);pointer-events:none;}

  /* Trust ring */
  .iq-stat-num{font-family:var(--iq-font-display);font-size:clamp(36px,4.2vw,52px);line-height:1;color:var(--iq-brand);letter-spacing:-.02em;}

  /* About image frame */
  .iq-photo{border-radius:14px;overflow:hidden;border:1px solid var(--iq-border);position:relative;}
  .iq-photo::after{content:"";position:absolute;inset:0;background:linear-gradient(180deg,transparent 60%, rgba(0,27,41,.25));}

  /* CTA strip */
  .iq-cta{background:linear-gradient(135deg,#0b3c5d 0%,#001b29 100%);color:#fff;border-radius:18px;position:relative;overflow:hidden;}
  .iq-cta::before{content:"";position:absolute;inset:0;background:radial-gradient(50% 70% at 90% 10%, rgba(55,236,176,.22), transparent 60%);}
`;

/* ============ Primitives ============ */
const FadeIn = ({ children, delay = 0, y = 24 }: { children: React.ReactNode; delay?: number; y?: number }) => {
  const ref = React.useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}>
      {children}
    </motion.div>
  );
};

const Eyebrow = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => (
  <div className={`iq-eyebrow ${dark ? "on-dark" : ""}`}><span className="bar" />{children}</div>
);

/* ============ Hero ============ */
// const Hero = () => (
//   <section className="iq-hero">
//     <div className="iq-container relative z-10 pt-20 pb-24 lg:pt-28 lg:pb-32 grid lg:grid-cols-12 gap-12 items-center">
//       <div className="lg:col-span-7">
//         <FadeIn>
//           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-[12px] font-medium" style={{ background: "rgba(55,236,176,.1)", color: "var(--iq-accent)", border: "1px solid rgba(55,236,176,.25)" }}>
//             <Sparkles size={13} /> Trusted by 500+ institutions across India
//           </div>
//         </FadeIn>
//         <FadeIn delay={0.05}>
//           <h1 className="iq-h1 mt-6" style={{ color: "#fff" }}>
//             The unified <span style={{ color: "var(--iq-accent)" }}>School ERP &amp; LMS</span><br />
//             built for modern education.
//           </h1>
//         </FadeIn>
//         <FadeIn delay={0.12}>
//           <p className="iq-lead mt-6 max-w-xl" style={{ color: "rgba(255,255,255,.78)" }}>
//             intelQI brings academics, administration and learning into one secure platform — so educators teach better, leaders decide faster, and students thrive.
//           </p>
//         </FadeIn>
//         <FadeIn delay={0.2}>
//           <div className="mt-9 flex flex-wrap gap-3">
//             <a href="#" className="iq-btn iq-btn-primary">Start Free Trial <ArrowRight size={16} /></a>
//             <a href="#" className="iq-btn iq-btn-ghost"><PlayCircle size={16} /> Watch 2-min demo</a>
//           </div>
//         </FadeIn>
//         <FadeIn delay={0.28}>
//           <div className="mt-12 flex items-center gap-8 flex-wrap">
//             {[
//               { k: "500+", v: "Institutions" },
//               { k: "1.2M", v: "Active Users" },
//               { k: "99.98%", v: "Uptime SLA" },
//               { k: "ISO 27001", v: "Certified" },
//             ].map(s => (
//               <div key={s.v}>
//                 <div className="iq-display text-2xl" style={{ color: "#fff" }}>{s.k}</div>
//                 <div className="text-[12px] uppercase tracking-wider mt-1" style={{ color: "rgba(255,255,255,.55)" }}>{s.v}</div>
//               </div>
//             ))}
//           </div>
//         </FadeIn>
//       </div>

//       {/* Dashboard mock */}
//       <div className="lg:col-span-5 relative">
//         <FadeIn delay={0.2} y={32}>
//           <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="iq-glass p-5">
//             <div className="flex items-center justify-between mb-4">
//               <div className="flex items-center gap-2">
//                 <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ff6058" }} />
//                 <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#ffbd2e" }} />
//                 <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#28c840" }} />
//               </div>
//               <div className="text-[11px]" style={{ color: "rgba(255,255,255,.5)" }}>intelqi.app/dashboard</div>
//             </div>
//             <div className="grid grid-cols-2 gap-3">
//               {[
//                 { i: Users, l: "Active", v: "12,480", c: "#37ecb0" },
//                 { i: BookOpen, l: "Courses", v: "284", c: "#7dd3fc" },
//                 { i: TrendingUp, l: "Attendance", v: "96.2%", c: "#fbbf24" },
//                 { i: Award, l: "Pass Rate", v: "94%", c: "#f472b6" },
//               ].map((s, i) => (
//                 <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 + i * 0.08 }} className="p-3.5 rounded-lg" style={{ background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.08)" }}>
//                   <s.i size={16} style={{ color: s.c }} />
//                   <div className="text-[11px] mt-2" style={{ color: "rgba(255,255,255,.55)" }}>{s.l}</div>
//                   <div className="iq-display text-xl mt-0.5" style={{ color: "#fff" }}>{s.v}</div>
//                 </motion.div>
//               ))}
//             </div>
//             <div className="mt-4 p-3.5 rounded-lg" style={{ background: "rgba(55,236,176,.08)", border: "1px solid rgba(55,236,176,.2)" }}>
//               <div className="flex items-center gap-2">
//                 <span className="w-2 h-2 rounded-full iq-pulse" style={{ background: "var(--iq-accent)" }} />
//                 <div className="text-[12px]" style={{ color: "#fff" }}>Live: 1,204 students online now</div>
//               </div>
//             </div>
//           </motion.div>
//         </FadeIn>
//       </div>
//     </div>

//     {/* Logo strip */}
//     <div className="relative z-10 border-t" style={{ borderColor: "rgba(255,255,255,.08)" }}>
//       <div className="iq-container py-6 overflow-hidden">
//         <div className="text-[11px] uppercase tracking-widest mb-4" style={{ color: "rgba(255,255,255,.45)" }}>Powering education at</div>
//         <div className="iq-marquee">
//           {[...Array(2)].map((_, k) => (
//             <div key={k} className="flex items-center gap-16">
//               {["Greenfield Academy", "St. Xavier's College", "Lakeside International", "Northbridge Schools", "Heritage Institute", "Vidya Global"].map((n, i) => (
//                 <div key={`${k}-${i}`} className="iq-display text-lg whitespace-nowrap" style={{ color: "rgba(255,255,255,.55)" }}>{n}</div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </section>
// );

/* ============ About ============ */
const About = () => (
  <section className="py-24" style={{ background: "#fff" }}>
    <div className="iq-container grid lg:grid-cols-12 gap-14 items-center">
      <div className="lg:col-span-6">
        <FadeIn>
          <div className="iq-photo aspect-[4/3]">
            <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1400&q=80" alt="Students collaborating" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </FadeIn>
      </div>
      <div className="lg:col-span-6">
        <Eyebrow>About intelQI</Eyebrow>
        <FadeIn delay={0.05}>
          <h2 className="iq-h2 mt-4">A platform built by educators,<br />engineered for scale.</h2>
        </FadeIn>
        <FadeIn delay={0.12}>
          <p className="iq-lead mt-6">
            Founded in 2018, intelQI partners with progressive schools, colleges and universities to replace fragmented tools with one unified system. From admissions and fee collection to classrooms and analytics, we help institutions reduce operational overhead by up to 60% — while giving teachers and learners experiences that feel modern, simple and human.
          </p>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="mt-8 grid grid-cols-2 gap-6">
            {[
              { i: Target, t: "Education-first", d: "Designed alongside 200+ educators." },
              { i: Lock, t: "Enterprise security", d: "ISO 27001, SOC 2 ready." },
              { i: Globe2, t: "Built for India", d: "Hindi, regional & RTL support." },
              { i: Zap, t: "Fast to deploy", d: "Onboard in under 30 days." },
            ].map(b => (
              <div key={b.t} className="flex gap-3">
                <div className="iq-icon-chip shrink-0"><b.i size={18} /></div>
                <div>
                  <div className="font-semibold text-[15px]">{b.t}</div>
                  <div className="text-[14px] iq-muted mt-0.5">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
);

/* ============ Why intelQI ============ */
const Why = () => {
  const items = [
    { i: Layers, t: "All-in-one platform", d: "ERP, LMS, communication and analytics — one login, one source of truth." },
    { i: ShieldCheck, t: "Enterprise-grade security", d: "Encrypted at rest and in transit. Role-based access. Full audit trail." },
    { i: BarChart3, t: "Decision-grade analytics", d: "Real-time insights for principals, HoDs and management." },
    { i: Cpu, t: "AI-assisted workflows", d: "Smart attendance, auto-grading, content recommendations." },
    { i: Users, t: "Loved by stakeholders", d: "Crafted UX for teachers, students, parents and admins." },
    { i: Rocket, t: "Continuous innovation", d: "Bi-weekly releases, transparent roadmap, listening to schools." },
  ];
  return (
    <section className="py-24" style={{ background: "var(--iq-surface)" }}>
      <div className="iq-container">
        <div className="max-w-2xl">
          <Eyebrow>Why intelQI</Eyebrow>
          <FadeIn delay={0.05}><h2 className="iq-h2 mt-4">Everything an institution needs.<br />Nothing it doesn&apos;t.</h2></FadeIn>
          <FadeIn delay={0.12}><p className="iq-lead mt-5">A focused product suite that replaces 8–12 disconnected tools with a single, dependable backbone.</p></FadeIn>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
          {items.map((it, i) => (
            <FadeIn key={it.t} delay={i * 0.05}>
              <div className="iq-card p-7 h-full">
                <div className="iq-icon-chip"><it.i size={20} /></div>
                <h3 className="iq-display text-xl mt-5">{it.t}</h3>
                <p className="iq-muted text-[14.5px] mt-2 leading-relaxed">{it.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ ERP vs LMS Split ============ */
const Solutions = () => {
  const erp = [
    { i: ClipboardList, t: "Admissions & Enquiry" },
    { i: CreditCard, t: "Fees & Online Payments" },
    { i: CalendarCheck, t: "Attendance & Timetable" },
    { i: Bus, t: "Transport & Hostel" },
    { i: Wallet, t: "HR & Payroll" },
    { i: Library, t: "Library & Inventory" },
  ];
  const lms = [
    { i: Video, t: "Live & Recorded Classes" },
    { i: BookOpen, t: "Courses & Curriculum" },
    { i: FileText, t: "Assignments & Grading" },
    { i: BarChart3, t: "Learning Analytics" },
    { i: Award, t: "Certifications" },
    { i: Users, t: "Parent Engagement" },
  ];
  return (
    <section className="py-24" style={{ background: "#fff" }}>
      <div className="iq-container">
        <div className="text-center max-w-2xl mx-auto">
          <Eyebrow>Two products. One platform.</Eyebrow>
          <FadeIn delay={0.05}><h2 className="iq-h2 mt-4">ERP for operations.<br />LMS for learning.</h2></FadeIn>
        </div>
        <div className="grid lg:grid-cols-2 gap-6 mt-14">
          <FadeIn>
            <div className="iq-split-card h-full">
              <div className="flex items-center gap-3"><Building2 size={22} style={{ color: "var(--iq-brand)" }} /><span className="font-semibold">School ERP</span></div>
              <h3 className="iq-display text-3xl mt-4">Run your institution end-to-end.</h3>
              <p className="iq-muted mt-3 text-[15px]">From the front office to finance — automate the work that slows your teams down.</p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-3.5">
                {erp.map(e => (
                  <li key={e.t} className="flex items-center gap-2.5 text-[14.5px]"><e.i size={16} style={{ color: "var(--iq-brand)" }} />{e.t}</li>
                ))}
              </ul>
              <a href="#" className="iq-btn iq-btn-brand mt-8">Explore ERP <ArrowRight size={14} /></a>
            </div>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="iq-split-card dark h-full">
              <div className="flex items-center gap-3 relative z-10"><School size={22} style={{ color: "var(--iq-accent)" }} /><span className="font-semibold">Learning LMS</span></div>
              <h3 className="iq-display text-3xl mt-4 relative z-10">Teach. Engage. Measure.</h3>
              <p className="mt-3 text-[15px] relative z-10" style={{ color: "rgba(255,255,255,.78)" }}>An immersive learning experience for students, with the tools teachers actually want.</p>
              <ul className="mt-7 grid sm:grid-cols-2 gap-3.5 relative z-10">
                {lms.map(e => (
                  <li key={e.t} className="flex items-center gap-2.5 text-[14.5px]"><e.i size={16} style={{ color: "var(--iq-accent)" }} />{e.t}</li>
                ))}
              </ul>
              <a href="#" className="iq-btn iq-btn-primary mt-8 relative z-10">Explore LMS <ArrowRight size={14} /></a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
};

/* ============ Impact / Stats ============ */
const Impact = () => {
  const stats = [
    { n: "500+", l: "Institutions onboarded" },
    { n: "1.2M", l: "Active users monthly" },
    { n: "60%", l: "Reduction in admin work" },
    { n: "4.8/5", l: "Average customer rating" },
  ];
  return (
    <section className="py-20" style={{ background: "var(--iq-surface)" }}>
      <div className="iq-container grid md:grid-cols-4 gap-10">
        {stats.map((s, i) => (
          <FadeIn key={s.l} delay={i * 0.06}>
            <div>
              <div className="iq-stat-num">{s.n}</div>
              <div className="text-[13px] uppercase tracking-wider mt-3 iq-muted">{s.l}</div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

/* ============ How it works (NEW section) ============ */
const How = () => {
  const steps = [
    { n: "01", t: "Discovery & mapping", d: "We audit your existing workflows and design a tailored rollout." },
    { n: "02", t: "Migration & setup", d: "Data migration, branding, integrations and SSO — done for you." },
    { n: "03", t: "Training & adoption", d: "Onboarding sessions for staff, teachers, students and parents." },
    { n: "04", t: "Scale & support", d: "Dedicated success manager and 24×7 priority support." },
  ];
  return (
    <section className="py-24" style={{ background: "#fff" }}>
      <div className="iq-container">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-6">
            <Eyebrow>How it works</Eyebrow>
            <FadeIn delay={0.05}><h2 className="iq-h2 mt-4">From kickoff to live<br />in under 30 days.</h2></FadeIn>
          </div>
          <div className="lg:col-span-6">
            <FadeIn delay={0.1}><p className="iq-lead">A proven, low-risk implementation methodology refined across 500+ institutions — with zero downtime to your operations.</p></FadeIn>
          </div>
        </div>
        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-0 lg:gap-px" style={{ background: "var(--iq-border)" }}>
          {steps.map((s, i) => (
            <FadeIn key={s.n} delay={i * 0.08}>
              <div className="p-8 h-full" style={{ background: "#fff" }}>
                <div className="iq-display text-[44px]" style={{ color: "var(--iq-brand)", opacity: .9 }}>{s.n}</div>
                <h3 className="iq-display text-xl mt-4">{s.t}</h3>
                <p className="iq-muted text-[14.5px] mt-2 leading-relaxed">{s.d}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ Testimonials (NEW section) ============ */
const Testimonials = () => {
  const data = [
    { q: "intelQI replaced four systems for us. Our staff workload dropped dramatically and parents love the new app.", a: "Dr. Meera Krishnan", r: "Principal, Greenfield Academy" },
    { q: "The analytics dashboards changed how our management makes decisions. Real numbers, in real time.", a: "Rajeev Menon", r: "Director, Vidya Global Schools" },
    { q: "Implementation was smoother than we expected. The team understands education, not just software.", a: "Anita Rao", r: "Vice Principal, St. Xavier's College" },
  ];
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI(p => (p + 1) % data.length), 6000); return () => clearInterval(t); }, []);
  return (
    <section className="py-24" style={{ background: "var(--iq-surface)" }}>
      <div className="iq-container grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5">
          <Eyebrow>Loved by leaders</Eyebrow>
          <FadeIn delay={0.05}><h2 className="iq-h2 mt-4">What educators<br />say about us.</h2></FadeIn>
          <FadeIn delay={0.12}><p className="iq-lead mt-5">Hear from principals, directors and IT heads who chose intelQI to power their institutions.</p></FadeIn>
          <div className="flex items-center gap-1 mt-6">
            {[...Array(5)].map((_, k) => <Star key={k} size={18} fill="#fbbf24" stroke="#fbbf24" />)}
            <span className="ml-2 text-[14px] iq-muted">4.8 average · 1,200+ reviews</span>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="relative iq-card p-10" style={{ minHeight: 280 }}>
            <Quote size={36} style={{ color: "var(--iq-brand)", opacity: .15 }} />
            <AnimatePresence mode="wait">
              <motion.div key={i} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.5 }}>
                <p className="iq-display text-[22px] leading-snug mt-2">“{data[i].q}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full flex items-center justify-center font-semibold text-white" style={{ background: "var(--iq-brand)" }}>{data[i].a[0]}</div>
                  <div>
                    <div className="font-semibold text-[14px]">{data[i].a}</div>
                    <div className="text-[13px] iq-muted">{data[i].r}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
            <div className="absolute bottom-6 right-6 flex gap-1.5">
              {data.map((_, k) => (
                <button key={k} onClick={() => setI(k)} className="h-1.5 rounded-full transition-all" style={{ width: k === i ? 24 : 8, background: k === i ? "var(--iq-brand)" : "var(--iq-border)" }} aria-label={`Go to ${k + 1}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ============ FAQ (NEW section) ============ */
const FAQ = () => {
  const faqs = [
    { q: "How long does implementation take?", a: "Most institutions are fully live within 2–4 weeks, including data migration, training and go-live support." },
    { q: "Can intelQI integrate with our existing systems?", a: "Yes. We support SSO, biometric devices, payment gateways, accounting software and a public REST API." },
    { q: "Is our data secure and where is it hosted?", a: "Data is encrypted end-to-end and hosted in ISO 27001 certified Indian data centers, with daily backups." },
    { q: "Do you offer training and support?", a: "Every institution gets a dedicated success manager, role-based training and 24×7 priority support." },
    { q: "Is intelQI suitable for both schools and colleges?", a: "Absolutely. The platform scales from K-12 schools to multi-campus universities with custom configurations." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="py-24" style={{ background: "#fff" }}>
      <div className="iq-container grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Eyebrow>FAQ</Eyebrow>
          <FadeIn delay={0.05}><h2 className="iq-h2 mt-4">Questions,<br />answered.</h2></FadeIn>
          <FadeIn delay={0.12}><p className="iq-lead mt-5">Can&apos;t find what you&apos;re looking for? Our team replies within one business hour.</p></FadeIn>
          <a href="#" className="iq-btn iq-btn-outline mt-6">Contact sales <ArrowRight size={14} /></a>
        </div>
        <div className="lg:col-span-8">
          {faqs.map((f, i) => (
            <div key={f.q} className="border-b" style={{ borderColor: "var(--iq-border)" }}>
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full flex items-center justify-between text-left py-6">
                <span className="iq-display text-[19px] pr-6">{f.q}</span>
                <motion.span animate={{ rotate: open === i ? 45 : 0 }} className="text-2xl font-light shrink-0" style={{ color: "var(--iq-brand)" }}>+</motion.span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden">
                    <p className="iq-muted pb-6 text-[15px] leading-relaxed max-w-2xl">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ============ CTA ============ */
const CTA = () => (
  <section className="py-20" style={{ background: "#fff" }}>
    <div className="iq-container">
      <FadeIn>
        <div className="iq-cta p-12 lg:p-16 grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 relative z-10">
            <h2 className="iq-display text-[36px] lg:text-[44px] leading-tight" style={{ letterSpacing: "-.02em" }}>
              Ready to modernize<br />your institution?
            </h2>
            <p className="mt-4 text-[16px]" style={{ color: "rgba(255,255,255,.78)" }}>Book a personalized demo and see intelQI mapped to your workflows — in 30 minutes.</p>
          </div>
          <div className="lg:col-span-4 flex lg:justify-end gap-3 relative z-10">
            <a href="#" className="iq-btn iq-btn-primary">Book Demo <ArrowRight size={16} /></a>
            <a href="#" className="iq-btn iq-btn-ghost">Pricing</a>
          </div>
        </div>
      </FadeIn>
    </div>
  </section>
);

/* ============ Page ============ */
export default function IntelQI() {
  return (
    <>
      <style>{STYLES}</style>
      <div >
      
        <Hero />
        <About />
        <Why />
        <Solutions />
        <Impact />
        <How />
        <Testimonials />
        <FAQ />
        <CTA />
      </div>
    </>
  );
}