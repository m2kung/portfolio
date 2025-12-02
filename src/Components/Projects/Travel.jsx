import React, { useEffect, useState } from 'react'
import './Travel.css'

// Albums are expected to live under the public folder at /albums/{albumSlug}/{photoFile}
// e.g. public/albums/paris/1.jpg, public/albums/paris/2.jpg, public/albums/paris/cover.jpg
// If you don't yet have images, the cards will render a styled placeholder.

const albums = [
  {
    id: 'vancouver',
    title: 'Vancouver W2025',
    cover: '/albums/vancouver/cover.jpg',
    photos: ['/albums/vancouver/1.jpg', '/albums/vancouver/2.jpg', '/albums/vancouver/3.jpg']
  },
  {
    id: 'tokyo',
    title: 'Tokyo Nights',
    cover: '/albums/tokyo/cover.jpg',
    photos: ['/albums/tokyo/1.jpg', '/albums/tokyo/2.jpg']
  },
  {
    id: 'iceland',
    title: 'Iceland Roadtrip',
    cover: '/albums/iceland/cover.jpg',
    photos: ['/albums/iceland/1.jpg', '/albums/iceland/2.jpg', '/albums/iceland/3.jpg', '/albums/iceland/4.jpg']
  }
]

const Travel = () => {
  const [openAlbum, setOpenAlbum] = useState(null) // album object
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const onKey = (e) => {
      if (!openAlbum) return
      if (e.key === 'Escape') closeModal()
      if (e.key === 'ArrowRight') nextPhoto()
      if (e.key === 'ArrowLeft') prevPhoto()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [openAlbum, activeIndex])

  const openModal = (album, start = 0) => {
    setOpenAlbum(album)
    setActiveIndex(start)
    // prevent background scroll
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setOpenAlbum(null)
    setActiveIndex(0)
    document.body.style.overflow = ''
  }

  const nextPhoto = () => {
    if (!openAlbum) return
    setActiveIndex((i) => (i + 1) % openAlbum.photos.length)
  }

  const prevPhoto = () => {
    if (!openAlbum) return
    setActiveIndex((i) => (i - 1 + openAlbum.photos.length) % openAlbum.photos.length)
  }

  return (
    <div className="travel">
      <div className="header">
        <h1><span>travel the world</span> <br></br>with me</h1>
      </div>

      <div className="albums-grid">
        {albums.map((a) => (
          <button key={a.id} className="album-card" onClick={() => openModal(a, 0)} aria-label={`Open album ${a.title}`}>
            {a.cover ? (
              // cover might 404 if images not present; that's OK — browser will show broken image
              <img src={a.cover} alt={`${a.title} cover`} className="album-cover" />
            ) : (
              <div className="album-cover placeholder">{a.title}</div>
            )}
            <div className="album-title">{a.title}</div>
          </button>
        ))}
      </div>

      {openAlbum && (
        <div className="album-modal" role="dialog" aria-modal="true">
          <div className="album-backdrop" onClick={closeModal} />
          <div className="album-content">
            <button className="modal-close" onClick={closeModal} aria-label="Close">×</button>
            <div className="modal-gallery">
              <button className="modal-nav left" onClick={prevPhoto} aria-label="Previous">‹</button>
              <img src={openAlbum.photos[activeIndex]} alt={`${openAlbum.title} ${activeIndex+1}`} className="modal-photo" onError={(e)=>{e.currentTarget.classList.add('broken')}} />
              <button className="modal-nav right" onClick={nextPhoto} aria-label="Next">›</button>
            </div>
            <div className="modal-caption">{openAlbum.title} — {activeIndex + 1} / {openAlbum.photos.length}</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Travel;