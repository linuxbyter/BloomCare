"use client";

export default function Logo({
  src,
  alt,
  size = 120,
}: {
  src: string;
  alt: string;
  size?: number;
}) {
  return (
    <div
      className="relative inline-flex items-center justify-center"
      style={{ width: size, height: size }}
      role="img"
      aria-label={alt}
    >
      <div className="pulse-ring-1" aria-hidden="true" />
      <div className="pulse-ring-2" aria-hidden="true" />
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        className="relative z-10 logo-animate rounded-full object-cover"
        loading="eager"
      />
    </div>
  );
}
