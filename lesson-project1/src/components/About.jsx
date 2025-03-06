import { useState } from "react";

function About() {
  const [setColor, setSelectedColor] = useState("White");

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  return (
    <>
      <div>
        <h1 style={{ margin: " 10px 20px" }}> Colors </h1>
        <div style={{margin: "10px"}}className="color-box">
          <button
            onClick={() => handleColorChange("Blue")}
            style={{
              backgroundColor: "blue",
              color: "Black",
              margin: "10px",
              padding: " 10px 20px",
            }}>
            Primary
          </button>
          <button
            onClick={() => handleColorChange("Grey")}
            style={{
              backgroundColor: "grey",
              color: "white",
              margin: "10px",
              padding: " 10px 20px",
            }}>
            Secondary
          </button>
          <button
            onClick={() => handleColorChange("Green")}
            style={{
              backgroundColor: "green",
              color: "white",
              margin: "10px",
              padding: " 10px 20px",
            }}>
            Success
          </button>
          <button
            onClick={() => handleColorChange("Red")}
            style={{
              backgroundColor: "red",
              color: "white",
              margin: "10px",
              padding: " 10px 20px",
            }}>
            Danger
          </button>
          <button
            onClick={() => handleColorChange("Yellow")}
            style={{
              backgroundColor: "Yellow",
              color: "Black",
              margin: "10px",
              padding: " 10px 20px",
            }}>
            Warning
          </button>
          <button
            onClick={() => handleColorChange("pink")}
            style={{
              backgroundColor: "pink",
              color: "Black",
              margin: "10px",
              padding: " 10px 20px",
            }}>
            Pink
          </button>
          <button
            onClick={() => handleColorChange("#b9c4bc")}
            style={{
              backgroundColor: "#b9c4bc",
              color: "Black",
              margin: "10px",
              padding: " 10px 20px",
            }}>
            Light
          </button>
          <button
            onClick={() => handleColorChange("Black")}
            style={{
              backgroundColor: "Black",
              color: "white",
              margin: "10px",
              padding: " 10px 20px",
            }}>
            Dark
          </button>
        </div>
      </div>
      <div
        style={{
          width: "250px",
          height: "250px",
          backgroundColor: setColor,
          margin: "20px auto",
        }}></div>
    </>
  );
}

export default About;
