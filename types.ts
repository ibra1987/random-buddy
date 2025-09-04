// fantasy name generator typesdckddcç(hhikikikk)
export type NameType = "character" | "city" | "kingdom" | "creature" | "clan" | "weapon" | "spell";
export type Gender = "male" | "female" | "neutral";
export type Style =
  | "elvish"
  | "dwarvish"
  | "orcish"
  | "ancient-kingdom"
  | "dark-fantasy"
  | "magical";
export type Tone = "light" | "dark" | "mystical" | "royal" | "heroic" | "evil" | "cute" | "funny";
export type Length = "short" | "medium" | "long";
export type Language =
  | "none"
  | "latin"
  | "arabic"
  | "japanese"
  | "nordic"
  | "celtic"
  | "slavic"
  | "greek";
export type Role = "none" | "hero" | "villain" | "mage" | "warrior" | "king" | "assassin";
export type Race = "none" | "human" | "elf" | "dwarf" | "orc" | "dragon" | "fairy" | "undead";
export type Setting = "none" | "medieval" | "futuristic" | "steampunk" | "mythological";

export type TeamStyle = "heroic" | "dark" | "mystical" | "royal" | "funny" | "epic";
export type Theme =
  | "dragons"
  | "knights"
  | "magic"
  | "realms"
  | "assassins"
  | "guardians"
  | "undead"
  | "beasts"
  | "custom";

// Options for name generation
export interface FantasyNameOptions {
  nameType: "clan" | "team" | "guild";
  style: TeamStyle;
  tone?: TeamStyle;
  startsWith?: string;
  includeSyl?: string;
  avoidSyl?: string;
  setting?: string;
}


//structured data types
// types/schema.ts
import { WithContext } from "schema-dts";

export type WebsiteSchema = WithContext<{
  "@type": "WebSite";
  name: string;
  url: string;
  description: string;
  potentialAction: {
    "@type": "SearchAction";
    target: string;
    "query-input": string;
  };
}>;

export type SoftwareApplicationSchema = WithContext<{
  "@type": "SoftwareApplication";
  name: string;
  applicationCategory: string;
  operatingSystem: string;
  description: string;
  url: string;
  offers: {
    "@type": "Offer";
    price: string;
    priceCurrency: string;
  };
}>;

export type AboutPageSchema = WithContext<{
  "@type": "AboutPage";
  name: string;
  description: string;
}>;

export type ContactPageSchema = WithContext<{
  "@type": "ContactPage";
  name: string;
  description: string;
}>;

export type SchemaType = 
  | WebsiteSchema 
  | SoftwareApplicationSchema 
  | AboutPageSchema 
  | ContactPageSchema;