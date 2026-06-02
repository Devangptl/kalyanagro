type IconProps = { size?: number; stroke?: string };

const base = (size = 24, stroke = "currentColor"): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke,
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
});

export const LeafIcon = ({ size = 24, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 9.3-1.66 17.66-8.2 17.04Z" />
    <path d="M2 21c0-3 1.85-5.36 5.08-6" />
  </svg>
);

export const ArrowRight = ({ size = 18, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M5 12h14" />
    <path d="m12 5 7 7-7 7" />
  </svg>
);

export const ArrowUpRight = ({ size = 16, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M7 7h10v10" />
    <path d="M7 17 17 7" />
  </svg>
);

export const Plus = ({ size = 20, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M12 5v14" />
    <path d="M5 12h14" />
  </svg>
);

export const Check = ({ size = 16, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M20 6 9 17l-5-5" />
  </svg>
);

export const Star = ({ size = 14, stroke = "#c98b1f" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={stroke}>
    <path d="M12 2 15 9l8 .5-6 5 2 8L12 18l-7 4.5 2-8-6-5L9 9z" />
  </svg>
);

export const Quote = ({ size = 40, stroke = "#c98b1f" }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill={stroke}>
    <path d="M7 7h4v4H7v3a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4V9a2 2 0 0 1 2-2zm10 0h4v4h-4v3a2 2 0 0 0 2 2v2a4 4 0 0 1-4-4V9a2 2 0 0 1 2-2z" />
  </svg>
);

export const Shield = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const Sprout = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M7 20h10" />
    <path d="M10 20c5.5-2.5.8-6.4 3-10" />
    <path d="M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z" />
    <path d="M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z" />
  </svg>
);

export const Truck = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
);

export const Coins = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <circle cx="8" cy="8" r="6" />
    <path d="M18.09 10.37A6 6 0 1 1 10.34 18" />
    <path d="M7 6h1v4" />
    <path d="m16.71 13.88.7.71-2.82 2.82" />
  </svg>
);

export const HeartHandshake = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="m12 5 1 1" />
    <path d="m18 12 1-1" />
  </svg>
);

export const Globe = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
    <path d="M2 12h20" />
  </svg>
);

export const Phone = ({ size = 18, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const Mail = ({ size = 18, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);

export const MapPin = ({ size = 18, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const Whatsapp = ({ size = 18, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
  </svg>
);

export const Menu = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <line x1="4" x2="20" y1="7" y2="7" />
    <line x1="4" x2="20" y1="17" y2="17" />
  </svg>
);

export const Upload = ({ size = 18, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 9 5-5 5 5" />
    <path d="M12 4v12" />
  </svg>
);

export const Award = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <circle cx="12" cy="8" r="6" />
    <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
  </svg>
);

export const Leaf2 = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19.2 2.96c1.4 9.3-1.66 17.66-8.2 17.04Z" />
  </svg>
);

export const Send = ({ size = 18, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);
