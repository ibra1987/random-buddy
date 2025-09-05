"use client";

export default function FeaturesSection() {
  return (
    <section className="bg-[#fef8f2] max-w-6xl mx-auto py-16 px-6 border-b border-[#e0d5c5]">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-[#5a4631] mb-6">
          🔮 Explore Our Free Name Generators
        </h2>
        <p className="text-lg text-[#6b5a4d] max-w-2xl mx-auto mb-10">
          Discover powerful tools to create unique names for gaming, social media, 
          storytelling, and creative projects. Perfect for writers, gamers, and content creators.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              🧝 Fantasy Name Generator
            </h3>
            <p className="text-[#6b5a4d]">
              Create magical character names for RPGs, D&D campaigns, fantasy novels, 
              and world-building with customizable styles and origins.
            </p>
          </div>

          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              👻 Creepy Name Generator
            </h3>
            <p className="text-[#6b5a4d]">
              Generate spooky and haunting names for horror stories, Halloween characters, 
              ghostly personas, and eerie gaming profiles.
            </p>
          </div>

          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              📸 Instagram Name Generator
            </h3>
            <p className="text-[#6b5a4d]">
              Find catchy, aesthetic usernames for Instagram influencers, content creators, 
              brands, and social media profiles that stand out.
            </p>
          </div>

          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              🎯 Fantasy Team Name Generator
            </h3>
            <p className="text-[#6b5a4d]">
              Create powerful team names for esports, gaming clans, sports teams, 
              RPG parties, and competitive groups with memorable impact.
            </p>
          </div>

          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              🎡 Random Name Wheel Picker
            </h3>
            <p className="text-[#6b5a4d]">
              Spin our interactive wheel to randomly select names for games, 
              classroom activities, giveaways, and fair decision-making.
            </p>
          </div>

          <div className="bg-[#fffdf9] p-6 rounded-xl shadow-md border border-[#e0d5c5]">
            <h3 className="text-xl font-semibold text-[#5a4631] mb-2">
              ⚡ Quick & Easy Generators
            </h3>
            <p className="text-[#6b5a4d]">
              All our tools are 100% free, instant, and mobile-friendly. 
              No downloads required - generate unlimited names in seconds.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}