"use client";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type CustomSelectTypes = {
  options: string[];
  value?: string;
  onChange?: (value: string) => void;
  ariaLabel?: string;
};

export default function CustomSelect({
  options,
  value,
  onChange,
  ariaLabel,
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
          <Listbox.Button
            aria-label={ariaLabel}
            className="flex w-full items-center justify-between rounded-full border border-[#e9e3dc] bg-white/70 px-4 py-2.5 text-sm font-medium text-[#29352f] backdrop-blur-md transition hover:border-[#c8b7a3]"
          >
            {selected}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Listbox.Button>
          <Listbox.Options className="absolute z-10 mt-2 w-full rounded-2xl border border-[#e9e3dc] bg-[#fffdf9] py-1 shadow-xl">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}
                value={option}
                className={({ active, selected: isSelected }) =>
                  `cursor-pointer px-4 py-2 text-sm ${
                    active ? "bg-[#f5e8e4] text-[#20372e]" : "text-[#526258]"
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
