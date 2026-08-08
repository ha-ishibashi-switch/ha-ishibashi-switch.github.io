import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>アンケート一覧</h1>

      <ul>
        <li>
          <Link to="/survey/202608">2026年8月アンケート</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;
