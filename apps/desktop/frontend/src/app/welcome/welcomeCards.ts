import { CodeEditor, Folder, Users, type IconComponent } from "nucleo-glass-icons/react";

export type WelcomeCard = {
  label: "Recall" | "Weave" | "Ensemble";
  intent: string;
  rotation: number;
  Icon: IconComponent;
};

export const welcomeCards: WelcomeCard[] = [
  {
    label: "Recall",
    intent: "打开最近项目工程",
    rotation: -15,
    Icon: Folder
  },
  {
    label: "Weave",
    intent: "新建编程项目工程",
    rotation: 5,
    Icon: CodeEditor
  },
  {
    label: "Ensemble",
    intent: "合作日常工作",
    rotation: 25,
    Icon: Users
  }
];
