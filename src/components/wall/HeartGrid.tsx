import heartPattern from "../../data/heartPattern";
import Pixel from "./Pixel";

function HeartGrid() {
  return (
    <div className="grid grid-cols-8 gap-3">
      {heartPattern.map((row, rowIndex) =>
        row
          .split("")
          .map((cell, cellIndex) => (
            <Pixel key={`${rowIndex}-${cellIndex}`} active={cell === "1"} />
          )),
      )}
    </div>
  );
}

export default HeartGrid;
