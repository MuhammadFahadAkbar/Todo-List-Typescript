import ListItem from "./ListItem";
import { item } from "../App";

import { listItemsType } from "../App";

interface ListItemsProps {
  listItems: listItemsType[];
  setListItems: (updatedList: listItemsType[]) => void;
}

const List: React.FC<ListItemsProps> = ({ listItems, setListItems }) => {
  const handleComplete = (clickedItem: item) => {
    const updatedList = listItems.map((item) => {
      if (item === clickedItem) {
        return {
          ...item,
          isCompleted: true,
        };
      }
      return item;
    });
    setListItems(updatedList);
  };

  const handleDelete = (clickedItem: item) => {
    const updatedList = listItems.filter((item) => {
      return item !== clickedItem;
    });
    setListItems(updatedList);
  };

  return (
    <>
      <ul>
        {listItems.map((item) => {
          return (
            <li>
              <div>
                <ListItem
                  item={item}
                  handleComplete={handleComplete}
                  handleDelete={handleDelete}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p>{listItems.length} items left</p>
        <div style={{ display: "flex", gap: "10px" }}>
          <p>All</p>
          <p>Active</p>
          <p>Completed</p>
        </div>
      </div>
    </>
  );
};

export default List;
