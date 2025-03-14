import { FC } from 'react';

interface StartOverlayProps {
  show: boolean;
}

export const StartOverlay: FC<StartOverlayProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl z-10">
      <div className="text-center">
        <div className="text-4xl font-bold text-gray-800 mb-4">准备开始</div>
        <div className="flex items-center gap-3 text-xl text-gray-600 bg-gray-100 px-6 py-3 rounded-lg">
          <span className="inline-block w-8 h-8 bg-gray-200 rounded flex items-center justify-center font-mono">
            ␣
          </span>
          <span>按下空格键开始</span>
        </div>
      </div>
    </div>
  );
}; 