export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "ADD":
      return [...tasks, action.payload];
    case "UPDATE":
      return tasks.map((task) =>
        task.id === action.payload.id ? action.payload : task
      );
    case "DELETE":
      return tasks.filter((task) => task.id !== action.payload);
  }
};
