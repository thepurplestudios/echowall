import { heartPattern } from "../../data/heartPattern";
import CokePixel from "./CokePixel";

export default function CokeHeart() {
  return (
    <div
      className="
        grid
        gap-x-[0px] gap-y-[8px]
        place-items-center
      "
      style={{
        gridTemplateColumns: `repeat(${heartPattern[0].length}, 48px)`,
      }}
    >
      {heartPattern.map((row: string, rowIndex: number) =>
        row.split("").map((cell: string, colIndex: number) => {
          const active = cell === "1";

          return (
            <div
              key={`${rowIndex}-${colIndex}`}
              className={`flex items-center justify-center -mt-[6px] ${
                !active ? "opacity-0 pointer-events-none" : ""
              }`}
            >
              <CokePixel active={active} highlight={active} />{" "}
            </div>
          );
        }),
      )}
    </div>
  );
}
