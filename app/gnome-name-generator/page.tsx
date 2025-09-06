import { Metadata } from 'next';
import PageSchema from '../components/structured-data/page-schema'
import GnomeGenerator from '../components/gnome-name-generator'
import GnomeNameGeneratorContent from '../components/gnome-name-generator-content'


// For Next.js 13+ App Router (app/gnome-generator/page.js)
export const metadata:Metadata = {
  title: "Fantasy Gnome Name Generator | D&D Character Creator Tool",
  description: "Generate unique gnome names with traits and clans for D&D, RPG games, and fantasy storytelling. Create memorable characters with our random name generator.",
  keywords: "gnome name generator, fantasy names, D&D character creator, RPG names, gnome clan, random name generator, D&D tools, tabletop RPG",
  openGraph: {
    title: "Fantasy Gnome Name Generator | D&D Character Creator",
    description: "Generate unique gnome names with traits and clans for your D&D campaigns and fantasy stories.",
    type: "website",
    url: "https://randombuddy.com/gnome-name-generator",
    images: [
      {
        url: "/og-gnome-generator.jpg",
        width: 1200,
        height: 630,
        alt: "Gnome Name Generator Tool",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fantasy Gnome Name Generator",
    description: "Create unique gnome characters for D&D and RPG games",
    images: ["/twitter-gnome-generator.jpg"],
  },
  robots: "index, follow",
  authors: [{ name: "Brahim driouch" }],
  creator: "Brahim driouch",
  publisher: "https://randombuddy.com",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};
function page() {
  return (
     <>
        <PageSchema/>
        <div className="min-h-screen max-w-6xl mx-auto bg-[#f6f0e6] px-4 ">
             <GnomeGenerator/>
             <GnomeNameGeneratorContent/>
        </div>
        </>
  )
}

export default page