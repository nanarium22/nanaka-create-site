// src/pages/Home.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

function Home({ setShowHeader }) {
  const [showContent, setShowContent] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!showContent) setShowHeader(false);
    if (videoRef.current) {
      videoRef.current.play();
    }
  }, [showContent, setShowHeader]);

  const handleVideoEnd = () => {
    setShowContent(true);
    setShowHeader(true);
  };

  const handleSkip = () => {
    setShowContent(true);
    setShowHeader(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="home">
      {!showContent ? (
        <div className="video-container">
          <video
            ref={videoRef}
            src="/video/intro.mp4"
            type="video/mp4"
            onEnded={handleVideoEnd}
            autoPlay
            muted
            playsInline
            className="intro-video"
          />
          <button className="skip-button" onClick={handleSkip}>
            SKIP
          </button>
        </div>
      ) : (
        <div
          className="content-wrapper"
          style={{
            backgroundImage: `url(/images/background.gif)`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="content scroll-snap">
            <section className="intro-card snap-section">
              <h2>自己紹介</h2>
              <img src="/image/millemille.jpeg" alt="プロフィール写真" className="card-img" />
              <p>お茶の水女子大学 理学部数学科 学部3年</p>
              <Link to="/profile" className="more-button">もっと見る</Link>
            </section>

            <section className="works-card snap-section">
              <h2>探求していること</h2>
              <p>興味があること、勉強していること</p>
              <Link to="/interest" className="more-button">もっと見る</Link>
            </section>

          </div>
        </div>
      )}
    </div>
  );
}

export default Home;