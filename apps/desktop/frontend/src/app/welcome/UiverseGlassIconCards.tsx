import type React from "react";

import { welcomeCards } from "./welcomeCards";

type GlassCardStyle = React.CSSProperties & {
  "--r": number;
};

export function UiverseGlassIconCards() {
  return (
    <section className="welcome-cards" aria-label="Vantaloom welcome actions">
      {welcomeCards.map(({ label, intent, rotation, Icon }) => (
        <button
          key={label}
          type="button"
          className="welcome-glass-card"
          data-text={label}
          aria-label={`${label}: ${intent}`}
          style={{ "--r": rotation } as GlassCardStyle}
        >
          <Icon size={60} stopColor1="#f7f7f7" stopColor2="#8d8d8d" aria-hidden="true" />
        </button>
      ))}
    </section>
  );
}
