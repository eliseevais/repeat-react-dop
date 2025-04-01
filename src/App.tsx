import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistType = { id: string, title: string }
type TasksStateType = {
  [key: string]: {
    data: TaskType[]
    filter: FilterValuesType
  }
}

function App() {
  // let todolistID1 = v1();
  // let todolistID2 = v1();
  //
  // let [todolists, setTodolists] = useState<Array<TodolistsType>>([
  //     {id: todolistID1, title: 'What to learn', filter: 'all'}, //0
  //      {id: todolistID2, title: 'What to buy', filter: 'all'},  //1
  // ])
  //
  // let [tasks, setTasks] = useState({
  //     [todolistID1]: [
  //         {id: v1(), title: "HTML&CSS", isDone: true},
  //         {id: v1(), title: "JS", isDone: true},
  //         {id: v1(), title: "ReactJS", isDone: false},
  //         {id: v1(), title: "Rest API", isDone: false},
  //         {id: v1(), title: "GraphQL", isDone: false},
  //     ],
  //     [todolistID2]: [
  //         {id: v1(), title: "HTML&CSS2", isDone: true},
  //         {id: v1(), title: "JS2", isDone: true},
  //         {id: v1(), title: "ReactJS2", isDone: false},
  //         {id: v1(), title: "Rest API2", isDone: false},
  //         {id: v1(), title: "GraphQL2", isDone: false},
  //     ]
  // });

  let todolistId1 = v1();
  let todolistId2 = v1();

  let [todolists, setTodolists] = useState<Array<TodolistType>>([
    {id: todolistId1, title: "What to learn"},
    {id: todolistId2, title: "What to buy"}
  ])

  let [tasks, setTasks] = useState<TasksStateType>({
    [todolistId1]: {
      data: [
        {id: v1(), title: "HTML&CSS1111", isDone: true},
        {id: v1(), title: "JS1111", isDone: true}
      ],
      filter: "all"
    },
    [todolistId2]: {
      data: [
        {id: v1(), title: "HTML&CSS22222", isDone: true},
        {id: v1(), title: "JS2222", isDone: true}
      ],
      filter: "all"
    }
  });


  const removeTodolist = (todolistId: string) => {
    setTodolists(todolists.filter(el => el.id !== todolistId))
    delete tasks[todolistId]
  }

  function removeTask(payload: { todolistId: string, taskId: string }) {
    const {todolistId, taskId} = payload
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: tasks[todolistId].data.filter((el: TaskType) => el.id !== taskId)
      }
    })
  }

  function addTask(payload: { todolistId: string, title: string }) {
    const {todolistId, title} = payload;
    let newTask = {id: v1(), title: title, isDone: false};
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: [newTask, ...tasks[todolistId].data]
      }
    })
  }

  function changeStatus(payload: { todolistId: string, taskId: string, isDone: boolean }) {
    const {todolistId, taskId, isDone} = payload
    setTasks({
      ...tasks,
      [todolistId]: {
        ...tasks[todolistId],
        data: tasks[todolistId].data.map((el: TaskType) => el.id === taskId ? {...el, isDone} : el)
      }
    })
  }

  function changeFilter(payload: { todolistId: string, value: FilterValuesType }) {
    const {todolistId, value} = payload
    setTasks({
      ...tasks,
      [todolistId]:
        {
          ...tasks[todolistId],
          filter: value
        }
    })
  }

  return (
    <div className="App">
      {todolists.map((el: TodolistType) => {
        return (
          <Todolist
            key={el.id}
            todolistId={el.id}
            title={el.title}
            tasks={tasks[el.id].data}
            removeTask={removeTask}
            changeFilter={changeFilter}
            addTask={addTask}
            changeTaskStatus={changeStatus}
            filter={tasks[el.id].filter}
            removeTodolist={removeTodolist}
          />
        )
      })}
    </div>
  );
}

export default App;
