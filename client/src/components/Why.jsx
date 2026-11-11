export default function Why({ items }) {
  return (
    <section id="why" className="border-y-3 border-navy bg-teal">
      <div className="wrap grid items-start gap-9 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="md:!text-[52px]">Curiosity becomes something students can build.</h2>
          <p className="sub !text-navy">
            We combine guided learning with practical experimentation so students understand concepts, build prototypes and gain confidence through doing.
          </p>
        </div>
        <ul className="grid gap-3.5">
          {items.map((i) => (
            <li key={i.title} className="relative rounded-[14px] border-3 border-navy bg-white py-[18px] pl-[66px] pr-5">
              <span className="absolute left-[18px] top-4 grid h-8 w-8 place-items-center rounded-lg border-2.5 border-navy bg-gold font-extrabold">✓</span>
              <strong className="block text-[19px]">{i.title}</strong>
              <span className="text-[15.5px] text-mut">{i.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
