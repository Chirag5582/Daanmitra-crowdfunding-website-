"use client";

import React, { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  const handlePayment = async () => {
    const res = await fetch("/api/razorpay", {
      method: "POST",
    });
    const data = await res.json();

    const options = {
      key: "rzp_test_iEG298IzQutI2a", // replace with your actual Razorpay Key ID
      amount: data.amount,
      currency: data.currency,
      name: "DanMitra",
      description: "Donation Payment",
      order_id: data.id,
      handler: function (response) {
        alert("Payment successful!");
        console.log("Payment ID:", response.razorpay_payment_id);
        console.log("Order ID:", response.razorpay_order_id);
        console.log("Signature:", response.razorpay_signature);
      },
      prefill: {
        name: "Chirag Sharma",
        email: "chirag@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#0070f3",
      },
    };

    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <button
        style={{
          padding: "12px 24px",
          fontSize: "16px",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={handlePayment}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Dashboard;
