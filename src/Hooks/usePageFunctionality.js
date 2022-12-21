import { useRef } from "react";

const usePageFunctionality = () => {
  const mainRef = useRef(null);

  function mainFocus() {
    console.log("sisirve");
    mainRef.current.focus();
  }

  return { mainRef, mainFocus };
};

export default usePageFunctionality;
