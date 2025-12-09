import {useState} from "react";
import TaskCard from "./styles/cards/TaskCard";
import {useLocalStorage} from "../hooks/useLocalStorage";

//

export default function InputComponent() {
  const [text, setText] = useState(" ");
  const [list, setList] = useLocalStorage("todolist", []);

  const handleAdd = () => {
    if (text.trim()) {
      // sets list to update with the new info added after the old
      setList((prev) => [...prev, {id: crypto.randomUUID(), para: text}]);
      setText("");
    }
  };

  return (
    <>
      <input
        value={text}
        type="text"
        onChange={(e) => setText(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleAdd();
          }
        }}
      />
      <button onClick={handleAdd}>add</button>

      {list.map((item) => (
        <TaskCard key={item.id} text={item.para} />
      ))}
    </>
  );
}
