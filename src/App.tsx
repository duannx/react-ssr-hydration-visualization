import { FunctionComponent, useEffect } from "react";
import "./App.scss";

import HomePage from "./pages/HomePage";
import NormalSuspense from "./pages/NormalSuspense";
import SuspenseError1 from "./pages/SuspenseError1";
import SuspenseError2 from "./pages/SuspenseError2";
import { log } from "./utils/log";

const pathNameToPages: {
  [key: string]: FunctionComponent;
} = {
  "/": HomePage,
  "": HomePage,
  "/suspense": NormalSuspense,
  "/suspense/": NormalSuspense,
  "/suspense-error-1": SuspenseError1,
  "/suspense-error-1/": SuspenseError1,
  "/suspense-error-2": SuspenseError2,
  "/suspense-error-2/": SuspenseError2,
};

function App({ pathName }: { pathName: string }) {
  log("App rendering");
  const Page = pathNameToPages[pathName] || HomePage;
  useEffect(() => {
    // log("App effect fired");
  });
  return (
    <>
      <Page></Page>
    </>
  );
}

export default App;
