import { useEffect, useState } from "react";
import "./index.scss";

export default function Area() {
  const [isHydrated, setIsHydrated] = useState(false);
  if (!isHydrated) {
    console.log("Area rendering");
    performance.mark("Area rendering")
    if (typeof window != "undefined") {
      window.requestAnimationFrame(() => {
        console.log("HYDRATION DONE");
        performance.mark("HYDRATION DONE")
      });
    }
  }
  useEffect(() => {
    setIsHydrated(true);
  }, []);
  return <div className={`area ${isHydrated ? 'hydrated' : ''}`}></div>;
}
