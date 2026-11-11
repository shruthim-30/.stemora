import Logo from "./Logo.jsx";

export default function Footer({ links, tagline }) {
  return (
    <footer className="border-t-3 border-navy bg-white py-[26px] text-sm text-mut">
      <div className="wrap flex flex-wrap items-center justify-between gap-5">
        <div><Logo className="mr-2.5 text-xl" />{tagline}</div>
        <ul className="flex gap-[26px] font-semibold text-navy">
          {links.map((l) => (
            <li key={l.href}><a href={l.href}>{l.label}</a></li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
