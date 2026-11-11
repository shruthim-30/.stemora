import Photo from "./Photo.jsx";

export default function Summer({ data }) {
  return (
    <section id="summer" className="border-y-3 border-navy bg-gold">
      <div className="wrap grid items-center gap-14 md:grid-cols-2">
        <div>
          <div className="kicker !text-navy">{data.kicker}</div>
          <h2>
            Innovative{" "}
            <em className="rounded-xl bg-navy px-[.12em] text-gold not-italic">Summer Champ</em> 2027
          </h2>
          <p className="sub !text-navy">{data.text}</p>
          <div className="mb-7 mt-[22px] flex flex-wrap gap-2.5">
            {data.pills.map((p) => (
              <span key={p} className="rounded-full border-2.5 border-navy bg-white px-4 py-[7px] text-sm font-bold">{p}</span>
            ))}
          </div>
          <p className="mb-[22px] font-bold">
            Dates: {data.dates} · Ages/Grades: {data.grades} · Venue: {data.venue}
          </p>
          <a className="btn bg-navy text-white" href="#contact">Reserve a seat</a>
        </div>
        <div className="grid gap-[18px]">
          {data.photos.map((p) => (
            <Photo key={p} label={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
