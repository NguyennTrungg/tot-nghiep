type FloralOrnamentProps = {
  className?: string;
};

export function FloralOrnament({ className = "" }: FloralOrnamentProps) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 220"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
    >
      <path
        d="M108 196C104 146 122 104 176 76"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M114 162C82 154 61 134 49 102"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M136 118C115 99 108 74 116 42"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
      {/* Flower at end of stem (from first path) */}
      <g transform="translate(176 76)">
        <g opacity="0.95">
          <ellipse cx="0" cy="-6" rx="6" ry="10" fill="currentColor" opacity="0.9" transform="rotate(0)" />
          <ellipse cx="0" cy="-6" rx="6" ry="10" fill="currentColor" opacity="0.9" transform="rotate(72)" />
          <ellipse cx="0" cy="-6" rx="6" ry="10" fill="currentColor" opacity="0.9" transform="rotate(144)" />
          <ellipse cx="0" cy="-6" rx="6" ry="10" fill="currentColor" opacity="0.9" transform="rotate(216)" />
          <ellipse cx="0" cy="-6" rx="6" ry="10" fill="currentColor" opacity="0.9" transform="rotate(288)" />
          <circle cx="0" cy="0" r="2.6" fill="currentColor" />
        </g>
      </g>

      {/* Flower at end of second stem */}
      <g transform="translate(49 102)">
        <g opacity="0.9">
          <ellipse cx="0" cy="-5" rx="5" ry="8" fill="currentColor" opacity="0.88" transform="rotate(0)" />
          <ellipse cx="0" cy="-5" rx="5" ry="8" fill="currentColor" opacity="0.88" transform="rotate(72)" />
          <ellipse cx="0" cy="-5" rx="5" ry="8" fill="currentColor" opacity="0.88" transform="rotate(144)" />
          <ellipse cx="0" cy="-5" rx="5" ry="8" fill="currentColor" opacity="0.88" transform="rotate(216)" />
          <ellipse cx="0" cy="-5" rx="5" ry="8" fill="currentColor" opacity="0.88" transform="rotate(288)" />
          <circle cx="0" cy="0" r="2.4" fill="currentColor" />
        </g>
      </g>

      {/* Flower at end of third stem */}
      <g transform="translate(116 42)">
        <g opacity="0.92">
          <ellipse cx="0" cy="-4" rx="4.6" ry="7" fill="currentColor" opacity="0.9" transform="rotate(0)" />
          <ellipse cx="0" cy="-4" rx="4.6" ry="7" fill="currentColor" opacity="0.9" transform="rotate(72)" />
          <ellipse cx="0" cy="-4" rx="4.6" ry="7" fill="currentColor" opacity="0.9" transform="rotate(144)" />
          <ellipse cx="0" cy="-4" rx="4.6" ry="7" fill="currentColor" opacity="0.9" transform="rotate(216)" />
          <ellipse cx="0" cy="-4" rx="4.6" ry="7" fill="currentColor" opacity="0.9" transform="rotate(288)" />
          <circle cx="0" cy="0" r="2" fill="currentColor" />
        </g>
      </g>

      {/* Small decorative petal stroke */}
      <path
        d="M154 89C158 68 150 51 131 39"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M154 89C158 68 150 51 131 39"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="54" cy="98" r="5" fill="currentColor" opacity="0.35" />
      <circle cx="178" cy="75" r="4" fill="currentColor" opacity="0.28" />
      <circle cx="115" cy="42" r="3" fill="currentColor" opacity="0.3" />

      {/* Background flower clusters */}
      <g transform="translate(20 28)" opacity="0.22">
        <circle cx="0" cy="0" r="3" fill="currentColor" />
        <circle cx="-4" cy="0" r="2.2" fill="currentColor" />
        <circle cx="4" cy="0" r="2.2" fill="currentColor" />
      </g>
      <g transform="translate(200 28)" opacity="0.18">
        <circle cx="0" cy="0" r="2.8" fill="currentColor" />
        <circle cx="-3.6" cy="0" r="2" fill="currentColor" />
      </g>
      <g transform="translate(12 180)" opacity="0.14">
        <circle cx="0" cy="0" r="3.6" fill="currentColor" />
        <circle cx="-5" cy="0" r="2.6" fill="currentColor" />
      </g>
    </svg>
  );
}
