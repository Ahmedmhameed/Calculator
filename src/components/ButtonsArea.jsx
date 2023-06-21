/* eslint-disable react/prop-types */
export default function ButtonsArea({ serExpiration, output, calc }) {
  const numbers = [
    { txt: "clear", value: "AC" },
    { txt: "equals", value: "=" },
    { txt: "divide", value: "/" },
    { txt: "multiply", value: "x" },
    { txt: "subtract", value: "-" },
    { txt: "add", value: "+" },
    { txt: "decimal", value: "." },
    { txt: "zero", value: 0 },
    { txt: "one", value: 1 },
    { txt: "two", value: 2 },
    { txt: "three", value: 3 },
    { txt: "four", value: 4 },
    { txt: "five", value: 5 },
    { txt: "six", value: 6 },
    { txt: "seven", value: 7 },
    { txt: "eight", value: 8 },
    { txt: "nine", value: 9 },
  ];
  const getBGColor = (value) => {
    if (value == "." || Number.isInteger(value)) return "#4d4d4d";
    else if (value == "AC") return "#ac3939";
    else if (value == "=") {
      return "#004466";
    }
    return "#666666";
  };

  return (
    <div className="Buttons">
      {numbers.map((n) => (
        <button
          key={n.value}
          id={n.txt}
          value={n.value}
          style={{ background: getBGColor(n.value) }}
          onClick={(e) => {
            let value = e.target.innerHTML;
            if (value != "=") {
              if (value == "AC") {
                serExpiration("");
                output.current.innerHTML = "0";
              } else {
                serExpiration((pre) => pre + n.value);
                output.current.innerHTML = n.value;
              }
            } else {
              calc();
            }
          }}
        >
          {n.value}
        </button>
      ))}
    </div>
  );
}
