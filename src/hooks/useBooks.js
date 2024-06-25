// hooks/useBooks.js
import { useState, useEffect } from "react";

export default function useBooks(searchTerm, currentPage) {
  const [books] = useState([
    {
      id: 1,
      title: "Book 1",
      category: "Fiction",
      author: "Author 1",
      isbn: "111111",
      version: "1.0",
    },
    {
      id: 2,
      title: "Book 2",
      category: "Non-Fiction",
      author: "Author 2",
      isbn: "222222",
      version: "2.0",
    },
    {
      id: 3,
      title: "Book 3",
      category: "Science",
      author: "Author 3",
      isbn: "333333",
      version: "1.1",
    },
    {
      id: 4,
      title: "Book 4",
      category: "Fiction",
      author: "Author 1",
      isbn: "111111",
      version: "1.0",
    },
    {
      id: 5,
      title: "Book 5",
      category: "Non-Fiction",
      author: "Author 2",
      isbn: "222222",
      version: "2.0",
    },
    {
      id: 6,
      title: "Book 6",
      category: "Science",
      author: "Author 3",
      isbn: "333333",
      version: "1.1",
    },
    {
      id: 7,
      title: "Book 7",
      category: "Fiction",
      author: "Author 1",
      isbn: "111111",
      version: "1.0",
    },
    {
      id: 8,
      title: "Book 8",
      category: "Non-Fiction",
      author: "Author 2",
      isbn: "222222",
      version: "2.0",
    },
    {
      id: 9,
      title: "Book 9",
      category: "Science",
      author: "Author 3",
      isbn: "333333",
      version: "1.1",
    },
    {
      id: 10,
      title: "Book 10",
      category: "Science",
      author: "Author 3",
      isbn: "333333",
      version: "1.1",
    },
  ]);
  const booksPerPage = 8;

  useEffect(() => {
    // fetch books from an API or perform other side effects here
  }, []);

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  const totalPages = Math.ceil(filteredBooks.length / booksPerPage);
  const displayedBooks = filteredBooks.slice(
    (currentPage - 1) * booksPerPage,
    currentPage * booksPerPage,
  );

  const handleAddBook = () => {
    console.log("Add a new book");
    // Implement add book functionality
  };

  return { filteredBooks: displayedBooks, totalPages, handleAddBook };
}
