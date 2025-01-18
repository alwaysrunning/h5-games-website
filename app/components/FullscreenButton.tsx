/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

export default function FullscreenButton() {
  const handleFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      try {
        // 尝试使用标准的 Fullscreen API
        if (iframe.requestFullscreen) {
          iframe.requestFullscreen();
        // webkit 前缀版本 (Safari)
        } else if ((iframe as any).webkitRequestFullscreen) {
          (iframe as any).webkitRequestFullscreen();
        // mozilla 前缀版本
        } else if ((iframe as any).mozRequestFullScreen) {
          (iframe as any).mozRequestFullScreen();
        // ms 前缀版本
        } else if ((iframe as any).msRequestFullscreen) {
          (iframe as any).msRequestFullscreen();
        } else {
          console.log('当前浏览器不支持全屏功能');
        }
      } catch (error) {
        console.error('进入全屏模式时发生错误:', error);
      }
    }
  };

  return (
    <button 
      onClick={handleFullscreen}
      className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-2 rounded-lg transition-colors"
      aria-label="Fullscreen"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
        <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
        <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
        <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
      </svg>
    </button>
  );
} 