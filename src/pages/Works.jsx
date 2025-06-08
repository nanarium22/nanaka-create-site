// src/pages/Works.jsx
import { useState } from 'react';
import './Works.css';
import { worksData } from '../_functions/WorksData';
import { Link } from 'react-router-dom';

function Works() {
  const [selectedWork, setSelectedWork] = useState(null);

  return (
    <div className="page works">
<div>
          <div className="work-grid">
            {worksData
              .map((work) => (
                <div
                  key={work.id}
                  className="work-card"
                  onClick={() => setSelectedWork(work)}
                >
                  <img src={work.image} alt={work.title} />
                  <h4>{work.title}</h4>
                  {work.description.split('\n').map((line, index) => (
                <p key={index}>
                  {line}
                  <br />
                </p>
              ))}
                              </div>
              ))}
          </div>
        </div>

      {selectedWork && (
        <div className="modal" onClick={() => setSelectedWork(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedWork.title}</h3>
            <img src={selectedWork.image} alt={selectedWork.title} />
            <p>{selectedWork.detail}</p>
            {selectedWork.link && <Link to={selectedWork.link} className="more-link">ホームページを見る</Link>}
            <button onClick={() => setSelectedWork(null)}>閉じる</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Works;