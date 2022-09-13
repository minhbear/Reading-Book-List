import React from 'react';
import { useTheme } from '../hooks/useThemeContext';
import { useBook } from '../hooks/useBookContext';

const Navbar = () => {
  const { isLightTheme, light, dark } = useTheme();
  const { books } = useBook();

  const theme = isLightTheme ? light : dark;

  return (
    <nav style={{ background: theme.ui, color: theme.syntax }}>
        <h1>Reading List</h1>
        <p>Currently you have { books.length } books</p>
    </nav>
  )
}

export default Navbar