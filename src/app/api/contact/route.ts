import { NextResponse } from "next/server";

interface ContactRequest {
  email?: unknown;
  message?: unknown;
  name?: unknown;
}

const recipientEmail = "samuelobasi2005@gmail.com";
const defaultSenderEmail = "Cermuel <hello@cermuel.dev>";

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const senderEmail = process.env.RESEND_FROM_EMAIL || defaultSenderEmail;

  if (!apiKey) {
    return NextResponse.json(
      { error: "Missing email provider configuration" },
      { status: 500 },
    );
  }

  const body = (await request.json()) as ContactRequest;
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";

  if (!email || !message || !name) {
    return NextResponse.json(
      { error: "Name, email, and message are required" },
      { status: 400 },
    );
  }

  const response = await fetch("https://api.resend.com/emails", {
    body: JSON.stringify({
      from: senderEmail,
      reply_to: email,
      subject: `Project note from ${name}`,
      text: `${message}\n\nFrom: ${name}\nReply to: ${email}`,
      to: recipientEmail,
    }),
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    method: "POST",
  });

  if (!response.ok) {
    return NextResponse.json(
      { error: "Could not send message" },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
