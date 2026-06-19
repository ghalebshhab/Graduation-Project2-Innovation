import "./App.css";
const teamMembers = [
  { name: "عضو الفريق الأول", image: "/images/team-1.jpg", fallback: "1" },
  { name: "عضو الفريق الثاني", image: "/images/team-2.jpg", fallback: "2" },
  { name: "عضو الفريق الثالث", image: "/images/team-3.jpg", fallback: "3" },
  { name: "عضو الفريق الرابع", image: "/images/team-4.jpg", fallback: "4" },
  { name: "عضو الفريق الخامس", image: "/images/team-5.jpg", fallback: "5" },
];

function JordanMap() {
  return (
    <div className="jordan-map-bg" aria-hidden="true">
      <svg viewBox="0 0 400 500" fill="none">
        <path
          d="M155 20L175 18L210 22L240 30L260 28L275 35L280 50L270 65L278 80L290 90L295 105L285 115L275 130L280 145L270 160L265 175L272 190L268 210L255 225L248 245L238 265L230 285L218 310L205 335L195 360L185 385L178 410L172 435L168 455L160 465L152 455L148 435L145 415L140 395L132 370L125 350L118 325L112 305L105 285L100 265L95 248L88 230L82 215L78 200L75 185L80 170L85 155L80 140L72 125L68 110L72 95L78 80L85 68L90 55L100 42L112 32L130 24L145 20L155 20Z"
          fill="rgba(56,213,255,.12)"
          stroke="rgba(185,239,255,.88)"
          strokeWidth="2.7"
          strokeLinejoin="round"
        />
        <path
          d="M80 140Q180 135 280 145M88 230Q175 225 268 210M105 285Q175 280 255 225"
          stroke="rgba(52,211,153,.45)"
          strokeWidth="1.5"
          strokeDasharray="5 5"
        />
        <path
          d="M155 20Q168 230 168 455"
          stroke="rgba(56,213,255,.65)"
          strokeWidth="2"
          strokeDasharray="6 6"
        />
        <circle cx="175" cy="185" r="6" fill="#f2c66d" />
        <circle
          cx="175"
          cy="185"
          r="12"
          stroke="rgba(242,198,109,.42)"
          strokeWidth="1.8"
        />
      </svg>
    </div>
  );
}

function GraduationHat() {
  return (
    <svg viewBox="0 0 130 92" fill="none">
      <path
        d="M13 32 65 10l52 22-52 23L13 32Z"
        fill="#111827"
        stroke="#f2c66d"
        strokeWidth="3"
        strokeLinejoin="round"
      />
      <path
        d="M38 45c6 12 13 19 27 19s21-7 27-19v20c-10 9-44 9-54 0V45Z"
        fill="#1f2937"
        stroke="#0f172a"
        strokeWidth="2"
      />
      <path
        d="M97 34c6 9 8 18 7 30"
        stroke="#f2c66d"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="104" cy="66" r="5" fill="#f2c66d" />
      <path
        d="m101 71-5 13m8-12v14m3-15 5 13"
        stroke="#f2c66d"
        strokeWidth="2.4"
        strokeLinecap="round"
      />
    </svg>
  );
}

function App() {
  return (
    <main className="invite-wrap" dir="rtl">
      <section className="invite-card">
        <div className="top-light" />
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="grid-lines" />

        <JordanMap />

        <svg className="route-line" viewBox="0 0 240 360" fill="none">
          <path
            d="M118 18C60 70 185 102 130 160 72 221 174 250 113 335"
            stroke="#38d5ff"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>

        <div className="scanning-line" />

        <div className="content">
          <div className="pill">مناقشة مشروع التخرج الثاني</div>

          <div className="hat-wrap">
            <GraduationHat />
          </div>

          <div className="title-group">
            <h1>JoMap</h1>
            <div className="sub">Graduation Project II</div>
          </div>

          <div className="invite-box">
            <div className="heading">بكل فخر واعتزاز ✦</div>

            <p>
              نتشرف بدعوتكم لحضور مناقشة مشروع تخرجنا الثاني بعنوان:
              <br />
              <span className="project-name">
                JOMAP: A community based locations and activities
              </span>
              <br />
              حضوركم شرفٌ لنا ويُضفي على هذه اللحظة المميزة معنىً خاصاً في
              ختام مسيرتنا الجامعية.
            </p>
          </div>

          <div className="details-grid">
            <div className="detail-card">
              <span className="d-icon">📅</span>
              <div className="d-label">التاريخ</div>
              <div className="d-value">23/6/2026</div>
            </div>

            <div className="detail-card">
              <span className="d-icon">🕐</span>
              <div className="d-label">الوقت</div>
              <div className="d-value">11:40 AM</div>
            </div>
          </div>

          <div className="location-card">
            <div className="loc-icon">⌖</div>

            <div>
  <div className="loc-label">مكان المناقشة</div>

  <div className="loc-value">
    الجامعة الهاشمية  —  كلية تكنولوجيا المعلومات  —   
  </div>
  <div className="loc-value">  
     قاعة 302
  </div>
  
</div>
          </div>

          {/* Zaffeh announcement */}
          <div className="zaffeh-announcement">
            <div className="zaffeh-icon">🥁</div>

            <div className="zaffeh-content">
              <div className="zaffeh-title"> زفّة الشباب</div>

              <p>
    تكتمل فرحتنا بوجودكم في زفة الخريجين في تمام الساعة 
                <span className="zaffeh-time">1:00 PM</span>
                عند <span className="zaffeh-place">بوابة عمّان</span>
              </p>
            </div>

            <div className="zaffeh-public">الدعوة عامة</div>
          </div>

          <div className="divider-line" />

          <div className="team-label">Crafted by the team</div>

          <div className="avatars">
            {teamMembers.map((member) => (
              <div className="av" key={member.image} title={member.name}>
                <img
                  src={member.image}
                  alt={member.name}
                  onError={(event) => {
                    event.currentTarget.style.display = "none";
                  }}
                />
                <span>{member.fallback}</span>
              </div>
            ))}
          </div>

          <div className="footer-text">
            كلية تكنولوجيا المعلومات
            <span className="dot-accent" />
           JO MAP TEAM
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;