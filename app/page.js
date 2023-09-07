'use client';

import useCount from '@/hooks/useCount';

export default function Home() {
  const { count, increment, decrement } = useCount();

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}
