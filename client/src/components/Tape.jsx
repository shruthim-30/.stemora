export default function Tape({ items }) {
  return (
    <div className="overflow-hidden border-y-3 border-navy bg-navy text-white">
      <div className="wrap flex flex-wrap justify-between gap-5 !py-5">
        {items.map((i) => (
          <span key={i.title} className="flex items-center text-xl font-extrabold">
            <span className="mr-3 inline-block h-3 w-3 rounded-full bg-gold" />
            {i.title}
            <small className="ml-2.5 text-[15px] font-normal text-[#aebfcd]">{i.sub}</small>
          </span>
        ))}
      </div>
    </div>
  );
}
