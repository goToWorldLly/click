'use client';

import { TypingGame } from '@/components/TypingGame';

const sampleText = {
  english: `The quick brown fox jumps over the lazy dog.
A journey of a thousand miles begins with a single step.
Practice makes perfect, and consistency is the key to success.`,
  chinese: `敏捷的棕色狐狸跳过懒狗。
千里之行始于足下。
熟能生巧，坚持是成功的关键。`
};

export default function PracticePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4">
        <TypingGame text={sampleText} />
      </div>
    </main>
  );
} 