import React from 'react'
import Data from '../products.json'

const ShopCategory = ({ filterItem, setItem, menuItems, setProducts, selectedCategory }) => {


    return (
        <>
            <div className="widget-header">
                <h5 className="ms-2">
                    All Categories
                </h5>
            </div>
            <div>
                <button className={`m-2 ${selectedCategory === "All" ? "bg-warning" : ""}`} onClick={() => setProducts(Data)}>All</button>
                {
                    menuItems.map((val, i) => {
                        return (
                            <button className={`m-2 ${selectedCategory === val ? "bg-warning" : "" }`} key={i} 
                            onClick={() => filterItem(val)}>{val}</button>
                        )
                    })
                }
            </div>
        </>
    )
}

export default ShopCategory
