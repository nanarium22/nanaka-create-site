// src/pages/Study.jsx
import "./Study.css";
function Study() {
  const studies = [
    {
      title: "React",
      description: "Reactでのサイト制作に取り組んでいます。SPAやルーティングについて学習中です。",
    },
    {
      title: "複素解析",
      description: "大学の講義で複素数平面や留数定理などを学習中です。",
    },
    {
      title: "デザイン理論",
      description: "レイアウト、色彩、タイポグラフィなどの基礎を勉強しています。",
    },
  ];

  return (
    <div className="page">
      <h2>今勉強していること</h2>
      <div className="study-list">
        {studies.map((item, index) => (
          <div className="study-card" key={index}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Study;