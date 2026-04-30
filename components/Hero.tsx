"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Users,
  BookOpen,
  TrendingUp,
  GraduationCap,
  BarChart2,
  CheckCircle2,
} from "lucide-react";

/* ─── tiny fade-in helper ─── */
const FadeIn = ({
  children,
  delay = 0,
  y = 20,
}: {
  children: React.ReactNode;
  delay?: number;
  y?: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
  >
    {children}
  </motion.div>
);

/* ─── donut ring segment (SVG) ─── */
const DONUT_DATA = [
  { label: "Science", pct: 30, color: "#37ecb0" },
  { label: "Commerce", pct: 29, color: "#7dd3fc" },
  { label: "Arts", pct: 22, color: "#fbbf24" },
  { label: "Others", pct: 19, color: "#f472b6" },
];

function Donut() {
  const r = 28, cx = 36, cy = 36, circ = 2 * Math.PI * r;
  let offset = 0;
  return (
    <svg width="72" height="72" viewBox="0 0 72 72">
      {DONUT_DATA.map((d) => {
        const dash = (d.pct / 100) * circ;
        const seg = (
          <circle
            key={d.label}
            cx={cx}
            cy={cy}
            r={r}
            fill="none"
            stroke={d.color}
            strokeWidth="10"
            strokeDasharray={`${dash} ${circ - dash}`}
            strokeDashoffset={-offset}
            style={{ transform: "rotate(-90deg)", transformOrigin: "50% 50%" }}
          />
        );
        offset += dash;
        return seg;
      })}
      <text x="36" y="39" textAnchor="middle" fontSize="10" fill="white" fontWeight="700">
        2,543
      </text>
    </svg>
  );
}

/* ═══════════════════════════════════════════════════
   MAIN HERO - Two Column Layout with Full Background Image
═══════════════════════════════════════════════════ */
export default function Hero() {
  return (
    <section
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100%",
        fontFamily: "'DM Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* FULL BACKGROUND IMAGE - spans both left and right columns */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/fullhero.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* LEFT TO RIGHT OPACITY GRADIENT - opacity 0 on left → 100% on right */}
      <div
        style={{
          position: "absolute",
          inset: 0,
        //   background: "linear-gradient(90deg, rgba(7,19,32,0) 0%, rgba(7,19,32,0) 20%, rgba(7,19,32,0.85) 50%, #071320 80%, #071320 100%)",
        //   pointerEvents: "none",
          zIndex: 1,
        }}
      />

      {/* LEFT COLUMN - Text Content with Light Grids */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          display: "flex",
          alignItems: "center",
          padding: "80px 60px",
          zIndex: 2,
        }}
      >
        {/* Light Grids on Left Side */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "linear-gradient(rgba(55,236,176,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(55,236,176,0.08) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
            pointerEvents: "none",
          }}
        />
        
        {/* Subtle radial glow */}
        <div
          style={{
            position: "absolute",
            top: "-10%",
            left: "-20%",
            width: 520,
            height: 520,
            background: "radial-gradient(circle, rgba(55,236,176,0.15) 0%, transparent 70%)",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />

        <div style={{ maxWidth: 560, position: "relative", zIndex: 2 }}>
          <FadeIn>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "rgba(55,236,176,0.15)",
                border: "1px solid rgba(55,236,176,0.3)",
                borderRadius: 999,
                padding: "6px 14px",
                color: "#37ecb0",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                backdropFilter: "blur(4px)",
              }}
            >
              <GraduationCap size={13} />
              All-in-One Education Platform
            </div>
          </FadeIn>

          <FadeIn delay={0.07}>
            <h1
              style={{
                marginTop: 28,
                fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                fontWeight: 800,
                lineHeight: 1.15,
                color: "#fff",
                letterSpacing: "-0.02em",
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
              }}
            >
              Empowering Education
              <br />
              with Smart ERP &amp;
              <br />
              <span style={{ color: "#37ecb0" }}>Digital Learning</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.14}>
            <p
              style={{
                marginTop: 20,
                fontSize: 16,
                lineHeight: 1.7,
                color: "rgba(255,255,255,0.85)",
                textShadow: "0 1px 5px rgba(0,0,0,0.2)",
              }}
            >
              intelQI simplifies academic management, enhances learning
              experiences, and connects students, teachers and parents in one
              unified platform.
            </p>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, marginTop: 36 }}>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "#37ecb0",
                  color: "#071320",
                  fontWeight: 700,
                  fontSize: 14,
                  padding: "12px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                Book a Demo <ArrowRight size={15} />
              </a>
              <a
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(4px)",
                  color: "#fff",
                  fontWeight: 600,
                  fontSize: 14,
                  padding: "12px 28px",
                  borderRadius: 10,
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.2)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.1)";
                  (e.currentTarget as HTMLAnchorElement).style.transform = "translateY(0)";
                }}
              >
                <PlayCircle size={15} /> Explore Platform
              </a>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* RIGHT COLUMN - Floating Dashboard Card */}
      <div
        style={{
          flex: 1,
          position: "relative",
          overflow: "hidden",
          zIndex: 2,
        }}
      >
        {/* Floating Dashboard Screen at Bottom - SMALLER & SHORTER */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          style={{
            position: "absolute",
            bottom: 10,
            left: 20,
            right: 20,
            background: "rgba(7,18,32,0.92)",
            backdropFilter: "blur(20px)",
            border: "1px solid rgba(55,236,176,0.25)",
            borderRadius: 18,
            padding: "14px 18px",
            boxShadow: "0 20px 50px rgba(0,0,0,0.5), 0 0 0 1px rgba(55,236,176,0.15)",
            zIndex: 10,
            maxWidth: "calc(100% - 60px)",
          }}
        >
          
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: 12,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ff6058" }} />
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#ffbd2e" }} />
              <div style={{ width: 9, height: 9, borderRadius: "50%", background: "#28c840" }} />
            </div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.45)", fontWeight: 500 }}>
              intelqi.app/dashboard
            </div>
          </div>

       
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 8, marginBottom: 12 }}>
            {[
              { label: "Total Students", value: "2,543", change: "+12.5%", color: "#37ecb0", icon: Users },
              { label: "Teachers", value: "156", change: "+8.3%", color: "#7dd3fc", icon: BookOpen },
              { label: "Active Courses", value: "215", change: "+10.6%", color: "#fbbf24", icon: BarChart2 },
              { label: "Attendance Rate", value: "92%", change: "+4.3%", color: "#f472b6", icon: TrendingUp },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + idx * 0.1 }}
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  borderRadius: 10,
                  padding: "8px 10px",
                }}
              >
                <stat.icon size={13} style={{ color: stat.color }} />
                <div style={{ fontSize: 9, color: "rgba(255,255,255,0.5)", marginTop: 6 }}>
                  {stat.label}
                </div>
                <div style={{ fontSize: 16, fontWeight: 700, color: "#fff", marginTop: 2 }}>
                  {stat.value}
                </div>
                <div style={{ fontSize: 9, color: stat.color, marginTop: 2 }}>{stat.change}</div>
              </motion.div>
            ))}
          </div>

        
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8 }}>
           
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "8px 10px",
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 8 }}>
                Weekly Attendance
              </div>
              <div style={{ display: "flex", alignItems: "flex-end", gap: 6, height: 40 }}>
                {[
                  { day: "M", pct: 88 },
                  { day: "T", pct: 92 },
                  { day: "W", pct: 95 },
                  { day: "T", pct: 91 },
                  { day: "F", pct: 97 },
                  { day: "S", pct: 85 },
                ].map((bar, i) => (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 4, flex: 1 }}>
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: `${bar.pct * 0.4}px` }}
                      transition={{ delay: 0.8 + i * 0.05, duration: 0.6 }}
                      style={{
                        width: "100%",
                        maxWidth: 20,
                        background: bar.pct > 90 ? "#37ecb0" : "rgba(55,236,176,0.4)",
                        borderRadius: 3,
                      }}
                    />
                    <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>{bar.day}</span>
                  </div>
                ))}
              </div>
            </div>

           
            <div
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: 10,
                padding: "8px 10px",
              }}
            >
              <div style={{ fontSize: 9, fontWeight: 600, color: "rgba(255,255,255,0.6)", marginBottom: 4 }}>
                Enrollment by Course
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <Donut />
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {DONUT_DATA.map((d) => (
                    <div key={d.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <div style={{ width: 7, height: 7, borderRadius: "50%", background: d.color }} />
                      <span style={{ fontSize: 8, color: "rgba(255,255,255,0.6)" }}>{d.label}</span>
                      <span style={{ fontSize: 8, color: "rgba(255,255,255,0.4)" }}>{d.pct}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

        
          <div
            style={{
              marginTop: 10,
              padding: "6px 10px",
              background: "rgba(55,236,176,0.08)",
              border: "1px solid rgba(55,236,176,0.2)",
              borderRadius: 8,
              display: "flex",
              alignItems: "center",
              gap: 8,
            }}
          >
            <div
              style={{
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#37ecb0",
                animation: "pulse 2s ease-in-out infinite",
              }}
            />
            <div style={{ fontSize: 10, color: "#fff", fontWeight: 500 }}>Live Activity:</div>
            <div style={{ fontSize: 10, color: "rgba(255,255,255,0.7)" }}>1,204 students online now</div>
            <CheckCircle2 size={11} style={{ color: "#fbbf24", marginLeft: "auto" }} />
          </div>
        </motion.div> */}
      </div>

      {/* Global Animations */}
      <style dangerouslySetInnerHTML={{
        __html: `
          @keyframes pulse {
            0%, 100% { opacity: 1; transform: scale(1); }
            50% { opacity: 0.5; transform: scale(1.2); }
          }
        `
      }} />
    </section>
  );
}