export default function KaraokeClubForm() {
  // Backup: Neon Party Design V4
  // Current: Neon Party Design V5
  const availableDates = [
    "9/6(土)",
    "9/7(日)",
    "9/13(土)",
    "9/14(日)",
    "9/15(月・祝)",
    "9/20(土)",
    "9/21(日)",
    "9/23(水・祝)",
    "9/27(土)",
    "9/28(日)",
  ];

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950 p-6">
      <div className="absolute top-8 left-10 text-cyan-400 text-3xl animate-bounce">
        🎵
      </div>
      <div className="absolute top-24 right-16 text-pink-400 text-4xl animate-pulse">
        🎶
      </div>
      <div className="absolute bottom-20 left-20 text-yellow-300 text-3xl animate-bounce">
        🎵
      </div>
      <div className="absolute bottom-32 right-12 text-purple-400 text-4xl animate-pulse">
        🎶
      </div>
      <div className="absolute top-6 right-6 text-7xl animate-spin">🪩</div>
      <div className="max-w-4xl mx-auto border-2 border-cyan-400 rounded-[32px] shadow-2xl p-8 bg-black/70 backdrop-blur">
        <div className="text-center mb-8">
          <div className="text-7xl mb-3 animate-pulse">🎤</div>

          <h1
            className="text-5xl font-extrabold text-pink-400"
            style={{
              textShadow: "0 0 8px #ff4fd8, 0 0 20px #ff4fd8, 0 0 40px #ff4fd8",
            }}
          >
            KARAOKE CLUB
          </h1>

          <h2
            className="text-3xl font-bold text-cyan-300 mt-2"
            style={{
              textShadow: "0 0 8px #67e8f9, 0 0 20px #67e8f9, 0 0 40px #67e8f9",
            }}
          >
            9月開催アンケート
          </h2>

          <p className="text-slate-300 mt-4">
            みんなで楽しく歌いましょう！参加希望や会場の希望を教えてください♪
          </p>
        </div>

        <div className="bg-red-950 border-2 border-red-400 text-red-300 font-bold rounded-2xl p-4 text-center mb-6 text-lg animate-pulse">
          ⚠️ 回答締切：8/21
        </div>

        <form className="space-y-5 text-white">
          <div className="bg-slate-900 border border-pink-500 rounded-2xl p-4">
            <label className="font-bold block mb-2 text-pink-300">
              😊 お名前
            </label>
            <input className="w-full bg-slate-800 border border-pink-400 rounded-xl p-3" />
          </div>

          <div className="bg-slate-900 border border-cyan-500 rounded-2xl p-4">
            <label className="font-bold block mb-2 text-cyan-300">
              🙋 参加希望
            </label>
            <select className="w-full bg-slate-800 border border-cyan-400 rounded-xl p-3">
              <option>参加したい</option>
              <option>できれば参加したい</option>
              <option>今回は不参加</option>
            </select>
          </div>

          <div className="bg-slate-900 border border-fuchsia-500 rounded-2xl p-4">
            <label className="font-bold block mb-3 text-fuchsia-300">
              📅 参加可能日（土日祝・複数選択可）
            </label>
            <div className="grid grid-cols-2 gap-2">
              {availableDates.map((d) => (
                <label
                  key={d}
                  className="bg-slate-800 rounded-lg p-2 flex gap-2 items-center"
                >
                  <input type="checkbox" /> {d}
                </label>
              ))}
            </div>
          </div>

          <div className="bg-slate-900 border border-yellow-400 rounded-2xl p-4">
            <label className="font-bold block mb-2 text-yellow-300">
              🕐 希望開始時間
            </label>
            <select className="w-full bg-slate-800 border border-yellow-400 rounded-xl p-3">
              <option>13:30</option>
              <option>14:00</option>
              <option>14:30</option>
              <option>15:00</option>
              <option>希望なし</option>
            </select>
          </div>

          <div className="bg-slate-900 border border-green-400 rounded-2xl p-4">
            <label className="font-bold block mb-2 text-green-300">
              📍 希望エリア
            </label>
            <input
              className="w-full bg-slate-800 border border-green-400 rounded-xl p-3"
              placeholder="新宿、渋谷、本社近辺など"
            />
          </div>

          <div className="bg-slate-900 border border-indigo-400 rounded-2xl p-4">
            <label className="font-bold block mb-2 text-indigo-300">
              🎶 希望機種
            </label>
            <div className="space-y-2">
              <label>
                <input type="radio" name="machine" /> LIVE DAM
              </label>
              <br />
              <label>
                <input type="radio" name="machine" /> JOYSOUND
              </label>
              <br />
              <label>
                <input type="radio" name="machine" /> どちらでもOK
              </label>
            </div>
          </div>

          <div className="bg-slate-900 border border-orange-400 rounded-2xl p-4">
            <label className="font-bold block mb-2 text-orange-300">
              💰 予算感
            </label>
            <select className="w-full bg-slate-800 border border-orange-400 rounded-xl p-3">
              <option>2,000円以内</option>
              <option>3,000円以内</option>
              <option>4,000円以内</option>
              <option>特に気にしない</option>
            </select>
          </div>

          <div className="bg-slate-900 border border-slate-400 rounded-2xl p-4">
            <label className="font-bold block mb-2 text-slate-200">
              💬 その他要望
            </label>
            <textarea className="w-full bg-slate-800 border border-slate-400 rounded-xl p-3 h-24" />
          </div>

          <button
            type="button"
            className="w-full py-4 rounded-2xl text-xl font-bold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 shadow-2xl"
          >
            🎤 LET'S SING !!
          </button>
        </form>
      </div>
    </div>
  );
}
