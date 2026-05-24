type PixelProps = {
  active: boolean;
};

function Pixel({ active }: PixelProps) {
  return (
    <div
      className={`
        h-10 w-10 rounded-xl transition-all duration-300
        ${
          active
            ? "bg-[#d90429] shadow-[0_10px_30px_rgba(217,4,41,0.25)] hover:-translate-y-1"
            : "bg-white/30"
        }
      `}
    />
  );
}

export default Pixel;
