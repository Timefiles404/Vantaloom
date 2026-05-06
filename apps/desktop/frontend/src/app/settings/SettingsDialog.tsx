type SettingsDialogProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function SettingsDialog({ isOpen, onClose }: SettingsDialogProps) {
  return (
    <div className="settings-overlay" data-open={isOpen} aria-hidden={!isOpen}>
      <button className="settings-scrim" type="button" aria-label="Close settings" onClick={onClose} tabIndex={-1} />
      <section className="settings-panel" role="dialog" aria-modal="true" aria-label="Settings" tabIndex={isOpen ? 0 : -1} />
    </div>
  );
}
