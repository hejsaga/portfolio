import { useState, useEffect } from "react";
import { createBreakpoint } from "react-use";

const useBreakpoint = createBreakpoint({ large: 990, medium: 0 });

const useStyling = () => {
  const breakpoint = useBreakpoint();
  const [useMobileStyling, setUseMobileStyling] = useState(false);

  // Set a state to conditionally style elements depending on screensize
  useEffect(() => {
    if (breakpoint === "large") {
      setUseMobileStyling(false);
    }
    if (breakpoint === "medium") {
      setUseMobileStyling(true);
    }
  }, [breakpoint]);

  return useMobileStyling;
};

export default useStyling;
