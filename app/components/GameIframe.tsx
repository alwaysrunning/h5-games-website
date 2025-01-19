'use client';

interface GameIframeProps {
  url: string;
  originalUrl?: string;
}

export default function GameIframe({ url, originalUrl }: GameIframeProps) {
  const handleError = () => {
    window.location.href = originalUrl || url;
  };

  return (
    <iframe 
      src={url}
      className="w-full h-full border-0"
      allow="fullscreen; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      referrerPolicy="no-referrer"
      sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-presentation"
      loading="lazy"
      onError={handleError}
    />
  );
}