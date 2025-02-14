"use client";

import { useState } from "react";

export default function Counter({ data }) {
  const [count, setCount] = useState(0);

  console.log(data);

  return (
    <div>
      <button onClick={(e) => setCount((c) => c + 1)}>{count} Press</button>
    </div>
  );
}
