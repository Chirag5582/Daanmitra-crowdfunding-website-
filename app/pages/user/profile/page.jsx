"use client";
import Sidebar from "@/app/components/Sidebar";
import React from "react";

export default function MyProfilePage() {
  return (
    <div className="flex min-h-screen bg-purple-50 text-gray-900">
      <Sidebar />
      <main className="min-h-screen  p-7">
        <h1 className="text-3xl font-bold mb-6">My Profile</h1>
        <p className="text-gray-700">
          Manage your profile details and preferences.
        </p>
        {/* Add editable profile info form */}
      </main>
    </div>
  );
}
