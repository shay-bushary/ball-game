import React from "react";

interface PieceProps {
  x: number;
  y: number;
}

export default function Piece(props: PieceProps) {
  const { x, y } = props;
  return <div id="piece" className="circle" style={{ left: x, top: y }}></div>;
}
