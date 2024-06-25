// BooksList.jsx
import React, { useState } from "react";
import useBooks from "../../hooks/useBooks";
import TableHeader from "./TableHeader";
import BooksTable from "./BooksTable";
import PaginationControl from "./PaginationControl";

function BooksList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const { filteredBooks, totalPages, handleAddBook } = useBooks(
    searchTerm,
    currentPage,
  );

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1);
  };

  return (
    <>
      <TableHeader
        value={searchTerm}
        onChange={handleSearch}
        onClick={handleAddBook}
      />
      <BooksTable books={filteredBooks} />
      <PaginationControl
        count={totalPages}
        page={currentPage}
        onPageChange={setCurrentPage}
      />
    </>
  );
}

export default BooksList;
