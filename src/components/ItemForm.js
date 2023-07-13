import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [itemName, setItemName] = useState(""); // State for item name
  const [itemCategory, setItemCategory] = useState("Produce"); // State for item category

  function handleName(event) {
    setItemName(event.target.value);
  }

  function handleCategory(event) {
    setItemCategory(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    // Create a new item object
    const newItem = {
      id: uuid(),
      name: itemName,
      category: itemCategory,
    };

    // Pass the new item to the onItemFormSubmit callback prop
    onItemFormSubmit(newItem);

    // Reset the input values
    setItemName("");
    setItemCategory("Produce");
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" value={itemName} onChange={handleName} />
      </label>

      <label>
        Category: 
        <select name="category" value={itemCategory} onChange={handleCategory}>
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
