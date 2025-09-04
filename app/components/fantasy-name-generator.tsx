"use client";

import { useEffect, useState } from "react";
import {
  Wand2,
  Castle,
  Swords,
  ScrollText,
  Settings2,
  Copy,
  RefreshCw,
} from "lucide-react";
import { generateFantasyName } from "@/lib/fantasy-name";
import { Gender, Language, Length, NameType, Race, Role, Setting, Style, Tone } from "@/types";
import { BTN_PRIMARY, BTN_SOFT, CARD_BG, PANEL_BG, VINTAGE_CARD } from "@/constants";

/**
 * Vintage palette
 * bg-base: #f6f0e6
 * card:    #e6d9c9
 * text:    #000000
 * border:  rgba(0,0,0,.12)
 */



export default function FantasyNameGenerator() {
  // Form state
  const [nameType, setNameType] = useState<NameType>("character");
  const [gender, setGender] = useState<Gender>("neutral");
  const [style, setStyle] = useState<Style>("elvish");
  const [tone, setTone] = useState<Tone>("mystical");
  const [length, setLength] = useState<Length>("medium");
  const [language, setLanguage] = useState<Language>("none");
  const [_, setCount] = useState<number>(10);
  const [startsWith, setStartsWith] = useState<string>("");
  const [includeSyl, setIncludeSyl] = useState<string>("");
  const [avoidSyl, setAvoidSyl] = useState<string>("");
  const [role, setRole] = useState<Role>("none");
  const [race, setRace] = useState<Race>("none");
  const [setting, setSetting] = useState<Setting>("none");
  const [result, setResult] = useState<string>("");

  const [copied, setCopied] = useState(false);

  // Reset form
  function onReset() {
    setNameType("character");
    setGender("neutral");
    setStyle("elvish");
    setTone("mystical");
    setLength("medium");
    setLanguage("none");
    setCount(10);
    setStartsWith("");
    setIncludeSyl("");
    setAvoidSyl("");
    setRole("none");
    setRace("none");
    setSetting("none");
    setCopied(false);
  }

  useEffect(() => {
  setResult(
    generateFantasyName({
      nameType,
      gender,
      style,
      tone,
      length,
      language,
      startsWith,
      includeSyl,
      avoidSyl,
      role,
      race,
      setting,
    })
  );
  // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);

// Regenerate when user clicks "Generate"
const handleGenerate = () => {
  setResult(
    generateFantasyName({
      nameType,
      gender,
      style,
      tone,
      length,
      language,
      startsWith,
      includeSyl,
      avoidSyl,
      role,
      race,
      setting,
    })
  );
};
  
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(result);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }

  return (
    <main className={`w-full ${PANEL_BG} text-black min-h-screen`}>
      <div className="max-w-5xl mx-auto  py-10">
        {/* Header */}
        

        {/* Advanced Prompts Form */}
        <section className={`p-6 ${VINTAGE_CARD} ${CARD_BG}`}>
          <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Settings2 className="w-5 h-5" />
            Advanced Prompts
          </h2>

          <div className="grid md:grid-cols-2 gap-4">
            {/* Name Type */}
            <div>
              <label className="block text-sm mb-1">Name Type</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={nameType}
                onChange={(e) => setNameType(e.target.value as NameType)}
              >
                <option value="character">Character</option>
                <option value="city">City</option>
                <option value="kingdom">Kingdom</option>
                <option value="creature">Creature</option>
                <option value="clan">Clan</option>
                <option value="weapon">Weapon</option>
                <option value="spell">Spell</option>
              </select>
            </div>

            {/* Gender */}
            <div>
              <label className="block text-sm mb-1">Gender (characters)</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={gender}
                onChange={(e) => setGender(e.target.value as Gender)}
              >
                <option value="neutral">Neutral</option>
                <option value="female">Female</option>
                <option value="male">Male</option>
              </select>
            </div>

            {/* Fantasy Style */}
            <div>
              <label className="block text-sm mb-1">Fantasy Style</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={style}
                onChange={(e) => setStyle(e.target.value as Style)}
              >
                <option value="elvish">Elvish (melodic)</option>
                <option value="dwarvish">Dwarvish (rugged)</option>
                <option value="orcish">Orcish (guttural)</option>
                <option value="ancient-kingdom">Ancient Kingdom (noble)</option>
                <option value="dark-fantasy">Dark Fantasy (ominous)</option>
                <option value="magical">Magical (enchanted)</option>
              </select>
            </div>

            {/* Tone */}
            <div>
              <label className="block text-sm mb-1">Tone</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={tone}
                onChange={(e) => setTone(e.target.value as Tone)}
              >
                <option value="mystical">Mystical</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
                <option value="royal">Royal</option>
                <option value="heroic">Heroic</option>
                <option value="evil">Evil</option>
                <option value="cute">Cute</option>
                <option value="funny">Funny</option>
              </select>
            </div>

            {/* Length */}
            <div>
              <label className="block text-sm mb-1">Length</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={length}
                onChange={(e) => setLength(e.target.value as Length)}
              >
                <option value="short">Short</option>
                <option value="medium">Medium</option>
                <option value="long">Long</option>
              </select>
            </div>

            {/* Language */}
            <div>
              <label className="block text-sm mb-1">Language Inspiration</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={language}
                onChange={(e) => setLanguage(e.target.value as Language)}
              >
                <option value="none">None</option>
                <option value="latin">Latin</option>
                <option value="arabic">Arabic</option>
                <option value="japanese">Japanese</option>
                <option value="nordic">Nordic</option>
                <option value="celtic">Celtic</option>
                <option value="slavic">Slavic</option>
                <option value="greek">Greek</option>
              </select>
            </div>

            {/* Starting Letter */}
            <div>
              <label className="block text-sm mb-1">Starting Letter (optional)</label>
              <input
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={startsWith}
                onChange={(e) => setStartsWith(e.target.value.trim())}
                placeholder="e.g., A, Th, Mor"
              />
            </div>

            {/* Include / Avoid Syllable */}
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="block text-sm mb-1">Include Syllable</label>
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                  value={includeSyl}
                  onChange={(e) => setIncludeSyl(e.target.value.trim())}
                  placeholder="e.g., 'zor'"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Avoid Syllable</label>
                <input
                  className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                  value={avoidSyl}
                  onChange={(e) => setAvoidSyl(e.target.value.trim())}
                  placeholder="e.g., 'ra'"
                />
              </div>
            </div>

            {/* Role */}
            <div>
              <label className="block text-sm mb-1">Role</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={role}
                onChange={(e) => setRole(e.target.value as Role)}
              >
                <option value="none">None</option>
                <option value="hero">Hero</option>
                <option value="villain">Villain</option>
                <option value="mage">Mage</option>
                <option value="warrior">Warrior</option>
                <option value="king">King</option>
                <option value="assassin">Assassin</option>
              </select>
            </div>

            {/* Race */}
            <div>
              <label className="block text-sm mb-1">Race / Species</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={race}
                onChange={(e) => setRace(e.target.value as Race)}
              >
                <option value="none">None</option>
                <option value="human">Human</option>
                <option value="elf">Elf</option>
                <option value="dwarf">Dwarf</option>
                <option value="orc">Orc</option>
                <option value="dragon">Dragon</option>
                <option value="fairy">Fairy</option>
                <option value="undead">Undead</option>
              </select>
            </div>

            {/* Setting */}
            <div>
              <label className="block text-sm mb-1">Setting</label>
              <select
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={setting}
                onChange={(e) => setSetting(e.target.value as Setting)}
              >
                <option value="none">None</option>
                <option value="medieval">Medieval</option>
                <option value="futuristic">Futuristic</option>
                <option value="steampunk">Steampunk</option>
                <option value="mythological">Mythological</option>
              </select>
            </div>

            {/* Count */}
            {/* <div>
              <label className="block text-sm mb-1">How Many Names?</label>
              <input
                type="number"
                min={1}
                max={50}
                className="w-full rounded-xl border border-black/10 bg-white px-3 py-2"
                value={count}
                onChange={(e) =>
                  setCount(Math.max(1, Math.min(50, Number(e.target.value) || 1)))
                }
              />
            </div> */}
          </div>

          {/* Actions */}
          <div className="mt-6 flex flex-wrap gap-3">
            <button onClick={handleGenerate}  className={BTN_PRIMARY}>
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
            Generated Name
          </h2>

          {result.length === 0 ? (
            <p className="text-black/70">
              No name yet. Adjust the prompts and click <strong>Generate</strong>.
            </p>
          ) : (
            <>
              <ul className="grid md:grid-cols-2 gap-2 mb-4">
                { (
                  <li
                  
                    className="px-3 py-2 rounded-lg bg-white border border-black/10"
                  >
                    {result}
                  </li>
                )}
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

