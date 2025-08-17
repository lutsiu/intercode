export const runtime = "nodejs";

import type {NextRequest} from "next/server";
import {NextResponse} from "next/server";
import nodemailer from "nodemailer";

function esc(s: string) {
  return s.replace(/[&<>"']/g, (m) => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;" }[m]!));
}

type Body = { name: string; email: string; message?: string; task?: string };

export async function POST(req: NextRequest) {
  try {
    const {name = "", email = "", message, task}: Body = await req.json();
    const text = message ?? task ?? "";

    if (!name || !email || !text) {
      return NextResponse.json({ok: false, error: "Missing required fields"}, {status: 400});
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER!,
        pass: process.env.GMAIL_PASS!, 
      },
    });

    await transporter.sendMail({
      from: `"Website" <${process.env.MAIL_FROM || process.env.GMAIL_USER}>`,
      to: process.env.MAIL_TO || process.env.GMAIL_USER!, 
      subject: "New contact form message",
      text: `Name: ${name}\nEmail: ${email}\n\n${text}`,
      html: `
        <h2>New message</h2>
        <p><strong>Name:</strong> ${esc(name)}</p>
        <p><strong>Email:</strong> ${esc(email)}</p>
        <p><strong>Message:</strong></p>
        <pre style="white-space:pre-wrap;font-family:system-ui,Segoe UI,Arial,sans-serif">${esc(text)}</pre>
      `,
    });

    return NextResponse.json({ok: true});
  } catch {
    return NextResponse.json({ok: false, error: "Send failed"}, {status: 500});
  }
}
