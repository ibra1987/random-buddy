
import { Skull, Ghost, Bug, Flame, Wand2 } from "lucide-react";
import FantasyNameGenerator from "../components/fantasy-name-generator";
import FantasyNameGeneratorSections from "../components/fantasy-name-content";

const VINTAGE_CARD = "rounded-2xl border shadow-sm";
const CARD_BG = "bg-[#e6d9c9] border-black/10";
const PANEL_BG = "bg-[#f6f0e6]";
const BTN = "inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-black/10 hover:border-black/20 active:scale-[0.99] transition";
const BTN_PRIMARY = `${BTN} bg-black text-white hover:opacity-90`;
const BTN_SOFT = `${BTN} ${CARD_BG}`;


export default function FantasyNameGeneratorPage() {


  return (
    <div className="min-h-screen  flex flex-col items-center space-y-6 pt-10 ">
      {/* Header */}
      <div className="flex  items-center gap-3 mb-6">
        <Skull size={36} className="text-red-500" />
        <h1 className="text-3xl font-bold">Fantasy Name Generator</h1>
        <Ghost size={36} className="text-blue-400" />
      </div>
      <div className={`mb-8 p-6 max-w-5xl ${VINTAGE_CARD} ${CARD_BG}`}>
                <div className="flex items-center gap-3">
                  <Wand2 className="w-6 h-6" />
                  <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
                    Fantasy Name Generator (Vintage Edition)
                  </h1>
                </div>
                <p className="mt-2 text-black/70">
                  Personalize names for characters, cities, kingdoms, creatures, clans, weapons, and spells.
                  Fine-tune style, tone, length, language inspiration, role, race, and setting.
                </p>
              </div>

{/* Form Component */}
   <FantasyNameGenerator/>
   <FantasyNameGeneratorSections/>

      {/* Footer */}
      <div className="mt-10 flex items-center gap-2 text-gray-400">
        <Bug size={18} />
        <span>Made with Horror & Lucide Icons</span>
        <Flame size={18} className="text-red-600" />
      </div>
    </div>
  );
}
