export default function Logo({ className = "text-[26px]" }) {
  return (
    <a href="#" className={`font-extrabold tracking-[-.03em] text-teal ${className}`}>
      Stem<b className="text-gold">ora</b>
    </a>
  );
}
