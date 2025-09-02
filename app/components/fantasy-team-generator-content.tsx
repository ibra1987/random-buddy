


"use client";

interface SEOSection {
  title: string;
  content: string | React.ReactNode; // allow strings or JSX
  id?: string; // optional id for anchor links
}

interface SEOContentProps {
  sections: SEOSection[];
}

/**
 * SEOContent component
 * Renders multiple sections with titles and content.
 * Helps with SEO by using proper heading tags.
 */
 function SEOContent({ sections }: SEOContentProps) {
  return (
    <div className="max-w-5xl mx-auto py-10 px-4 space-y-10">
      {sections.map((section, idx) => (
        <section key={idx} id={section.id}>
          <h2 className="text-2xl font-bold mb-4">{section.title}</h2>
          <div className="text-base text-gray-800">{section.content}</div>
        </section>
      ))}
    </div>
  );
}

const sections = [
  {
    title: "Why Fantasy Team Names Matter",
    content:
      "A good fantasy team name sets the tone for your guild or roleplay group. It makes your team memorable and unique."
  },
  {
    title: "How to Generate Unique Names",
    content:
      "Use a combination of style, theme, and creative prefixes/suffixes to generate fantasy team names. Include words that reflect your team's personality."
  },
  {
    title: "Tips for Choosing the Perfect Name",
    content: (
      <ul className="list-disc pl-5">
        <li>Keep it short and easy to remember.</li>
        <li>Use alliteration for catchiness.</li>
        <li>Incorporate your team's theme or lore.</li>
      </ul>
    )
  }
];

export default function FantasyTeamNameGeneratorContent() {
  return <SEOContent sections={sections} />;
}
