import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useMemo } from "react";

export default function useBooks(searchTerm, currentPage) {
  const navigate = useNavigate();
  const books = useSelector((state) => state.books);

  const booksPerPage = 8;

  const filteredBooks = useMemo(
    () =>
      books.filter(
        (book) =>
          book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          book.author.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [books, searchTerm],
  );

  const totalPages = useMemo(
    () => Math.ceil(filteredBooks.length / booksPerPage),
    [filteredBooks, booksPerPage],
  );

  const displayedBooks = useMemo(
    () =>
      filteredBooks.slice(
        (currentPage - 1) * booksPerPage,
        currentPage * booksPerPage,
      ),
    [filteredBooks, currentPage, booksPerPage],
  );

  const handleAddBook = () => {
    navigate("/add-book");
  };

  return { filteredBooks: displayedBooks, totalPages, handleAddBook };
}
