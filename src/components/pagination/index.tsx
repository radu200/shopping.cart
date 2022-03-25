import React, { useState, useEffect } from "react";
import { generatePages, computePageCount } from './helpers';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';
import { uniqueId } from '../../utils/generate';

interface IProps {
  itemsCount: number,
  itemsPerPage: number,
  currentPage: number,
  handleChangePage: (page: number) => void;
}

interface IState {
  pageRange: Array<number>;
  pageCount: number;
}


export default function Pagination({
  itemsCount,
  itemsPerPage,
  currentPage,
  handleChangePage
}: IProps) {

  const [state, setState] = useState<IState>({
    pageRange: [],
    pageCount: 0
  });

  useEffect(() => {
    const pageCount = computePageCount(itemsCount, itemsPerPage);
    const pageRange = generatePages(currentPage, pageCount);
    setState(state => ({ ...state, pageRange, pageCount }));
  }, [itemsCount, itemsPerPage, currentPage]);

  if (!itemsCount) {
    return null;
  }

  const isNextBtnDisabled = currentPage >= state.pageCount;
  const isPrevBtnDisabled = currentPage <= 1;

  return (
    <div className="py-3 mb-2 mt-2">
      <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
        <button
          disabled={isPrevBtnDisabled} onClick={() => handleChangePage(currentPage - 1)}
          className={`${isPrevBtnDisabled && "border-gray-100 hover:bg-gray-0 text-gray-300"} relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
        >
          <span className="sr-only">Previous</span>
          <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
        </button>
        {
          state.pageRange.map((page) => (
            <button
              key={uniqueId()}
              onClick={() => handleChangePage(page)}
              aria-current="page"
              className={`${currentPage === page && "bg-indigo-50"} z-10 bg-blue text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium hover:bg-gray-50`}
            >
              {page === 0 ? "..." : page}
            </button>
          ))
        }
        <button
          disabled={isNextBtnDisabled} onClick={() => handleChangePage(currentPage + 1)}
          className={`${isNextBtnDisabled && "border-gray-100 hover:bg-gray-0 text-gray-300"} relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50`}
        >
          <span className="sr-only">Next</span>
          <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
        </button>
      </nav>

    </div>
  );
}