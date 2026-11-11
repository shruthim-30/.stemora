import Logo from "./Logo.jsx";

export default function Navbar({ links }) {
  return (
    <nav className="sticky top-0 z-20 border-b-2 border-grid bg-paper/95 py-3.5 backdrop-blur-sm">
      <div className="wrap flex items-center justify-between">
        <Logo />
        <ul className="hidden gap-0.5 text-sm font-semibold md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3.5 py-2 hover:bg-white">{l.label}</a>
            </li>
          ))}
        </ul>
        <a className="btn-teal" href="#contact">Enquire now</a>
      </div>
    </nav>
  );
}
