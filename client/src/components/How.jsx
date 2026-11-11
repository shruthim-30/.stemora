export default function How({ steps }) {
  return (
    <section>
      <div className="wrap grid gap-9 md:grid-cols-[.8fr_1.2fr] md:gap-16">
        <div>
          <h2>How it works</h2>
          <p className="sub">Four steps from first conversation to showcase day.</p>
        </div>
        <ol className="ml-5 border-l-4 border-navy">
          {steps.map((s, i) => (
            <li key={s.title} className="relative pb-[38px] pl-11 last:pb-0">
              <i className="absolute -left-6 -top-1 grid h-11 w-11 place-items-center rounded-full border-3 border-navy bg-gold font-extrabold not-italic">{i + 1}</i>
              <h3 className="text-[26px]">{s.title}</h3>
              <p className="text-mut">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
