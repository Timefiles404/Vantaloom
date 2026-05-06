import { useState } from "react";

import { SettingsDialog } from "./settings/SettingsDialog";
import { SettingsTrigger } from "./settings/SettingsTrigger";
import { UiverseGlassIconCards } from "./welcome/UiverseGlassIconCards";

export function AppShell() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <main className="app-shell" data-settings-open={isSettingsOpen}>
      <div className="welcome-layer" aria-hidden={isSettingsOpen}>
        <UiverseGlassIconCards />
      </div>
      <SettingsTrigger onOpen={() => setIsSettingsOpen(true)} />
      <SettingsDialog isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} />
    </main>
  );
}
