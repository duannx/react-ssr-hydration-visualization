import { lazy, Suspense, useEffect, useState } from "react";
import { log } from "../utils/log";

const AreaAsync = lazy(() => import("../components/AreaAsync"));

export default function HomePage() {
  const [anyState, setAnyState] = useState(0)
  log("SuspenseError rendering");
  useEffect(() => {
    log("SuspenseError state change");
    setAnyState(1)
  });
  return (
    <>
      <h1>Suspense error 1</h1>
      <p> State of the parent component got updated before child component hydrate {anyState}</p>
      <div className="container">
        <Suspense>
          <AreaAsync id="A"></AreaAsync>
        </Suspense>
        <Suspense>
          <AreaAsync id="B"></AreaAsync>
        </Suspense>
        <Suspense>
          <AreaAsync id="C"></AreaAsync>
        </Suspense>
        <Suspense>
          <AreaAsync id="D"></AreaAsync>
        </Suspense>
      </div>
    </>
  );
}
