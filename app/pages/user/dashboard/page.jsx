"use client";

import Sidebar from "../../../components/Sidebar";
import React from "react";

const donationOptions = [
  {
    title: "Families in Need",
    description: "Support basic essentials for struggling families",
    icon: "👨‍👩‍👧‍👦",
  },
  {
    title: "Orphanages",
    description: "Help children with food, education, and care",
    icon: "👶",
  },
  {
    title: "Senior Citizens",
    description: "Provide medical and daily needs for elderly",
    icon: "👴",
  },
  {
    title: "Students",
    description: "Fund education and supplies for students",
    icon: "🎓",
  },
];

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-purple-100 text-gray-900">
      <Sidebar />
      {/* Main content */}
      <main className="flex-1 p-7">
        <h1 className="text-3xl font-bold mb-6">Welcome back, User</h1>
        <section>
          <h2 className="text-2xl font-semibold mb-6">Start Donating!</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {donationOptions.map((option) => (
              <div
                key={option.title}
                className="bg-purple-50 p-5 w-30  rounded-2xl shadow-md"
              >
                <div className="text-7xl mb-4">{option.icon}</div>
                <h3 className="text-lg font-semibold">{option.title}</h3>
                <p className="text-sm text-gray-600 h-10">{option.description}</p>
                <button className="text-sm mt-4 px-3 py-2 transition-colors bg-purple-600 text-white rounded hover:bg-purple-700">
                  Donate Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Summary */}
        <section className="mt-10">
          <h2 className="text-2xl font-semibold mb-4">Your Donation Summary</h2>
          <div className="bg-purple-50 p-4 rounded-xl shadow-md text-gray-600">
            {/* Add actual summary info here */}
            <p>Total Donated: ₹0</p>
            <p>Recent Donations: None yet</p>
          </div>
        </section>
      </main>
    </div>
  );
}
