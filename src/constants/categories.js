import {
  UserRound,
  BriefcaseBusiness,
  Book,
  MessageCircleHeart,
  House,
  HeartPulse,
} from "lucide-react";

export const CATEGORIES = [
  {
    value: "personal",
    label: "Personal",
    icon: UserRound,
    className: "bg-sky-500 text-white dark:bg-sky-600",
  },
  {
    value: "trabajo",
    label: "Trabajo",
    icon: BriefcaseBusiness,
    className: "bg-lime-500 text-white dark:bg-lime-600",
  },
  {
    value: "estudios",
    label: "Estudios",
    icon: Book,
    className: "bg-red-500 text-white dark:bg-red-600",
  },
  {
    value: "hogar",
    label: "Hogar",
    icon: House,
    className: "bg-pink-500 text-white dark:bg-pink-600",
  },
  {
    value: "salud",
    label: "Salud",
    icon: HeartPulse,
    className: "bg-teal-500 text-white dark:bg-teal-600",
  },
  {
    value: "otros",
    label: "Otros",
    icon: MessageCircleHeart,
    className: "bg-indigo-500 text-white dark:bg-indigo-600",
  },
];
