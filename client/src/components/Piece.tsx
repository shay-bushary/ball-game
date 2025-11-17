import React, { useState } from "react";
import { useEffect } from "react";

interface PieceProps {
  x: number;
  y: number;
}

export default function Piece({ x, y }: PieceProps) {

  const [color, setColor] = useState("white");
  const [isHovered, setIsHovered] = useState(false);


  async function fetchWeather() {
    try {
      const response = await fetch(
        `http://api.weatherapi.com/v1/current.json?key=f601bcbc440a474ba3d120742251711&q=tel aviv&aqi=yes`
      );

      if (!response.ok) {
        throw new Error("Weather API error");
      }

      const data = await response.json();
      console.log("response", data.current.temp_c);
      setColor(PieceColorChange(data.current.temp_c));

    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  function PieceColorChange (degree: number)
  {
    if (degree < 10)
      return "blue";
    if (degree >= 10 && degree < 20)
      return "green";
   if (degree >= 20 && degree <30)
      return "yellow";
   if (degree >=30)
      return "red";

   return "white";

  }

  useEffect(() => {
    fetchWeather();
  }, []);

  return (
    <div
      id="piece"
      className="circle"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        left: x,
        top: y,
        backgroundColor: isHovered ? "transparent" : color,
        border: isHovered ? `4px solid ${color}` : "none",
        boxSizing: "border-box",
        cursor: "pointer",
      }}
    ></div>
  );
}
