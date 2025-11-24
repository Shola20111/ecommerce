'use client'
import { createContext, useRef, useContext } from "react";

type ExploreScrollContextType = {
  exploreScrollRef: React.RefObject<HTMLDivElement | null>;
  prev: () => void;
  next: () => void;
};

const ExploreScrollContext = createContext<ExploreScrollContextType | null>(null);

export const ExploreScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const exploreScrollRef = useRef<HTMLDivElement | null>(null);

  const prev = () => {
    if (exploreScrollRef.current) {
      exploreScrollRef.current.scrollTo({
        left: exploreScrollRef.current.scrollLeft - 280,
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    if (exploreScrollRef.current) {
      exploreScrollRef.current.scrollTo({
        left: exploreScrollRef.current.scrollLeft + 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <ExploreScrollContext.Provider value={{ exploreScrollRef, prev, next }}>
      {children}
    </ExploreScrollContext.Provider>
  );
};

export const useExploreScroll = () => {
  const context = useContext(ExploreScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ExploreScrollProvider");
  }
  return context;
};
