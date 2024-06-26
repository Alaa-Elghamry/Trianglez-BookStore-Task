// features/books/booksSlice.js
import { createSlice } from "@reduxjs/toolkit";
import logo from "../../assets/images/logo.jpg";

const booksSlice = createSlice({
  name: "books",
  initialState: [
    {
      id: 1,
      title: "Book 1",
      category: "Fiction",
      author: "Author 1",
      isbn: "111111",
      version: "1.0",
      coverPhoto: logo,
    },
    {
      id: 2,
      title: "Book 2",
      category: "Non-Fiction",
      author: "Author 2",
      isbn: "222222",
      version: "2.0",
      coverPhoto: logo,
    },
    {
      id: 3,
      title: "Book 3",
      category: "Science",
      author: "Author 3",
      isbn: "333333",
      version: "1.1",
      coverPhoto: logo,
    },
    {
      id: 4,
      title: "Book 4",
      category: "Fiction",
      author: "Author 1",
      isbn: "111111",
      version: "1.0",
      coverPhoto: logo,
    },
    {
      id: 5,
      title: "Book 5",
      category: "Non-Fiction",
      author: "Author 2",
      isbn: "222222",
      version: "2.0",
      coverPhoto: logo,
    },
    {
      id: 6,
      title: "Book 6",
      category: "Science",
      author: "Author 3",
      isbn: "333333",
      version: "1.1",
      coverPhoto: logo,
    },
    {
      id: 7,
      title: "Book 7",
      category: "Fiction",
      author: "Author 1",
      isbn: "111111",
      version: "1.0",
      coverPhoto: logo,
    },
    {
      id: 8,
      title: "Book 8",
      category: "Non-Fiction",
      author: "Author 2",
      isbn: "222222",
      version: "2.0",
      coverPhoto: logo,
    },
    {
      id: 9,
      title: "Book 9",
      category: "Science",
      author: "Author 3",
      isbn: "333333",
      version: "1.1",
      coverPhoto: logo,
    },
    {
      id: 10,
      title: "Book 10",
      category: "Science",
      author: "Author 3",
      isbn: "333333",
      version: "1.1",
      coverPhoto: logo,
    },
  ],
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
    updateBook: (state, action) => {
      const index = state.findIndex((book) => book.id === action.payload.id);
      state[index] = action.payload;
    },
  },
});

export const { addBook, deleteBook, updateBook } = booksSlice.actions;
export default booksSlice.reducer;
