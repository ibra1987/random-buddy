
// components/PageSchema.tsx
'use client';

import { usePathname } from 'next/navigation';
import { 
  getToolSchema, 
  getAboutSchema, 
  getContactSchema 
} from '@/lib/schema';
import { SchemaType } from '@/types';
import StructuredData from './schema';

export default function PageSchema() {
  const pathname = usePathname();
  
  const getSchema = (): SchemaType | null => {
    if (pathname === '/about') return getAboutSchema();
    if (pathname === '/contact') return getContactSchema();
    
    const toolMap: Record<string, string> = {
      '/fantasy-name-generator': 'Fantasy Name Generator',
      'gnome-name-generator': 'Gnome Name Generator',
      '/fantasy-team-name-generator': 'Fantasy Team Name Generator',
      '/creepy-name-generator': 'Creepy Name Generator',
      '/instagram-name-generator': 'Instagram Name Generator',
      '/random-names-wheel-picker': 'Random Names Wheel Picker'
    };
    
    if (toolMap[pathname]) {
      return getToolSchema(pathname, toolMap[pathname]);
    }
    
    return null;
  };

  const schemaData = getSchema();

  if (!schemaData) return null;

  return <StructuredData data={schemaData} />;
}