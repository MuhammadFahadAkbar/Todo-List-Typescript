import { ChangeEvent, FormEvent } from "react";
import { useState } from "react";

import { listItemsType } from "../App";

interface FormProps {
  listItems: listItemsType[];
  setListItems: (listItems: listItemsType[]) => void;
}

const Form: React.FC<FormProps> = ({ listItems, setListItems }) => {
  const [itemHeading, setItemHeading] = useState<string>("");
  const [itemDescription, setItemDescription] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const listEntry = { itemHeading, itemDescription, isCompleted: false };
    setListItems([...listItems, listEntry]);
    setItemHeading("");
    setItemDescription("");
  };

  const handleHeadingChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemHeading(e.target.value);
  };

  const handleDescriptionChange = (e: ChangeEvent<HTMLInputElement>) => {
    setItemDescription(e.target.value);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="input"
        value={itemHeading}
        onChange={handleHeadingChange}
        placeholder="Add a heading"
        required
      />
      <br />
      <input
        type="input"
        value={itemDescription}
        onChange={handleDescriptionChange}
        placeholder="Add a description"
        required
      />
      <br />
      <button type="submit">Create a new todo...</button>
    </form>
  );
};

export default Form;
