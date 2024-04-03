import React, { useState } from "react";

const App = () => {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Ali",
    },
  });

  const handleClick = () => {
    setGame({ ...game, player: { ...game.player, name: "Abdelali" } });
  };
  return (
    <div>
      <p>Player Name : {game.player.name}</p>
      <button onClick={handleClick}>Change Player Name To Abdelali</button>
    </div>
  );
};

export default App;
