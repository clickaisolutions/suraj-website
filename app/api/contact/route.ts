type ContactSubmission = {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  website: string;
};

const recipient = "clickaisolutions@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneCharactersPattern = /^[+0-9() .-]+$/;

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function readField(value: unknown, maximumLength: number): string | null {
  if (typeof value !== "string") {
    return null;
  }

  const normalized = value.trim();
  return normalized.length <= maximumLength ? normalized : null;
}

function validateSubmission(value: unknown): ContactSubmission | null {
  if (!isRecord(value)) {
    return null;
  }

  const fullName = readField(value.fullName, 100);
  const email = readField(value.email, 254);
  const phone = readField(value.phone, 24);
  const company = readField(value.company ?? "", 160);
  const message = readField(value.message, 5000);
  const website = readField(value.website ?? "", 200);

  if (
    !fullName ||
    fullName.length < 2 ||
    !email ||
    !phone ||
    company === null ||
    !message ||
    website === null
  ) {
    return null;
  }

  const phoneDigits = phone.replace(/\D/g, "");
  if (
    !emailPattern.test(email) ||
    !phoneCharactersPattern.test(phone) ||
    phoneDigits.length < 7 ||
    phoneDigits.length > 15 ||
    message.length < 10
  ) {
    return null;
  }

  return { fullName, email, phone, company, message, website };
}

export async function POST(request: Request) {
  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return Response.json({ error: "Please submit a valid contact form." }, { status: 400 });
  }

  const submission = validateSubmission(payload);
  if (!submission) {
    return Response.json(
      { error: "Please check the required fields and try again." },
      { status: 400 },
    );
  }

  if (submission.website) {
    return Response.json({ success: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const sender = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !sender) {
    return Response.json(
      { error: "Email delivery is not configured yet. Please contact us by phone or WhatsApp." },
      { status: 503 },
    );
  }

  const emailBody = [
    "Website Query",
    "",
    `Full Name: ${submission.fullName}`,
    `Email Address: ${submission.email}`,
    `Phone Number: ${submission.phone}`,
    `Company Name: ${submission.company || "Not provided"}`,
    "",
    "Message:",
    submission.message,
  ].join("\n");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: sender,
        to: [recipient],
        reply_to: submission.email,
        subject: "Website Query",
        text: emailBody,
      }),
      cache: "no-store",
      signal: AbortSignal.timeout(10000),
    });

    if (!response.ok) {
      console.error("Contact email provider returned status", response.status);
      return Response.json(
        { error: "We couldn’t send your message right now. Please try again shortly." },
        { status: 502 },
      );
    }

    return Response.json({ success: true });
  } catch {
    return Response.json(
      { error: "We couldn’t reach our email service. Please try again shortly." },
      { status: 502 },
    );
  }
}