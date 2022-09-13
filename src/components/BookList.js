import React from 'react';
import { useTheme } from '../hooks/useThemeContext';
import { useBook } from '../hooks/useBookContext';
import BookDetails from './BookDetails';

const BookList = () => {
  const { isLightTheme, light, dark } = useTheme();
  const { books } = useBook();
  const theme = isLightTheme ? light : dark;

  return books.length ? (
    <div className='book-list' style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
            {books.map(book => (
              <BookDetails book={book} key={book.id}/>
            ))}
        </ul>
    </div>
  ) : (
    <div className='empty' style={{ color: theme.syntax, background: theme.bg, padding: '10px' }}> No books to read</div>
  )
}

export default BookList