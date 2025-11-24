'use client'
import { createContext, useRef, useContext } from "react";

type ScrollContextType = {
  scrollRef: React.RefObject<HTMLDivElement | null>;
  prev: () => void;
  next: () => void;
};

const ScrollContext = createContext<ScrollContextType | null>(null);

export const ScrollProvider = ({ children }: { children: React.ReactNode }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const prev = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - 280,
        behavior: "smooth",
      });
    }
  };

  const next = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + 280,
        behavior: "smooth",
      });
    }
  };

  return (
    <ScrollContext.Provider value={{ scrollRef, prev, next }}>
      {children}
    </ScrollContext.Provider>
  );
};

export const useScroll = () => {
  const context = useContext(ScrollContext);
  if (!context) {
    throw new Error("useScroll must be used within a ScrollProvider");
  }
  return context;
};
