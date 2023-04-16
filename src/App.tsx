import { useState, useEffect } from "react";
import Form from "./Components/Form";
import List from "./Components/List";

export interface item {
  itemHeading: string;
  itemDescription: string;
  isCompleted: boolean;
}

export interface listItemsType {
  itemHeading: string;
  itemDescription: string;
  isCompleted: boolean;
}

const App = () => {
  const [listItems, setListItems] = useState<item[]>(() => {
    const storedItems = sessionStorage.getItem("listItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });
  useEffect(() => {
    sessionStorage.setItem("listItems", JSON.stringify(listItems));
  }, [listItems]);

  return (
    <div className="App">
      <h1>TODO</h1>
      <Form listItems={listItems} setListItems={setListItems} />
      <List listItems={listItems} setListItems={setListItems} />
    </div>
  );
};

export default App;
