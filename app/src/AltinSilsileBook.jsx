import { useState, useEffect } from "react";

// ============================================================
//  ALTIN SİLSİLE — the Golden Chain of Naqshbandi Sufi masters
//  Each entry is one master in the chain, in transmission order.
//
//  To add a photo and biography for a master, fill in:
//    image: "/path/or/url/to/photo.jpg"   (or an imported asset)
//    bio:   "Biographical text goes here…"
//  Leave them as null until ready — the detail page shows a
//  placeholder automatically for anything still missing.
// ============================================================

const AMBER = "#c08a3e";

const silsile = [
  { id: 1,  order: "01", name: "Seyyidina Hazreti Muhammed (S.A.V.)", image: null, bio: null },
  { id: 2,  order: "02", name: "Seyyidina Ebû Bekr-î Sıddık-ra", image: null, bio: null },
  { id: 3,  order: "03", name: "Seyyidina Salmân-ı Fârisî-ra", image: null, bio: null },
  { id: 4,  order: "04", name: "Imām Kâsım bin Muhammed bin Ebû Bekr-hz", image: null, bio: null },
  { id: 5,  order: "05", name: "İmâm Câ'fer-i Sıddık-ra", image: null, bio: null },
  { id: 6,  order: "06", name: "Hâce Bayazid-î Bestami", image: null, bio: null },
  { id: 7,  order: "07", name: "Hâce Ebû'l Hasan Harakânî", image: null, bio: null },
  { id: 8,  order: "08", name: "Hâce Ebû Ali Farmadî", image: null, bio: null },
  { id: 9,  order: "09", name: "Hâce Ebû Yakub Yûsuf el-Hemedânî", image: null, bio: null },
  { id: 10, order: "11", name: "Hâce Abdul Halik Gujdevanî", image: null, bio: null },
  { id: 11, order: "12", name: "Hâce Arif Revegari", image: null, bio: null },
  { id: 12, order: "13", name: "Hâce Mahmud İncir Fagnevi", image: null, bio: null },
  { id: 13, order: "14", name: "Hâce Azîzan Ali Râmitenî", image: null, bio: null },
  { id: 14, order: "15", name: "Hâce Muhammed Baba Samasî", image: null, bio: null },
  { id: 15, order: "16", name: "Hâce Seyyid Amir Kulal", image: null, bio: null },
  { id: 16, order: "17", name: "Hâce Muhammed Bâha'ûddin Nakşbend Buharî", image: null, bio: null },
  { id: 17, order: "18", name: "Hâce Alauddin Attar Buharî", image: null, bio: null },
  { id: 18, order: "19", name: "Hâce Yakûb Çerhî", image: null, bio: null },
  { id: 19, order: "20", name: "Hâce Ubeydullah Ahrar", image: null, bio: null },
  { id: 20, order: "21", name: "Hâce Muhammed Zahid Vakhşi", image: null, bio: null },
  { id: 21, order: "22", name: "Hâce Derviş Muhammed", image: null, bio: null },
  { id: 22, order: "23", name: "Hâce Muhammed Amkanaki", image: null, bio: null },
  { id: 23, order: "24", name: "Hâce Muhammed Bâkî Billah Berang", image: null, bio: null },
  { id: 24, order: "25", name: "Şeyh Ahmed el-Farukî el-Sirhindî, İmâm Rabbânî, Müceddid Elf Sânî", image: null, bio: null },
  { id: 25, order: "26", name: "İmâm Hâce Muhammed Masum", image: null, bio: null },
  { id: 26, order: "27", name: "Hâce Muhammed Saifuddin", image: null, bio: null },
  { id: 27, order: "28", name: "Seyyid Nûr Muhammed Badayuni", image: null, bio: null },
  { id: 28, order: "29", name: "Şehîd Mirza Mazhar Can-ı Cânân, nâm-ı diğer Şems-ud-Dīn Habīb Allāh", image: null, bio: null },
  { id: 29, order: "30", name: "Hâce Abdullah Dehlevî, nâm-ı diğer Şâh Gulam Ali Dehlevî", image: null, bio: null },
  { id: 30, order: "31", name: "Ziauddin Mevlânâ Muhammed Hâlid-î Bağdâdî", image: null, bio: null },
  { id: 31, order: "32", name: "Şeyh İsmail Muhammed eş-Şirvanî", image: null, bio: null },
  { id: 32, order: "33", name: "Şeyh Has Muhammed eş-Şirvanî", image: null, bio: null },
  { id: 33, order: "34", name: "Şeyh Muhammed Efendi el-Yaragî", image: null, bio: null },
  { id: 34, order: "35", name: "Şeyh Cemâleddin el-Gumuki el-Huseynî", image: null, bio: null },
  { id: 35, order: "36", name: "Şeyh Ebu Ahmed es-Suğurî", image: null, bio: null },
  { id: 36, order: "37", name: "Şeyh Ebu Muhammed el-Medenî", image: null, bio: null },
  { id: 37, order: "38", name: "Şeyh Şerafeddin Dağıstanî", image: null, bio: null },
  { id: 38, order: "39", name: "Şeyh Abdullah Daghestani-hz", image: null, bio: null },
  { id: 39, order: "40", name: "Şeyh Nâzım el-Hakkânî el-Kıbrısî", image: null, bio: null },
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
        "radial-gradient(ellipse at 10% 15%, rgba(192,138,62,0.12) 0%, transparent 55%)," +
        "radial-gradient(ellipse at 90% 85%, rgba(201,168,76,0.07) 0%, transparent 55%)",
    }} />
  );
}

function BackBtn({ label, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: "none", border: "none",
        color: hov ? AMBER : `${AMBER}99`,
        fontSize: 12, letterSpacing: "1.8px", textTransform: "uppercase",
        cursor: "pointer", fontFamily: "inherit",
        padding: 0, display: "flex", alignItems: "center", gap: 8,
        transition: "color 0.18s",
      }}>
      ← {label}
    </button>
  );
}

function NavBtn({ dir, m, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button onClick={onClick}
      onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: `1px solid ${hov ? `${AMBER}88` : `${AMBER}33`}`,
        borderRadius: 9, padding: "12px 16px",
        color: hov ? AMBER : `${AMBER}a6`,
        fontSize: 12, fontFamily: "inherit", cursor: "pointer",
        maxWidth: "46%", textAlign: dir === "prev" ? "left" : "right",
        transition: "all 0.18s",
      }}>
      <div style={{ fontSize: 10, letterSpacing: 1.2, marginBottom: 4, opacity: 0.55 }}>
        {dir === "prev" ? "← PREVIOUS" : "NEXT →"}
      </div>
      <div style={{ fontSize: 13, lineHeight: 1.4 }}>{m.name}</div>
    </button>
  );
}

// One button per master, shown on the index page.
function NameButton({ master, onClick }) {
  const [hov, setHov] = useState(false);
  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: "flex", alignItems: "center", gap: 14,
        width: "100%", textAlign: "left",
        background: hov
          ? `linear-gradient(135deg, ${AMBER}1a 0%, rgba(255,255,255,0.03) 100%)`
          : "rgba(255,255,255,0.025)",
        border: `1px solid ${hov ? `${AMBER}88` : `${AMBER}26`}`,
        borderRadius: 12, padding: "16px 18px",
        cursor: "pointer", transition: "all 0.2s ease",
        fontFamily: "inherit",
      }}
    >
      <span style={{
        flexShrink: 0, width: 34, height: 34, borderRadius: "50%",
        border: `1px solid ${AMBER}55`, background: `${AMBER}0f`,
        display: "flex", alignItems: "center", justifyContent: "center",
        fontSize: 11, color: AMBER, fontFamily: "'Courier New', monospace",
      }}>
        {master.order}
      </span>
      <span style={{
        flex: 1, fontSize: 15, lineHeight: 1.4,
        color: hov ? "#e8f0ef" : "#cce4e2",
        fontFamily: "Georgia,'Times New Roman',serif",
      }}>
        {master.name}
      </span>
      <span style={{ color: hov ? AMBER : `${AMBER}80`, fontSize: 18, transition: "color 0.2s", flexShrink: 0 }}>→</span>
    </button>
  );
}

export default function AltinSilsileBook({ onBack }) {
  const [selectedId, setSelectedId] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => { setTimeout(() => setVisible(true), 50); }, []);
  useEffect(() => { window.scrollTo({ top: 0, behavior: "smooth" }); }, [selectedId]);

  useEffect(() => {
    const onBackBtn = (e) => { if (selectedId !== null) { e.preventDefault(); setSelectedId(null); } };
    window.addEventListener("popstate", onBackBtn);
    if (selectedId !== null) window.history.pushState({ silsile: selectedId }, "");
    return () => window.removeEventListener("popstate", onBackBtn);
  }, [selectedId]);

  const selected = silsile.find(m => m.id === selectedId);
  const selectedIndex = silsile.findIndex(m => m.id === selectedId);

  // ── DETAIL VIEW ──
  if (selected) {
    const prev = silsile[selectedIndex - 1];
    const next = silsile[selectedIndex + 1];
    return (
      <div style={{ ...rootStyle, overflowY: "auto", opacity: visible ? 1 : 0, transition: "opacity 0.3s" }}>
        <BgLayer />
        <div style={{ maxWidth: 680, margin: "0 auto", padding: "0 18px 120px", position: "relative", zIndex: 5 }}>
          <div style={{ padding: "22px 0 16px" }}>
            <BackBtn label="All Masters" onClick={() => setSelectedId(null)} />
          </div>

          <div style={{ padding: "16px 0 20px", borderBottom: `1px solid ${AMBER}33` }}>
            <div style={{
              display: "inline-block", fontSize: 10, letterSpacing: "1.5px", textTransform: "uppercase",
              color: AMBER, border: `1px solid ${AMBER}55`, borderRadius: 20,
              padding: "3px 10px", background: `${AMBER}10`, marginBottom: 10,
            }}>
              {selectedIndex + 1} of {silsile.length} · #{selected.order}
            </div>
            <h1 style={{
              fontSize: "clamp(20px,6vw,32px)", fontWeight: 400,
              color: "#e8f0ef", margin: "0 0 6px", lineHeight: 1.35,
              fontFamily: "Georgia,'Times New Roman',serif",
              textShadow: `0 0 40px ${AMBER}33`,
            }}>
              {selected.name}
            </h1>
          </div>

          {/* Photo */}
          <div style={{ margin: "24px 0" }}>
            {selected.image ? (
              <img src={selected.image} alt={selected.name} style={{
                width: "100%", borderRadius: 12, border: `1px solid ${AMBER}33`, display: "block",
              }}/>
            ) : (
              <div style={{
                width: "100%", aspectRatio: "4 / 3", borderRadius: 12,
                border: `1px dashed ${AMBER}40`, background: `${AMBER}08`,
                display: "flex", alignItems: "center", justifyContent: "center",
                color: `${AMBER}80`, fontSize: 12, letterSpacing: 1, textAlign: "center", padding: 20,
              }}>
                Photograph coming soon
              </div>
            )}
          </div>

          {/* Biography */}
          <div style={{
            borderLeft: `2px solid ${AMBER}4d`, padding: "16px 20px",
            background: `${AMBER}08`, borderRadius: "0 8px 8px 0",
          }}>
            {selected.bio ? (
              selected.bio.split("\n").map((line, i) => (
                <p key={i} style={{
                  margin: i === 0 ? 0 : "10px 0 0", fontSize: 15, lineHeight: 1.9, color: "#cce4e2",
                }}>
                  {line}
                </p>
              ))
            ) : (
              <p style={{ margin: 0, fontSize: 14, lineHeight: 1.9, color: `${AMBER}99`, fontStyle: "italic" }}>
                Biography coming soon.
              </p>
            )}
          </div>

          <div style={{ display: "flex", justifyContent: "space-between", paddingTop: 36, gap: 12 }}>
            {prev ? <NavBtn dir="prev" m={prev} onClick={() => setSelectedId(prev.id)} /> : <div/>}
            {next ? <NavBtn dir="next" m={next} onClick={() => setSelectedId(next.id)} /> : <div/>}
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
        borderBottom: `1px solid ${AMBER}33`,
        padding: "44px 24px 28px", textAlign: "center",
      }}>
        <div style={{ position: "absolute", left: 20, top: 48 }}>
          <BackBtn label="Home" onClick={onBack} />
        </div>
        <div style={{ fontSize: 18, letterSpacing: 4, color: `${AMBER}b3`, marginBottom: 10, fontFamily: "serif" }}>
          السلسلة الذهبية
        </div>
        <h1 style={{
          fontSize: "clamp(30px,7vw,52px)", fontWeight: 400,
          color: "#e8f0ef", margin: "0 0 6px", letterSpacing: 2,
          fontFamily: "Georgia,'Times New Roman',serif",
          textShadow: `0 0 60px ${AMBER}4d`,
        }}>
          Altin Silsile
        </h1>
        <div style={{
          width: 140, height: 1,
          background: `linear-gradient(90deg,transparent,${AMBER}99,transparent)`,
          margin: "14px auto 12px",
        }}/>
        <p style={{ fontSize: 12, color: `${AMBER}8c`, letterSpacing: 3, margin: 0, textTransform: "uppercase" }}>
          {silsile.length} Masters
        </p>
      </header>

      <main style={{ position: "relative", zIndex: 5, maxWidth: 680, margin: "0 auto", padding: "30px 20px 80px" }}>
        <p style={{ fontSize: 13, color: `${AMBER}80`, fontStyle: "italic", marginBottom: 28, lineHeight: 1.8 }}>
          The Golden Chain (Silsila Dhahabiyya) — the unbroken chain of Naqshbandi Sufi masters,
          from the Prophet Muhammad ﷺ to the present day. Select a name to read more.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
          {silsile.map(master => (
            <NameButton key={master.id} master={master} onClick={() => setSelectedId(master.id)} />
          ))}
        </div>
      </main>

      <footer style={{
        position: "relative", zIndex: 5, textAlign: "center", padding: "22px",
        borderTop: `1px solid ${AMBER}1a`,
        color: `${AMBER}80`, fontSize: 20,
        fontFamily: "Georgia,'Times New Roman',serif", letterSpacing: 2,
      }}>
        اللهم صل على سيدنا محمد
      </footer>
    </div>
  );
}
