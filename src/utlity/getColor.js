export const getColor = (taskType) => {
  switch (taskType) {
    case "To-Do":
      return ["bg-indigo-600", "text-indigo-600"];
    case "On Progress":
      return ["bg-yellow-500", "text-yellow-500"];
    case "Done":
      return ["bg-teal-500", "text-teal-500"];
    case "Revise":
      return ["bg-rose-500", "text-rose-500"];
    default:
      return ["bg-indigo-600", "text-indigo-500"];
  }
};
