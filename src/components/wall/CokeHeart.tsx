import heartPattern from "../../data/heartPattern";
import CokePixel from "./CokePixel";

function CokeHeart() {
  return (
    <div className="relative">
      <div className="grid grid-cols-20 gap-[6px]">
        {heartPattern
          .join("")
          .split("")
          .map((cell, index) => (
            <CokePixel key={index} active={cell === "1"} />
          ))}
      </div>
    </div>
  );
}

export default CokeHeart;
