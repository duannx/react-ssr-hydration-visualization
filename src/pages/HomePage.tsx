import { useEffect } from "react";
import Area from "../components/Area";
import { log } from "../utils/log";

export default function HomePage() {
    log("Home Page rendering");
    useEffect(() => {
    //   log("Home Page effect fired");
    });
  return (
    <>
    <h1>All components are sync </h1>
    <div className="container">
      <Area id="A"></Area>
      <Area id="B"></Area>
      <Area id="C"></Area>
      <Area id="D"></Area>
    </div>
    </>
  );
}
