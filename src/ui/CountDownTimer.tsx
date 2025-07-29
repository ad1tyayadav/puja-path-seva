import { useEffect, useState } from "react";

interface CountdownTimerProps {
  targetDate: string;
}

interface TimeLeftState {
  expired: boolean;
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

interface TimeUnitProps {
  value: number;
  label: string;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeftState>(calculateTimeLeft());

  function calculateTimeLeft(): TimeLeftState {
    const now = new Date().getTime();
    const target = new Date(targetDate).getTime();
    const difference = target - now;

    if (difference <= 0) {
      return { expired: true };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
      expired: false
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (timeLeft.expired) {
    return (
      <div className="mb-6">
        <p className="text-lg font-medium text-green-600 border-l-4 border-green-500 pl-3 py-1">
          Event Completed
        </p>
      </div>
    );
  }

  const { days = 0, hours = 0, minutes = 0, seconds = 0 } = timeLeft;

  return (
    <div className="mb-6">
      <p className="text-lg font-medium text-gray-700 mb-3">Starts in:</p>
      <div className="flex items-center space-x-3 sm:space-x-4">
        <TimeUnit value={days} label="Days" />
        <TimeUnit value={hours} label="Hours" />
        <TimeUnit value={minutes} label="Minutes" />
        <TimeUnit value={seconds} label="Seconds" />
      </div>
    </div>
  );
}

export function TimeUnit({ value, label }: TimeUnitProps) {
  return (
    <div className="flex flex-col items-center w-20">
      <div className="bg-white w-full flex justify-center border border-gray-200 rounded-lg py-2 shadow-sm">
        <span className="text-2xl md:text-3xl font-bold text-orange-500">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-green-500 mt-2 text-center">
        {label}
      </span>
    </div>
  );
}