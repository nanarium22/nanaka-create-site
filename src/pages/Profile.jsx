// src/pages/Profile.jsx
import { Link } from 'react-router-dom';
import './Profile.css'; // ← これを追加！

function Profile() {
  return (
    <div className="page profile">
      <div className="profile-card">
        <img
          src="/image/millemille.jpeg"
          alt="プロフィール画像"
          className="profile-image"
        />
        <div className="profile-info">
          <h2>井口奈々花（いぐちななか）</h2>
          <p>お茶の水女子大学理学部数学科に所属しています。普段は数学を学びつつ、謎解きやデザイン、Web制作などいろんなことに挑戦しています。</p>
          <h3>今やっていること</h3>
          <ul>
            <li>大学で数学を専攻</li>
            <li>謎解きサークル＆制作バイト</li>
            <li>休みの日にフィギュアスケート</li>
            <li>デザインやイラスト制作</li>
            <li>動画制作も勉強中</li>
          </ul>
          <h3>好きなこと・だいじにしていること</h3>
            <p>
            子どもの頃から「いろんなアイデアを出すこと」そして「そのアイデアを形にすること」が好きで、
            ひらめき系のクイズや、自分のアイデアをカタチにするのが楽しくてたまりません！
            「面白そう！」と思ったらまずやってみるタイプです。
            そして何より負けず嫌いで、何事も諦めない性格が良いところであり、悪いところです。
            </p>
          <Link to="https://x.com/nanarium22" className="more-button">Xのアカウント</Link>
        </div>
      </div>
    </div>
  );
}

export default Profile;