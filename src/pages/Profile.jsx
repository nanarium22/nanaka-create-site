// src/pages/Profile.jsx
import './Profile.css'; // ← これを追加！

function Profile() {
  return (
    <div className="page profile">
      <h2>自己紹介</h2>
      <div className="profile-card">
        <img
          src="https://via.placeholder.com/150"
          alt="プロフィール画像"
          className="profile-image"
        />
        <div className="profile-info">
          <h3>井口奈々花</h3>
          <p>大学で数学を学んでいます。現在はReactやWeb制作を勉強中！</p>
          <p>趣味は宝石のイラスト制作・動画制作・イベントサイト制作など。</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;