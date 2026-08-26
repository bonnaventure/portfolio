import type { SVGProps } from "react";

/* Hand-drawn geometric icon set — square terminals, 1.5 stroke, 24px grid. */

type P = SVGProps<SVGSVGElement>;

const base: P = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "square",
  "aria-hidden": true,
};

export const IconArrowNE = (p: P) => (
  <svg {...base} {...p}>
    <path d="M6.5 17.5 17.5 6.5M9 6.5h8.5V15" />
  </svg>
);

export const IconArrowRight = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 12h16m-6-6 6 6-6 6" />
  </svg>
);

export const IconArrowLeft = (p: P) => (
  <svg {...base} {...p}>
    <path d="M20 12H4m6-6-6 6 6 6" />
  </svg>
);

export const IconSun = (p: P) => (
  <svg {...base} {...p}>
    <rect x="8.5" y="8.5" width="7" height="7" />
    <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" />
  </svg>
);

export const IconMoon = (p: P) => (
  <svg {...base} {...p}>
    <path d="M19.5 14.5A8 8 0 0 1 9.5 4.5a8 8 0 1 0 10 10Z" />
  </svg>
);

export const IconMenu = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3.5 7h17M3.5 12h17M3.5 17h10" />
  </svg>
);

export const IconClose = (p: P) => (
  <svg {...base} {...p}>
    <path d="M5.5 5.5l13 13M18.5 5.5l-13 13" />
  </svg>
);

export const IconDownload = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3.5v11m-5-4.5 5 5 5-5M4 20.5h16" />
  </svg>
);

export const IconMail = (p: P) => (
  <svg {...base} {...p}>
    <rect x="3" y="5.5" width="18" height="13" />
    <path d="m3.5 6.5 8.5 7 8.5-7" />
  </svg>
);

export const IconSpark = (p: P) => (
  <svg {...base} {...p}>
    <path d="M12 3v18M3 12h18M6 6l12 12M18 6 6 18" strokeWidth={1.2} />
  </svg>
);

export const IconLayers = (p: P) => (
  <svg {...base} {...p}>
    <path d="m12 3 9 5-9 5-9-5 9-5Z" />
    <path d="m4.5 12.5 7.5 4 7.5-4M4.5 16.5l7.5 4 7.5-4" />
  </svg>
);

export const IconCart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M3 4h3l2.5 11h11L22 7H7" />
    <rect x="9" y="18" width="2.5" height="2.5" />
    <rect x="16" y="18" width="2.5" height="2.5" />
  </svg>
);

export const IconChart = (p: P) => (
  <svg {...base} {...p}>
    <path d="M4 4v16h16" />
    <path d="M8.5 16v-5M13 16V7.5M17.5 16v-3" />
  </svg>
);

export const IconCompass = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="12" r="8.5" />
    <path d="m15.5 8.5-2 5-5 2 2-5 5-2Z" />
  </svg>
);

export const IconDiamond = (p: P) => (
  <svg {...base} {...p}>
    <rect x="8.5" y="8.5" width="7" height="7" transform="rotate(45 12 12)" />
  </svg>
);

export const IconQuote = (p: P) => (
  <svg {...base} {...p} strokeWidth={1.2}>
    <path d="M4 13.5C4 8.5 6.5 5.5 10 4.5l.8 2c-2 .8-3.3 2.4-3.5 4.2.4-.2.9-.3 1.4-.3 1.9 0 3.3 1.4 3.3 3.4S10.5 19 8.4 19C5.7 19 4 17 4 13.5ZM13.5 13.5c0-5 2.5-8 6-9l.8 2c-2 .8-3.3 2.4-3.5 4.2.4-.2.9-.3 1.4-.3 1.9 0 3.3 1.4 3.3 3.4S20 19 17.9 19c-2.7 0-4.4-2-4.4-5.5Z" />
  </svg>
);

export const IconNode = (p: P) => (
  <svg {...base} {...p}>
    <circle cx="5.5" cy="12" r="2.5" />
    <circle cx="18.5" cy="5.5" r="2.5" />
    <circle cx="18.5" cy="18.5" r="2.5" />
    <path d="m7.8 10.8 8.4-4.1M7.8 13.2l8.4 4.1" />
  </svg>
);

/** Decorative barcode strip. */
export const Barcode = ({ className = "" }: { className?: string }) => (
  <svg viewBox="0 0 120 24" className={className} aria-hidden fill="currentColor">
    {[0, 4, 7, 12, 15, 21, 24, 30, 33, 38, 44, 47, 52, 56, 61, 64, 70, 73, 78, 84, 87, 92, 96, 102, 105, 110, 115].map(
      (x, i) => (
        <rect key={x} x={x} y={0} width={i % 3 === 0 ? 2.5 : 1.2} height={24} />
      )
    )}
  </svg>
);
