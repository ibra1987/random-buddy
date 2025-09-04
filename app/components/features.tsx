
"use client";

export default function FeaturesSection() {
  return (
    <section className="bg-[#fef8f2] max-w-6xl mx-auto py-16 px-6 border-b border-[#e0d5c5]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5a4631] mb-6">
          🔮 Discover Our Generators
        </h2>
        <p className="text-lg text-[#6b5a4d] max-w-2xl mx-auto mb-10">
          RandomBuddy helps you generate unique names and ideas for your fantasy
          worlds, RPG adventures, and creative projects.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              🧝 Orc Name Generator
            </h3>
            <p className="text-[#6b5a4d]">
              Create unique, battle-ready orc names for your RPG campaigns and
              fantasy worlds.
            </p>
          </div>

          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              ⚔️ Team Name Generator
            </h3>
            <p className="text-[#6b5a4d]">
              Generate creative team names for guilds, clans, and fantasy
              tournaments.
            </p>
          </div>

          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              📜 RPG Character Names
            </h3>
            <p className="text-[#6b5a4d]">
              Find legendary names for your heroes, villains, and NPCs to bring
              your game to life.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
