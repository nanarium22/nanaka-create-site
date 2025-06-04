// src/pages/Quiz.jsx
import { useState } from 'react';
import './Quiz.css';
import { useNavigate } from 'react-router-dom';

function Quiz() {
  const [answer, setAnswer] = useState('');
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();

  const correctAnswer = 'React'; // 正解（任意で変更可能）

  const handleSubmit = (e) => {
    e.preventDefault();
    if (answer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
      navigate('/success'); // 正解ページへ遷移
    } else {
      alert('不正解です！もう一度考えてみてください。');
    }
  };

  return (
    <div className="quiz-page">
      <h2>クイズに挑戦！</h2>
      <p>Q. このサイトを作るために使っているフレームワークは何？</p>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="答えを入力"
        />
        <button type="submit">解答する</button>
      </form>

      <div className="hint-section">
        <button onClick={() => setShowHint(!showHint)}>
          ヒントを見る {showHint ? '▲' : '▼'}
        </button>
        {showHint && (
          <div className="hint">
            <p>ヒント：JavaScript をベースにしていて、コンポーネントで構成されます。</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default Quiz;