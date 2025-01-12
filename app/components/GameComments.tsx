'use client';

import { useState } from 'react';
import { StarIcon } from '@heroicons/react/24/solid';

interface Comment {
  id: string;
  user: string;
  rating: number;
  content: string;
  date: string;
}

export default function GameComments({ gameId }: { gameId: string }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newComment: Comment = {
      id: Date.now().toString(),
      user: 'Guest User', // Can add user system later
      rating,
      content: comment,
      date: new Date().toLocaleDateString('en-US')
    };

    setComments([newComment, ...comments]);
    setRating(0);
    setComment('');
  };

  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Ratings & Comments</h3>
      
      {/* Rating and comment form */}
      <form onSubmit={handleSubmit} className="mb-6 bg-white dark:bg-gray-800 p-4 rounded-lg">
        <div className="flex items-center mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="p-1"
            >
              <StarIcon 
                className={`w-6 h-6 ${
                  star <= rating ? 'text-yellow-400' : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
        
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          className="w-full p-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700"
          rows={3}
          placeholder="Write your comment..."
        />
        
        <button
          type="submit"
          className="mt-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
          disabled={!rating || !comment}
        >
          Post Comment
        </button>
      </form>

      {/* Comment list */}
      <div className="space-y-4">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-white dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-semibold">{comment.user}</span>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className={`w-4 h-4 ${
                        i < comment.rating ? 'text-yellow-400' : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
              </div>
              <span className="text-sm text-gray-500">{comment.date}</span>
            </div>
            <p className="text-gray-600 dark:text-gray-300">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
} 