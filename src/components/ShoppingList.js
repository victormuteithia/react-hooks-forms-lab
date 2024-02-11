import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterBy, setFilterBy] = useState("")
  const [formData, setFormData] = useState({
    itemName: "",
    itemCategory: "Produce"
  })
  const [submittedData, setSubmittedData] = useState(items)
  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  function handleChange(event){
    setFilterBy(event.target.value)
  }

  const itemsToDisplayBySearch = submittedData.filter((item) => {
    if(filterBy === ""){
      return true
    }else{
      return item.name.toLowerCase().includes(filterBy.toLowerCase()) 
    }
  })

  function handleChangeItemForm(event){
    const name = event.target.name
    const value = event.target.value
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function onItemFormSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(),
      name: formData.itemName,
      category: formData.itemCategory
    }
    const dataArray = [...submittedData, newItem]
    setSubmittedData(dataArray)
  }


  return (
    <div className="ShoppingList">
      <ItemForm
      itemName={formData.itemName}
      itemCategory={formData.itemCategory}
      handleChange={handleChangeItemForm}
      onItemFormSubmit={onItemFormSubmit}
      />
      <Filter onCategoryChange={handleCategoryChange} search={filterBy} onSearchChange={handleChange} />
      <ul className="Items">
        {itemsToDisplayBySearch.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
