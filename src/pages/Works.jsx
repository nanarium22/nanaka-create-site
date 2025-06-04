// src/pages/Works.jsx
import { useState } from 'react';
import './Works.css';

const worksData = [
  // デザイン
  {
    id: 1, category: 'デザイン',
    title: 'ロゴデザインA',
    description: 'イベント用ロゴ制作',
    image: 'https://via.placeholder.com/300x200',
    detail: 'Illustratorで制作したロゴです。',
  },
  {
    id: 2, category: 'デザイン',
    title: 'チラシB',
    description: '広報チラシ制作',
    image: 'https://via.placeholder.com/300x200',
    detail: '大学のイベントで配布されたチラシです。',
  },
  // ...デザイン6作品に増やしてください

  // 謎制作
  {
    id: 10, category: '謎制作',
    title: 'ナゾA',
    description: '体験型ナゾ解きの一部',
    image: 'https://via.placeholder.com/300x200',
    detail: 'LINE連動で作成したギミック付き謎。',
  },
  {
    id: 11, category: '謎制作',
    title: 'ナゾB',
    description: 'Webナゾ解き問題',
    image: 'https://via.placeholder.com/300x200',
    detail: 'Reactで実装したWeb謎ページです。',
  },
  // ...謎制作8作品に増やしてください

  // 制作指揮
  {
    id: 20, category: '制作指揮',
    title: '大型イベントX',
    description: '企画統括＆進行管理',
    image: 'https://via.placeholder.com/300x200',
    detail: '10人以上のメンバーと協力して制作指揮を行いました。',
  },
  {
    id: 21, category: '制作指揮',
    title: 'WebコンテンツY',
    description: 'プロジェクト全体管理',
    image: 'https://via.placeholder.com/300x200',
    detail: '納期・品質・チーム連携を統括しました。',
  },
  // ...制作指揮6作品に増やしてください
];

const categories = ['デザイン', '謎制作', '制作指揮'];

function Works() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="page works">
      <h2>制作物一覧</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="work-grid">
            {worksData
              .filter((work) => work.category === category)
              .map((work) => (
                <div
                  key={work.id}
                  className="work-card"
                  onClick={() => setSelectedWork(work)}
                >
                  <img src={work.image} alt={work.title} />
                  <h4>{work.title}</h4>
                  <p>{work.description}</p>
                </div>
              ))}
          </div>
        </div>
      ))}

      {selectedWork && (
        <div className="modal" onClick={() => setSelectedWork(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedWork.title}</h3>
            <img src={selectedWork.image} alt={selectedWork.title} />
            <p>{selectedWork.detail}</p>
            <button onClick={() => setSelectedWork(null)}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Works;