"use client";
import { useState } from "react";

type StarsProps = {
  total?: number; 
};

export default function StarsComp({ total = 5 }: StarsProps) {
  const [rating, setRating] = useState(0);       
  const [ratingsCount, setRatingsCount] = useState(0); 

  const handleClick = (value: number) => {
    setRating(value);
    setRatingsCount(Math.floor(Math.random() * 100) + 1); };

  return (
    <div className="flex items-center gap-2">
      
      <div className="flex gap-1">
        {Array.from({ length: total }).map((_, index) => {
          const value = index + 1;
          return (
            <button
              key={index}
              type="button"
              onClick={() => handleClick(value)}
              className="text-2xl focus:outline-none"
            >
              {value <= rating ? "⭐" : "☆"}
            </button>
          );
        })}
      </div>

     
      {rating > 0 && (
        <span className="text-sm text-gray-600">
          ({ratingsCount})
        </span>
      )}
    </div>
  );
}
