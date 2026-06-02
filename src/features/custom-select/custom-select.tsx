"use client";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type CustomSelectTypes = {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
};

export default function CustomSelect({
  options,
  value,
  onChange,
}: CustomSelectTypes) {
  const [internalValue, setInternalValue] = useState(options[0]);
  const selected = value ?? internalValue;

  const handleChange = (next: string) => {
    if (onChange) {
      onChange(next);
    } else {
      setInternalValue(next);
    }
  };

  return (
    <div className="w-full">
      <Listbox value={selected} onChange={handleChange}>
        <div className="relative w-full">
          <Listbox.Button className="w-full bg-white border border-[#DFE1E3] rounded-lg px-4 py-3 flex justify-between items-center text-[#383838] text-sm font-medium">
            {selected}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-10">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active, selected: isSelected }) =>
                  `cursor-pointer px-4 py-2 text-sm ${
                    active ? "bg-pink-200 text-pink-900" : "text-gray-800"
                  } ${isSelected ? "font-semibold" : ""}`
                }
              >
                {({ selected: isSelected }) => (
                  <div className="flex items-center justify-between">
                    {option}
                    {isSelected}
                  </div>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </div>
      </Listbox>
    </div>
  );
}
