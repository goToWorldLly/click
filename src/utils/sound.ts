// 正确音效的 Base64 数据（一个简短的"滴"声）
class SoundManager {
  private audioContext: AudioContext | null = null;

  constructor() {
    if (typeof window !== 'undefined') {
      this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
  }

  private createCorrectSound() {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.type = 'sine';
    oscillator.frequency.setValueAtTime(1200, this.audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(800, this.audioContext.currentTime + 0.1);
    
    gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.1);
  }

  private createWrongSound() {
    if (!this.audioContext) return;
    
    const oscillator = this.audioContext.createOscillator();
    const gainNode = this.audioContext.createGain();
    
    oscillator.type = 'square';
    oscillator.frequency.setValueAtTime(200, this.audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.2, this.audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.2);
    
    oscillator.connect(gainNode);
    gainNode.connect(this.audioContext.destination);
    
    oscillator.start();
    oscillator.stop(this.audioContext.currentTime + 0.2);
  }

  playCorrect() {
    // 如果 audioContext 被挂起（比如页面刚加载），需要恢复
    if (this.audioContext?.state === 'suspended') {
      this.audioContext.resume();
    }
    this.createCorrectSound();
  }

  playWrong() {
    // 如果 audioContext 被挂起（比如页面刚加载），需要恢复
    if (this.audioContext?.state === 'suspended') {
      this.audioContext.resume();
    }
    this.createWrongSound();
  }
}

// 创建单例实例
export const soundManager = typeof window !== 'undefined' ? new SoundManager() : null; 