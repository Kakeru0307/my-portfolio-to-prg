import { createLazyFileRoute, Link } from '@tanstack/react-router';
import { useState } from 'react';
import ChatMessage from '@/components/ChatMessage';
import SafeSuspense from '@/components/SafeSuspense';
import { linkItems } from '@/constants/link';

const Home = () => {
  const [onTitle, setOnTitle] = useState('');
  const handleMouseEnter = (title: string) => {
    setOnTitle(title);
  };
  const handleMouseLeave = () => {
    setOnTitle('');
  };
  const message =
    'こちらでは鈴木 翔の歴史を記録しています。\n隠し要素も存在してるかも？';
  return (
    <SafeSuspense>
      <div className="flex flex-col justify-between min-h-[calc(100vh-200px)] p-2">
        <h1 className="text-4xl mb-8 text-center">
          鈴木翔の歴史 <br /> ~My history~
        </h1>
        <Link
          className="flex items-center space-x-2 border-2 p-2 rounded w-1/2 hover: bg-gray-900"
          to="/room"
        >
          <span>▶︎</span>
          <span>冒険をする</span>
        </Link>
        <div className="grid grid-cols-1 gap-4 mt-8">
          {linkItems.map((item) => (
            <div key={item.title}>
              <Link
                className="flex bg-gray-900 items-center space-x-2 border-2 p-2 rounded w-full hover:bg-gray-800"
                to={item.url}
                onMouseEnter={() => handleMouseEnter(item.title)}
                onMouseLeave={handleMouseLeave}
              >
                <item.icon />
                <span>{item.title}</span>
              </Link>
              {onTitle === item.title && (
                <div className="pl-4 pt-2 pb-2 text-sm text-gray-400 bg-gray-900 rounded-b-md border-x-2 border-b-2">
                  {item.description}
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2 border-2 p-2 rounded mt-auto z-20">
          <ChatMessage message={message} />
        </div>
      </div>
    </SafeSuspense>
  );
};

export const Route = createLazyFileRoute('/')({
  component: Home,
});
