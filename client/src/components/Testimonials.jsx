export default function Testimonials({ items }) {
  return (
    <section className="border-y-3 border-navy bg-white">
      <div className="wrap">
        <div className="text-center">
          <div className="kicker">Testimonials</div>
          <h2>Loved by schools &amp; parents</h2>
        </div>
        <div className="mt-11 grid gap-6 md:grid-cols-3">
          {items.map((t, i) => (
            <div key={i} className="card relative pt-12">
              <span className="absolute left-5 top-0.5 text-[76px] font-extrabold leading-none text-gold">“</span>
              <div className="tracking-[2px] text-gold [-webkit-text-stroke:1px_#0D2136]">★★★★★</div>
              <p className="text-mut">“{t.quote}”</p>
              <b className="mt-4 block">{t.name}</b>
              <small className="text-mut">{t.role}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
