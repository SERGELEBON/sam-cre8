"use client";

/**
 * sam cre8 brand logo.
 * Navy rounded block · "sam" small light-blue above · "cre8" large 3D bold
 * ( "cre" cyan, "8" white ).
 */
export function Logo({
  size = "md",
  className = "",
}: {
  size?: "sm" | "md" | "lg";
  className?: string;
}) {
  const pad =
    size === "sm" ? "px-2.5 py-1.5" : size === "lg" ? "px-6 py-4" : "px-3.5 py-2";
  const cre8 = size === "sm" ? "text-xl" : size === "lg" ? "text-4xl" : "text-2xl";
  const sam = size === "sm" ? "text-[9px]" : size === "lg" ? "text-sm" : "text-[11px]";

  return (
    <div
      className={`relative inline-flex flex-col items-center justify-center bg-brand-black rounded-md ${pad} ${className}`}
      aria-label="sam cre8"
    >
      <span
        className={`font-button font-extrabold leading-none tracking-wide text-brand-yellow-light ${sam} self-end -mb-1`}
      >
        sam
      </span>
      <span className="flex items-baseline leading-none">
        <span
          className={`font-display ${cre8} leading-none text-brand-yellow`}
          style={{ textShadow: "0 0 12px rgba(0,194,224,0.45)" }}
        >
          cre
        </span>
        <span
          className={`font-display ${cre8} leading-none text-white`}
          style={{ textShadow: "0 0 10px rgba(255,255,255,0.35)" }}
        >
          8
        </span>
      </span>
    </div>
  );
}

export default Logo;
