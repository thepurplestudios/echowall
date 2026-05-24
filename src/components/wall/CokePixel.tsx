type CokePixelProps = {
  active: boolean;
  highlight: boolean;
};

export default function CokePixel({ active, highlight }: CokePixelProps) {
  return (
    <div
      className="
        relative
        w-[44px]
        h-[82px]
        rounded-[6px]
        transition-all
        duration-500
        flex
        items-center
        justify-center
        overflow-hidden
      "
      style={{
        transform: "translateZ(0)",

        background: highlight
          ? `
    linear-gradient(
      to right,
      #bfbfbf 0%,
      #ffffff 18%,
      #eaeaea 35%,
      #a8a8a8 50%,
      #ffffff 70%,
      #cfcfcf 100%
    )
  `
          : `
    linear-gradient(
      to right,
      #e0e0e0 0%,
      #f8f8f8 30%,
      #d6d6d6 60%,
      #eeeeee 100%
    )
  `,
        boxShadow: `
  inset -2px 0 4px rgba(0,0,0,0.12),
  inset 2px 0 5px rgba(255,255,255,0.9),
  0 12px 22px rgba(0,0,0,0.12)
`,

        border: highlight
          ? "1px solid rgba(255,255,255,0.65)"
          : "1px solid rgba(255,255,255,0.45)",
      }}
    >
      {/* TOP METAL RIM */}
      <div
        className="
          absolute
          top-[5px]
          left-1/2
          -translate-x-1/2
          w-[72%]
          h-[6px]
          rounded-full
        "
        style={{
          background: "linear-gradient(to right, #d9d9d9, #ffffff, #cfcfcf)",
          opacity: highlight ? 1 : 0.6,
        }}
      />

      {/* BOTTOM RIM */}
      <div
        className="
          absolute
          bottom-[5px]
          left-1/2
          -translate-x-1/2
          w-[72%]
          h-[6px]
          rounded-full
        "
        style={{
          background: "linear-gradient(to right, #bdbdbd, #ededed, #bdbdbd)",
          opacity: highlight ? 1 : 0.5,
        }}
      />

      {/* LIGHT REFLECTION */}
      <div
        className="
          absolute
          left-[7px]
          top-[10px]
          h-[65%]
          w-[4px]
          rounded-full
          blur-[1px]
        "
        style={{
          background: "rgba(255,255,255,0.85)",
          opacity: highlight ? 0.9 : 0.35,
        }}
      />

      {/* LOGO (only for highlighted cans) */}
      {highlight && (
        <div
          className="
            flex
            flex-col
            items-center
            leading-none
            select-none
            translate-y-[2px]
          "
        >
          <span
            className="
              text-[8px]
              italic
              font-light
              tracking-tight
              text-red-400
              opacity-80
            "
            style={{
              fontFamily: "Georgia, serif",
            }}
          >
            diet
          </span>

          <span
            className="
              text-[17px]
              leading-[0.9]
              text-red-600
            "
            style={{
              fontFamily: "Georgia, serif",
              fontWeight: 500,
            }}
          >
            Coke
          </span>
        </div>
      )}
    </div>
  );
}
