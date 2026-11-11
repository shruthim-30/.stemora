import Photo from "./Photo.jsx";

export default function Achievements({ stats, gallery }) {
  return (
    <section id="achievements">
      <div className="wrap text-center">
        <div className="kicker">Achievements</div>
        <h2>Proof that kids can build big.</h2>
        <p className="sub mx-auto">Replace the placeholders with your real numbers.</p>
        <div className="mt-11 grid grid-cols-2 gap-[18px] md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="rounded-[18px] border-3 border-navy bg-white p-6 text-center">
              <b className="block text-[46px] font-extrabold tracking-[-.03em] text-tealD">{s.value}</b>
              <span className="font-semibold text-mut">{s.label}</span>
            </div>
          ))}
        </div>
        <div className="mt-11 grid grid-cols-2 gap-[18px] md:grid-cols-4">
          {gallery.map((g, i) => (
            <Photo key={g} label={g} className={i === 0 ? "col-span-2 min-h-[220px] md:row-span-2 md:min-h-[360px]" : "min-h-[170px]"} />
          ))}
        </div>
      </div>
    </section>
  );
}
