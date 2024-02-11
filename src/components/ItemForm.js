import React from "react";


function ItemForm({itemName, itemCategory, handleChange, onItemFormSubmit}) {

  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="itemName" value={itemName} onChange={handleChange}/>
      </label>

      <label>
        Category:
        <select name="itemCategory" value={itemCategory} onChange={handleChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
