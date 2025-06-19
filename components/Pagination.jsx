import getPaginationPages from "@utils/getPaginationPages";

const Pagination = ({ page, setPage, totalPages }) => {
  const pages = getPaginationPages(page, totalPages);

  return (
    <div className="flex justify-center gap-2 mb-6 flex-wrap">
      <div className="flex justify-center gap-2 mt-6 flex-wrap">
        <button
          onClick={() => setPage((p) => Math.max(p - 1, 1))}
          disabled={page === 1}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Prev
        </button>

        {pages.map((pg, i) =>
          pg === "..." ? (
            <span key={`ellipsis-${i}`} className="px-2 py-1 text-gray-500">
              …
            </span>
          ) : (
            <button
              key={`page-${pg}`}
              onClick={() => setPage(pg)}
              className={`px-3 py-1 rounded ${
                page === pg ? "bg-black text-white" : "bg-gray-100"
              }`}
            >
              {pg}
            </button>
          )
        )}

        <button
          onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
          disabled={page === totalPages}
          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Pagination;
