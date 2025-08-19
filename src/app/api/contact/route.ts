export const runtime = "nodejs";

import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]!));
}

type Body = {
  name: string;
  email: string;
  message?: string;
  task?: string;
  promo?: string;
  hp?: string;
};

export async function POST(req: NextRequest) {
  try {
    const { name = "", email = "", message, task, promo, hp }: Body = await req.json();

    // server-side honeypot
    if (hp && hp.trim()) return NextResponse.json({ ok: true });

    const nm = name.trim();
    const em = email.trim();
    const text = (message ?? task ?? "").trim();

    if (!nm || !em || !text) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 });
    }

    const smtpUser = process.env.SMTP_USER!;
    const smtpPass = process.env.SMTP_PASS!;
    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT || 465);

    if (!smtpUser || !smtpPass) {
      throw new Error("SMTP_USER/SMTP_PASS are not set");
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: { user: smtpUser, pass: smtpPass },
    });

    const toAddress = process.env.MAIL_TO || smtpUser;
    const fromName = process.env.FROM_NAME || "Website";

    const fromHeader = `"${fromName}" <${smtpUser}>`;

    await transporter.sendMail({
      from: fromHeader,
      to: toAddress,
      replyTo: em,
      subject: "New contact form message",
      text:
        `Name: ${nm}\n` +
        `Email: ${em}\n` +
        (promo ? `Promo: ${promo}\n` : "") +
        `\n${text}`,
      html: `
        <h2>New message</h2>
        <p><strong>Name:</strong> ${esc(nm)}</p>
        <p><strong>Email:</strong> ${esc(em)}</p>
        ${promo ? `<p><strong>Promo:</strong> ${esc(promo)}</p>` : ""}
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:system-ui,Segoe UI,Arial,sans-serif">${esc(text)}</pre>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Contact POST error:", e);
    const msg =
      process.env.NODE_ENV !== "production" && e instanceof Error
        ? e.message
        : "Send failed";
    return NextResponse.json({ ok: false, error: msg }, { status: 500 });
  }
}
