import { useRef, useState } from "react";
import { PhotoIcon } from "./Icons.jsx";

// Click (or press Enter/Space) to choose an image; it previews in place, just like the original page.
export default function Photo({ label, className = "min-h-[200px]", flat = false }) {
  const input = useRef(null);
  const [src, setSrc] = useState(null);

  const open = () => input.current?.click();
  const onChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => setSrc(reader.result);
    reader.readAsDataURL(file);
  };

  const shape = flat
    ? "rounded-none border-0 border-b-3 border-navy"
    : "rounded-[18px] border-3 border-navy shadow-hard5";

  return (
    <div
      tabIndex={0}
      role="button"
      aria-label={`Add photo: ${label}`}
      onClick={open}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          open();
        }
      }}
      className={`ph-stripes relative grid cursor-pointer place-items-center overflow-hidden text-center text-sm font-bold text-tealD ${shape} ${className}`}
    >
      <span>
        <PhotoIcon />
        {label}
        <br />
        <small>Tap to add photo</small>
      </span>
      {src && <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />}
      <input ref={input} type="file" accept="image/*" hidden onChange={onChange} onClick={(e) => e.stopPropagation()} />
    </div>
  );
}
