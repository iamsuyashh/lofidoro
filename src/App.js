import './App.css';
import Timer from "./pomo_comps/Timer";
import Settings from "./pomo_comps/Settings";
import {useState} from "react";
import SettingsContext from "./pomo_comps/SettingsContext";
import TodoInput from './todo_comps/todoInput';
import Todolist from './todo_comps/TodoList';

function App() {
  // todo list Functions
  const [listTodo,setListTodo]=useState([]);
  let addList = (inputText)=>{
    if(inputText!=='')
      setListTodo([...listTodo,inputText]);
    console.log(listTodo);
  }
  const deleteListItem = (key)=>{
    let newListTodo = [...listTodo];
    newListTodo.splice(key,1)
    setListTodo([...newListTodo])
  }


  // timer funtions
  const [showSettings, setShowSettings] = useState(false);
  const [workMinutes, setWorkMinutes] = useState(45);
  const [breakMinutes, setBreakMinutes] = useState(15);

  return (
    <main>
      <SettingsContext.Provider value={{
        showSettings,
        setShowSettings,
        workMinutes,
        breakMinutes,
        setWorkMinutes,
        setBreakMinutes,
      }}>
        {showSettings ? <Settings /> : <Timer />}
      </SettingsContext.Provider>
      <TodoInput addList={addList}/>
      {listTodo.map((listItem,i)=>{
          return (
            <Todolist key={i} index={i} item={listItem} deleteItem={deleteListItem}/>
          )
      })}
    </main>
  );
}

export default App;
