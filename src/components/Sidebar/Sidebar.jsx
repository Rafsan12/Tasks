import Logo from "../../assets/lws-logo-en.svg";
import {
  CalendarSvg,
  ContactSvg,
  DashboardSvg,
  KanbanSvg,
  MessagesSvg,
  ProjectsSvg,
  SettingsSvg,
} from "../../utlity/Svg";

export default function Sidebar() {
  return (
    <>
      <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
        <div className="mb-8 flex items-center">
          <div className="flex items-center justify-center rounded-full text-xl font-bold">
            <img src={Logo} className="mx-auto h-10 text-center" />
          </div>
        </div>
        <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
          + New Project
        </button>
        <nav>
          <ul className="space-y-4">
            <li>
              <a href="#" className="flex items-center">
                <DashboardSvg />
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <ProjectsSvg />
                Projects
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <ContactSvg />
                Contact
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <KanbanSvg />
                Kanban
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <CalendarSvg />
                Calendar
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <MessagesSvg />
                Messages
              </a>
            </li>
            <li>
              <a href="#" className="flex items-center">
                <SettingsSvg />
                Settings
              </a>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
