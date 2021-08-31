import React from 'react';
import './search-box.style.css';

export const Searchbox = ({ placeholder, handleChange }) => {
    return <input 
        className = 'search'
        type="search" 
        placeholder={placeholder} 
        onChange = { handleChange }/>
}