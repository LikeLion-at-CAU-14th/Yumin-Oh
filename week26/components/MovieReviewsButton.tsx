'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';

const MovieReviews = dynamic(() => import('./MovieReviews'));

export default function MovieReviewsButton() {
  const [show, setShow] = useState(false);

  return (
    <>
      <button
        className="movie-reviews-button"
        onClick={() => setShow(!show)}
      >
        {show ? '관람평 닫기' : '관람평 보기'}
      </button>

      {show && <MovieReviews />}
    </>
  );
}