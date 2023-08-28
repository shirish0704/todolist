import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import ListCom from "./ListCom";

const ToDoList = () => {
  const [item, setItem] = useState();
  const [newItem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };
  const addItem = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem("");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input
            type="text"
            value={item}
            placeholder="Add Items"
            onChange={itemEvent}
          />
          <Button className="newBtn" onClick={addItem} disabled={!item}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newItem.map((val, index) => {
              return <ListCom key={index} text={val} />;
            })}
          </ol>
          <br />
        </div>
      </div>
    </>
  );
};

export default ToDoList;
