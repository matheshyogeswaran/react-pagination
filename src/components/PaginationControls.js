const PaginationControls = ({ page, noOfPages, onPageChange }) => {
  const goToPrev = () => {
    onPageChange((prev) => prev - 1);
  };
  const goToNext = () => {
    onPageChange((prev) => prev + 1);
  };
  return (
    <div>
      <button onClick={goToPrev} disabled={page === 0} className="page-number">
        {"<"} Prev
      </button>

      {[...Array(noOfPages).keys()].map((n) => (
        <button
          key={n}
          className={`page-number ${page === n ? "active" : ""}`}
          onClick={() => onPageChange(n)}
        >
          {n + 1}
        </button>
      ))}

      <button
        onClick={goToNext}
        disabled={page === noOfPages - 1}
        className="page-number"
      >
        Next {">"}
      </button>
    </div>
  );
};

export default PaginationControls;
