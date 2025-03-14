import { FC } from 'react';

interface StatsBarProps {
  wpm: number;
  mistakes: number;
  accuracy: number;
}

export const StatsBar: FC<StatsBarProps> = ({ wpm, mistakes, accuracy }) => {
  return (
    <div className="grid grid-cols-3 gap-6 text-center py-6 shrink-0">
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="text-3xl font-bold text-blue-500">{wpm}</div>
        <div className="text-gray-600 mt-1">每分钟字数</div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="text-3xl font-bold text-red-500">{mistakes}</div>
        <div className="text-gray-600 mt-1">错误次数</div>
      </div>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="text-3xl font-bold text-green-500">
          {accuracy}%
        </div>
        <div className="text-gray-600 mt-1">准确率</div>
      </div>
    </div>
  );
}; 