import { ProgrammeIcon } from "./Icons.jsx";

const bg = { teal: "bg-teal", gold: "bg-gold", white: "bg-white" };

export default function Programmes({ items }) {
  return (
    <section id="programmes">
      <div className="wrap">
        <h2>Three ways to spark innovation</h2>
        <p className="sub">Programmes designed for curiosity, creativity and real-world skills.</p>
        <div className="mt-12 grid overflow-hidden rounded-[20px] border-3 border-navy bg-white shadow-hard8 md:grid-cols-3">
          {items.map((p) => (
            <article key={p.id} className="flex flex-col border-t-3 border-navy px-[30px] pb-[30px] pt-[34px] first:border-t-0 md:border-l-3 md:border-t-0 md:first:border-l-0">
              <div className={`mb-[22px] grid h-16 w-16 place-items-center rounded-2xl border-3 border-navy ${bg[p.color]}`}>
                <ProgrammeIcon name={p.icon} />
              </div>
              <h3 className="mb-3 text-[27px]">{p.title}</h3>
              <p className="flex-1 text-mut">{p.description}</p>
              <div className="mb-3.5 mt-[18px] text-sm font-bold text-tealD">{p.tag}</div>
              <a href={p.href} className="font-extrabold underline decoration-gold decoration-[3px] underline-offset-[5px]">Learn more</a>
            </article>
          ))}
        </div>
        <p className="mt-[30px] text-[17px]">
          Not sure which programme fits your school?{" "}
          <a href="#contact" className="font-extrabold text-tealD underline">Talk to our team</a> and we’ll help you choose.
        </p>
      </div>
    </section>
  );
}
