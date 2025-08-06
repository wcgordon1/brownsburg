import React, { useState, useEffect } from 'react';
import { List } from 'lucide-react';

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

interface TableOfContentsProps {
  content: string;
  filterLevel?: number; // New prop to filter by heading level
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ content, filterLevel }) => {
  const [tocItems, setTocItems] = useState<TOCItem[]>([]);
  const [activeId, setActiveId] = useState<string>('');

  useEffect(() => {
    // Extract headings from markdown content
    const headingRegex = /^(#{1,6})\s+(.+)$/gm;
    const items: TOCItem[] = [];
    let match;

    while ((match = headingRegex.exec(content)) !== null) {
      const level = match[1].length;
      const text = match[2].trim();
      const id = text.toLowerCase()
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .trim();
      
      items.push({ id, text, level });
    }

    // Filter items by level if filterLevel is provided
    const filteredItems = filterLevel 
      ? items.filter(item => item.level === filterLevel)
      : items;

    setTocItems(filteredItems);
  }, [content, filterLevel]);

  useEffect(() => {
    const handleScroll = () => {
      const headings = tocItems.map(item => document.getElementById(item.id)).filter(Boolean);
      
      for (let i = headings.length - 1; i >= 0; i--) {
        const heading = headings[i];
        if (heading && heading.getBoundingClientRect().top <= 100) {
          setActiveId(heading.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tocItems]);

  const scrollToHeading = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  if (tocItems.length === 0) return null;

  return (
    <div className="bg-gray-50 rounded-lg p-6 mb-8">
      <div className="flex items-center mb-4">
        <List className="h-5 w-5 text-blue-500 mr-2" />
        <h3 className="text-lg font-semibold text-navy-900">Table of Contents</h3>
      </div>
      <nav>
        <ul className="space-y-2">
          {tocItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => scrollToHeading(item.id)}
                className={`text-left w-full text-sm transition-colors hover:text-blue-600 ${
                  activeId === item.id ? 'text-blue-600 font-medium' : 'text-gray-600'
                }`}
                style={{ paddingLeft: `${(item.level - (filterLevel || 1)) * 12}px` }}
              >
                {item.text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default TableOfContents;