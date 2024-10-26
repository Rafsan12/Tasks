import Header from "./components/Header";
import ProjectBoard from "./components/ProjectBoard";
import TasksProvider from "./context/TaskContext";

export default function Pages() {
  //   const showToast = () => toast("Hello world!");
  return (
    <main className="flex-1 overflow-y-auto overflow-x-hidden">
      <TasksProvider>
        <Header />
        <ProjectBoard />
      </TasksProvider>
    </main>
  );
}
