"use client";

import { useEffect, useState } from "react";

/** Egypt 2027 begins Feb 5, 2027 (Cairo). Counts whole days; changes once it has begun. */
const START = Date.UTC(2027, 1, 5);
const daysLeft = () => Math.ceil((START - Date.now()) / 86_400_000);

export default function EgyptCountdown() {
  const [days, setDays] = useState<number | null>(null);
  useEffect(() => { setDays(daysLeft()); }, []);
  if (days === null) return <span>February 5–14, 2027</span>;
  if (days <= 0) return <span>Happening now in Egypt</span>;
  return <span>{days} {days === 1 ? "day" : "days"} to go</span>;
}
