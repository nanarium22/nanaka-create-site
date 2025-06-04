import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


function Home() {
  return (
    <div className="home">
      <section className="intro-card">
        <h2>自己紹介</h2>
        <img src="/images/profile.jpg" alt="プロフィール写真" className="card-img" />
        <p>こんにちは、〇〇大学で情報学を学んでいます。Web制作や謎解きが好きです。</p>
        <Link to="/profile" className="more-button">もっと見る</Link>
      </section>

      <section className="works-card">
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
        {/* 必要に応じて追加 */}
      </Swiper>
      <Link to="/works" className="more-button">もっと見る</Link>
    </section>

      <section className="study-card">
        <h2>今勉強していること</h2>
        <p>複素解析、環論、React などに取り組んでいます。</p>
        <Link to="/study" className="more-button">もっと見る</Link>
      </section>

      <section className="interest-card">
        <h2>興味があること</h2>
        <p>謎制作・教育・UI/UXデザイン・演出表現などに関心があります。</p>
        <Link to="/interest" className="more-button">もっと見る</Link>
      </section>

      <section className="quiz-card">
        <h2>クイズ</h2>
        <p>オリジナルの謎解きに挑戦してみよう！</p>
        <Link to="/quiz" className="more-button">解いてみる</Link>
      </section>
    </div>
  );
}

export default Home;