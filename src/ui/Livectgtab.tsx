interface LiveCategoryTabsProps {
  categories: string[];
  active: string;
  onChange: (cat: string) => void;
}

const LiveCategoryTabs: React.FC<LiveCategoryTabsProps> = ({ categories, active, onChange }) => {
  return (
    <div className="flex gap-3 flex-wrap mb-6">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
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
