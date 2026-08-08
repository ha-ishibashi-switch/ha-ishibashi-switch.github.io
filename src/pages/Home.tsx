import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>ホーム</h1>

      <Link to="/survey">アンケートへ</Link>
    </div>
  );
}

export default Home;
