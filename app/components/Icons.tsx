type IconProps = { size?: number; stroke?: string };

const base = (size = 24, stroke = "currentColor"): React.SVGProps<SVGSVGElement> => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke,
  strokeWidth: 1.8,
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

export const BrowseIcon = ({ size = 28, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <circle cx="11" cy="11" r="7" />
    <path d="m21 21-4.3-4.3" />
  </svg>
);

export const SelectIcon = ({ size = 28, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M9 11l3 3L22 4" />
    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
  </svg>
);

export const OrderIcon = ({ size = 28, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
    <path d="M3 6h18" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);

export const TruckIcon = ({ size = 28, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18H9" />
    <path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14" />
    <circle cx="17" cy="18" r="2" />
    <circle cx="7" cy="18" r="2" />
  </svg>
);

export const ListIcon = ({ size = 28, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M8 6h13" />
    <path d="M8 12h13" />
    <path d="M8 18h13" />
    <path d="M3 6h.01" />
    <path d="M3 12h.01" />
    <path d="M3 18h.01" />
  </svg>
);

export const VerifyIcon = ({ size = 28, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const ReceiveIcon = ({ size = 28, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M2 7h20l-2 13H4Z" />
    <path d="M16 7V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v3" />
    <path d="M12 12v6" />
    <path d="m9 15 3 3 3-3" />
  </svg>
);

export const PaidIcon = ({ size = 28, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <path d="M2 10h20" />
    <path d="M6 15h4" />
  </svg>
);

export const QualityIcon = ({ size = 32, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M12 2 4 6v6c0 5 3.5 9 8 10 4.5-1 8-5 8-10V6Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

export const FarmIcon = ({ size = 32, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M3 21h18" />
    <path d="M3 21V8l9-5 9 5v13" />
    <path d="M9 21v-6h6v6" />
    <path d="M12 11v.01" />
  </svg>
);

export const PriceIcon = ({ size = 32, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M12 2v20" />
    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
  </svg>
);

export const SupportIcon = ({ size = 32, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M21 11.5a8.38 8.38 0 0 1-9 8.4 8.5 8.5 0 0 1-7.6-4.7L3 21l1.8-1.4A8.38 8.38 0 0 1 21 11.5z" />
  </svg>
);

export const PhoneIcon = ({ size = 26, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92Z" />
  </svg>
);

export const WhatsappIcon = ({ size = 26, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
    <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
  </svg>
);

export const MailIcon = ({ size = 26, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <rect width="20" height="16" x="2" y="4" rx="2" />
    <path d="m22 7-10 5L2 7" />
  </svg>
);

export const MapIcon = ({ size = 26, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M20 10c0 7-8 12-8 12s-8-5-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

export const UploadIcon = ({ size = 20, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <path d="m7 9 5-5 5 5" />
    <path d="M12 4v12" />
  </svg>
);

export const FastIcon = ({ size = 24, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

export const ReachIcon = ({ size = 24, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <circle cx="12" cy="12" r="10" />
    <path d="M2 12h20" />
    <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10Z" />
  </svg>
);

export const FreeIcon = ({ size = 24, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <path d="M20 12V8H6a2 2 0 1 1 0-4h12.5" />
    <path d="M20 12v4H6a2 2 0 1 0 0 4h12.5" />
    <path d="m17 7 3-3-3-3" />
    <path d="m20 20-3-3 3-3" />
  </svg>
);

export const MenuIcon = ({ size = 22, stroke }: IconProps) => (
  <svg {...base(size, stroke)}>
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);
