import { LinkItem } from '@/constants/link';
import { Link } from '@tanstack/react-router';
import { useState } from 'react';

interface ActiveFieldProps {
  linkitems: LinkItem[];
}

const ActiveField = ({ linkitems }: ActiveFieldProps) => {
  const [onTitle, setOnTitle] = useState('');

  const handleMouseEnter = (title: string) => {
    setOnTitle(title);
  };
  const handleMouseLeave = () => {
    setOnTitle('');
  };

  return (
    <div className="flex flex-col gap-2">
      {linkitems.map((item) => (
        <div
          key={item.title}
          onMouseEnter={() => handleMouseEnter(item.title)}
          onMouseLeave={handleMouseLeave}
          className="flex flex-col"
        >
          <Link
            className={`flex items-center space-x-2 border-2 p-2 rounded transition-colors duration-200 ${
              onTitle === item.title ? 'bg-gray-800 border-gray-500' : 'border-transparent'
            }`}
            to={item.url}
          >
            <item.icon />
            <span>{item.title}</span>
          </Link>

          <div
            className={`
              overflow-hidden transition-all duration-300 ease-in-out ml-4
              ${onTitle === item.title ? 'max-h-40 opacity-100 mt-1' : 'max-h-0 opacity-0 mt-0'}
            `}
          >
            <Link
              to={item.url}
              className="block bg-gray-800/80 text-gray-200 p-2 rounded text-sm border-l-4 border-gray-00"
            >
              {item.description}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ActiveField;