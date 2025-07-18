import React, { useState } from "react";

type NotificationType = "NEW" | "Unread";

const notifications = {
  NEW: [
    "Lorme ipsim kaksnnianw jenfanienfmaer skjnnaejknvmnae signanemn gina",
    "Another new notification text here for example only.",
  ],
  Unread: [
    "Old unread message or notification sample text for the list item",
    "Lorem ipsum unread second line example for clarity",
    "Sample content that simulates unread status",
    "Fourth unread message simulating older alert",
  ],
};

const NotificationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NotificationType>("NEW");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-orange-50 relative px-4">
      {/* Background mandalas */}
      <div className="absolute left-0 top-0 w-48 opacity-10 hidden md:block">
        <img src="/mandala-left.png" alt="left mandala" />
      </div>
      <div className="absolute right-0 bottom-0 w-48 opacity-10 hidden md:block">
        <img src="/mandala-right.png" alt="right mandala" />
      </div>

      {/* Notification Card */}
      <div className="bg-white border border-orange-300 rounded-3xl shadow-2xl max-w-2xl w-full p-6 relative z-10">
        <h1 className="text-3xl text-center font-bold text-orange-500 mb-6">
          Notifications
        </h1>

        {/* Tabs */}
        <div className="flex justify-center gap-4 mb-6">
          {(["NEW", "Unread"] as NotificationType[]).map((tab) => (
            <button
              key={tab}
              className={`px-6 py-2 rounded-full font-semibold shadow-md transition 
                ${
                  activeTab === tab
                    ? "bg-orange-100 text-orange-600"
                    : "bg-orange-50 text-gray-500"
                }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Notification List */}
        <ul className="space-y-4 text-sm text-gray-700 px-2">
          {notifications[activeTab].map((item, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-orange-400 text-lg">~</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NotificationPage;
