
// components/GnomeGenerator.jsx
'use client';

import { BTN_PRIMARY, BTN_SOFT, CARD_BG, PANEL_BG, VINTAGE_CARD } from '@/constants';
import { useState } from 'react';



// Name data
const gnomeFirstNames = [
  "Bimble", "Fizzle", "Glim", "Noodle", "Pippin", "Tinker", "Widdle", "Zook",
  "Boffin", "Cog", "Dindle", "Fuddle", "Gear", "Jinkle", "Muddle", "Nim"
];

const gnomeLastNames = [
  "Buckle", "Cogsworth", "Geargrind", "Sparklestone", "Tinkertop", "Whistlefoot",
  "Copperbottom", "Goldspring", "Ironwool", "Silverthread", "Bronzebuckle", "Steelspring"
];

const gnomeTraits = [
  "Curious Tinkerer", "Gem Collector", "Mechanic", "Alchemist", "Storyteller",
  "Inventor", "Cartographer", "Botanist", "Clockmaker", "Toymaker"
];

const gnomeClans = [
  "Stonebeard Clan", "Geargrinder Clan", "Deepdelver Clan", "Sparkfinder Clan",
  "Copperpin Clan", "Ironroot Clan", "Goldspring Clan", "Silverthread Clan"
];

export default function GnomeGenerator() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [trait, setTrait] = useState('');
  const [clan, setClan] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateGnomeName = () => {
    setIsGenerating(true);
    
    // Simulate a slight delay for animation purposes
    setTimeout(() => {
      const randomFirstName = gnomeFirstNames[Math.floor(Math.random() * gnomeFirstNames.length)];
      const randomLastName = gnomeLastNames[Math.floor(Math.random() * gnomeLastNames.length)];
      const randomTrait = gnomeTraits[Math.floor(Math.random() * gnomeTraits.length)];
      const randomClan = gnomeClans[Math.floor(Math.random() * gnomeClans.length)];
      
      setFirstName(randomFirstName);
      setLastName(randomLastName);
      setTrait(randomTrait);
      setClan(randomClan);
      setIsGenerating(false);
    }, 500);
  };

  const copyToClipboard = () => {
    const textToCopy = `${firstName} ${lastName}, ${trait} of the ${clan}`;
    navigator.clipboard.writeText(textToCopy);
    
    // Show a temporary confirmation (you could use a toast here)
    alert("Copied to clipboard!");
  };

  return (
    <div className={` ${PANEL_BG} p-6 max-w-3xl mx-auto`}>
      <h2 className="text-2xl font-bold text-center mb-6">Gnome Name Generator</h2>
      
      <div className={`${VINTAGE_CARD} ${CARD_BG} p-5 mb-6 text-center`}>
        {firstName ? (
          <div className="space-y-3">
            <div className="text-3xl font-semibold">{firstName} {lastName}</div>
            <div className="text-lg italic">{trait}</div>
            <div className="text-sm">of the {clan}</div>
          </div>
        ) : (
          <p className="text-gray-600">Your gnome name will appear here</p>
        )}
      </div>
      
      <div className="flex flex-col gap-3">
        <button
          onClick={generateGnomeName}
          disabled={isGenerating}
          className={isGenerating ? BTN_SOFT : BTN_PRIMARY}
        >
          {isGenerating ? (
            <>
              <span className="animate-spin">⟳</span>
              Generating...
            </>
          ) : (
            <>
              <span>✨</span>
              Generate Gnome Name
            </>
          )}
        </button>
        
        {firstName && (
          <button
            onClick={copyToClipboard}
            className={BTN_SOFT}
          >
            <span>📋</span>
            Copy to Clipboard
          </button>
        )}
      </div>
      
      <div className="mt-6 text-sm text-gray-600">
        <p>In fantasy worlds, gnomes are typically known for their:</p>
        <ul className="list-disc list-inside mt-2 ml-2">
          <li>Curiosity and inventiveness</li>
          <li>Love of gems and mechanics</li>
          <li>Small stature and long lives</li>
          <li>Connection to earth and stone</li>
        </ul>
      </div>
    </div>
  );
}