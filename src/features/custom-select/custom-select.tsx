"use client";
import { Listbox } from "@headlessui/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

type CustomSelectTypes = {
  options: string[];
};

export default function CustomSelect({
  options,
}: CustomSelectTypes) {
  const [selected, setSelected] = useState(options[0]);

  return (
    <div>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative">
          <Listbox.Button className="w-full bg-white border border-gray-300 rounded px-4 py-2 flex justify-between items-center">
            {selected}
            <ChevronDown className="w-4 h-4 ml-2" />
          </Listbox.Button>
          <Listbox.Options className="absolute mt-1 w-full bg-white border border-gray-200 rounded shadow-lg z-10">
            {options.map((option, idx) => (
              <Listbox.Option
                key={idx}а
                value={option}
                className={({ active, selected }) =>
                  `cursor-pointer px-4 py-2 text-sm ${
                    active ? "bg-pink-200 text-pink-900" : "text-gray-800"
                  } ${selected ? "font-semibold" : ""}`
                }
              >
                {({ selected }) => (
                  <div className="flex items-center justify-between">
                    {option}
                    {selected}
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
