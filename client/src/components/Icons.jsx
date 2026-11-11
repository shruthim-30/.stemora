const base = { fill: "none", stroke: "#0D2136", strokeWidth: 2.2, strokeLinecap: "round", strokeLinejoin: "round" };

export function ProgrammeIcon({ name }) {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" {...base}>
      {name === "robot" && (<><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 8V4M9 13h.01M15 13h.01M9 16h6" /></>)}
      {name === "chip" && (<><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>)}
      {name === "trophy" && <path d="M7 4h10v5a5 5 0 0 1-10 0zM7 6H4v1a3 3 0 0 0 3 3M17 6h3v1a3 3 0 0 1-3 3M12 14v4M8 21h8" />}
    </svg>
  );
}

export function PhotoIcon() {
  return (
    <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#0F7F7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mx-auto mb-2 block">
      <rect x="3" y="5" width="18" height="14" rx="3" />
      <circle cx="9" cy="11" r="2" />
      <path d="m21 16-5-5-8 8" />
    </svg>
  );
}
