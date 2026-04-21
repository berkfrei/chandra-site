"use client";

import { useState } from "react";

type Reason = "" | "session" | "doula" | "collaboration" | "general";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    reason: "" as Reason,
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("submitting");

    try {
      const res = await fetch("/api/inquiries", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed to send");
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="flex items-center justify-center min-h-[400px] animate-fade-in">
        <div className="text-center">
          <p className="font-serif text-2xl text-brown-deep mb-3">
            Thank you
          </p>
          <div className="w-[60px] h-px bg-sand mx-auto mb-5" />
          <p className="text-brown-mid text-[0.95rem] leading-relaxed">
            I&apos;ll be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
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
          placeholder="Your name"
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
          What brings you here?
        </label>
        <select
          required
          value={form.reason}
          onChange={(e) => setForm({ ...form, reason: e.target.value as Reason })}
          className="w-full"
        >
          <option value="" disabled>
            Select a reason
          </option>
          <option value="session">Book a channeling session</option>
          <option value="doula">Doula inquiry</option>
          <option value="collaboration">Collaboration</option>
        </select>
      </div>

      <div>
        <label className="block text-[0.7rem] tracking-[0.12em] uppercase text-brown-mid font-sans mb-2">
          Message
        </label>
        <textarea
          required
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          className="w-full min-h-[160px] resize-y"
          placeholder="Share what's on your mind..."
        />
      </div>

      {status === "error" && (
        <p className="text-[0.8rem] text-clay">
          Something went wrong. Please try again or email directly.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center uppercase text-[0.75rem] tracking-[0.14em] font-sans font-normal bg-brown-deep text-cream px-7 py-3 hover:bg-brown-warm transition-all duration-300 cursor-pointer disabled:opacity-50 w-full justify-center"
      >
        {status === "submitting" ? "Sending..." : "Send"}
      </button>
    </form>
  );
}
