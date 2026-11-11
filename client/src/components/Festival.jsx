export default function Festival({ items }) {
  return (
    <section id="festival" className="bg-navy text-center text-white">
      <div className="wrap">
        <div className="font-bold text-gold">Stemora Robotics Festival</div>
        <h2 className="mb-4 mt-3 text-[60px] md:!text-[110px]">Ideas on display.</h2>
        <p className="mb-[34px] text-xl text-mist">Young innovators. Big imagination. Real creations.</p>
        <div className="mb-10 grid gap-[18px] text-left md:grid-cols-3">
          {items.map((i) => (
            <div key={i.title} className="rounded-2xl border-2.5 border-slate p-[22px]">
              <strong className="mb-1.5 block text-[19px] text-gold">{i.title}</strong>
              <span className="text-[15.5px] text-mist">{i.text}</span>
            </div>
          ))}
        </div>
        <a className="btn border-gold bg-gold text-navy" href="#contact">Plan a festival</a>
      </div>
    </section>
  );
}
