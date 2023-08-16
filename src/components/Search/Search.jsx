import React from 'react';
import debounce from 'lodash.debounce';

import styles from './Serach.module.scss'
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";
import { SearchContext } from '../../App';

function Search() {
    const { searchValue, setSearchValue } = React.useContext(SearchContext);
    const [value, setValue] = React.useState('');
    const inputRef = React.useRef();
    const clearSearch = () => {
        setSearchValue("");
        inputRef.current.focus();
    }

    const updateSearchValue = React.useCallback(
        debounce((str) => {
            setSearchValue(str);
        }, 250), []
    )
    const onChangeInput = (e) => {
        setValue(e.target.value)
        updateSearchValue(e.target.value)
    }
    return (
        <label className={styles.label}>
            <BsSearch className={styles.crossSearch} />
            <input ref={inputRef} className={styles.input} id='inputSearch' type="text" placeholder='Поиск' value={value} onChange={(e) => onChangeInput(e)} />
            {searchValue && (<RxCross2 className={styles.crossIcon} onClick={clearSearch} />)}
        </label>
    )
}

export default Search