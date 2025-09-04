import { Metadata } from "next";
import {
  Wand2,
  Users,
  Swords,
  Ghost,
} from "lucide-react";
import Link from "next/link";
import FeaturesSection from "./components/features";
import FaqSection from "./components/faq-section";

export const metadata: Metadata = {
  title: "RandomBuddy | Free Fun Name & Text Generators",
  description:
    "RandomBuddy is your go-to hub for fun random generators: Instagram usernames, fantasy names, team names, creepy text, and names wheel picker.",
  keywords: [
    "random generators",
    "instagram name generator",
    "fantasy name generator",
    "fantasy team name generator",
    "creepy text generator",
    "names wheel picker",
    "RandomBuddy",
  ],
};

const generatorGroups = [
  {
    title: "🎭 Social & Instagram",
    icon: <Users className="w-6 h-6 text-pink-700" />,
    description: "Create unique and trendy Instagram usernames instantly.",
    generators: [{name: "Instagram Name Generator", link: "/instagram-name-generator"}],
  },
  {
    title: "🧙‍♂️ Fantasy & RPG",
    icon: <Swords className="w-6 h-6 text-green-700" />,
    description:
      "Generate cool fantasy character names, RPG aliases, and creative team names for your games and stories.",
    generators: [
      {name: "Fantasy Name Generator", link: "/fantasy-name-generator"},
      {name: "Fantasy Team Name Generator", link: "/fantasy-team-name-generator"},
    ],
  },
  {
    title: "🎡 Names Wheel Picker",
    icon: <Wand2 className="w-6 h-6 text-purple-700" />,
    description: "Spin the wheel and randomly pick a name — fun and fast!",
    generators: [{name: "Names Wheel Picker", link: "/random-names-wheel-picker"}],
  },
  {
    title: "👻 Creepy & Fun Text",
    icon: <Ghost className="w-6 h-6 text-red-700" />,
    description: "Make your text look spooky, creepy, or cursed instantly.",
    generators: [{name: "Creepy Text Generator", link: "/creepy-text-generator"}],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-gray-800 bg-[#fffdf9]">
      {/* Hero Section */}
      <section className="text-center py-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight text-[#5a4631]">
          ✨ RandomBuddy
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-[#6b5a4d]">
          Your go-to hub for <strong>fun random generators</strong> — create usernames, fantasy names, team names, creepy text, and more!
        </p>
      </section>

      {/* Generators Section */}
      <section className="max-w-5xl mx-auto px-4 pb-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {generatorGroups.map((group) => (
          <div
            key={group.title}
            className="bg-[#fef8f2] p-6 rounded-2xl shadow-lg border-2 border-[#e0d5c5] hover:border-[#a59274] transition-transform"
          >
            <div className="flex items-center gap-3 mb-3">
              {group.icon}
              <h2 className="text-xl font-semibold text-[#5a4631]">
                {group.title}
              </h2>
            </div>
            <p className="text-sm text-[#6b5a4d] mb-4">{group.description}</p>
            <ul className="space-y-2">
              {group.generators.map((gen) => (
                <li
                  key={gen.name}
                  className="flex items-center gap-2 text-[#5a4631] hover:text-[#7b5e42] cursor-pointer"
                >
                  • <Link href={gen.link} className="underline">{gen.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

          <FeaturesSection/>
          <FaqSection/>

    </main>
  );
}
