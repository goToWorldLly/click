import { FC } from 'react';

interface FinishMessageProps {
  show: boolean;
}

export const FinishMessage: FC<FinishMessageProps> = ({ show }) => {
  if (!show) return null;

  return (
    <div className="text-center mt-8 shrink-0">
      <div className="text-3xl font-bold text-green-500 mb-2">
        🎉 恭喜完成！
      </div>
      <div className="text-gray-600">
        按下重新开始按钮可以再次挑战
      </div>
    </div>
  );
}; 