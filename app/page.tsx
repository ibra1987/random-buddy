import { Metadata } from "next";
import { Wand2, MapPin, Smile, Type, Ghost, Swords, Users, Crown } from "lucide-react";

export const metadata: Metadata = {
  title: "RandomBuddy | Free Random Generators",
  description:
    "RandomBuddy is your vintage-style hub for random generators: fantasy names, cities, emojis, usernames, scary text, and more!",
  keywords: [
    "random generators",
    "fantasy name generator",
    "random city generator",
    "fake names",
    "emoji generator",
    "scary text generator",
    "username generator",
    "Randombuddy",
  ],
};

const generatorGroups = [
  {
    title: "🌍 Places & Cities",
    icon: <MapPin className="w-6 h-6 text-yellow-800" />,
    description:
      "Discover random cities, towns, kingdoms, and fantasy places. Perfect for travelers, writers, and gamers.",
    generators: [
      "Random City Generator",
      "Fantasy Town Name Generator",
      "Fantasy Kingdom Name Generator",
    ],
  },
  {
    title: "🧙‍♂️ Fantasy & RPG",
    icon: <Swords className="w-6 h-6 text-green-800" />,
    description:
      "Get unique fantasy character names, D&D aliases, and villain names for your stories and games.",
    generators: [
      "Fantasy Name Generator",
      "Fantasy Last Name Generator",
      "Fantasy Surnames Generator",
      "Elf Name Generator",
      "D&D Name Generator",
      "Villain Name Generator",
    ],
  },
  {
    title: "😀 Fun & Social",
    icon: <Smile className="w-6 h-6 text-pink-700" />,
    description:
      "Generate random emojis, Instagram usernames, and anime nicknames instantly.",
    generators: [
      "Random Emoji Generator",
      "IG Username Generator",
      "Anime Nickname Generator",
    ],
  },
  {
    title: "✍️ Words & Text",
    icon: <Type className="w-6 h-6 text-blue-800" />,
    description:
      "Play with text: backward words, scary texts, fake names, and cursive styles.",
    generators: [
      "Backward Word Generator",
      "Scary Text Generator",
      "Fake Name Generator",
      "Name in Cursive Generator",
      "Surname Generator",
    ],
  },
  {
    title: "🎲 Miscellaneous",
    icon: <Wand2 className="w-6 h-6 text-purple-700" />,
    description:
      "Generate random strings and unique creative ideas instantly.",
    generators: ["Random String Generator"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen  text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-16 bg-[#e6d9c9] shadow-md border-b border-gray-300">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-[#5a4631]">
          ✨ RandomBuddy
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[#6b5a4d]">
          Your vintage-style hub for <strong>fun random generators</strong>.
          Explore fantasy names, cities, emojis, usernames, and more!
        </p>
      </section>

      {/* Generators Section */}
      <section className="max-w-6xl mx-auto px-4 py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {generatorGroups.map((group) => (
          <div
            key={group.title}
            className="bg-[#fef8f2] p-6 rounded-2xl shadow-lg border border-[#d1c3b0] hover:scale-[1.03] transition-transform"
          >
            <div className="flex items-center gap-3 mb-4">
              {group.icon}
              <h2 className="text-xl font-semibold text-[#5a4631]">{group.title}</h2>
            </div>
            <p className="text-sm text-[#6b5a4d] mb-4">{group.description}</p>
            <ul className="space-y-2">
              {group.generators.map((gen) => (
                <li
                  key={gen}
                  className="flex items-center gap-2 text-[#5a4631] hover:text-[#7b5e42] cursor-pointer"
                >
                  <Ghost className="w-4 h-4 text-[#b3a18b]" />
                  {gen}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="text-center py-6 border-t border-gray-300 text-sm text-[#6b5a4d]">
        © {new Date().getFullYear()} RandomBuddy — All Rights Reserved.
      </footer>
    </main>
  );
}
