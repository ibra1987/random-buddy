
import { Skull, Ghost, Bug, Flame } from "lucide-react";
import ScaryTextForm from "../components/scary-text-form";
import StyleDefinitions from "../components/text-style-definitions";

// // --- Scary Text Maps ---
// const scaryMaps: Record<string, (text: string) => string> = {
//   gothic: (t) => t.replace(/[a-zA-Z]/g, (c) => String.fromCharCode(c.charCodeAt(0) + 0x1d00)),
//   zalgo: (t) => t.split("").map((c) => c + "\u0300\u0301\u0302").join(""),
//   symbols: (t) => t.replace(/[a-z]/g, (c) => ({ a: "@", e: "€", s: "$" }[c] || c)),
//   bloody: (t) => t.split("").join("\u2022"),
//   cursed: (t) => t.replace(/[aeiou]/gi, "☠"),
//   distorted: (t) => t.split("").join("\u0336"),
//   ghostly: (t) => t.split("").join("\u200B"),
//   demonic: (t) => t.replace(/[a-z]/gi, (c) => "ᗪ" + c),
//   glitchy: (t) => t.split("").map((c, i) => (i % 2 ? c.toUpperCase() : c.toLowerCase())).join(""),
//   runic: (t) => t.replace(/[a-z]/gi, (c) => "ᚱ" + c),
// };

export default function ScaryTextGenerator() {


  return (
    <div className="min-h-screen  flex flex-col items-center space-y-6 pt-10 ">
      {/* Header */}
      <div className="flex  items-center gap-3 mb-6">
        <Skull size={36} className="text-red-500" />
        <h1 className="text-3xl font-bold">Creepy Text Generator</h1>
        <Ghost size={36} className="text-blue-400" />
      </div>
        <ScaryTextForm/>
        <StyleDefinitions/>

      {/* Footer */}
      <div className="mt-10 flex items-center gap-2 text-gray-400">
        <Bug size={18} />
        <span>Made with Horror & Lucide Icons</span>
        <Flame size={18} className="text-red-600" />
      </div>
    </div>
  );
}
