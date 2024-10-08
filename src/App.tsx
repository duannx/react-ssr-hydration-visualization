import { lazy, Suspense } from "react";
import "./App.scss";
const Area = lazy(() => import("./components/Area"));
function App() {
  return (
    <div className="container">
      <Suspense>
        <Area id="A"></Area>
      </Suspense>
      <Suspense>
        <Area id="B"></Area>
      </Suspense>
      <Suspense>
        <Area id="C"></Area>
      </Suspense>
      <Suspense>
        <Area id="D"></Area>
      </Suspense>
    </div>
  );
}

export default App;
