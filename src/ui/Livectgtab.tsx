// src/components/LiveCategoryTabs.tsx
import React, { useState } from 'react';

const categories = ["all", "new", "tab"];

const LiveCategoryTabs = () => {
  const [active, setActive] = useState('All Streams');

  return (
    <div className="flex gap-3 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-4 py-2 rounded-full border text-sm font-medium transition ${
            active === cat
              ? 'bg-orange-600 text-white'
              : 'bg-white border-gray-300 text-gray-700 hover:bg-orange-100'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default LiveCategoryTabs;
