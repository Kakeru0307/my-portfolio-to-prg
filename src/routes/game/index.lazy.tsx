import { createLazyFileRoute } from '@tanstack/react-router';
import ChatMessage from '@/components/ChatMessage';

// 1. プレイ状況ごとの色定義に変更
const STATUS_COLORS: Record<string, string> = {
  recent: 'bg-green-500',   // 最近プレイしている（緑）
  regular: 'bg-yellow-500', // 定期的にやる（黄色）
  past: 'bg-red-500',       // 過去やってた（赤）
  default: 'bg-gray-500',   // その他
};

// Propsの型定義を status に変更
type OctagonButtonProps = {
  text: string;
  status?: 'recent' | 'regular' | 'past'; 
};

const OctagonButton = ({ text, status = 'recent' }: OctagonButtonProps) => {
  // 2. status に基づいて色を決定
  const borderColor = STATUS_COLORS[status] || STATUS_COLORS.default;

  const clipPathValue =
    'polygon(10% 10%, 50% 0, 90% 10%, 100% 50%, 90% 90%, 50% 100%, 10% 90%, 0 50%)';

  const shapeStyle = {
    clipPath: clipPathValue,
  };

  return (
    <div className="inline-block filter drop-shadow-lg transition-transform hover:scale-105 cursor-pointer">
      <div className={`${borderColor} p-[3px]`} style={shapeStyle}>
        
        {/* 内側背景部分（濃いグレー） */}
        <div
          className="bg-gray-900 flex flex-col items-center justify-center py-2 px-5"
          style={shapeStyle}
        >
          <div className="text-white font-bold tracking-wider mb-1 text-shadow-sm">
            {text}
          </div>
        </div>
      </div>
    </div>
  );
};

const Game = () => {
  return (
    <div className="flex flex-col justify-between p-4">
      <div className="text-4xl mb-8 text-center">
        <h1>My Favorite Games</h1>
      </div>
      
      {/* 説明文も新しいルールに合わせて更新 */}
      <div className="flex flex-col items-center bg-gray-800 border-2 p-5 max-w-3xl mx-auto m-4">
        <ChatMessage message={`緑: 最近やってるよ\n黄: 定期的にやってるよ\n赤: もうあんまやってねぇな...`}/>
      </div>

      <div className="flex flex-col items-center bg-gray-800/80 backdrop-blur-sm border border-gray-600 rounded-xl shadow-2xl p-6 max-w-3xl mx-auto m-4">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent pointer-events-none" />
        <div className="flex items-center space-x-3 mb-8 border-b-2 border-gray-700 pb-2 px-10 z-10">
          <h3 className="text-2xl font-bold tracking-widest text-gray-200">GAME LIST</h3>
        </div>

        <div className="grid grid-cols-3 gap-2 w-full justify-items-center">
          <OctagonButton text="Valorant" status="recent" />
          <OctagonButton text="Tarkov" status="recent" />
          <OctagonButton text="Apex" status="past" />
          <OctagonButton text="LoL" status="recent" />
          <OctagonButton text="MineCraft" status="regular" />
          <OctagonButton text="Fortnite" status="past" />
          <OctagonButton text="PokemonSeries" status="past"/>
        </div>
      </div>
    </div>
  );
};

export const Route = createLazyFileRoute('/game/')({
  component: Game,
});