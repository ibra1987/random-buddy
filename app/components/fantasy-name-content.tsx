

export default function FantasyNameGeneratorSections() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 text-gray-900 bg-[#f6f0e6] rounded-2xl shadow-lg">
      
      {/* Hero Section */}
      <section className="mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-[#000000] mb-4">
          Fantasy Name Generator
        </h1>
        <p className="text-lg text-gray-700">
          Create unique and magical names for your characters, realms, and adventures.
        </p>
      </section>

      {/* How It Works */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#000000] mb-4">
          How the Fantasy Name Generator Works
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Our Fantasy Name Generator uses advanced AI models to craft unique names based on your preferences. 
{"  Whether you're creating a hero, a mythical creature, or a kingdom, our tool personalizes results to"}      
    fit your world perfectly.
        </p>
      </section>

      {/* Customization Options */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#000000] mb-4">
          Customize Your Fantasy Names
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Choose from multiple categories like character names, magical realms, kingdoms, and mythical creatures. 
          Adjust name length, style, and complexity to match your story or game setting.
        </p>
      </section>

      {/* Use Cases */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#000000] mb-4">
          Perfect for Writers, Gamers, and Creators
        </h2>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed">
          <li>Fantasy novel authors looking for immersive character names</li>
          <li>RPG players needing creative names for their heroes</li>
          <li>Game developers designing magical worlds</li>
          <li>Screenwriters building epic fantasy universes</li>
        </ul>
      </section>

      {/* SEO Optimized FAQ */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold text-[#000000] mb-4">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg text-[#000000]">
              Is this Fantasy Name Generator free?
            </h3>
            <p className="text-gray-700">
              Yes! Our generator is completely free to use.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[#000000]">
              Can I customize the style of names?
            </h3>
            <p className="text-gray-700">
              Absolutely. You can select themes like elvish, dwarvish, dark, or heroic names.
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-lg text-[#000000]">
              Are the generated names unique?
            </h3>
            <p className="text-gray-700">
              Yes, we ensure that every generated name is unique and AI-crafted.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
