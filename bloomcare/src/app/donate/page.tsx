"use client";

import { useState, type FormEvent } from "react";

const presetAmounts = [500, 1000, 2500, 5000];

export default function DonatePage() {
  const [amount, setAmount] = useState<number | "">("");
  const [customAmount, setCustomAmount] = useState("");
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [message, setMessage] = useState("");

  const selectedAmount = amount || (customAmount ? Number(customAmount) : 0);

  function handlePresetClick(val: number) {
    setAmount(val);
    setCustomAmount("");
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!selectedAmount || !phone) {
      setStatus("error");
      setMessage("Please enter a valid amount and phone number.");
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/donate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          phone,
          amount: selectedAmount,
          name: name || "Anonymous",
          email,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("sent");
        setMessage(data.message || "Payment request sent. Check your phone for the M-Pesa prompt.");
      } else {
        setStatus("error");
        setMessage(data.error || "Payment failed. Please try again.");
      }
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-8 pt-20 md:pt-28 pb-20 md:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Info */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-4">
              Donate
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-navy mb-4">
              Support a child&apos;s journey
            </h1>
            <p className="text-base text-gray-500 leading-relaxed mb-8 max-w-md">
              Your donation helps us provide therapy, equipment, and training to
              children with developmental conditions and their families across
              Kenya.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-sm font-semibold text-navy mb-1">
                  What your donation supports
                </h3>
                <ul className="text-sm text-gray-500 space-y-1.5">
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal mt-2 flex-shrink-0" />
                    Therapy sessions for children who cannot afford them
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal mt-2 flex-shrink-0" />
                    Sensory room equipment and maintenance
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal mt-2 flex-shrink-0" />
                    Caregiver training in underserved communities
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-1 h-1 rounded-full bg-teal mt-2 flex-shrink-0" />
                    Nutritional support for children with special dietary needs
                  </li>
                </ul>
              </div>

              <div className="border border-gray-100 rounded-xl p-6">
                <h3 className="text-sm font-semibold text-navy mb-2">
                  M-Pesa Payment
                </h3>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Donations are processed via M-Pesa STK Push. You will receive
                  a prompt on your phone to enter your M-Pesa PIN. All
                  transactions are secure and handled by Safaricom.
                </p>
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Amount Selection */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Amount (KES)
                </label>
                <div className="grid grid-cols-2 gap-3 mb-3">
                  {presetAmounts.map((val) => (
                    <button
                      key={val}
                      type="button"
                      onClick={() => handlePresetClick(val)}
                      className={`py-3 rounded-lg border text-sm font-medium transition-colors ${
                        amount === val
                          ? "border-navy bg-navy text-white"
                          : "border-gray-200 text-gray-600 hover:border-gray-300"
                      }`}
                    >
                      {val.toLocaleString()}
                    </button>
                  ))}
                </div>
                <input
                  type="number"
                  min="100"
                  placeholder="Custom amount"
                  value={customAmount}
                  onChange={(e) => {
                    setCustomAmount(e.target.value);
                    setAmount("");
                  }}
                  className="form-input"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="donate-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                  M-Pesa Phone Number
                </label>
                <input
                  id="donate-phone"
                  type="tel"
                  placeholder="0700000000"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                  className="form-input"
                />
              </div>

              {/* Name */}
              <div>
                <label htmlFor="donate-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Name <span className="text-gray-400 font-normal">(optional)</span>
                </label>
                <input
                  id="donate-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-input"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="donate-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email <span className="text-gray-400 font-normal">(optional — for receipt)</span>
                </label>
                <input
                  id="donate-email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="form-input"
                />
              </div>

              {message && (
                <p className={`text-sm font-medium ${status === "sent" ? "text-teal" : "text-rose"}`}>
                  {message}
                </p>
              )}

              <button
                type="submit"
                disabled={status === "sending" || !selectedAmount || !phone}
                className="btn-donate w-full"
              >
                {status === "sending" ? "Processing…" : `Donate KES ${selectedAmount ? selectedAmount.toLocaleString() : ""}`}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
