import React from 'react'

function Categories({ value, onClickCategory, categoriesItems }) {
    return (
        <div className="categories">
            <ul>
                {
                    categoriesItems.map((item, i) => <li onClick={() => onClickCategory(i)} className={value === i ? "active" : ""} key={i}>{item}</li>)
                }
            </ul>
        </div >
    )
}

export default Categories