"use client";

import { useState, useMemo } from "react";
import {
  format,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addMonths,
  subMonths,
  eachDayOfInterval,
  isSameMonth,
  isSameDay,
  isBefore,
  startOfDay,
  getDay,
} from "date-fns";

/* ─── Mock availability ─── */
const AVAILABLE_DAYS: number[] = []; // No availability yet — update when schedule is set
const SLOTS = ["10:00 AM", "11:30 AM", "1:00 PM", "2:30 PM"];

function isAvailable(date: Date): boolean {
  const today = startOfDay(new Date());
  if (isBefore(date, today)) return false;
  return AVAILABLE_DAYS.includes(getDay(date));
}

function isPast(date: Date): boolean {
  return isBefore(date, startOfDay(new Date()));
}

/* ─── Step type ─── */
type Step = "date" | "time" | "details" | "confirmed";

/* ─── Format helpers ─── */
function formatSlot(slot: string) {
  return slot;
}

export default function BookingCalendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<Step>("date");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitting, setSubmitting] = useState(false);

  /* Build the calendar grid */
  const calendarDays = useMemo(() => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(currentMonth);
    const gridStart = startOfWeek(monthStart, { weekStartsOn: 0 });
    const gridEnd = endOfWeek(monthEnd, { weekStartsOn: 0 });
    return eachDayOfInterval({ start: gridStart, end: gridEnd });
  }, [currentMonth]);

  /* Handlers */
  function handleDateClick(date: Date) {
    if (!isAvailable(date)) return;
    setSelectedDate(date);
    setSelectedTime(null);
    setStep("time");
  }

  function handleTimeClick(time: string) {
    setSelectedTime(time);
    setStep("details");
  }

  function handleBack() {
    if (step === "time") {
      setStep("date");
      setSelectedDate(null);
    } else if (step === "details") {
      setStep("time");
      setSelectedTime(null);
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);

    // Simulate API call
    await new Promise((r) => setTimeout(r, 1200));

    setStep("confirmed");
    setSubmitting(false);
  }

  const dayNames = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <div className="w-full">
      {/* ── Availability Notice ── */}
      <div className="mb-8 text-center">
        <p className="font-serif text-lg italic text-brown-deep">
          Online scheduling coming soon
        </p>
        <p className="mt-2 text-[0.85rem] leading-relaxed text-brown-mid">
          I&rsquo;m currently booking sessions directly. Reach out and
          we&rsquo;ll find a time that works for you.
        </p>
        <div className="mt-4 flex justify-center gap-3">
          <a
            href="mailto:chandrafrei@gmail.com"
            className="text-[0.75rem] uppercase tracking-[0.1em] text-brown-warm hover:text-terracotta transition-colors"
          >
            Email me
          </a>
          <span className="text-brown-mid/40">|</span>
          <a
            href="tel:+18016477707"
            className="text-[0.75rem] uppercase tracking-[0.1em] text-brown-warm hover:text-terracotta transition-colors"
          >
            Call / Text
          </a>
        </div>
      </div>

      {/* ── Calendar Header ── */}
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
          className="text-brown-mid hover:text-terracotta transition-colors duration-300 p-2 -ml-2 cursor-pointer"
          aria-label="Previous month"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M12.5 15L7.5 10L12.5 5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <h3 className="font-serif text-xl text-brown-deep tracking-wide">
          {format(currentMonth, "MMMM yyyy")}
        </h3>

        <button
          onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
          className="text-brown-mid hover:text-terracotta transition-colors duration-300 p-2 -mr-2 cursor-pointer"
          aria-label="Next month"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7.5 15L12.5 10L7.5 5"
              stroke="currentColor"
              strokeWidth="1.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      {/* ── Day-of-week headers ── */}
      <div className="grid grid-cols-7 mb-3">
        {dayNames.map((d, i) => (
          <div
            key={i}
            className="text-center text-[0.7rem] tracking-[0.14em] uppercase text-brown-mid font-sans font-normal"
          >
            {d}
          </div>
        ))}
      </div>

      {/* ── Calendar Grid ── */}
      <div className="grid grid-cols-7 gap-y-1">
        {calendarDays.map((day, i) => {
          const inMonth = isSameMonth(day, currentMonth);
          const available = isAvailable(day);
          const past = isPast(day);
          const selected = selectedDate && isSameDay(day, selectedDate);
          const today = isSameDay(day, new Date());

          return (
            <button
              key={i}
              onClick={() => handleDateClick(day)}
              disabled={!inMonth || !available}
              className={`
                relative flex flex-col items-center justify-center py-2.5 font-sans text-sm transition-all duration-200 cursor-pointer
                ${!inMonth ? "text-transparent pointer-events-none" : ""}
                ${inMonth && past ? "text-sand cursor-default" : ""}
                ${inMonth && !past && !available ? "text-brown-mid/40 cursor-default" : ""}
                ${inMonth && available && !selected ? "text-brown-deep hover:text-terracotta" : ""}
                ${selected ? "text-terracotta font-normal" : ""}
              `}
            >
              <span className={`${today && inMonth ? "underline underline-offset-2 decoration-terracotta-light" : ""}`}>
                {format(day, "d")}
              </span>
              {/* Availability dot */}
              {inMonth && available && (
                <span
                  className={`absolute bottom-0.5 w-1 h-1 rounded-full transition-colors duration-200 ${
                    selected ? "bg-terracotta" : "bg-terracotta-light/70"
                  }`}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* ── Time Slots ── */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          step === "time" || step === "details" || step === "confirmed"
            ? "max-h-[1000px] opacity-100 mt-10"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {selectedDate && (
          <>
            <div className="flex items-center justify-between mb-5">
              <p className="font-serif text-lg text-brown-deep">
                {format(selectedDate, "EEEE, MMMM d")}
              </p>
              {step !== "confirmed" && (
                <button
                  onClick={handleBack}
                  className="text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid hover:text-terracotta transition-colors duration-300 font-sans cursor-pointer"
                >
                  Back
                </button>
              )}
            </div>

            <div className="w-[60px] h-px bg-sand mb-6" />

            <div className="grid grid-cols-2 gap-3">
              {SLOTS.map((slot) => (
                <button
                  key={slot}
                  onClick={() => handleTimeClick(slot)}
                  className={`
                    py-3 px-4 text-[0.8rem] tracking-[0.08em] font-sans transition-all duration-300 cursor-pointer
                    ${
                      selectedTime === slot
                        ? "bg-terracotta text-cream"
                        : "border border-cream-dark text-brown-deep hover:border-terracotta-light hover:text-terracotta"
                    }
                  `}
                >
                  {formatSlot(slot)}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* ── Intake Form ── */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-out ${
          step === "details"
            ? "max-h-[800px] opacity-100 mt-10"
            : "max-h-0 opacity-0 mt-0"
        }`}
      >
        {step === "details" && (
          <form onSubmit={handleSubmit} className="space-y-5">
            <p className="font-serif text-lg text-brown-deep mb-1">
              Your details
            </p>
            <div className="w-[60px] h-px bg-sand mb-6" />

            <div>
              <label className="block text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid font-sans mb-2">
                Name
              </label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid font-sans mb-2">
                Email
              </label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid font-sans mb-2">
                What&apos;s on your heart?
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full min-h-[120px] resize-y"
                placeholder="Optional — share anything you'd like me to know beforehand"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center uppercase text-[0.75rem] tracking-[0.14em] font-sans font-normal bg-brown-deep text-cream px-7 py-3 hover:bg-brown-warm transition-all duration-300 cursor-pointer disabled:opacity-50 w-full justify-center"
            >
              {submitting ? "Reserving your time..." : "Confirm & Pay Deposit"}
            </button>
          </form>
        )}
      </div>

      {/* ── Confirmation ── */}
      <div
        className={`transition-all duration-700 ease-out ${
          step === "confirmed"
            ? "opacity-100 mt-10"
            : "opacity-0 max-h-0 overflow-hidden mt-0"
        }`}
      >
        {step === "confirmed" && (
          <div className="text-center py-8">
            <p className="font-serif text-2xl text-brown-deep mb-3">
              You&apos;re all set
            </p>
            <div className="w-[60px] h-px bg-sand mx-auto mb-5" />
            <p className="text-brown-mid text-[0.95rem] leading-relaxed max-w-sm mx-auto">
              A confirmation email is on its way to{" "}
              <span className="text-brown-deep">{form.email}</span>. I look
              forward to our time together.
            </p>
            <p className="text-brown-mid/60 text-[0.8rem] mt-4">
              {selectedDate && format(selectedDate, "EEEE, MMMM d")} at{" "}
              {selectedTime}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
