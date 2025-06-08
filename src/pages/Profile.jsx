// src/pages/Profile.jsx
import './Profile.css'; // ← これを追加！

function Profile() {
  return (
    <div className="page profile">
      <h2>自己紹介</h2>
      <div className="profile-card">
        <img
          src="/image/millemille.jpeg"
          alt="プロフィール画像"
          className="profile-image"
        />
        <div className="profile-info">
          <h3>井口奈々花</h3>
          <p>お茶の水女子大学 理学部数学科 学部3年</p>
          <p>趣味はイラスト制作・動画制作・イベントサイト制作など。</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;