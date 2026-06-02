import { useState, useEffect } from "react";

const ROSE   = "#2c6e6a";
const GOLD   = "#c9a84c";

const ilahis = [
  {
    id: 1,
    title: "Veysel Karani",
    language: "Turkish",
    poet: "Yunus Emre (attrib.)",
    verses: [
      {
        original: "Rumda Acemde aşık olduğum\nYemen illerinde Veysel Karani\nHak peygamber sevdi ve dostum dedi\nYemen illerinde Veysel Karani",
        translation: "My beloved in Rum and Acem\nVeysel Karani in the lands of Yemen\nThe true prophet loved him and called him friend\nVeysel Karani in the lands of Yemen",
      },
      {
        original: "Erenler önünde kemer belinde\nAk nurdan beni var o sağ elinde\nVeys Sultan derler hak divanında\nYemen illerinde Veysel Karani",
        translation: "Before the saints, with belt around his waist\nIn his right hand he holds a being of white light\nThey call him Veys Sultan in the court of Truth\nVeysel Karani in the lands of Yemen",
      },
      {
        original: "Elinde asası hurma dalından\nEyninde hırkası deve yününden\nAsla hata gelmez onun dilinden\nYemen illerinde Veysel Karani\nYunus eydürgelin biz de varalım\nAyağın tozuna yüzler sürelim\nHak nasip eylesin komşu olalım\nYemen illerinde Veysel Karani",
        translation: "His staff made from a palm branch\nHis cloak woven from camel wool\nNo error ever comes from his tongue\nVeysel Karani in the lands of Yemen\nYunus says: Come, let us go there too\nLet us press our faces to the dust of his feet\nMay God grant us to be his neighbours\nVeysel Karani in the lands of Yemen",
      },
    ],
  },
  {
    id: 2,
    title: "Yar Yüreğim Yar",
    language: "Turkish",
    poet: "Yunus Emre",
    verses: [
      {
        original: "Yar yüreğim yar\nGör ki neler var\nBu halk içinde\nBize gülen var\nKoy gülen gülsün\nHak bizi bilsin\nGafiller bilsin\nHakkı seven var",
        translation: "Beloved my heart beloved\nSee that what's in this society\nThere is laughter at us\nLet the laugher laugh\nLet the Haq (Truth, God) be ours\nHow can the unwary know\nThere is a lover of the Haq",
      },
      {
        original: "Bu yol uzundur\nMenzili çoktur\nGeçidi yoktur\nDerin sular var\nHer kim merdane\nGelsin meydane\nKıyamaz cane\nKimde hüner var\nYunus sen burda\nMeydan isteme\nMeydanlar içinde canım\nMerdaneler var",
        translation: "This road is far, it has many stages\nIt has no crossing — there are deep waters\nWhoever is brave, let them come to the arena\nWhoever cannot sacrifice their life — what skill have they?\nYunus, do not seek the arena here\nIn the arenas, my soul, there are true brave ones",
      },
    ],
  },
];

// ── Shared styles ────────────────────────────────────────
const rootStyle = {
  minHeight: "100vh",
  background: "radial-gradient(ellipse at 20% 10%, rgba(15,42,40,1) 0%, rgba(6,20,19,1) 55%, rgba(3,12,11,1) 100%)",
  color: "#cce4e2",
  fontFamily: "'Georgia','Times New Roman',serif",
  position: "relative",
  overflowX: "hidden",
};

function BgLayer() {
  return (
    <div style={{
      position: "fixed", inset: 0, pointerEvents: "none", zIndex: 0,
      backgroundImage:
        "radial-gradient(ellipse at 10% 15%, rgba(44,110,106,0.12) 0%, transparent 55%)," +
        "radial-gradient(ellipse at 90% 85%, rgba(184,150,62,0.07) 0%, transparent 55%)",
    }} />
  );
}

function Badge({ lang }) {
  return (
    <span style={{
      fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
      color: ROSE, border: `1px solid ${ROSE}55`,
      borderRadius: 20, padding: "3px 10px",
      background: `${ROSE}10`,
    }}>{lang}</span>
  );
}

function VerseBlock({ verse, label }) {
  return (
    <div style={{ marginBottom: 28 }}>
      <div style={{ fontSize: 10, letterSpacing: "2px", textTransform: "uppercase",
        color: "rgba(184,150,62,0.4)", marginBottom: 10 }}>
        {label}
      </div>

      {/* Original Turkish */}
      <div style={{
        borderLeft: `2px solid ${ROSE}4d`, padding: "14px 18px",
        marginBottom: 8, background: `${ROSE}08`, borderRadius: "0 8px 8px 0",
      }}>
        {verse.original.split("\n").map((line, i) => (
          <p key={i} style={{
            margin: i === 0 ? 0 : "6px 0 0", fontSize: 17, lineHeight: 2,
            color: "#e8f0ef", fontFamily: "Georgia,'Times New Roman',serif",
          }}>
            {line}
          </p>
        ))}
      </div>

      {/* Translation */}
      <div style={{
        borderLeft: `2px solid ${GOLD}73`, background: "rgba(201,168,76,0.04)",
        borderRadius: "0 8px 8px 0", padding: "13px 18px",
      }}>
        {verse.translation.split("\n").map((line, i) => (
          <p key={i} style={{
            margin: i === 0 ? 0 : "5px 0 0", fontSize: 14, lineHeight: 1.9,
            color: "rgba(201,168,76,0.9)",
          }}>
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}

function NavBtn({ dir, q, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? "rgba(44,110,106,0.55)" : "rgba(184,150,62,0.2)"}`,
        borderRadius: 9, padding: "12px 16px",
        color: hov ? "#c9a84c" : "rgba(184,150,62,0.65)",
        fontSize: 12, fontFamily: "inherit", cursor: "pointer",
        maxWidth: "46%", textAlign: dir === "prev" ? "left" : "right",
        transition: "all 0.18s",
      }}>
      <div style={{ fontSize: 10, letterSpacing: 1.2, marginBottom: 4, opacity: 0.55 }}>
        {dir === "prev" ? "← PREVIOUS" : "NEXT →"}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.4 }}>{q.title}</div>
    </button>
  );
}

function BackBtn({ label, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: "none", border: "none",
        color: hov ? "#c9a84c" : "rgba(184,150,62,0.6)",
        fontSize: 12, letterSpacing: "1.8px", textTransform: "uppercase",
        cursor: "pointer", fontFamily: "inherit",
        padding: 0, display: "flex", alignItems: "center", gap: 8,
        transition: "color 0.18s",
      }}>
      ← {label}
    </button>
  );
}

function ItemCard({ ilahi, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: hov
          ? `linear-gradient(135deg, ${ROSE}1a 0%, rgba(255,255,255,0.03) 100%)`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? `${ROSE}73` : `${ROSE}26`}`,
        borderRadius: 12, padding: "18px 20px",
        cursor: "pointer", transition: "all 0.2s ease",
        position: "relative", overflow: "hidden",
      }}>
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: "1.5px",
        background: "linear-gradient(90deg, transparent, rgba(184,150,62,0.6), transparent)",
        opacity: hov ? 1 : 0, transition: "opacity 0.2s",
      }}/>
      <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 10 }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ marginBottom: 8 }}><Badge lang={ilahi.language} /></div>
          <h3 style={{ fontSize: "clamp(14px,3.5vw,17px)", fontWeight: 400,
            color: hov ? "#e8f0ef" : "#cce4e2", margin: "0 0 4px",
            fontFamily: "Georgia,'Times New Roman',serif", lineHeight: 1.35 }}>
            {ilahi.title}
          </h3>
          <p style={{ fontSize: 11, color: "rgba(184,150,62,0.55)", margin: 0, letterSpacing: 0.3 }}>
            {ilahi.poet}
          </p>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, flexShrink: 0, paddingTop: 4 }}>
          <span style={{ width: 8, height: 8, borderRadius: "50%", background: `${ROSE}cc`, flexShrink: 0 }}/>
          <span style={{ color: hov ? "#c9a84c" : `${ROSE}80`, fontSize: 18, transition: "color 0.2s" }}>→</span>
        </div>
      </div>
    </div>
  );
}

export default function IlahiBook({ onBack }) {
  const [selectedId, setSelectedId] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [selectedId]);

  useEffect(() => {
    const onBackBtn = (e) => { if (selectedId !== null) { e.preventDefault(); setSelectedId(null); } };
    window.addEventListener("popstate", onBackBtn);
    if (selectedId !== null) window.history.pushState({ ilahi: selectedId }, "");
    return () => window.removeEventListener("popstate", onBackBtn);
  }, [selectedId]);

  const selected = ilahis.find(i => i.id === selectedId);
  const selectedIndex = ilahis.findIndex(i => i.id === selectedId);

  // ── DETAIL VIEW ──
  if (selected) {
    const prev = ilahis[selectedIndex - 1];
    const next = ilahis[selectedIndex + 1];
    return (
      <div style={{ ...rootStyle, overflowY: "auto", opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}>
        <BgLayer />
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 18px 120px", position: "relative", zIndex: 5 }}>
          <div style={{ padding: "22px 0 16px" }}>
            <BackBtn label="All Ilahis" onClick={() => setSelectedId(null)} />
          </div>
          <div style={{ padding: "16px 0 20px", borderBottom: `1px solid ${ROSE}33` }}>
            <div style={{ marginBottom: 10 }}><Badge lang={selected.language} /></div>
            <h1 style={{ fontSize: "clamp(20px,6vw,34px)", fontWeight: 400,
              color: "#e8f0ef", margin: "0 0 6px", lineHeight: 1.3,
              fontFamily: "Georgia,'Times New Roman',serif",
              textShadow: `0 0 40px ${ROSE}33` }}>
              {selected.title}
            </h1>
            <p style={{ fontSize: 13, color: `${ROSE}b3`, margin: 0, letterSpacing: 0.5 }}>
              {selected.poet}
            </p>
          </div>
          <div style={{ display: "flex", gap: 20, padding: "10px 0 14px",
            borderBottom: `1px solid ${ROSE}1a`, fontSize: 11, letterSpacing: "1.2px", textTransform: "uppercase" }}>
            <span style={{ color: "#cce4e2", display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 18, height: 2, background: "rgba(180,220,218,0.3)", display: "inline-block", borderRadius: 2 }} />
              Turkish
            </span>
            <span style={{ color: `${GOLD}d9`, display: "flex", alignItems: "center", gap: 7 }}>
              <span style={{ width: 18, height: 2, background: `${GOLD}99`, display: "inline-block", borderRadius: 2 }} />
              Translation
            </span>
          </div>
          <div style={{ marginTop: 20 }}>
            {selected.verses.map((v, i) => (
              <VerseBlock key={i} verse={v} label={`Verse ${i + 1}`} />
            ))}
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 36, gap: 12 }}>
            {prev ? <NavBtn dir="prev" q={prev} onClick={() => setSelectedId(prev.id)} /> : <div/>}
            {next ? <NavBtn dir="next" q={next} onClick={() => setSelectedId(next.id)} /> : <div/>}
          </div>
        </div>
      </div>
    );
  }

  // ── INDEX VIEW ──
  return (
    <div style={{ ...rootStyle, overflowY: "auto", opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}>
      <BgLayer />
      <header style={{
        position: "relative", zIndex: 10,
        borderBottom: `1px solid ${ROSE}33`,
        padding: "44px 24px 28px", textAlign: "center",
      }}>
        <div style={{ position: "absolute", left: 20, top: 48 }}>
          <BackBtn label="Home" onClick={onBack} />
        </div>
        <div style={{ fontSize: 18, letterSpacing: 4, color: "rgba(184,150,62,0.7)", marginBottom: 10, fontFamily: "serif" }}>
          إلهي
        </div>
        <h1 style={{ fontSize: "clamp(30px,7vw,52px)", fontWeight: 400,
          color: "#e8f0ef", margin: "0 0 6px", letterSpacing: 2,
          fontFamily: "Georgia,'Times New Roman',serif",
          textShadow: `0 0 60px ${ROSE}4d` }}>
          Ilahi Lyrics
        </h1>
        <div style={{ width: 140, height: 1,
          background: "linear-gradient(90deg,transparent,rgba(184,150,62,0.6),transparent)",
          margin: "14px auto 12px" }}/>
        <p style={{ fontSize: 12, color: `${ROSE}8c`, letterSpacing: 3, margin: 0, textTransform: "uppercase" }}>
          {ilahis.length} Ilahis
        </p>
      </header>
      <main style={{ position: "relative", zIndex: 5, maxWidth: 940, margin: "0 auto", padding: "30px 20px 80px" }}>
        <p style={{ fontSize: 13, color: "rgba(44,110,106,0.7)", fontStyle: "italic", marginBottom: 28, lineHeight: 1.8 }}>
          Turkish & Ottoman devotional hymns from the Sufi tradition, principally the poetry of Yunus Emre.
        </p>
        <div style={{ display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))", gap: 12 }}>
          {ilahis.map(ilahi => (
            <ItemCard key={ilahi.id} ilahi={ilahi} onClick={() => setSelectedId(ilahi.id)} />
          ))}
        </div>
      </main>
      <footer style={{
        position: "relative", zIndex: 5, textAlign: "center", padding: "22px",
        borderTop: `1px solid ${ROSE}1a`,
        color: "rgba(184,150,62,0.5)", fontSize: 20,
        fontFamily: "Georgia,'Times New Roman',serif", letterSpacing: 2,
      }}>
        اللهم صل على سيدنا محمد
      </footer>
    </div>
  );
}
