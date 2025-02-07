import { useEffect } from "react";

const usePreventInspect = () => {
  
  useEffect(() => {
    const disableRightClick = (event) => event.preventDefault();

    const disableDevTools = (event) => {
      if (
        event.key === "F12" || 
        (event.ctrlKey && event.shiftKey && ["I", "J", "C"].includes(event.key)) || 
        (event.ctrlKey && event.key === "U")
      ) {
        event.preventDefault();
      }
    };

    document.addEventListener("contextmenu", disableRightClick);
    document.addEventListener("keydown", disableDevTools);

    return () => {
      document.removeEventListener("contextmenu", disableRightClick);
      document.removeEventListener("keydown", disableDevTools);
    };
  }, []);
};

export default usePreventInspect;
