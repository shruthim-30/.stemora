import Photo from "./Photo.jsx";

export default function Wall({ items }) {
  return (
    <section id="wall">
      <div className="wrap text-center">
        <div className="kicker">Wall of Innovators</div>
        <h2>Innovators of the Month</h2>
        <p className="sub mx-auto">Celebrating six students who built, tested and inspired this month.</p>
        <div className="mt-11 grid gap-6 text-left md:grid-cols-3">
          {items.map((s) => (
            <article key={s.name} className="relative overflow-hidden rounded-[20px] border-3 border-navy bg-white shadow-hard6">
              <span className="absolute left-3 top-3 z-[2] rounded-full border-2.5 border-navy bg-gold px-3 py-[3px] text-xs font-extrabold">{s.badge}</span>
              <Photo label={`Photo of ${s.name}`} flat className="min-h-[190px]" />
              <div className="px-5 pb-[22px] pt-[18px]">
                <h3 className="text-xl">{s.name}</h3>
                <p className="mt-1.5 text-[15px] text-mut">{s.blurb}</p>
                <div className="mt-1.5 text-[13px] font-bold text-tealD">{s.meta}</div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
