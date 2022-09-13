import React from 'react';
import { useTheme } from '../hooks/useThemeContext';
import { useBook } from '../hooks/useBookContext';

const BookDetails = ({ book }) => {
    const { isLightTheme, light, dark } = useTheme();
    const { dispatch } = useBook();
    const theme = isLightTheme ? light : dark;

    return (
        <li style={{ background: theme.ui }}
            onClick={() => dispatch({type: 'REMOVE_BOOK', id: book.id})}
        >
            <div className='title'>{book.title}</div>
            <div className='author'>{book.author}</div>
        </li>
    )
}

export default BookDetails