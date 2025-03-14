import { redirect } from 'next/navigation';
import { TypingGame } from '@/components/TypingGame';

const sampleText = {
  english: `The quick brown fox jumps over the lazy dog.
In a world of constant change, adaptability is key.
Life is not about waiting for the storm to pass,
but learning to dance in the rain.`,
  chinese: `敏捷的棕色狐狸跳过了懒惰的狗。
在这个不断变化的世界里，适应能力是关键。
生活不是等待暴风雨过去，
而是学会在雨中起舞。`
};

export default function Page() {
  redirect('/home');
}
