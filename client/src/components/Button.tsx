import React from "react";

interface ButtonProps {
  resetPos: () => void;
  randomPos: () => void;
}

export default function Button(props: ButtonProps) {
  const { resetPos, randomPos } = props;
  return (
    <div id="button-wrapper">
      <button
        id="btn-reset"
        className="btn-action"
        onClick={resetPos}
      >
        Reset
      </button>
      <button
        id="btn-random"
        className="btn-action"
        onClick={randomPos}
      >
        Random
      </button>
    </div>
  );
}