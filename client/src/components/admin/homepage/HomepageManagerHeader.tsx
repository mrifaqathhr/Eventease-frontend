"use client";

export interface HomepageManagerHeaderProps {
  lastSaved?: string;
  onPreview?: () => void;
  onSave?: () => void;
}

export default function HomepageManagerHeader({
  lastSaved = "Today at 10:42 AM",
  onPreview,
  onSave,
}: HomepageManagerHeaderProps) {
  return (
    <header className="flex shrink-0 items-center justify-between border-b border-gray-200 bg-surface-light px-6 py-4 lg:px-8">
      <div className="flex items-center gap-2 text-text-muted">
        <span className="material-symbols-outlined">home</span>
        <span>/</span>
        <span>Pages</span>
        <span>/</span>
        <h2 className="font-display text-lg font-bold text-text-main">
          Homepage Manager
        </h2>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm italic text-text-muted">
          Last saved: {lastSaved}
        </span>
        <div className="mx-2 h-6 w-px bg-gray-200" />
        <button
          type="button"
          onClick={onPreview}
          className="flex h-10 items-center justify-center gap-2 rounded-lg border border-gray-200 bg-surface-light px-6 text-sm font-bold text-text-main transition-colors hover:bg-background-light"
        >
          <span className="material-symbols-outlined text-lg">visibility</span>
          <span>Preview</span>
        </button>
        <button
          type="button"
          onClick={onSave}
          className="flex h-10 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-bold text-white shadow-sm transition-colors hover:bg-rose-600 hover:shadow-md"
        >
          <span className="material-symbols-outlined text-lg">save</span>
          <span>Save Changes</span>
        </button>
      </div>
    </header>
  );
}
