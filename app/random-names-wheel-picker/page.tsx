import RandomNameWheelGenerator from "../components/random-name-wheel-generator"
import PageSchema from "../components/structured-data/page-schema"

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Random Name Wheel Picker - Spin to Choose Names Randomly | RandomBuddy",
  description: "Spin the random name wheel to pick names fairly for games, decisions, teams, or giveaways. Perfect for classroom activities, sports teams, party games, and random selection.",
  keywords: [
    "random name wheel",
    "name picker wheel",
    "spin the wheel",
    "random name selector",
    "name randomizer",
    "decision wheel",
    "team picker",
    "classroom name picker",
    "fair selection tool",
    "giveaway picker",
    "randombuddy"
  ],
  openGraph: {
    title: "Random Name Wheel Picker - Spin to Choose Names Randomly | RandomBuddy",
    description: "Spin the random name wheel to pick names fairly for games, decisions, teams, or giveaways. Perfect for classroom activities and random selection.",
    url: "https://randombuddy.com/random-names-wheel-picker",
    siteName: "RandomBuddy",
    images: [
      {
        url: "/og-name-wheel.jpg",
        width: 1200,
        height: 630,
        alt: "Random Name Wheel Picker - Spin to Choose Names Fairly",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Random Name Wheel Picker - Spin to Choose Names Randomly | RandomBuddy",
    description: "Spin the random name wheel to pick names fairly for games, decisions, teams, or giveaways.",
    images: ["/og-name-wheel.jpg"],
    creator: "@randombuddy",
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://randombuddy.com/random-names-wheel-picker",
  },
};

const RandomNameWheelGeneratorPage = () => {
  return (
    <>
        
        <PageSchema />
    <div>
            <RandomNameWheelGenerator/>
    </div>
        </>

  )
}

export default RandomNameWheelGeneratorPage