"use client";

import { useState } from "react";
import toast from "react-hot-toast";
import { useTranslations } from "next-intl";

export type ContactBody = {
  name: string;
  email: string;
  task: string;
  promo?: string;
  hp?: string; // honeypot
};

export default function useContactSubmit(endpoint = "/api/contact") {
  const [loading, setLoading] = useState(false);
  const t = useTranslations("homepage.contact.form");

  async function submit(body: ContactBody): Promise<boolean> {
    const name = body.name.trim();
    const email = body.email.trim();
    const task = body.task.trim();
    const promo = body.promo?.trim();
    const hp = body.hp?.trim();

    if (!name || !email || !task) {
      toast.error(t("errorRequired"));
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error(t("errorEmail"));
      return false;
    }
    if (hp && hp.length > 0) return true; // honeypot

    setLoading(true);
    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, task, promo, hp }),
      });

      const json = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };

      if (!res.ok || json.ok === false) {
        throw new Error(json.error ?? `HTTP ${res.status}`);
      }

      toast.success(t("sent"));
      return true;
    } catch {
      toast.error(t("errorServer"));
      return false;
    } finally {
      setLoading(false);
    }
  }

  return { submit, loading };
}
