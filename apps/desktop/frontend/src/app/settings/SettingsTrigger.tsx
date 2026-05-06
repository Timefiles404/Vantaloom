import { Gear } from "nucleo-glass-icons/react";

type SettingsTriggerProps = {
  onOpen: () => void;
};

export function SettingsTrigger({ onOpen }: SettingsTriggerProps) {
  return (
    <button className="settings-trigger" type="button" aria-label="Open settings" onClick={onOpen}>
      <Gear size={28} stopColor1="#f7f7f7" stopColor2="#8d8d8d" aria-hidden="true" />
    </button>
  );
}
