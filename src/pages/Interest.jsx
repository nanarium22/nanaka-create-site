// src/pages/Interest.jsx
import "./Interest.css";

function Interest() {
  const interests = [

  ];

  return (
    <div className="page">
      <div className="interest-list">
        {interests.map((item, index) => (
          <div className="interest-card" key={index}>
            <h3>{item.title}</h3>
            {item.description.split('\n').map((line, index) => (
                <p key={index}>
                  {line}
                  <br />
                </p>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Interest;