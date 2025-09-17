import React, { useEffect, useState } from 'react'
import './Guitar.css'

const videoData = [
  {
    label: 'contemporary',
    src: 'https://www.youtube.com/embed/I-TNrXt5RYc?si=VGqVDNrRxd8E-wId',
  },
  {
    label: 'contemporary',
    src: 'https://www.youtube.com/embed/mqBUrLqBp40?si=8a1CI25OjgYgRip2',
  },
  {
    label: 'classical',
    src: 'https://www.youtube.com/embed/bOSkfaEUb-4?si=5WDkuDyT-nRj3QwA',
  },
  {
    label: 'baroque',
    src: 'https://www.youtube.com/embed/-5BMBPBAwYc?si=45FOnoamE6zCI5rA',
  },
];

const Guitar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [current, setCurrent] = useState(0);

  const nextVideo = () => setCurrent((current + 1) % videoData.length);
  const prevVideo = () => setCurrent((current - 1 + videoData.length) % videoData.length);

  return (
    <div className="guitar">
      <div className="header">
        <h1>welcome to my <span>magnum opus</span></h1>
        <p>perhaps the farthest i've ever soared</p>
      </div>
      <div className="videos">
        <h1>{videoData[current].label}</h1>
        <div className="guitar-carousel">
          <button className="guitar-arrow-btn" onClick={prevVideo} aria-label="Previous video">&#x25C0;</button>
          <div className="guitar-video">
            <iframe
              width="560"
              height="315"
              src={videoData[current].src}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              style={{border: "none"}}
            ></iframe>
          </div>
          <button className="guitar-arrow-btn" onClick={nextVideo} aria-label="Next video">&#x25B6;</button>
        </div>
      </div>
    </div>
  );
};

export default Guitar;