import { useState, useRef } from "react";

const usePageFunctionality = () => {
  const [bgImage, setBgImage] = useState("bgImageHome")
  const mainRef = useRef(null);

  function mainFocus() {
    console.log("sisirve");
    mainRef.current.focus();
  }

  return { bgImage, setBgImage, mainRef, mainFocus };
};

export default usePageFunctionality;
