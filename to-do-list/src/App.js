
import './App.css';
import { useState } from "react";
import {Task} from "./Task"

function App() {
  const [todoList, setToDoList] = useState([]);
  const [newTask, setNewTask] = useState("");
 
  const handelChange = (event) => {
    setNewTask(event.target.value);

  };

  const addTask = () => {
    const task={
      id:todoList.length===0?1:todoList[todoList.length-1].id+1,
      taskName:newTask,
      completed:false,
    }

    setToDoList([...todoList,task])

  };
  const completeTask=(id)=>{
    setToDoList(todoList.map((task)=>{
      if(task.id===id){
        return{...task,completed:true};
      }
        else{
          return task;
        }
      })
  );
  };

  const deleteTask = (id) => {
    const newToDoList = todoList.filter((task) => {
      if (task.id === id) {
        return false

      }
      else {
        return true;
      }

    });
    setToDoList(newToDoList);
  }
  return (
    <div className="App">
      <div className="addTask">
        <form onSubmit={(e)=> e.preventDefault()}>
        <input onChange={handelChange} />
        <button class="button" onClick={addTask}>Addd Task</button>
        </form>

      </div>
      <div className="list">
        {
          todoList.map((task) => {
            return (
            <Task
             taskName={task.taskName}
              id={task.id}
              completed={task.completed}
                deleteTask={deleteTask}
                completeTask={completeTask}
                 /> 
            );
            })}

      </div>
    </div>
  );
}


export default App;
