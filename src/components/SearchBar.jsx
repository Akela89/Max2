import React from "react";
import classes from './SearchBar.module.css'


const Search = ( ) => {
    return (
        <div className={classes.searchBarWrapper}>
            <input 
                className={classes.inputBorder} 
                type="text" 
                placeholder ="Введите текст!" />
        </div>
    )
}
export default Search;
