// src/pages/Interest.jsx
import "./Interest.css";

function Interest() {
  const interests = [
    {
      title: "謎解き",
      description: "リアル脱出ゲームや謎制作に深い興味があります。問題構成や演出も好きです。",
    },
    {
      title: "イベント制作",
      description: "大学でイベント企画・運営をしており、全体進行やチームマネジメントが得意です。",
    },
    {
      title: "映像編集",
      description: "After EffectsやPremiere Proを使って、演出動画やオープニング映像を制作しています。",
    },
    {
      title: "数学教育",
      description: "将来高校数学教員を目指しており、教え方や教材デザインにも興味があります。",
    },
  ];

  return (
    <div className="page">
      <h2>興味があること</h2>
      <div className="interest-list">
        {interests.map((item, index) => (
          <div className="interest-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interest;