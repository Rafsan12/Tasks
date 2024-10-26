import {
  CalendarSvg,
  ContactSvg,
  DashboardSvg,
  KanbanSvg,
  MessagesSvg,
  ProjectsSvg,
  SettingsSvg,
} from "./utlity/Svg";

export const navLinks = [
  { label: "Dashboard", svg: DashboardSvg },
  { label: "Projects", svg: ProjectsSvg },
  { label: "Contact", svg: ContactSvg },
  { label: "Kanban", svg: KanbanSvg },
  { label: "Calendar", svg: CalendarSvg },
  { label: "Messages", svg: MessagesSvg },
  { label: "Settings", svg: SettingsSvg },
];

export const taskCategories = ["To-Do", "On Progress", "Done", "Revise"];
