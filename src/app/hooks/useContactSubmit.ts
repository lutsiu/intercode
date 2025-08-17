"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export type ContactBody = {
  name: string;
  email: string;
  task: string;
  promo?: string;
  hp?: string; // honeypot (optional)
};

export default function useContactSubmit(endpoint = "/api/contact") {
  const [loading, setLoading] = useState(false);

  async function submit(body: ContactBody): Promise<boolean> {
    const name = body.name.trim();
    const email = body.email.trim();
    const task = body.task.trim();
    const promo = body.promo?.trim();
    const hp = body.hp?.trim();

    if (!name || !email || !task) {
      toast.error("Please fill in all required fields.");
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Enter a valid email.");
      return false;
    }
    // honeypot: if filled, silently stop
    if (hp && hp.length > 0) return true;

    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, task, promo, hp }),
      });

      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || json.ok === false) {
        throw new Error(json.error ?? `Request failed (${res.status})`);
      }

      toast.success("Message sent!");
      return true;
    } catch (e) {
      const msg = e instanceof Error ? e.message : "Send failed";
      toast.error(msg);
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading };
}
