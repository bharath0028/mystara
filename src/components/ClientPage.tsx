'use client';

import { useEffect } from 'react';

export default function ClientPage() {
  useEffect(() => {
    // Script initialization happens after DOM is ready
    if (typeof window !== 'undefined') {
      (window as any).startTime = new Date();
    }
  }, []);

  return (
    <>
      <main>
        <div className="social">
          <a href="#say-hello" className="say-hello cursor-eye" tabIndex={0}>
          <img src="/Group 7.svg" alt="Say Hello" />
            <div className="underline"></div>
          </a>

        </div>

        <div className="compass">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 445.81 445.81" role="img"><g><g><circle className="cls-1" cx="222.91" cy="222.91" r="219.91"></circle><polygon className="cls-1" points="328.43 117.38 181.07 181.07 117.38 328.43 264.74 264.74 328.43 117.38"></polygon><line className="cls-1" x1="181.07" y1="181.07" x2="264.74" y2="264.74"></line></g></g></svg>
        </div>

      </main>

      <div className="loading">

        <div className="welcome">
          <p>WELCOME TO MYSTARA</p>
        </div>

        <h1>A journey of brilliance begins each diamond shaping light, emotion, and timeless beauty through its crafted story, sparkle, and unforgettable visual elegance.</h1>

        <div className="progress">
          <div className="progress-percent">0%</div>
          <div className="loading-text">
            <img src="/Group 7.svg" alt="Loading" />
          </div>
          <a href="#enter" className="enter cursor-eye">
            <img src="/play.svg" alt="Enter" />
          </a>
        </div>

      </div>

      <div className="cursor" data-cursor="pointer">
        <div className="pointer">
          <img src="/Vector.svg" alt="" />
        </div>
        {/* <div className="eye">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 546.01 296.28" role="img"><g><g><circle className="cls-1" cx="273" cy="148.14" r="20.73"></circle><circle className="cls-1" cx="273" cy="148.14" r="82.94"></circle><path className="cls-2" d="M273,3C86.39,3,3.46,148.14,3.46,148.14S86.39,293.28,273,293.28,542.55,148.14,542.55,148.14,459.61,3,273,3Z"></path></g></g></svg>
        </div> */}
        <div className="cross">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 413.94 413.94" role="img"><g><g><polygon className="cls-1" points="364.44 4.24 206.97 161.72 49.5 4.24 4.24 49.5 161.72 206.97 4.24 364.44 49.5 409.7 206.97 252.22 364.44 409.7 409.7 364.44 252.22 206.97 409.7 49.5 364.44 4.24"></polygon></g></g></svg>
        </div>
        <div className="move">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-2 -2 84 84" role="img"><path d="M 40 0 a 40 40 0 1 1 -4.898587196589413e-15 80 a 40 40 0 1 1 4.898587196589413e-15 -80 z"></path></svg>
        </div>
      </div>
    </>
  );
}
