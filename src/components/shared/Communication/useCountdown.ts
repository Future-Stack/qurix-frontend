import { useState, useEffect } from 'react';

interface TimeLeft {
  d: number;
  h: number;
  m: number;
  s: number;
  expired: boolean;
}

function calc(deadline: string): TimeLeft {
  const diff = Math.max(0, Math.floor((new Date(deadline).getTime() - Date.now()) / 1000));
  return {
    d: Math.floor(diff / (24 * 3600)),
    h: Math.floor((diff % (24 * 3600)) / 3600),
    m: Math.floor((diff % 3600) / 60),
    s: diff % 60,
    expired: diff === 0,
  };
}

export function useCountdown(deadline: string | undefined): TimeLeft & { formatted: string } {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(
    deadline ? calc(deadline) : { d: 0, h: 0, m: 0, s: 0, expired: true }
  );

  useEffect(() => {
    if (!deadline) return;
    // Recalculate immediately when deadline changes
    setTimeLeft(calc(deadline));
    const timer = setInterval(() => setTimeLeft(calc(deadline)), 1000);
    return () => clearInterval(timer);
  }, [deadline]);

  const pad = (n: number) => String(n).padStart(2, '0');
  const formatted = `${timeLeft.d}D ${pad(timeLeft.h)}H ${pad(timeLeft.m)}M ${pad(timeLeft.s)}S`;

  return { ...timeLeft, formatted };
}
