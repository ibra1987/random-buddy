import FantasyTeamNameGeneratorContent from "../components/fantasy-team-generator-content"
import FantasyTeamNameGenerator from "../components/fantasy-team-name-generator"
import PageSchema from "../components/structured-data/page-schema"

import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Fantasy Team Name Generator - Creative Team & Group Names | RandomBuddy',
  description: 'Generate creative fantasy team names for sports, gaming clans, esports, RPG groups, and online communities. Get unique and memorable team name ideas instantly.',
  keywords: 'fantasy team name generator, team names, gaming clan names, esports team names, RPG group names, sports team names, group names, fantasy teams, online community names',
  openGraph: {
    title: 'Fantasy Team Name Generator - Creative Team & Group Names | RandomBuddy',
    description: 'Generate creative fantasy team names for sports, gaming clans, esports, RPG groups, and online communities. Get unique name ideas instantly.',
    url: 'https://randombuddy.com/fantasy-team-name-generator',
    siteName: 'RandomBuddy',
    images: [
      {
        url: '/og-fantasy-team-names.jpg',
        width: 1200,
        height: 630,
        alt: 'Fantasy Team Name Generator - Creative Team & Group Names',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fantasy Team Name Generator - Creative Team & Group Names | RandomBuddy',
    description: 'Generate creative fantasy team names for sports, gaming clans, esports, and RPG groups. Get unique name ideas instantly.',
    images: ['/og-fantasy-team-names.jpg'],
  },
  robots: 'index, follow',
  alternates: {
    canonical: 'https://randombuddy.com/fantasy-team-name-generator',
  },
};

const FantasyTeamNameGeneratorPage = () => {
  return (
    <>
    <PageSchema/>
    <div className="min-h-screen bg-[#f6f0e6] px-4 py-10">
         <FantasyTeamNameGenerator/>
         <FantasyTeamNameGeneratorContent/>
    </div>
    </>

  )
}

export default FantasyTeamNameGeneratorPage