import React, { useEffect } from 'react'
import './Guitar.css'

const Guitar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="guitar">
      <h1>Guitar Page</h1>
      <p>Here is all the resources content.</p>
      <div className="guitar-video" style={{ marginTop: '2rem' }}>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/I-TNrXt5RYc?si=VGqVDNrRxd8E-wId"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{border: "none"}}
        ></iframe>
      </div>
    </div>
  );
};

export default Guitar;