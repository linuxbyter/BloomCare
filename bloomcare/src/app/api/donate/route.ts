import { NextResponse } from "next/server";

interface MpesaRequestBody {
  phone: string;
  amount: number;
  name?: string;
  email?: string;
}

async function getAccessToken(): Promise<string> {
  const consumerKey = process.env.MPESA_CONSUMER_KEY;
  const consumerSecret = process.env.MPESA_CONSUMER_SECRET;
  const baseUrl = process.env.MPESA_ENV === "production"
    ? "https://api.safaricom.co.ke"
    : "https://sandbox.safaricom.co.ke";

  const auth = Buffer.from(`${consumerKey}:${consumerSecret}`).toString("base64");

  const res = await fetch(`${baseUrl}/oauth/v1/generate?grant_type=client_credentials`, {
    headers: { Authorization: `Basic ${auth}` },
  });

  const data = await res.json();
  return data.access_token;
}

export async function POST(request: Request) {
  try {
    const body: MpesaRequestBody = await request.json();
    const { phone, amount, name, email } = body;

    if (!phone || !amount || amount <= 0) {
      return NextResponse.json(
        { error: "Valid phone number and amount are required." },
        { status: 400 }
      );
    }

    const accessToken = await getAccessToken();
    const baseUrl = process.env.MPESA_ENV === "production"
      ? "https://api.safaricom.co.ke"
      : "sandbox.safaricom.co.ke";

    const timestamp = new Date()
      .toISOString()
      .replace(/[-T:Z.]/g, "")
      .slice(0, 14);

    const shortcode = process.env.MPESA_SHORTCODE || "";
    const passkey = process.env.MPESA_PASSKEY || "";
    const password = Buffer.from(`${shortcode}${passkey}${timestamp}`).toString("base64");

    const callbackUrl = process.env.MPESA_CALLBACK_URL || "";

    const stkPushRes = await fetch(`${baseUrl}/mpesa/stkpush/v1/processrequest`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        BusinessShortCode: shortcode,
        Password: password,
        Timestamp: timestamp,
        TransactionType: "CustomerPayBillOnline",
        Amount: amount,
        PartyA: phone,
        PartyB: shortcode,
        PhoneNumber: phone,
        CallBackURL: callbackUrl,
        AccountReference: "BloomCare",
        TransactionDesc: `Donation from ${name || "Anonymous"}`,
      }),
    });

    const stkData = await stkPushRes.json();

    // TODO: Store donation record in database with name, email, amount, stkData
    console.log("M-Pesa STK Push:", { name, email, amount, phone, stkData });

    return NextResponse.json({
      success: true,
      message: "Payment request sent. Check your phone for the M-Pesa prompt.",
      checkoutRequestId: stkData.CheckoutRequestID,
    });
  } catch {
    return NextResponse.json(
      { error: "Payment processing failed. Please try again." },
      { status: 500 }
    );
  }
}
