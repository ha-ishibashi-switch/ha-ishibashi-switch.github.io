import { Link } from "react-router-dom";

function Survey() {
  return (
    <div>
      <h1>アンケート</h1>

      <p>ここにアンケートフォームを作成します。</p>

      <Link to="/">ホームへ戻る</Link>
    </div>
  );
}

export default Survey;
