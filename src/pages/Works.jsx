// src/pages/Works.jsx
import { useState } from 'react';
import './Works.css';
import { worksData } from '../_functions/WorksData';

const categories = ['デザイン', '謎制作', '制作指揮'];

function Works() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="page works">
      <h2>制作物一覧</h2>

      {categories.map((category) => (
        <div key={category}>
          <h3 className="category-title">{category}</h3>
          <div className="work-grid overflow-x ¥-scroll">
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