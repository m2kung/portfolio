import React from 'react'
import './ResourcesPage.css'

const ResourcesPage = () => {
  return (
    <div className="resources-page">
        <div className="resources-section">
        <h1>moosica</h1>
        <div className="spotify-section">
          <div className="spotify-row">
            <div className="spotify-wrapper">
              <div className="spotify-embed">
                <h2>recent jams</h2>
                <iframe
                  src="https://open.spotify.com/embed/album/06mNMNp8K3S2YtrAzlacOf?si=52eYL8ufRr6P5UrqV5xtdQ"
                  width="100%"
                  height="380"
                  title="recent jams"
                  loading="lazy"
                  style={{ border: 0 }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </div>

            <div className="spotify-wrapper">
              <div className="spotify-embed">
                <h2>all-time faves</h2>
                <iframe
                  src="https://open.spotify.com/embed/playlist/37i9dQZF1DX0XUsuxWHRQd"
                  width="100%"
                  height="380"
                  title="Spotify playlist 2"
                  loading="lazy"
                  style={{ border: 0 }}
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="resources-section">
        <h1>good reads</h1>
        <ul>
          <li>
            <a href="https://www.goodreads.com/book/show/4671.The_Great_Gatsby" target="_blank" rel="noopener noreferrer">
              The Great Gatsby
            </a>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/2657.To_Kill_a_Mockingbird" target="_blank" rel="noopener noreferrer">
              To Kill a Mockingbird
            </a>
          </li>
          <li>
            <a href="https://www.goodreads.com/book/show/5129.1984" target="_blank" rel="noopener noreferrer">
              1984
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ResourcesPage;