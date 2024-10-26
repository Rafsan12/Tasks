import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "./components/Sidebar";
import Pages from "./Pages";

export default function App() {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <Pages />
      <ToastContainer />
    </div>
  );
}
