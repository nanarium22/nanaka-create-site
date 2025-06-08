// src/pages/Interest.jsx
import "./Interest.css";

function Interest() {
  const interests = [
    {
      title: "🧮 数学探求",
      description: "小さい頃から数字で遊ぶのが好きで、ずっと数学にハマっています。\n小学生のときは算数オリンピック、中学では広中杯や数学オリンピックにも挑戦していました。\n今は数学科でほぼ毎日授業を受けていて、特に代数の分野に興味があります！",
    },
    {
      title: "🧩 謎解き制作",
      description: "「ひらめき」や「試行錯誤」で解ける謎解きが大好きで、大学では謎解きサークル＆制作バイトに所属しています。\n一枚の画像で解く小謎から、ストーリー付きの街歩き謎や公演型まで、いろいろ作っています。\n楽しんでもらえるように、日々試行錯誤中です！",
    },
    {
      title: "💻 システム開発",
      description: "サイト制作は今回が初挑戦でしたが、CSS・JavaScript・React・Vercelなどを使って一から自分で作りました。\nこれからもっと開発スキルを高めて、ゲーム制作にも挑戦したいと思っています！",
    },
    {
      title: "🎨 デザイン制作",
      description: "謎やWeb、システムのデザインにはIllustratorやibisPaintを使っています。\n見た目ってすごく大事だと思うので、いろんな作品を見ながらデザインの引き出しを増やしているところです！\またblenderなどを利用し、3Dのデザインにも挑戦しています。",
    },
    {
      title: "🎥 動画制作",
      description: "After EffectsやPremiere Proで動画も作ってます！\nまだまだ初心者ですが、解説動画を見ながら少しずつレベルアップ中です。",
    },
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