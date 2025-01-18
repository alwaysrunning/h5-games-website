'use client';

import {
  FacebookShareButton,
  TwitterShareButton,
  RedditShareButton,
  FacebookIcon,
  TwitterIcon,
  RedditIcon,
} from 'react-share';

interface ShareButtonProps {
  url: string;
  title: string;
}

export default function ShareButton({ url, title }: ShareButtonProps) {
  return (
    <div className="flex gap-4">
        <FacebookShareButton url={url} title={title}>
            <FacebookIcon size={32} round />
        </FacebookShareButton>

        <TwitterShareButton url={url} title={title}>
            <TwitterIcon size={32} round />
        </TwitterShareButton>

        <RedditShareButton url={url} title={title}>
            <RedditIcon size={32} round />
        </RedditShareButton>
    </div>
  );
} 