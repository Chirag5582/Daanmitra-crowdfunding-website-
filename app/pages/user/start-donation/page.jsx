"use client";

import Sidebar from "@/app/components/Sidebar";
import React from "react";
import Script from "next/script";

export default function StartDonationPage() {
 const handleRazorpay = async () => {
  const amount = 50000; // Example amount in paise (500.00 INR)

  try {
    const response = await fetch("/api/create-order", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        amount: amount,
        currency: "INR",
        receipt: "receipt#1",
        notes: {},
      }),
    });

    if (!response.ok) {
      alert("Failed to create order. Please try again.");
      return;
    }

    const order = await response.json();

    // Check if Razorpay script is loaded
    if (!window.Razorpay) {
      alert("Razorpay SDK failed to load. Please check your internet connection.");
      return;
    }

    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, // Razorpay key_id
      amount: order.amount,
      currency: order.currency,
      name: "Your Organization",
      description: "Donation Payment",
      order_id: order.id, // From backend
      callback_url: "http://localhost:3000/payment-success", // Success URL
      prefill: {
        name: "Chirag Sharma",
        email: "example@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#8B5CF6",
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  } catch (error) {
    console.error("Error during Razorpay payment:", error);
    alert("Something went wrong. Please try again.");
  }
};     
   (   <>  
         <div>
        <main>
      <div>
    
            <button>
              onClick={handleCryptomas}
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg shadow"
            
              Pay through Cryptomas
            </button>
          </div>
        </main>
      </div>
    </>
  );
}
