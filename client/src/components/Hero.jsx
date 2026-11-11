import Photo from "./Photo.jsx";

export default function Hero({ photos, tagline }) {
  return (
    <header className="wrap pb-[84px] pt-14 text-center">
      <div className="mb-[26px] inline-block rounded-full border-2.5 border-navy bg-white px-4 py-1.5 text-sm font-bold">{tagline}</div>
      <h1 className="text-[50px] font-extrabold md:text-[96px]">
        Build skills.<br />Build{" "}
        <em className="inline-block -rotate-[1.5deg] rounded-[14px] border-3 border-navy bg-gold px-[.12em] not-italic">confidence.</em>
      </h1>
      <p className="mx-auto mb-[34px] mt-7 max-w-[560px] text-[19px] text-mut">
        Inspiring the next generation of innovators through hands-on robotics, electronics, AI and coding experiences in your school.
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <a className="btn-gold" href="#programmes">Explore programmes</a>
        <a className="btn-out" href="#contact">Book a school demo</a>
      </div>
      <div className="mt-14 grid gap-[22px] md:grid-cols-[1.3fr_1fr_1fr]">
        {photos.map((p) => (
          <Photo key={p} label={p} className="min-h-[260px]" />
        ))}
      </div>
    </header>
  );
}
