import './App.css';
import KaraokeClubForm from './karaoke-club/Aug-Enquate/KaraokeClubForm';

const KARAOKE_PATH = '/karaoke-club/Aug-Enquate';

function normalizePath(pathname: string) {
  const normalized = pathname.replace(/\\/+$/, '');
  return normalized || '/';
}

function App() {
  const path = normalizePath(window.location.pathname);

  if (path === '/' || path === KARAOKE_PATH) {
    return <KaraokeClubForm />;
  }

  return (
    <main style={{ padding: 40, fontFamily: 'sans-serif' }}>
      <h1>404 - Page not found</h1>
      <p>お探しのページは見つかりませんでした。</p>
      <a href="/">トップへ戻る</a>
    </main>
  );
}

export default App;
