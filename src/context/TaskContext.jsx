import { createContext, useContext, useReducer, useState } from "react";
import { taskReducer } from "../reducer/taskReducer";

const TasksContext = createContext();
const QueryContext = createContext();

const TasksProvider = ({ children }) => {
  const initialState = []; // Define your initial state for tasks
  const [tasks, dispatch] = useReducer(taskReducer, initialState);
  const [query, setQuery] = useState("");

  return (
    <TasksContext.Provider value={{ tasks, dispatch }}>
      <QueryContext.Provider value={{ query, setQuery }}>
        {children}
      </QueryContext.Provider>
    </TasksContext.Provider>
  );
};

export default TasksProvider;

export const useTasks = () => {
  return useContext(TasksContext);
};

export const useQuery = () => {
  return useContext(QueryContext);
};
