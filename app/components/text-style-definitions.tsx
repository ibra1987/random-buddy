"use client";

import { Ghost, Sparkles, Code2, ArrowBigDown, Skull, Type, PenTool, Laugh, Zap, BookOpen } from "lucide-react";
import { JSX } from "react";

interface StyleDefinition {
  title: string;
  description: string;
  icon: JSX.Element;
}

const styleDefinitions: StyleDefinition[] = [
  {
    title: "Creepy Text",
    description:
      "Creepy text style makes your words look eerie and unsettling, using strange spacing, distorted characters, and mysterious vibes — perfect for haunted stories, horror games, or Halloween designs.",
    icon: <Ghost className="w-6 h-6 text-black" />,
  },
  {
    title: "Glitch Text",
    description:
      "Glitch text simulates a broken screen effect by scrambling characters and creating chaotic distortions. Great for sci-fi, hacking, and retro 80s horror themes.",
    icon: <Zap className="w-6 h-6 text-black" />,
  },
  {
    title: "Bubble Text",
    description:
      "Bubble text transforms normal letters into rounded, bubbly characters. It gives a playful, soft, and cute appearance, perfect for funny posts or lighthearted designs.",
    icon: <Sparkles className="w-6 h-6 text-black" />,
  },
  {
    title: "Upside Down Text",
    description:
      "Upside-down text flips your letters completely, making your sentences appear inverted. It’s a fun trick for pranks, puzzles, or grabbing attention on social media.",
    icon: <ArrowBigDown className="w-6 h-6 text-black" />,
  },
  {
    title: "Horror Text",
    description:
      "Horror text adds a chilling vibe using sharp, dripping, or jagged styles that mimic old-school horror movie posters and spooky book covers.",
    icon: <Skull className="w-6 h-6 text-black" />,
  },
  {
    title: "Tiny Text",
    description:
      "Tiny text converts your normal sentences into miniature letters. It’s commonly used for aesthetic social media bios, secretive captions, or minimalist styles.",
    icon: <Type className="w-6 h-6 text-black" />,
  },
  {
    title: "Cursive Text",
    description:
      "Cursive text uses elegant handwritten-style fonts, giving your words a vintage, romantic, and sophisticated look — great for invitations, poems, or personal notes.",
    icon: <PenTool className="w-6 h-6 text-black" />,
  },
  {
    title: "Emoji Text",
    description:
      "Emoji text integrates symbols and icons into your sentences, making your text more expressive, fun, and interactive. Ideal for casual chats and playful designs.",
    icon: <Laugh className="w-6 h-6 text-black" />,
  },
  {
    title: "Zalgo Text",
    description:
      "Zalgo text creates a cursed, corrupted vibe by adding random glitchy marks above and below letters — it looks chaotic and disturbing, perfect for horror aesthetics.",
    icon: <Code2 className="w-6 h-6 text-black" />,
  },
  {
    title: "Gothic Text",
    description:
      "Gothic text uses medieval-style calligraphy with dramatic strokes and bold shapes, giving your words a vintage, ancient, and mysterious personality.",
    icon: <BookOpen className="w-6 h-6 text-black" />,
  },
];

export default function StyleDefinitions() {
  return (
    <section className="w-full max-w-5xl  text-black px-6 py-12 rounded-xl   mx-auto">
      <h1 className="text-3xl font-bold mb-8 text-center font-serif tracking-wide">
        Creepy Text Generator Styles
      </h1>
      <div className="space-y-10">
        {styleDefinitions.map((style, index) => (
          <div
            key={index}
            className="p-5 rounded-lg bg-[#e6d9c9] border border-black/10 shadow-md hover:shadow-lg transition duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {style.icon}
              <h2 className="text-xl font-bold font-serif">{style.title}</h2>
            </div>
            <p className="text-gray-800 leading-relaxed">{style.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
