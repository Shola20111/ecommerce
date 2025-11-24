// 
"use client";
import { useEffect, useState } from "react";

type TimeLeft = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

export default function ToGoComp() {
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 3,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;

        if (seconds > 0) {
          seconds -= 1;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes -= 1;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours -= 1;
            } else {
              hours = 23;
              if (days > 0) {
                days -= 1;
              } else {
                
                clearInterval(timer);
                return prev;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const Column = ({ label, value }: { label: string; value: number }) => (
    <div className="flex flex-col items-center justify-center w-[50px] h-[50px] md:w-[60px] md:h-[60px]  bg-white rounded-full">
      <span className="text-xs font-medium text-gray-600">{label}</span>
      <span className="text-xl  font-extrabold text-gray-900">
        {String(value).padStart(2, "0")}
      </span>
    </div>
  );

  return (
    <div className="flex items-center justify-center">
      <Column label="Days" value={timeLeft.days} />
      <span className="mx-1 md:mx-2 text-xl md:text-2xl font-bold">:</span>
      <Column label="Hours" value={timeLeft.hours} />
      <span className="mx-1 md:mx-2  text-xl md:text-2xl font-bold">:</span>
      <Column label="Minutes" value={timeLeft.minutes} />
      <span className="mx-1 md:mx-2  text-xl md:text-2xl font-bold">:</span>
      <Column label="Seconds" value={timeLeft.seconds} />
    </div>
  );
}
