type CokePixelProps = {
  active: boolean;
  highlight: boolean;
};

export default function CokePixel({ highlight }: CokePixelProps) {
  return (
    <div
      className="
        relative
        w-[38px]
        h-[82px]
        rounded-[6px]
        flex items-center
        justify-center
        overflow-hidden
      "
      style={{
        background: `
          linear-gradient(
            to right,
            #9a9a9a 0%,
            #dcdcdc 15%,
            #ffffff 30%,
            #cfcfcf 45%,
            #8f8f8f 60%,
            #e8e8e8 75%,
            #b0b0b0 100%
          )
        `,
        boxShadow: `
          inset -4px 0 6px rgba(0,0,0,0.25),
          inset 3px 0 5px rgba(255,255,255,0.5),
          4px 8px 12px rgba(0,0,0,0.18)
        `,
      }}
    >
      {/* TOP RIM */}
      <div
        className="
          absolute
          top-[5px]
          left-1/2
          -translate-x-1/2
          h-[3px]
          w-[58%]
          rounded-full
        "
        style={{
          background: "linear-gradient(to right, #8f8f8f, #ffffff, #8f8f8f)",
          opacity: 0.7,
        }}
      />

      {/* BOTTOM RIM */}
      <div
        className="
          absolute
          bottom-[5px]
          left-1/2
          -translate-x-1/2
          h-[4px]
          w-[65%]
          rounded-full
        "
        style={{
          background: "linear-gradient(to right, #6f6f6f, #dcdcdc, #6f6f6f)",
          opacity: 0.6,
        }}
      />

      {/* SIDE CURVATURE */}
      <div
        className="absolute inset-0 rounded-[6px]"
        style={{
          boxShadow: `
            inset 6px 0 10px rgba(0,0,0,0.12),
            inset -6px 0 10px rgba(255,255,255,0.5)
          `,
        }}
      />

      {/* LIGHT REFLECTION STRIP */}
      <div
        className="
          absolute
          left-[8px]
          top-[10px]
          h-[65%]
          w-[2px]
          rounded-full
          blur-[0.5px]
        "
        style={{
          background: "rgba(255,255,255,0.9)",
          opacity: 0.8,
        }}
      />

      {/* LOGO */}
      {highlight && (
        <div
          className="
            flex
            flex-col
            items-center
            leading-none
            select-none
            translate-y-[1px]
          "
        >
          <span
            className="
              text-[7px]
              italic
              text-red-600
            "
            style={{ fontFamily: "Georgia, serif" }}
          >
            diet
          </span>

          <span
            className="
              text-[13px]
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
