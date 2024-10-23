import Done_Task from "./Done_Task";
import OnProgress_Task from "./OnProgress_Task";
import Revised_Task from "./Revised_Task";
import Task_Header from "./Task_Header";
import Todo_Task from "./Todo_Task";

export default function Task({ tasks }) {
  return (
    <div className="p-6">
      <Task_Header />
      <div className="-mx-2 mb-6 flex flex-wrap">
        <Todo_Task tasks={tasks} />
        <OnProgress_Task />
        <Done_Task />
        <Revised_Task />
      </div>
    </div>
  );
}
