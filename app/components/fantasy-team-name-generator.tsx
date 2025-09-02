"use client";

import { useState } from "react";
import {
  Wand2,
  Castle,
  Swords,
  ScrollText,
  Settings2,
  Copy,
  RefreshCw,
  Users,
} from "lucide-react";

/**
 * Fantasy Team Name Generator
 * Vintage palette:
 * bg-base: #f6f0e6
 * card:    #e6d9c9
 * text:    #000000
 * border:  rgba(0,0,0,.12)
 */

const VINTAGE_CARD = "rounded-2xl border shadow-sm";
const CARD_BG = "bg-[#e6d9c9] border-black/10";
const PANEL_BG = "bg-[#f6f0e6]";
const BTN =
  "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 hover:border-black/20 active:scale-[0.99] transition";
const BTN_PRIMARY = `${BTN} bg-black text-white hover:opacity-90`;
const BTN_SOFT = `${BTN} ${CARD_BG}`;

// Types
type TeamStyle = "heroic" | "dark" | "mystical" | "royal" | "funny" | "epic";
type Theme =
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
interface FantasyNameOptions {
  nameType: "clan" | "team" | "guild";
  style: TeamStyle;
  tone?: TeamStyle;
  startsWith?: string;
  includeSyl?: string;
  avoidSyl?: string;
  setting?: string;
}

export default function FantasyTeamNameGenerator() {
  const [teamStyle, setTeamStyle] = useState<TeamStyle>("heroic");
  const [theme, setTheme] = useState<Theme>("dragons");
  const [startsWith, setStartsWith] = useState("");
  const [includeWord, setIncludeWord] = useState("");
  const [avoidWord, setAvoidWord] = useState("");
  const [count, setCount] = useState<number>(5);
  const [results, setResults] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);

  // Reset form
  function onReset() {
    setTeamStyle("heroic");
    setTheme("dragons");
    setStartsWith("");
    setIncludeWord("");
    setAvoidWord("");
    setCount(5);
    setResults([]);
    setCopied(false);
  }

  // Simple fantasy team name generator logic inside the component
  const generateFantasyName = (options: FantasyNameOptions) => {
    const { style, startsWith = "", includeSyl = "", avoidSyl = "" } = options;

    // Base words by style
    const styleWords: Record<TeamStyle, string[]> = {
      heroic: ["Valor", "Shield", "Lion", "Blade", "Honor", "Storm"],
      dark: ["Shadow", "Doom", "Night", "Grim", "Oblivion", "Raven"],
      mystical: ["Moon", "Star", "Spirit", "Myst", "Rune", "Aura"],
      royal: ["Crown", "Throne", "Scepter", "Regal", "Kingdom", "Noble"],
      funny: ["Goofballs", "Silly", "Jesters", "Banana", "Muffins", "Clowns"],
      epic: ["Dragon", "Phoenix", "Titan", "Hydra", "Vortex", "Inferno"],
    };

    let wordList = styleWords[style];

    // Filter by startsWith
    if (startsWith) {
      wordList = wordList.filter((w) => w.toLowerCase().startsWith(startsWith.toLowerCase()));
    }

    // Filter by includeSyl
    if (includeSyl) {
      wordList = wordList.filter((w) => w.toLowerCase().includes(includeSyl.toLowerCase()));
    }

    // Filter by avoidSyl
    if (avoidSyl) {
      wordList = wordList.filter((w) => !w.toLowerCase().includes(avoidSyl.toLowerCase()));
    }

    if (wordList.length === 0) {
      wordList = styleWords[style]; // fallback
    }

    // Pick a random word
    const word = wordList[Math.floor(Math.random() * wordList.length)];

    // Add theme suffix/prefix for flavor
    const themePrefixes: Record<Theme, string[]> = {
      dragons: ["Dragon", "Fire", "Flame", ""],
      knights: ["Knight", "Blade", "Steel", ""],
      magic: ["Mage", "Arcane", "Mystic", ""],
      realms: ["Realm", "Kingdom", "Domain", ""],
      assassins: ["Shadow", "Silent", "Night", ""],
      guardians: ["Guard", "Sentinel", "Protector", ""],
      undead: ["Grave", "Ghoul", "Bone", ""],
      beasts: ["Wolf", "Lion", "Tiger", ""],
      custom: [""],
    };

    const prefixList = themePrefixes[theme];
    const prefix = prefixList[Math.floor(Math.random() * prefixList.length)];

    return prefix ? `${prefix} ${word}` : word;
  };

  const handleGenerate = () => {
    const newNames = Array.from({ length: count }, () =>
      generateFantasyName({
        nameType: "clan",
        style: teamStyle,
        tone: teamStyle,
        startsWith,
        includeSyl: includeWord,
        avoidSyl: avoidWord,
        setting: "medieval",
      })
    );
    setResults(newNames);
  };

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(results.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  };

  return (
    <main className={`w-full ${PANEL_BG} text-black min-h-screen`}>
      <div className="max-w-5xl mx-auto py-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-[#000] flex items-center justify-center gap-3">
            <Users className="w-8 h-8" />
            Fantasy Team Name Generator
          </h1>
          <p className="text-[#6b5a4d] mt-2">
            Generate epic, dark, or funny fantasy-themed team names for your
            guilds, squads, clans, or roleplay groups.
          </p>
        </div>

        {/* Form */}
        <section className={`p-6 ${VINTAGE_CARD} ${CARD_BG}`}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Settings2 className="w-5 h-5" />
            Customize Your Fantasy Team Name
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Team Style */}
            <div>
              <label className="block text-sm mb-1">Team Style</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={teamStyle}
                onChange={(e) => setTeamStyle(e.target.value as TeamStyle)}
              >
                <option value="heroic">Heroic</option>
                <option value="dark">Dark</option>
                <option value="mystical">Mystical</option>
                <option value="royal">Royal</option>
                <option value="funny">Funny</option>
                <option value="epic">Epic</option>
              </select>
            </div>

            {/* Theme */}
            <div>
              <label className="block text-sm mb-1">Theme Inspiration</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={theme}
                onChange={(e) => setTheme(e.target.value as Theme)}
              >
                <option value="dragons">Dragons</option>
                <option value="knights">Knights</option>
                <option value="magic">Magic</option>
                <option value="realms">Realms</option>
                <option value="assassins">Assassins</option>
                <option value="guardians">Guardians</option>
                <option value="undead">Undead</option>
                <option value="beasts">Beasts</option>
                <option value="custom">Custom</option>
              </select>
            </div>

            {/* Starts With */}
            <div>
              <label className="block text-sm mb-1">Starting Letters (optional)</label>
              <input
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={startsWith}
                onChange={(e) => setStartsWith(e.target.value.trim())}
                placeholder="e.g., Dark, Flame, Shadow"
              />
            </div>

            {/* Include & Avoid */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Include Word</label>
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                  value={includeWord}
                  onChange={(e) => setIncludeWord(e.target.value.trim())}
                  placeholder="e.g., Dragon"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Avoid Word</label>
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                  value={avoidWord}
                  onChange={(e) => setAvoidWord(e.target.value.trim())}
                  placeholder="e.g., Clan"
                />
              </div>
            </div>

            {/* Count */}
            <div>
              <label className="block text-sm mb-1">How Many Names?</label>
              <input
                type="number"
                min={1}
                max={20}
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={count}
                onChange={(e) =>
                  setCount(Math.max(1, Math.min(20, Number(e.target.value) || 1)))
                }
              />
            </div>
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={handleGenerate} className={BTN_PRIMARY}>
              <Wand2 className="w-4 h-4" />
              Generate
            </button>
            <button onClick={onReset} className={BTN_SOFT}>
              <RefreshCw className="w-4 h-4" />
              Reset
            </button>
          </div>
        </section>

        {/* Results */}
        <section className={`mt-8 p-6 ${VINTAGE_CARD} ${CARD_BG}`}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ScrollText className="w-5 h-5" />
            Generated Fantasy Team Names
          </h2>

          {results.length === 0 ? (
            <p className="text-black/70">
              No names yet. Adjust the prompts and click <strong>Generate</strong>.
            </p>
          ) : (
            <>
              <ul className="grid md:grid-cols-2 gap-2 mb-4">
                {results.map((name, idx) => (
                  <li
                    key={idx}
                    className="px-3 py-2 rounded-lg bg-white border border-black/10"
                  >
                    {name}
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-3">
                <button onClick={onCopy} className={BTN_SOFT}>
                  <Copy className="w-4 h-4" />
                  {copied ? "Copied!" : "Copy All"}
                </button>
                <span className="inline-flex items-center gap-2 text-black/60">
                  <Castle className="w-4 h-4" />
                  <Swords className="w-4 h-4" />
                  Vintage palette active
                </span>
              </div>
            </>
          )}
        </section>
      </div>
    </main>
  );
}
