'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import { soundManager } from '@/utils/sound';
import { ControlBar } from './typing/ControlBar';
import { StartOverlay } from './typing/StartOverlay';
import { TypingArea } from './typing/TypingArea';
import { FinishMessage } from './typing/FinishMessage';
import { StatsBar } from './typing/StatsBar';

interface TypingGameProps {
  text: {
    english: string;
    chinese: string;
  };
}

export const TypingGame = ({ text }: TypingGameProps) => {
  const [isStarted, setIsStarted] = useState(false);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [mistakes, setMistakes] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(null);
  const [wpm, setWpm] = useState(0);
  const [isMuted, setIsMuted] = useState(false);
  const [lastWrongIndex, setLastWrongIndex] = useState<number | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 将文本分割成行并计算每行的长度（包括换行符）
  const englishLines = text.english.split('\n');
  const chineseLines = text.chinese.split('\n');
  
  // 计算每行的实际长度（包括换行符，最后一行不包括换行符）
  const lineLengths = englishLines.map((line, index) => {
    // 最后一行不加换行符长度
    return index === englishLines.length - 1 ? line.length : line.length + 1;
  });
  
  // 计算总长度
  const totalLength = lineLengths.reduce((sum, len) => sum + len, 0);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const calculateWPM = useCallback(() => {
    if (!startTime) return 0;
    const timeElapsed = (Date.now() - startTime) / 1000 / 60;
    const wordsTyped = currentCharIndex / 5;
    return Math.round(wordsTyped / timeElapsed);
  }, [currentCharIndex, startTime]);

  // 获取当前字符所在的行和位置
  const getCurrentPosition = useCallback((index: number) => {
    let accumulatedLength = 0;

    for (let i = 0; i < lineLengths.length; i++) {
      if (accumulatedLength + lineLengths[i] > index) {
        return {
          line: i,
          position: index - accumulatedLength,
          lineStart: accumulatedLength,
          lineLength: lineLengths[i] - (i === lineLengths.length - 1 ? 0 : 1) // 最后一行不减1
        };
      }
      accumulatedLength += lineLengths[i];
    }

    // 如果到达文本末尾
    const lastLineIndex = lineLengths.length - 1;
    return {
      line: lastLineIndex,
      position: lineLengths[lastLineIndex],
      lineStart: accumulatedLength - lineLengths[lastLineIndex],
      lineLength: lineLengths[lastLineIndex]
    };
  }, [lineLengths]);

  const getAbsoluteIndex = useCallback((lineIndex: number, charIndex: number) => {
    return lineLengths.slice(0, lineIndex).reduce((sum, len) => sum + len, 0) + charIndex;
  }, [lineLengths]);

  useEffect(() => {
    const handleSpacePress = (e: KeyboardEvent) => {
      if (!isStarted && e.code === 'Space' && !isFinished) {
        e.preventDefault();
        setIsStarted(true);
        setStartTime(Date.now());
      }
    };

    window.addEventListener('keydown', handleSpacePress);
    return () => window.removeEventListener('keydown', handleSpacePress);
  }, [isStarted, isFinished]);

  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!isStarted || isFinished) return;

    if (!startTime) {
      setStartTime(Date.now());
    }

    const currentPos = getCurrentPosition(currentCharIndex);
    const isAtLineEnd = currentPos.position === currentPos.lineLength;
    const isLastLine = currentPos.line === englishLines.length - 1;

    // 处理换行符
    if (isAtLineEnd && !isLastLine) {
      if (e.key === 'Enter') {
        setCurrentCharIndex(prev => prev + 1);
        setLastWrongIndex(null);
        if (!isMuted && soundManager) {
          soundManager.playCorrect();
        }
      } else {
        setMistakes(prev => prev + 1);
        setLastWrongIndex(currentCharIndex);
        if (!isMuted && soundManager) {
          soundManager.playWrong();
        }
      }
      return;
    }

    // 如果是最后一行的末尾，不需要换行符
    if (isAtLineEnd && isLastLine) {
      setIsFinished(true);
      return;
    }

    // 处理普通字符
    const currentChar = englishLines[currentPos.line][currentPos.position];
    if (!currentChar && !isAtLineEnd) return;

    const pressedChar = e.key;
    if (pressedChar.length !== 1) return;

    if (pressedChar === currentChar) {
      const nextIndex = currentCharIndex + 1;
      setCurrentCharIndex(nextIndex);
      setLastWrongIndex(null);
      if (!isMuted && soundManager) {
        soundManager.playCorrect();
      }
      
      // 检查是否完成
      if (nextIndex === totalLength) {
        setIsFinished(true);
      }
    } else {
      setMistakes(prev => prev + 1);
      setLastWrongIndex(currentCharIndex);
      if (!isMuted && soundManager) {
        soundManager.playWrong();
      }
    }

    setWpm(calculateWPM());
  }, [currentCharIndex, englishLines, isMuted, startTime, calculateWPM, isFinished, getCurrentPosition, totalLength, isStarted]);

  useEffect(() => {
    window.addEventListener('keypress', handleKeyPress);
    return () => window.removeEventListener('keypress', handleKeyPress);
  }, [handleKeyPress]);

  const resetGame = () => {
    setIsStarted(false);
    setCurrentCharIndex(0);
    setMistakes(0);
    setStartTime(null);
    setWpm(0);
    setLastWrongIndex(null);
    setIsFinished(false);
  };

  const accuracy = Math.round((currentCharIndex / (currentCharIndex + mistakes)) * 100 || 0);

  return (
    <div className="h-[100vh] flex items-stretch bg-gray-50 overflow-hidden" ref={containerRef}>
      <div className="max-w-4xl w-full mx-auto flex flex-col px-6 h-full">
        <div className="flex-1 flex flex-col min-h-0 py-6">
          <ControlBar
            onReset={resetGame}
            isMuted={isMuted}
            onToggleMute={() => setIsMuted(!isMuted)}
          />
          <div className="bg-white rounded-2xl shadow-lg relative flex-1 flex flex-col min-h-0">
            <StartOverlay show={!isStarted && !isFinished} />
            <TypingArea
              englishLines={englishLines}
              chineseLines={chineseLines}
              currentCharIndex={currentCharIndex}
              lastWrongIndex={lastWrongIndex}
              isFinished={isFinished}
              getCurrentPosition={getCurrentPosition}
              getAbsoluteIndex={getAbsoluteIndex}
            />
          </div>
          <FinishMessage show={isFinished} />
        </div>
        <StatsBar
          wpm={wpm}
          mistakes={mistakes}
          accuracy={accuracy}
        />
      </div>
      <style jsx global>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-4px); }
          75% { transform: translateX(4px); }
        }
      `}</style>
    </div>
  );
}; 