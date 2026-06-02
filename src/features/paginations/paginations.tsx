import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) => {
  const generatePages = () => {
    const pages: (number | string)[] = [];

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || Math.abs(currentPage - i) <= 1) {
        pages.push(i);
      } else if (pages[pages.length - 1] !== "...") {
        pages.push("...");
      }
    }

    return pages;
  };

  const handlePrev = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  if (totalPages <= 1) {
    return null;
  }

  return (
    <div className="flex flex-wrap justify-center items-center gap-2 pt-6 px-2">
      <button
        type="button"
        className="bg-[#E7E3EC] p-2 rounded-full text-white opacity-65 disabled:opacity-40"
        onClick={handlePrev}
        disabled={currentPage === 1}
        aria-label="Previous page"
      >
        <ChevronLeft size={20} />
      </button>

      {generatePages().map((page, idx) => (
        <button
          type="button"
          key={idx}
          className={`px-3 py-1 text-sm font-medium rounded ${
            page === currentPage
              ? "underline font-bold text-black"
              : typeof page === "number"
              ? "text-gray-600 hover:underline"
              : "cursor-default text-gray-400"
          }`}
          onClick={() => typeof page === "number" && onPageChange(page)}
          disabled={typeof page !== "number"}
        >
          {page}
        </button>
      ))}

      <button
        type="button"
        className="bg-[#E7E3EC] p-2 rounded-full text-white opacity-65 disabled:opacity-40"
        onClick={handleNext}
        disabled={currentPage === totalPages}
        aria-label="Next page"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

export default Pagination;
