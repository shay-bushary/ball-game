import React from "react";
import "./style.css";
import Piece from "./components/Piece";
import Controls from "./components/Controls";
import Button from "./components/Button";

export default function App() {
  const init_pos = [100, 50];
  const [pos, setPos] = React.useState(init_pos);
  function randPos() {
    return [Math.floor(Math.random() * 1000), Math.floor(Math.random() * 1000)];
  }
  const moveDelta = (dx: number, dy: number) => {
    if (pos[0] + dx < 0) return;
    if (pos[1] + dy < 0){ setPos([pos[0] + dx, 0]); return;};
    setPos([pos[0] + dx, pos[1] + dy]);
    
  };
  return (
    <div className="App">
      <Piece x={pos[0]} y={pos[1]} />
      <Controls moveDelta={moveDelta} />
      <Button resetPos={() => setPos(init_pos)} randomPos={() => setPos(randPos())} />
    </div>
  );
}
