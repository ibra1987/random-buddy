import { TeamStyle } from "./types";

export const VINTAGE_CARD = "rounded-2xl border shadow-sm";
export const CARD_BG = "bg-[#e6d9c9] border-black/10";
export const PANEL_BG = "bg-[#f6f0e6]";
export const BTN = "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 hover:border-black/20 active:scale-[0.99] transition";
export const BTN_PRIMARY = `${BTN} bg-black text-white hover:opacity-90`;
export const BTN_SOFT = `${BTN} ${CARD_BG}`;

export const styleWords: Record<TeamStyle, string[]> = {
      heroic: ["Valor", "Shield", "Lion", "Blade", "Honor", "Storm"],
      dark: ["Shadow", "Doom", "Night", "Grim", "Oblivion", "Raven"],
      mystical: ["Moon", "Star", "Spirit", "Myst", "Rune", "Aura"],
      royal: ["Crown", "Throne", "Scepter", "Regal", "Kingdom", "Noble"],
      funny: ["Goofballs", "Silly", "Jesters", "Banana", "Muffins", "Clowns"],
      epic: ["Dragon", "Phoenix", "Titan", "Hydra", "Vortex", "Inferno"],
    };