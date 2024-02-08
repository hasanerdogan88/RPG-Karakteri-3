import React, { useState, useEffect } from 'react';
import './styles.css';

import noCharacter from './utilities/noCharacter';
import Character from './components/Character';
import StatusBars from './components/StatusBars';
import Options from './components/Options';
import Button from './components/Button';
import attackOptionsList from './data/attackOptionsList';
import namesList from './data/namesList';

export default function App() {
  const [characterData, setCharacterData] = useState(null);

  // Client-side hydration işlemi
  useEffect(() => {
    setCharacterData({
      hat: Math.random() < 0.5,
      shield: Math.random() < 0.5,
      weapon: Math.random() < 0.5 ? "sword" : "staff",
      name: namesList[Math.floor(Math.random() * namesList.length)],
      attackOptions: attackOptionsList.sort(() => 0.5 - Math.random()).slice(0, 6),
      stats: {
        hp: Math.floor(Math.random() * 101),
        mp: Math.floor(Math.random() * 101),
        strength: Math.floor(Math.random() * 101)
      }
    });
  }, []);

  // Karakter özelliklerini rastgele değiştiren fonksiyon
  const randomizeCharacter = () => {
    setCharacterData({
      hat: Math.random() < 0.5,
      shield: Math.random() < 0.5,
      weapon: Math.random() < 0.5 ? "sword" : "staff",
      name: namesList[Math.floor(Math.random() * namesList.length)],
      attackOptions: attackOptionsList.sort(() => 0.5 - Math.random()).slice(0, 6),
      stats: {
        hp: Math.floor(Math.random() * 101),
        mp: Math.floor(Math.random() * 101),
        strength: Math.floor(Math.random() * 101)
      }
    });
  };

  // Eğer characterData henüz oluşturulmadıysa, yükleniyor ekranı göster
  if (!characterData) {
    return <div>Loading...</div>;
  }

  return (
    <div className='wrapper'>
      <StatusBars characterData={characterData} />
      <Character characterData={characterData} />
      <Options characterData={characterData} />

      {/* 'Değiştir' butonu. Bileşeninize göre onClick ve label prop'larını düzenleyin. */}
      <button onClick={randomizeCharacter}>Değiştir</button>
    </div>
  );
}
