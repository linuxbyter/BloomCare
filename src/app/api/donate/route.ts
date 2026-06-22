import { NextResponse } from "next/server";

// eslint-disable-next-line @typescript-eslint/no-require-imports
const IntaSend = require("intasend-node");

function getIntaSend() {
  const publishableKey = process.env.INTASEND_PUBLISHABLE_KEY || process.env.Publishable_Key;
  const secretKey = process.env.INTASEND_SECRET_KEY || process.env.Secret_Key;
  const testMode = process.env.INTASEND_TEST_MODE !== "false";

  if (!publishableKey || !secretKey) {
    throw new Error("IntaSend API keys are not configured.");
  }

  return new IntaSend(publishableKey, secretKey, testMode);
}

export async function POST(request: Request) {
  try {
    const { phone, amount, name, email } = await request.json();

    if (!phone || !amount || amount <= 0) {
      return NextResponse.json(
        { error: "Valid phone number and amount are required." },
        { status: 400 }
      );
    }

    const intasend = getIntaSend();
    const collection = intasend.collection();

    const nameParts = (name || "Anonymous").trim().split(/\s+/);
    const firstName = nameParts[0] || "Anonymous";
    const lastName = nameParts.slice(1).join(" ") || "";

    const apiRef = `bloomcare-${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;

    const response = await collection.mpesaStkPush({
      phone_number: phone.replace(/\s/g, ""),
      amount: Number(amount),
      api_ref: apiRef,
      first_name: firstName,
      last_name: lastName,
      email: email || undefined,
    });

    console.log("IntaSend STK Push:", { name, email, amount, phone, apiRef, response });

    return NextResponse.json({
      success: true,
      message: "Payment request sent. Check your phone for the M-Pesa prompt.",
      invoice_id: response.invoice?.invoice_id,
      api_ref: apiRef,
    });
  } catch (err: unknown) {
    console.error("IntaSend STK Push error:", err);
    const message = err instanceof Error ? err.message : "Payment processing failed. Please try again.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
