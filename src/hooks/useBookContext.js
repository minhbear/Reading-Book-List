import { useContext } from "react";
import { BookContext } from "../contexts/BookContext";

export const useBook = () => useContext(BookContext);