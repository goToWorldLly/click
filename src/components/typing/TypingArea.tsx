import { FC } from 'react';

interface TypingAreaProps {
  englishLines: string[];
  chineseLines: string[];
  currentCharIndex: number;
  lastWrongIndex: number | null;
  isFinished: boolean;
  getCurrentPosition: (index: number) => {
    line: number;
    position: number;
    lineStart: number;
    lineLength: number;
  };
  getAbsoluteIndex: (lineIndex: number, charIndex: number) => number;
}

export const TypingArea: FC<TypingAreaProps> = ({
  englishLines,
  chineseLines,
  currentCharIndex,
  lastWrongIndex,
  isFinished,
  getCurrentPosition,
  getAbsoluteIndex,
}) => {
  return (
    <div className="p-8 overflow-y-auto flex-1 min-h-0 relative">
      <div className="space-y-8 absolute inset-0 p-8">
        {englishLines.map((line, lineIndex) => {
          const chars = line.split('');
          const currentPos = getCurrentPosition(currentCharIndex);
          
          return (
            <div key={lineIndex} className="space-y-2">
              <div className="text-3xl font-mono leading-relaxed tracking-wider select-none">
                {chars.map((char, charIndex) => {
                  const absoluteIndex = getAbsoluteIndex(lineIndex, charIndex);
                  let className = 'inline-block min-w-[1ch] text-center relative';
                  
                  if (absoluteIndex < currentCharIndex) {
                    className += ' text-green-500';
                  } else if (absoluteIndex === currentCharIndex) {
                    className += ' text-blue-500';
                  } else {
                    className += ' text-gray-400';
                  }

                  return (
                    <span
                      key={charIndex}
                      className={className}
                    >
                      <span className="relative">
                        {char}
                        {absoluteIndex === currentCharIndex && !isFinished && (
                          <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-blue-500"></span>
                        )}
                      </span>
                      {lastWrongIndex === absoluteIndex && (
                        <span className="absolute inset-0 bg-red-100 rounded-sm -z-10"></span>
                      )}
                    </span>
                  );
                })}
                {lineIndex < englishLines.length - 1 && (
                  <span
                    className={`inline-block min-w-[1ch] text-center ${
                      currentPos.line === lineIndex && currentPos.position === currentPos.lineLength
                        ? 'text-blue-500'
                        : getAbsoluteIndex(lineIndex, chars.length) < currentCharIndex
                        ? 'text-green-500'
                        : 'text-gray-300'
                    }`}
                  >
                    ⏎
                  </span>
                )}
              </div>
              <div className="text-lg text-gray-600 pl-1">
                {chineseLines[lineIndex]}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}; 