type NameType = "character" | "city" | "kingdom" | "creature" | "clan" | "weapon" | "spell";
type Gender = "male" | "female" | "neutral";
type Style =
  | "elvish"
  | "dwarvish"
  | "orcish"
  | "ancient-kingdom"
  | "dark-fantasy"
  | "magical";
type Tone =
  | "light"
  | "dark"
  | "mystical"
  | "royal"
  | "heroic"
  | "evil"
  | "cute"
  | "funny";
type Length = "short" | "medium" | "long";
type Language =
  | "none"
  | "latin"
  | "arabic"
  | "japanese"
  | "nordic"
  | "celtic"
  | "slavic"
  | "greek";
type Role = "none" | "hero" | "villain" | "mage" | "warrior" | "king" | "assassin";
type Race = "none" | "human" | "elf" | "dwarf" | "orc" | "dragon" | "fairy" | "undead";
type Setting = "none" | "medieval" | "futuristic" | "steampunk" | "mythological";

type Options = Partial<{
  nameType: NameType;
  gender: Gender;
  style: Style;
  tone: Tone;
  length: Length;
  language: Language;
  startsWith: string;
  includeSyl: string;
  avoidSyl: string;
  role: Role;
  race: Race;
  setting: Setting;
}>;

export function generateFantasyName(opts: Options = {}): string {
  const {
    nameType = "character",
    gender = "neutral",
    style = "elvish",
    tone = "mystical",
    length = "medium",
    language = "none",
    startsWith = "",
    includeSyl = "",
    avoidSyl = "",
    role = "none",
    race = "none",
    setting = "none",
    
  } = opts;

  const baseBanks: Record<Style, string[]> = {
    elvish: ["ae", "lia", "the", "riel", "el", "ion", "mir", "sil", "vyn", "thal", "anar", "yla", "quae", "il", "sha"],
    dwarvish: ["grim", "dur", "bald", "grom", "thor", "barr", "khar", "brun", "farr", "dun", "brok", "stone", "forge"],
    orcish: ["grog", "zug", "krak", "morg", "ug", "thr", "zog", "brak", "ruk", "ghul", "nak", "skarr", "drak"],
    "ancient-kingdom": ["ara", "thos", "men", "dor", "val", "orian", "astra", "ser", "dom", "ar", "toria", "vell", "alta"],
    "dark-fantasy": ["noct", "umbra", "teneb", "mala", "nox", "void", "hush", "sable", "mourn", "drear", "eclip", "vile"],
    magical: ["lum", "arcan", "faye", "magi", "glim", "spark", "enchan", "nimbus", "azur", "mana", "rune", "myst"],
  };

  const languageFlavors: Record<Exclude<Language, "none">, string[]> = {
    latin: ["ius", "ora", "ael", "ium", "ae", "us", "ora", "alis"],
    arabic: ["al", "din", "rah", "zar", "mir", "qal", "nah", "far"],
    japanese: ["ko", "mi", "ra", "shi", "ya", "tsu", "no", "ke"],
    nordic: ["vald", "heim", "bjorn", "skald", "ulv", "hild", "gard"],
    celtic: ["wyn", "mac", "bryn", "ogh", "agh", "lly", "dun", "mor"],
    slavic: ["slav", "mir", "drag", "bor", "islav", "nik", "vich"],
    greek: ["theo", "nik", "dor", "lex", "nia", "ios", "phos", "kris"],
  };

  const roleAffixes: Record<Role, { pre: string[]; suf: string[] }> = {
    none: { pre: [], suf: [] },
    hero: { pre: ["Astra", "Val", "Aether", "Nova"], suf: ["-bright", "-heart", "-shield"] },
    villain: { pre: ["Noct", "Vile", "Dread", "Umber"], suf: ["-bane", "-wrath", "-gloom"] },
    mage: { pre: ["Arcan", "Myst", "Rune"], suf: ["-seer", "-sage", "-weaver"] },
    warrior: { pre: ["Steel", "Iron", "Grim"], suf: ["-fist", "-blade", "-breaker"] },
    king: { pre: ["High", "Elder", "Crown"], suf: ["-rex", "-lord", "-the Great"] },
    assassin: { pre: ["Shade", "Sil", "Ghost"], suf: ["-whisper", "-silence", "-veil"] },
  };

  const raceHints: Record<Race, string[]> = {
    none: [], human: ["ton", "ford", "wick", "well"], elf: ["-riel", "-wyn", "-thel"],
    dwarf: ["-dun", "-stone", "-grim"], orc: ["-zug", "-gash", "-morg"], dragon: ["-thyr", "-drake", "-wyrm"],
    fairy: ["-flit", "-gleam", "-faye"], undead: ["-morn", "-grave", "-ghast"],
  };

  const settingHints: Record<Setting, string[]> = {
    none: [], medieval: ["-hold", "-keep", "-shire"], futuristic: ["-tron", "-nova", "-x"],
    steampunk: ["-cog", "-steam", "-gear"], mythological: ["-olym", "-myr", "-aeg"],
  };

  const toneTweaks: Record<Tone, { soften?: string[]; sharpen?: string[] }> = {
    light: { soften: ["a", "e", "ia", "el"] }, dark: { sharpen: ["kr", "vx", "th", "dr"] },
    mystical: { soften: ["ae", "io", "um", "ar"] }, royal: { sharpen: ["val", "dor", "rian"] },
    heroic: { sharpen: ["ar", "tor", "gar"] }, evil: { sharpen: ["mal", "noct", "umb"] },
    cute: { soften: ["li", "mi", "po", "ny"] }, funny: { soften: ["bo", "zo", "go"] },
  };

  function pick<T>(arr: T[]): T {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  function buildSyllables(): string[] {
    const base = baseBanks[style];
    const lang = language !== "none" ? languageFlavors[language] : [];
    const tweak = toneTweaks[tone];
    const extra: string[] = [];
    if (tweak?.soften) extra.push(...tweak.soften);
    if (tweak?.sharpen) extra.push(...tweak.sharpen);
    return [...base, ...lang, ...extra].filter(Boolean);
  }

  function targetSyllableCount(): number {
    return length === "short" ? 2 : length === "long" ? 4 : 3;
  }

  function applyNameTypePolish(str: string): string {
    switch (nameType) {
      case "city": return str + pick(["", "", "", "grad", "ford", "mere", "haven", "polis", "holm"]);
      case "kingdom": return str + pick(["", "ia", "aria", "dor", "land", "realm"]);
      case "creature": return str + pick(["ling", "spawn", "fang", "claw", "warden"]);
      case "clan": return "Clan " + str;
      case "weapon": return str + " " + pick(["Blade", "Spear", "Edge", "Fang", "Brand"]);
      case "spell": return pick(["Arcana ", "Umbral ", "Aether ", "Lumin "]) + str;
      default: return str;
    }
  }

  function genderPolish(str: string): string {
    if (nameType !== "character") return str;
    if (gender === "female" && !/[aeiouy]$/.test(str)) return str + pick(["a", "ia", "e"]);
    if (gender === "male" && !/[nrtdsmlg]$/.test(str)) return str + pick(["os", "ar", "en", "or"]);
    return str;
  }

  function roleRaceSettingPolish(str: string): string {
    const parts = [str];
    const rolePre = pick(roleAffixes[role].pre) ?? "";
    const roleSuf = pick(roleAffixes[role].suf) ?? "";
    if (rolePre && Math.random() < 0.5) parts.unshift(rolePre);
    if (roleSuf && Math.random() < 0.6) parts.push(roleSuf);
    const raceHint = race !== "none" ? pick(raceHints[race]) ?? "" : "";
    const setHint = setting !== "none" ? pick(settingHints[setting]) ?? "" : "";
    return parts.join("") + raceHint + setHint;
  }

  function sanitizeName(raw: string): string {
    return raw
      .split(/([\s-])/)
      .map(chunk =>
        /[a-zA-Z]/.test(chunk[0] || "")
          ? chunk[0].toUpperCase() + chunk.slice(1)
          : chunk
      )
      .join("");
  }

  // Generate single name
  const bank = buildSyllables();
  const nSyl = targetSyllableCount();
  const chosen: string[] = [];
  for (let i = 0; i < nSyl; i++) {
    let syl = pick(bank);
    if (includeSyl && !syl.includes(includeSyl)) syl = includeSyl + syl;
    if (avoidSyl && syl.includes(avoidSyl)) continue;
    chosen.push(syl);
  }

  let name = chosen.join("");
  if (startsWith) name = startsWith + name;
  name = applyNameTypePolish(name);
  name = genderPolish(name);
  name = roleRaceSettingPolish(name);
  name = sanitizeName(name);

  return name;
}

