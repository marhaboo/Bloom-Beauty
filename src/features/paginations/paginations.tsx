import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  const totalPages = 7;
  const [currentPage, setCurrentPage] = useState(1);


  const generatePages = () => {
    const pages: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (
        i === 1 ||
        i === totalPages ||
        Math.abs(currentPage - i) <= 1
      ) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <div className="flex justify-center items-center gap-2 pt-6">
      <button
        className="bg-[#E7E3EC] p-2 rounded-full text-white opacity-65 disabled:opacity-40"
        onClick={handlePrev}
        disabled={currentPage === 1}
      >
        <ChevronLeft size={20} />
      </button>

    
      {generatePages().map((page, idx) => (
        <button
          key={idx}
          className={`px-3 py-1 text-sm font-medium rounded ${
            page === currentPage
              ? "underline font-bold text-black"
              : typeof page === "number"
              ? "text-gray-600 hover:underline"
              : "cursor-default text-gray-400"
          }`}
          onClick={() => typeof page === "number" && setCurrentPage(page)}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}

     
      <button
        className="bg-[#E7E3EC] p-2 rounded-full text-white opacity-65 disabled:opacity-40"
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
