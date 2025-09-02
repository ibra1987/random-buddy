"use client";

import { useState } from "react";
import { RefreshCw, Copy } from "lucide-react";

const adjectives = [
  "Golden", "Chill", "Wild", "Epic", "Sunny",
  "Cosmic", "Silent", "Dreamy", "Bold", "Magic",
  "Savage", "Happy", "Fast", "Sneaky", "Viral",
];

const nouns = [
  "Vibes", "Ninja", "Pixel", "Beast", "Cloud",
  "Wave", "Galaxy", "Shadow", "Legend", "Wizard",
  "Tiger", "Dream", "Rocket", "Soul", "Vortex",
];

const numbers = ["07", "13", "23", "88", "99", "101", "2024", "777"];

export default function InstaNameGenerator() {
  const [nickname, setNickname] = useState<string>("");

  const generateNickname = () => {
    const randomAdj = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];
    const randomNum = numbers[Math.floor(Math.random() * numbers.length)];
    const randomUnderscore = Math.random() > 0.5 ? "_" : "";
    setNickname(`${randomAdj}${randomUnderscore}${randomNoun}${randomNum}`);
  };

  const copyToClipboard = () => {
    if (nickname) {
      navigator.clipboard.writeText(nickname);
      alert(`Copied "${nickname}" to clipboard!`);
    }
  };

  return (
    <div className="w-full max-w-5xl bg-[#f6f0e6] p-6 rounded-2xl shadow-lg  mx-auto flex flex-col items-center gap-6 border border-[#e4d9ca]">
      {/* Title */}
      <h2 className="text-2xl font-bold text-[#5a4631] text-center">
        Instagram Name Generator
      </h2>

      {/* Generated Name */}
      <div className="bg-white w-full py-3 px-4 rounded-xl text-center text-lg font-semibold border border-[#e4d9ca] text-[#6b5a4d]">
        {nickname || "Click Generate to get a name"}
      </div>

      {/* Buttons */}
      <div className="flex gap-3">
        <button
          onClick={generateNickname}
          className="flex items-center gap-2 bg-[#6b5a4d] text-white font-medium px-4 py-2 rounded-xl hover:bg-[#5a4631] transition"
        >
          <RefreshCw size={18} /> Generate
        </button>

        <button
          onClick={copyToClipboard}
          disabled={!nickname}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl font-medium transition ${
            nickname
              ? "bg-[#f6f0e6] text-[#5a4631] border border-[#d9c8b7] hover:bg-[#f0e8dd]"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
        >
          <Copy size={18} /> Copy
        </button>
      </div>

      {/* Note */}
      <p className="text-sm text-[#6b5a4d]/80 text-center">
        Get cool Instagram-style nicknames instantly 🚀
      </p>
    </div>
  );
}
