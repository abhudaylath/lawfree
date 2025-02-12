import { Search } from "lucide-react";
import React from "react";

interface SearchSectionProps {
  onSearchInput: (value: string) => void;
}

function SearchSection({ onSearchInput }: SearchSectionProps) {
  return (
    <div className="p-10 text-black text-center rounded-lg">
      <h2 className="text-3xl font-bold">Browse All Services</h2>
      <p className="mt-2 text-lg opacity-90">
        Find the best AI-powered tools to streamline your legal workflow.
      </p>
      <div className="mt-4 flex items-center justify-between border border-gray-400 rounded-lg px-4 py-2 max-w-md mx-auto focus-within:border-gray-700 transition-all duration-300">
        <Search className="text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder="Search services..."
          onChange={(e) => onSearchInput(e.target.value)}
          className="ml-2 w-full bg-transparent text-gray-900 placeholder-gray-500 focus:outline-none"
        />
      </div>
    </div>
  );
}

export default SearchSection;
