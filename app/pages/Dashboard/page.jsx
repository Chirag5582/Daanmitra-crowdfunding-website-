"use client";

import React from "react";

function Dashboard() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f0f0f0", // or set to "white" if you want a plain background
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
        onClick={() => alert("Payment initiated!")}
      >
        Pay Now
      </button>
    </div>
  );
}

export default Dashboard;

