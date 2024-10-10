import { lazy, Suspense, useEffect, useState } from "react";
import { log } from "../utils/log";

const AreaAsync = lazy(() => import("../components/AreaAsync"));

export default function HomePage() {
  const [anyState, setAnyState] = useState(0)
  log("SuspenseError rendering");
  function updateState(value: number){
    log('updating state ' + value)
    setAnyState(value)
  }
  return (
    <>
      <h1>Suspense error 2</h1>
      <p> State of the parent component got updated when some child is hydrated {anyState}</p>
      <div className="container">
        <Suspense>
          <AreaAsync updateState={updateState} id={`A-${anyState}`}></AreaAsync>
        </Suspense>
        <Suspense>
          <AreaAsync updateState={updateState} id={`B-${anyState}`}></AreaAsync>
        </Suspense>
        <Suspense>
          <AreaAsync updateState={updateState} id={`C-${anyState}`}></AreaAsync>
        </Suspense>
        <Suspense>
          <AreaAsync updateState={updateState} id={`D-${anyState}`}></AreaAsync>
        </Suspense>
      </div>
    </>
  );
}
