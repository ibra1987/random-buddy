
import { CARD_BG, VINTAGE_CARD } from "@/constants";

export default function GnomeNameGeneratorContent() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8 text-[#5a4631] ">
   

      {/* SEO Content Sections */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">What Makes a Good Gnome Name?</h2>
        <div className={` p-6 rounded-lg `}>
          <p className="mb-4">
            In fantasy literature and role-playing games, gnome names typically reflect their inventive, 
            curious nature and connection to earth, mechanics, or gemcraft. Good gnome names often have:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Short, whimsical sounds (Bimble, Fizzle, Glim)</li>
            <li>References to tools, mechanics, or craftsmanship (Cogsworth, Geargrind)</li>
            <li>Connections to earth elements or precious materials (Stonebeard, Goldspring)</li>
            <li>Playful or curious connotations (Noodle, Tinker, Widdle)</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Using Gnome Names in D&D and RPGs</h2>
        <div className=" p-6 rounded-lg ">
          <p className="mb-4">
            Whether you're playing Dungeons & Dragons, Pathfinder, or other fantasy RPGs, a well-chosen 
            gnome name can bring your character to life. Our generator provides:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium mb-2">Character Identity</h3>
              <p>The right name helps establish your gnome's personality, background, and place in the world.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Clan Connections</h3>
              <p>Gnome clan names suggest history, traditions, and relationships with other fantasy races.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">Roleplaying Inspiration</h3>
              <p>Traits and specialties can inspire your character's abilities and story arc.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-2">World Building</h3>
              <p>Generate multiple names to populate entire gnome communities in your game world.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">The History of Gnomes in Fantasy</h2>
        <div className=" p-6 rounded-lg ">
          <p className="mb-4">
            Gnomes have been a staple of fantasy literature and games for decades. Originally drawing from 
            European folklore, modern fantasy gnomes typically combine elements from various sources:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Dungeons & Dragons:</strong> Established gnomes as a distinct race with subraces like forest, rock, and deep gnomes</li>
            <li><strong>World of Warcraft:</strong> Popularized the tinkering, technologically-inclined gnomes</li>
            <li><strong>Discworld:</strong> Featured gnomes as inventors with a unique perspective on the world</li>
            <li><strong>Traditional Folklore:</strong> Drew from garden gnomes and earth elementals of European myths</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
        <div className=" p-6 rounded-lg  space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-2">How do I create a memorable gnome character?</h3>
            <p>Start with a name that suggests their specialty or personality. Use the trait generator to define their skills, and consider how their clan background might influence their worldview.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">Can I use these names for commercial projects?</h3>
            <p>Yes, all names generated are free to use for both personal and commercial projects. No attribution is required.</p>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-2">What's the difference between gnomes and other small folk like halflings or dwarves?</h3>
            <p>While halflings are typically home-loving and dwarves are known for mining and craftsmanship, gnomes are usually characterized by their curiosity, inventiveness, and connection to illusion magic or technology.</p>
          </div>
        </div>
      </section>
    </div>
  );
}