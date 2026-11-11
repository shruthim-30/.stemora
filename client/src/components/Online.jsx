export default function Online({ data }) {
  return (
    <section id="learn" className="bg-navy text-white">
      <div className="wrap grid items-center gap-14 md:grid-cols-2">
        <div>
          <div className="kicker !text-gold">Online learning platform</div>
          <h2>Keep building, even at home.</h2>
          <p className="sub !text-mist">{data.text}</p>
          <div className="my-[26px] grid gap-3 md:grid-cols-2">
            {data.features.map((f) => (
              <div key={f} className="rounded-[14px] border-2.5 border-slate px-4 py-3.5 text-[15px] font-bold">
                <span className="text-gold">✓ </span>{f}
              </div>
            ))}
          </div>
          <a className="btn-gold text-navy" href="#contact">Get early access</a>
        </div>
        <div className="rounded-[20px] border-3 border-gold bg-white p-[22px] text-navy shadow-dash">
          <h4 className="mb-3.5 text-base font-extrabold">My learning · Grade {data.grade}</h4>
          {data.courses.map((c) => (
            <div key={c.name} className="mb-4">
              <div className="mb-1.5 flex justify-between text-[15px] font-bold">
                <span>{c.name}</span>
                <span>{c.percent}%</span>
              </div>
              <div className="h-3 overflow-hidden rounded-full border-2 border-navy bg-paper">
                <i className="block h-full bg-teal" style={{ width: `${c.percent}%` }} />
              </div>
            </div>
          ))}
          <div className="flex justify-between text-[15px] font-bold">
            <span>Badges earned</span>
            <span>🏅 {data.badges}</span>
          </div>
        </div>
      </div>
    </section>
  );
}
