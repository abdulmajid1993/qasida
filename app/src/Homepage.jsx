import { useState, useEffect } from "react";

const sections = [
  {
    id: "qawwali",
    title: "Qawwali",
    arabic: "قوالی",
    description: "Sufi devotional music of the Chishti tradition",
    count: 33,
    accent: "#c9a84c",
    accentDim: "rgba(201,168,76,0.12)",
    accentBorder: "rgba(201,168,76,0.35)",
    icon: (
      <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
        <circle cx="30" cy="30" r="28" stroke="rgba(201,168,76,0.4)" strokeWidth="1"/>
        <circle cx="30" cy="30" r="20" stroke="rgba(201,168,76,0.25)" strokeWidth="1" strokeDasharray="3 4"/>
        <path d="M30 10 C30 10 38 18 38 28 C38 35 34 40 30 42 C26 40 22 35 22 28 C22 18 30 10 30 10Z"
          fill="rgba(201,168,76,0.15)" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2"/>
        <circle cx="30" cy="28" r="4" fill="rgba(201,168,76,0.5)"/>
        <line x1="30" y1="42" x2="30" y2="50" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5"/>
        <line x1="24" y1="47" x2="36" y2="47" stroke="rgba(201,168,76,0.4)" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    id: "qasida",
    title: "Qasida",
    arabic: "قصيدة",
    description: "Classical Arabic & Persian poetry in praise of the Prophet ﷺ",
    count: 29,
    accent: "#c9a84c",
    accentDim: "rgba(201,168,76,0.12)",
    accentBorder: "rgba(201,168,76,0.35)",
    icon: (
      <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
        <path d="M15 48 L15 20 Q15 14 21 14 L45 14" stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M15 44 L42 44" stroke="rgba(201,168,76,0.35)" strokeWidth="1" strokeDasharray="3 3"/>
        <path d="M15 37 L42 37" stroke="rgba(201,168,76,0.35)" strokeWidth="1" strokeDasharray="3 3"/>
        <path d="M15 30 L38 30" stroke="rgba(201,168,76,0.35)" strokeWidth="1" strokeDasharray="3 3"/>
        <path d="M15 23 L34 23" stroke="rgba(201,168,76,0.35)" strokeWidth="1" strokeDasharray="3 3"/>
        <circle cx="44" cy="14" r="5" fill="rgba(201,168,76,0.2)" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2"/>
        <path d="M44 10 L44 18 M40 14 L48 14" stroke="rgba(201,168,76,0.6)" strokeWidth="1.2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: "ilahi",
    title: "Ilahi",
    arabic: "إلهي",
    description: "Turkish & Ottoman devotional hymns",
    count: 2,
    accent: "#c9a84c",
    accentDim: "rgba(201,168,76,0.12)",
    accentBorder: "rgba(201,168,76,0.35)",
    icon: (
      <svg viewBox="0 0 60 60" width="52" height="52" fill="none">
        <path d="M20 42 C20 42 18 30 24 24 C28 20 34 20 38 24 C42 28 40 36 36 40"
          stroke="rgba(201,168,76,0.5)" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
        <path d="M36 40 C36 40 32 44 28 43 C24 42 22 38 24 34"
          stroke="rgba(201,168,76,0.4)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <circle cx="30" cy="22" r="3" fill="rgba(201,168,76,0.4)" stroke="rgba(201,168,76,0.6)" strokeWidth="1"/>
        <path d="M26 46 Q30 50 34 46" stroke="rgba(201,168,76,0.5)" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
        <path d="M14 30 Q18 26 20 30" stroke="rgba(201,168,76,0.3)" strokeWidth="1" strokeLinecap="round" fill="none"/>
        <path d="M40 30 Q44 26 46 30" stroke="rgba(201,168,76,0.3)" strokeWidth="1" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
];

function GeometricPattern() {
  return (
    <svg
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.04, pointerEvents: "none" }}
      viewBox="0 0 400 400"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <pattern id="geo" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
          <polygon points="40,4 76,22 76,58 40,76 4,58 4,22" fill="none" stroke="#c9a84c" strokeWidth="0.5"/>
          <polygon points="40,16 64,28 64,52 40,64 16,52 16,28" fill="none" stroke="#2c6e6a" strokeWidth="0.3"/>
          <circle cx="40" cy="40" r="4" fill="none" stroke="#c9a84c" strokeWidth="0.4"/>
        </pattern>
      </defs>
      <rect width="400" height="400" fill="url(#geo)"/>
    </svg>
  );
}

function SectionCard({ section, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  const [visible, setVisible] = useState(false);
  const isComingSoon = section.count === 0;

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 200 + index * 150);
    return () => clearTimeout(t);
  }, [index]);

  return (
    <div
      onClick={isComingSoon ? undefined : onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative",
        background: hovered && !isComingSoon
          ? `linear-gradient(145deg, ${section.accentDim} 0%, rgba(255,255,255,0.03) 100%)`
          : "linear-gradient(145deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
        border: `1px solid ${hovered && !isComingSoon ? section.accentBorder.replace("0.35", "0.6") : section.accentBorder}`,
        borderRadius: 16,
        padding: "32px 28px 28px",
        cursor: isComingSoon ? "default" : "pointer",
        transition: "all 0.3s ease",
        transform: visible ? (hovered && !isComingSoon ? "translateY(-4px)" : "translateY(0)") : "translateY(20px)",
        opacity: visible ? (isComingSoon ? 0.55 : 1) : 0,
        overflow: "hidden",
      }}
    >
      <div style={{
        position: "absolute", top: 0, left: "20%", right: "20%", height: 2,
        background: `linear-gradient(90deg, transparent, ${section.accent}, transparent)`,
        opacity: hovered && !isComingSoon ? 1 : 0.4,
        transition: "opacity 0.3s",
        borderRadius: "0 0 2px 2px",
      }}/>
      <div style={{
        position: "absolute", right: 16, top: 12,
        fontSize: 72, lineHeight: 1,
        color: section.accent,
        opacity: hovered ? 0.12 : 0.07,
        fontFamily: "Georgia, serif",
        transition: "opacity 0.3s",
        userSelect: "none",
        pointerEvents: "none",
      }}>
        {section.arabic}
      </div>
      <div style={{ marginBottom: 20 }}>{section.icon}</div>
      <h2 style={{
        fontFamily: "Georgia, 'Times New Roman', serif",
        fontSize: 28, fontWeight: 400,
        color: "#e8f0ef", margin: "0 0 8px", letterSpacing: 1,
      }}>
        {section.title}
      </h2>
      <p style={{
        fontFamily: "Georgia, serif", fontSize: 18,
        color: section.accent, margin: "0 0 12px", opacity: 0.8, letterSpacing: 2,
      }}>
        {section.arabic}
      </p>
      <div style={{
        width: 40, height: 1,
        background: `linear-gradient(90deg, ${section.accent}, transparent)`,
        marginBottom: 14, opacity: 0.5,
      }}/>
      <p style={{
        fontSize: 13, color: "rgba(200,225,224,0.55)", margin: "0 0 20px",
        lineHeight: 1.7, fontFamily: "Georgia, serif", fontStyle: "italic",
      }}>
        {section.description}
      </p>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <span style={{
          fontSize: 11, color: section.accent,
          letterSpacing: 2, textTransform: "uppercase", opacity: 0.7,
        }}>
          {section.count > 0
            ? `${section.count} ${section.id === "qawwali" ? "Qawwalis" : section.id === "qasida" ? "Qasidas" : "Ilahis"}`
            : "Coming soon"}
        </span>
        {!isComingSoon && (
          <div style={{
            width: 28, height: 28, borderRadius: "50%",
            border: `1px solid ${section.accentBorder}`,
            display: "flex", alignItems: "center", justifyContent: "center",
            background: hovered ? section.accentDim : "transparent",
            transition: "all 0.25s",
          }}>
            <span style={{ color: section.accent, fontSize: 14, lineHeight: 1 }}>→</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Homepage({ onSelect }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);

  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(ellipse at 20% 10%, rgba(15,42,40,1) 0%, rgba(6,20,19,1) 55%, rgba(3,12,11,1) 100%)",
      fontFamily: "Georgia, 'Times New Roman', serif",
      color: "#cce4e2",
      position: "relative",
      overflowX: "hidden",
    }}>
      <GeometricPattern />
      <div style={{
        position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
        backgroundImage:
          "radial-gradient(ellipse at 10% 20%, rgba(44,110,106,0.1) 0%, transparent 50%)," +
          "radial-gradient(ellipse at 90% 80%, rgba(201,168,76,0.07) 0%, transparent 50%)",
      }}/>
      <div style={{ position: "relative", zIndex: 5, maxWidth: 480, margin: "0 auto", padding: "0 22px 80px" }}>
        <header style={{
          textAlign: "center", padding: "60px 0 48px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(-16px)",
          transition: "all 0.5s ease",
        }}>
          <div style={{ fontSize: 22, color: "rgba(201,168,76,0.65)", marginBottom: 28, fontFamily: "Georgia, serif", letterSpacing: 3 }}>
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </div>
          <h1 style={{
            fontSize: "clamp(32px, 8vw, 44px)", fontWeight: 400,
            color: "#e8f0ef", margin: "0 0 6px", letterSpacing: 3,
            textShadow: "0 0 60px rgba(201,168,76,0.2)",
          }}>
            Sacred Lyrics
          </h1>
          <div style={{ margin: "0 0 20px" }} />
          <div style={{
            width: 100, height: 1,
            background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.5), transparent)",
            margin: "0 auto",
          }}/>
        </header>
        <p style={{
          textAlign: "center", fontSize: 11, letterSpacing: 4,
          color: "rgba(201,168,76,0.4)", textTransform: "uppercase", marginBottom: 24,
          opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.3s",
        }}>
          Choose a tradition
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {sections.map((s, i) => (
            <SectionCard key={s.id} section={s} index={i} onClick={() => onSelect(s.id)} />
          ))}
        </div>
        <footer style={{ textAlign: "center", marginTop: 52, opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.8s" }}>
          <div style={{ width: 80, height: 1, background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)", margin: "0 auto 16px" }}/>
          <p style={{ fontSize: 18, color: "rgba(201,168,76,0.4)", fontFamily: "Georgia, serif", letterSpacing: 3 }}>
            اللهم صل على سيدنا محمد
          </p>
        </footer>
      </div>
    </div>
  );
}
