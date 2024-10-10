import { lazy, Suspense, useEffect } from "react";
import { log } from "../utils/log";

const AreaAsync = lazy(() => import("../components/AreaAsync"));

export default function HomePage() {
  log("Suspense rendering");
  useEffect(() => {
    // log("Suspense Page effect fired");
  });
  return (
    <>
      <h1>Normal Suspense flow</h1>
      <p> Try to click into one component when it is hydrating to trigger selective hydration</p>
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
