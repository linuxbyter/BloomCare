import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    console.log("IntaSend Webhook:", JSON.stringify(body, null, 2));

    // TODO: Verify webhook signature using INTASEND_WEBHOOK_SECRET
    // TODO: Store donation record in database
    // TODO: Send confirmation email to donor

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook processing failed" }, { status: 500 });
  }
}
