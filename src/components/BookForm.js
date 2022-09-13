import React, { useState } from 'react';
import { useBook } from '../hooks/useBookContext';
import { useTheme } from '../hooks/useThemeContext';

const BookForm = () => {
    const { dispatch } = useBook();
    const { isLightTheme, light, dark } = useTheme();
    const theme = isLightTheme ? light : dark;

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');

    const handleSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: 'ADD_BOOK', book: {
                title,
                author
            }
        });
        setTitle('');
        setAuthor('');
    }

    return (
        <form onSubmit={handleSubmit} style={{ background: theme.bg }}>
            <input type="text" placeholder='book title' value={title}
                onChange={(evt) => setTitle(evt.target.value)} required />
            <input type="text" placeholder='book author' value={author}
                onChange={(evt) => setAuthor(evt.target.value)} required />
            <input type="submit" value="Add book" style={{ background: theme.ui, borderRadius: '4px' }}/>
        </form>
    )
}

export default BookForm