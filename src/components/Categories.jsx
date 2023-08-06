import React from 'react'

function Categories() {
    const categoriesItems = ["Все", "Мясные", "Вегетарианская", "Гриль", "Острые", "Закрытые"];
    const [catActive, setCatActive] = React.useState(0)
    return (
        <div className="categories">
            <ul>
                {
                    categoriesItems.map((item, i) => <li li onClick={() => setCatActive(i)} className={catActive === i ? "active" : ""} key={i}>{item}</li>)
                }
            </ul>
        </div >
    )
}

export default Categories