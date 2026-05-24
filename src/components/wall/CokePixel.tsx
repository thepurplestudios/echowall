type CokePixelProps = {
  active: boolean;
  highlight: boolean;
};

export default function CokePixel({ highlight }: CokePixelProps) {
  return (
    <div
      className="
        relative
        w-[36px]
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
            #7f7f7f 0%,
            #cfcfcf 15%,
            #ffffff 30%,
            #eaeaea 45%,
            #9a9a9a 60%,
            #f0f0f0 75%,
            #8a8a8a 100%
          )
        `,
        boxShadow: `
          inset -5px 0 8px rgba(0,0,0,0.28),
          inset 4px 0 6px rgba(255,255,255,0.55),
          6px 12px 18px rgba(0,0,0,0.2)
        `,
      }}
    >
      {/* 🔥 METAL NOISE TEXTURE */}
      <div
        className="absolute inset-0 opacity-[0.06] mix-blend-overlay"
        style={{
          backgroundImage:
            "url('https://www.transparenttextures.com/patterns/asfalt-dark.png')",
        }}
      />

      {/* 🔥 CENTER CYLINDER HIGHLIGHT */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(
              circle at 50% 50%,
              rgba(255,255,255,0.25) 0%,
              transparent 60%
            )
          `,
        }}
      />

      {/* 🔥 TOP RIM (more realistic) */}
      <div
        className="
          absolute
          top-[4px]
          left-1/2
          -translate-x-1/2
          h-[4px]
          w-[60%]
          rounded-full
        "
        style={{
          background: "linear-gradient(to right, #6f6f6f, #ffffff, #6f6f6f)",
          boxShadow: "0 1px 2px rgba(0,0,0,0.25)",
        }}
      />

      {/* 🔥 BOTTOM RIM */}
      <div
        className="
          absolute
          bottom-[4px]
          left-1/2
          -translate-x-1/2
          h-[5px]
          w-[65%]
          rounded-full
        "
        style={{
          background: "linear-gradient(to right, #5a5a5a, #dcdcdc, #5a5a5a)",
          boxShadow: "0 -1px 2px rgba(0,0,0,0.2)",
        }}
      />

      {/* 🔥 SIDE CURVATURE */}
      <div
        className="absolute inset-0 rounded-[6px]"
        style={{
          boxShadow: `
            inset 8px 0 12px rgba(0,0,0,0.14),
            inset -8px 0 12px rgba(255,255,255,0.6)
          `,
        }}
      />

      {/* 🔥 SHARP LIGHT STRIP */}
      <div
        className="
          absolute
          left-[7px]
          top-[10px]
          h-[65%]
          w-[2px]
          rounded-full
        "
        style={{
          background: "rgba(255,255,255,0.95)",
          filter: "blur(0.3px)",
        }}
      />

      {/* 🔥 RED LIGHT BLEED (VERY IMPORTANT) */}
      {highlight && (
        <div
          className="absolute inset-0"
          style={{
            background: `
              radial-gradient(
                circle at 50% 50%,
                rgba(255, 0, 0, 0.08),
                transparent 70%
              )
            `,
            mixBlendMode: "multiply",
          }}
        />
      )}

      {/* 🔥 LOGO */}
      {highlight && (
        <div
          className="
            flex flex-col items-center
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
