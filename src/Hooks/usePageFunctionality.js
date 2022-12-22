import { useState, useRef } from "react";

const usePageFunctionality = () => {
  const [bgImage, setBgImage] = useState("")
  const mainRef = useRef(null);

  function mainFocus() {
    mainRef.current.focus();
  }

  return { bgImage, setBgImage, mainRef, mainFocus };
};

export default usePageFunctionality;
