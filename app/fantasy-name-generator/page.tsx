
import { Skull, Ghost, Bug, Flame, Wand2 } from "lucide-react";
import FantasyNameGenerator from "../components/fantasy-name-generator";
import FantasyNameGeneratorSections from "../components/fantasy-name-content";
import PageSchema from "../components/structured-data/page-schema";
import { CARD_BG, VINTAGE_CARD } from "@/constants";


import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fantasy Name Generator - Create Unique Character & World Names | RandomBuddy',
  description: 'Generate unique fantasy names for characters, cities, kingdoms, creatures, clans, weapons, and spells. Customize style, tone, length, and language inspiration for your fantasy world.',
  keywords: 'fantasy name generator, character names, fantasy names, RPG names, D&D names, world building, kingdom names, creature names, fantasy city names, vintage names',
  openGraph: {
    title: 'Fantasy Name Generator - Create Unique Character & World Names | RandomBuddy',
    description: 'Generate unique fantasy names for characters, cities, kingdoms, creatures, and more. Customize style, tone, and language inspiration.',
    url: 'https://randombuddy.com/fantasy-name-generator',
    siteName: 'RandomBuddy',
    images: [
      {
        url: '/og-fantasy-names.jpg',
        width: 1200,
        height: 630,
        alt: 'Fantasy Name Generator - Create Unique Character & World Names',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fantasy Name Generator - Create Unique Character & World Names | RandomBuddy',
    description: 'Generate unique fantasy names for characters, cities, kingdoms, creatures, and more with customizable options.',
    images: ['/og-fantasy-names.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://randombuddy.com/fantasy-name-generator',
  },
};

export default function FantasyNameGeneratorPage() {


  return (
    <>
     <PageSchema/>
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
    </>

  );
}
