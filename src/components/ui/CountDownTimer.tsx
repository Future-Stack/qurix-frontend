import { useEffect, useState } from "react";

// Countdown component for real-time tick
export default function CountdownTimer({ initialSeconds }: { initialSeconds: number }) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const d = Math.floor(timeLeft / (24 * 3600));
  const h = Math.floor((timeLeft % (24 * 3600)) / 3600);
  const m = Math.floor((timeLeft % 3600) / 60);
  const s = timeLeft % 60;

  return (
    <div className="font-['Roboto'] font-medium text-[13px] text-[#414141] bg-[#f8fafc] px-3 py-1.5 rounded-[8px] border border-[#e2e8f0] inline-flex items-center gap-1.5 shadow-2xs">
      <span className="text-[#06530b] font-bold">{d}d</span> :
      <span>{String(h).padStart(2, '0')}h</span> :
      <span>{String(m).padStart(2, '0')}m</span> :
      <span className="text-amber-600 font-bold">{String(s).padStart(2, '0')}s</span>
    </div>
  );
}