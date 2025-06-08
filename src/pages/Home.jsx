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
            Skip
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
              <img src="/images/profile.jpg" alt="プロフィール写真" className="card-img" />
              <p>お茶の水女子大学 理学部数学科 学部3年</p>
              <Link to="/profile" className="more-button">もっと見る</Link>
            </section>

            <section className="works-card snap-section">
              <h2>制作物一覧</h2>
              <Swiper spaceBetween={20} slidesPerView={1.2}>
                <SwiperSlide>
                  <div className="work-item">
                    <img src="/images/work1.png" alt="作品1" />
                    <p>作品タイトル1</p>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="work-item">
                    <img src="/images/work2.png" alt="作品2" />
                    <p>作品タイトル2</p>
                  </div>
                </SwiperSlide>
              </Swiper>
              <Link to="/works" className="more-button">もっと見る</Link>
            </section>

            <section className="interest-card snap-section">
              <h2>興味があること</h2>
              <p>謎制作・教育・UI/UXデザイン・演出表現などに関心があります。</p>
              <Link to="/interest" className="more-button">もっと見る</Link>
            </section>

            <section className="quiz-card snap-section">
              <h2>クイズ</h2>
              <p>オリジナルの謎解きに挑戦してみよう！</p>
              <Link to="/quiz" className="more-button">解いてみる</Link>
            </section>
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;