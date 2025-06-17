import { useEffect, useState } from 'react';

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [current, setCurrent] = useState(0);
  const [placed, setPlaced] = useState(false);

  const mockEvents = [
    { id: 1, title: 'Победит ли кандидат X на выборах?', yes: 45, no: 55 },
    { id: 2, title: 'Поднимется ли биткоин выше $100K в 2025?', yes: 61, no: 39 },
  ];

  const event = mockEvents[current];

  const handleVote = (option) => {
    if (balance < 100) return;
    setBalance(balance - 100);
    setPlaced(true);
  };

  const next = () => {
    setCurrent((prev) => (prev + 1) % mockEvents.length);
    setPlaced(false);
  };

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h2>{event.title}</h2>
      <div style={{ marginBottom: 10 }}>
        ✅ Да: {event.yes}% &nbsp;&nbsp; ❌ Нет: {event.no}%
      </div>
      {!placed ? (
        <div>
          <button onClick={() => handleVote('yes')}>Ставка: Да</button>
          <button onClick={() => handleVote('no')} style={{ marginLeft: 10 }}>
            Ставка: Нет
          </button>
        </div>
      ) : (
        <div style={{ color: 'green', marginBottom: 10 }}>Ставка принята ✅</div>
      )}
      <div style={{ marginTop: 15 }}>
        <button onClick={next}>Следующее событие</button>
      </div>
      <div style={{ marginTop: 30, color: 'gray' }}>Баланс: {balance} VM</div>
    </div>
  );
}