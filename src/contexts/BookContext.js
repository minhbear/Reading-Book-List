import { createContext, useState, useReducer, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';

export const BookContext = createContext();

const bookReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_BOOK':
            return [...state, {
                title: action.book.title,
                author: action.book.author,
                id: uuidv4()
            }]
        case 'REMOVE_BOOK':
            return state.filter(book => book.id != action.id)
    }
}

const BookContextProvider = ({ children }) => {
    const [books, dispatch] = useReducer(bookReducer, [], function () {
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    // const [ books, setBooks ] = useState([
    //     {title: "The way of kings", author: 'Patrick', id: 1},
    //     {title: "Name of The Winds", author: 'Tri Phuoc', id: 2},
    //     {title: "The final empire", author: 'Nguyen Pham', id: 3},
    //     {title: "The hero of Viet Nam", author: 'Minh Nguyen', id: 4},
    // ])

    // const addBook = (title, author) => {
    //     setBooks([...books, {title, author, id: uuidv4()}])
    // }

    // const removeBook = (id) => {
    //     setBooks(books.filter(book => book.id != id));
    // }

    useEffect(() => {
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])

    return (
        <BookContext.Provider value={{ books, dispatch }}>
            {children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;