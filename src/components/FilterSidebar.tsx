import React, { useState } from "react";
import { Checkbox } from "./ui/checkbox";
import { Label } from "./ui/label";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FilterSidebarProps {
  onFilterChange?: (categories: string[]) => void;
}

const FilterSidebar = ({ onFilterChange = () => {} }: FilterSidebarProps) => {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    rating: false,
  });

  const categories = [
    { id: "kitchen", label: "Kitchen" },
    { id: "home", label: "Home" },
    { id: "outdoor", label: "Outdoor" },
    { id: "apparel", label: "Apparel" },
  ];

  const toggleCategory = (category: string) => {
    setSelectedCategories((prev) => {
      const newCategories = prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category];

      onFilterChange(newCategories);
      return newCategories;
    });
  };

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    onFilterChange([]);
  };

  return (
    <div className="w-full max-w-[250px] h-full bg-background border-r p-4 flex flex-col">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>

      {/* Categories Section */}
      <div className="mb-6">
        <div
          className="flex justify-between items-center cursor-pointer mb-2"
          onClick={() => toggleSection("categories")}
        >
          <h3 className="text-lg font-medium">Categories</h3>
          {expandedSections.categories ? (
            <ChevronUp size={18} />
          ) : (
            <ChevronDown size={18} />
          )}
        </div>

        {expandedSections.categories && (
          <div className="space-y-2">
            {categories.map((category) => (
              <div key={category.id} className="flex items-center space-x-2">
                <Checkbox
                  id={category.id}
                  checked={selectedCategories.includes(category.id)}
                  onCheckedChange={() => toggleCategory(category.id)}
                />
                <Label htmlFor={category.id} className="cursor-pointer">
                  {category.label}
                </Label>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
