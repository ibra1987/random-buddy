// components/StructuredData.tsx
import { SchemaType } from '@/types';

interface StructuredDataProps {
  data: SchemaType;
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}