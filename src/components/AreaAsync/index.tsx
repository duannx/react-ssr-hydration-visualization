import { useEffect, useState } from "react";
import { log } from "../../utils/log";

export default function AreaAsync({
  id,
  updateState,
}: {
  id?: string;
  updateState?: (value: any) => void;
}) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [count, setCount] = useState(0);

  // Only log on the client
  if (!isHydrated && typeof window != "undefined") {
    log(`Area ${id} rendering`);
    performance.mark(`Area ${id} rendering`);

    window.requestAnimationFrame(() => {
      performance.mark(`AREA ${id} HYDRATION DONE`);
      log(`AREA ${id} HYDRATION DONE`);
      updateState && updateState(Math.random());
    });
    delay(200);
  }

  useEffect(() => {
    log(`Area ${id} effect run`);
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
  const delayTime = time + Math.floor(Math.random() * 1000);
  const start = performance.now();
  while (true) {
    if (performance.now() - start > delayTime) return;
  }
}
