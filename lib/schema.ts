// lib/schemas.ts
import { 
  WebsiteSchema, 
  SoftwareApplicationSchema, 
  AboutPageSchema, 
  ContactPageSchema 
} from '@/types';

export function getWebsiteSchema(): WebsiteSchema {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "RandomBuddy",
    "url": "https://randombuddy.com",
    "description": "Free online generators for fantasy names, team names, Instagram handles, and more creative tools",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://randombuddy.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

export function getToolSchema(path: string, name: string): SoftwareApplicationSchema {
  const toolDescriptions: Record<string, string> = {
    "/fantasy-name-generator": "Generate unique fantasy names for characters, games, and stories",
    "/fantasy-team-name-generator": "Create cool fantasy team names for sports, games, and competitions",
    "/creepy-name-generator": "Generate spooky and creepy names for Halloween, horror stories, and games",
    "/instagram-name-generator": "Find catchy and available Instagram username ideas",
    "/random-names-wheel-picker": "Random name picker wheel for decision making and games"
  };

  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": name,
    "applicationCategory": "UtilityApplication",
    "operatingSystem": "Web Browser",
    "description": toolDescriptions[path] || "Online generator tool",
    "url": `https://randombuddy.com${path}`,
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    }
  };
}

export function getAboutSchema(): AboutPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About RandomBuddy",
    "description": "Learn about RandomBuddy - your go-to platform for free online generators and creative tools"
  };
}

export function getContactSchema(): ContactPageSchema {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact RandomBuddy",
    "description": "Get in touch with the RandomBuddy team"
  };
}