/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { useState } from 'react';

export default function FullscreenButton() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const exitFullscreen = () => {
    const iframe = document.querySelector('iframe');
    if (iframe) {
      const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
      
      if (isIOS) {
        iframe.style.position = '';
        iframe.style.top = '';
        iframe.style.left = '';
        iframe.style.width = '';
        iframe.style.height = '';
        iframe.style.zIndex = '';
        document.body.style.overflow = '';
      } else if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
    setIsFullscreen(false);
  };

  const handleFullscreen = () => {
    if (isFullscreen) {
      exitFullscreen();
    } else {
      const iframe = document.querySelector('iframe');
      if (iframe) {
        try {
          // 检查是否是 iOS 设备
          const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
          
          if (isIOS) {
            // iOS 设备使用特殊处理
            iframe.style.position = 'fixed';
            iframe.style.top = '0';
            iframe.style.left = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.zIndex = '9999';
            document.body.style.overflow = 'hidden';
          } else {
            // 其他设备使用标准全屏 API
            if (iframe.requestFullscreen) {
              iframe.requestFullscreen();
            } else if ((iframe as any).webkitRequestFullscreen) {
              (iframe as any).webkitRequestFullscreen();
            } else if ((iframe as any).mozRequestFullScreen) {
              (iframe as any).mozRequestFullScreen();
            } else if ((iframe as any).msRequestFullscreen) {
              (iframe as any).msRequestFullscreen();
            } else {
              console.log('当前浏览器不支持全屏功能');
            }
          }
        } catch (error) {
          console.error('进入全屏模式时发生错误:', error);
        }
      }
      setIsFullscreen(true);
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