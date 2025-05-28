import React, { useState } from "react";

export default function HomePage() {
  const allGames = [
    {
      title: "Flappy Bird",
      description: "点击控制小鸟飞行，避开水管！",
      image: "/games/flappybird.jpg",
      link: "/games/flappybird",
      category: "休闲",
    },
    {
      title: "2048",
      description: "合并相同数字，挑战你的脑力！",
      image: "/games/2048.jpg",
      link: "/games/2048",
      category: "益智",
    },
    {
      title: "贪吃蛇",
      description: "控制蛇吃食物，变得更长！",
      image: "/games/snake.jpg",
      link: "/games/snake",
      category: "经典",
    },
  ];

  const categories = ["全部", "休闲", "益智", "经典"];
  const [selectedCategory, setSelectedCategory] = useState("全部");

  const filteredGames =
    selectedCategory === "全部"
      ? allGames
      : allGames.filter((g) => g.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-600">H5游戏小站</h1>
        <input
          type="text"
          placeholder="搜索游戏..."
          className="border px-2 py-1 rounded"
        />
      </header>
      <section className="bg-blue-200 text-center p-6">
        <h2 className="text-2xl font-semibold">🎮 精选小游戏，每天更新！</h2>
      </section>
      <section className="p-4 flex gap-2 justify-center flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={\`px-4 py-1 rounded-full border \${selectedCategory === cat ? "bg-blue-500 text-white" : "bg-white text-gray-700"}\`}
          >
            {cat}
          </button>
        ))}
      </section>
      <section className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredGames.map((game, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow p-3 hover:shadow-lg transition"
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-40 object-cover rounded-xl"
            />
            <h3 className="mt-2 text-lg font-bold">{game.title}</h3>
            <p className="text-sm text-gray-500">{game.description}</p>
            <a
              href={game.link}
              className="mt-2 inline-block bg-blue-500 text-white px-3 py-1 rounded-full text-sm"
            >
              开始游戏
            </a>
          </div>
        ))}
      </section>
      <footer className="bg-white text-center text-sm text-gray-400 p-4">
        © 2025 H5游戏小站 | 联系我们：game@example.com
      </footer>
    </div>
  );
}
