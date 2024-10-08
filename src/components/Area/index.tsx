import { useEffect, useState } from "react";

export default function Area({ id }: { id?: string }) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [count, setCount] = useState(0);
  if (!isHydrated) {
    console.log(`Area ${id} rendering`);
    performance.mark(`Area ${id} rendering`);
    if (typeof window != "undefined") {
      window.requestAnimationFrame(() => {
        console.log(`AREA ${id} HYDRATION DONE`);
        performance.mark(`AREA ${id} HYDRATION DONE`);
      });
      delay(1000);
    }
  }
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return (
    <div className={`area ${isHydrated ? "hydrated" : ""}`}>
      {id} - {isHydrated ? "hydrated" : "hydrating"}
      <p>Clicked: {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me!</button>
    </div>
  );
}

function delay(time: number) {
  const delayTime = time + Math.floor(Math.random() * 2000)
  const start = performance.now();
  while (true) {
    if (performance.now() - start > delayTime) return;
  }
}
