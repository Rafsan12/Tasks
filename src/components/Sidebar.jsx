
import {
  CalendarSvg,
  ContactSvg,
  DashboardSvg,
  KanbanSvg,
  MessagesSvg,
  ProjectsSvg,
  SettingsSvg,
} from "../utlity/Svg";

export default function Sidebar() {
  const navLinks = [
    { label: "Dashboard", svg: DashboardSvg },
    { label: "Projects", svg: ProjectsSvg },
    { label: "Contact", svg: ContactSvg },
    { label: "Kanban", svg: KanbanSvg },
    { label: "Calendar", svg: CalendarSvg },
    { label: "Messages", svg: MessagesSvg },
    { label: "Settings", svg: SettingsSvg },
  ];

  return (
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
          {navLinks.map((link) => {
            const Svg = link.svg;
            return (
              <li key={link}>
                <a href="#" className="flex items-center">
                  <Svg />
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
