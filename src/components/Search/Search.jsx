import React from 'react'

import styles from './Serach.module.scss'
import { BsSearch } from "react-icons/bs";
import { RxCross2 } from "react-icons/rx";

import { SearchContext } from '../../App';

function Search() {
    const { searchValue, setSearchValue } = React.useContext(SearchContext);
    return (
        <label className={styles.label}>
            <BsSearch className={styles.crossSearch} />
            <input className={styles.input} type="text" placeholder='Поиск' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} />
            {searchValue && (<RxCross2 className={styles.crossIcon} onClick={() => setSearchValue("")} />)}
        </label>
    )
}

export default Search