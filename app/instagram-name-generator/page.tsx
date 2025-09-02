
import { Metadata } from "next";
import InstaNameGenerator from "../components/instagram-name-generator";
import InstagramNameGeneratorContent from "../components/instagram-generator-content";
export const metadata: Metadata = {
  title: "Instagram Name Generator | RandomBuddy",
  description:
    "Generate cool, aesthetic, and unique Instagram nicknames instantly with RandomBuddy's free Instagram Name Generator. Perfect for influencers, gamers, and creators!",
  keywords: [
    "instagram name generator",
    "instagram nickname generator",
    "cool instagram names",
    "aesthetic instagram names",
    "unique instagram usernames",
    "randombuddy",
  ],
  openGraph: {
    title: "Instagram Name Generator | RandomBuddy",
    description:
      "Generate cool, aesthetic, and unique Instagram nicknames instantly with RandomBuddy's free Instagram Name Generator.",
    url: "https://randombuddy.com/generators/instagram-name-generator",
    siteName: "RandomBuddy",
    images: [
      {
        url: "https://randombuddy.com/og-instagram-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Instagram Name Generator by RandomBuddy",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Instagram Name Generator | RandomBuddy",
    description:
      "Generate cool, aesthetic, and unique Instagram nicknames instantly with RandomBuddy's free Instagram Name Generator.",
    images: ["https://randombuddy.com/og-instagram-generator.jpg"],
    creator: "@randombuddy",
  },
};

export default function Page() {
  return (
    <main className="min-h-screen bg-[#f6f0e6] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl md:text-4xl font-bold text-[#5a4631] text-center mb-6">
          Instagram Name Generator
        </h1>
        <p className="text-center text-[#6b5a4d] mb-8">
          Generate cool, aesthetic, and unique Instagram nicknames instantly.
          Perfect for influencers, creators, and anyone who wants a catchy
          username.
        </p>
        <InstaNameGenerator />
      </div>
      <InstagramNameGeneratorContent/>
    </main>
  );
}

